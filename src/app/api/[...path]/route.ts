import { NextRequest, NextResponse } from "next/server";
import { randomBytes, createHash } from "node:crypto";
import { hash, compare } from "bcryptjs";
import { z } from "zod";
import { canPerform, type AccessRole } from "@/lib/permissions";
import { reminderKinds, reminderMessage } from "@/lib/reminders";
import { previewImport } from "@/lib/imports";
import nodemailer from "nodemailer";
import { db } from "@/lib/db";
import {
  eventSchema,
  guestSchema,
  responseSchema,
  validateResponse,
  aggregate,
  catering,
  dedupe,
} from "@/lib/domain";
export const runtime = "nodejs";
const token = () => randomBytes(32).toString("hex");
const digest = (v: string) => createHash("sha256").update(v).digest("hex");
const ok = (data: unknown, status = 200) =>
  NextResponse.json({ data }, { status });
class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}
const fail = (status: number, message: string): never => {
  throw new HttpError(status, message);
};
const include = {
  settings: true,
  invitations: {
    include: { rsvp: { include: { selections: true } }, household: true },
  },
  sessions: { include: { plans: true, checkIns: true } },
} as const;
async function limit(req: NextRequest, scope: string, max = 30) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const key = digest(`${scope}:${ip}`);
  const now = new Date();
  const row = await db.rateLimit.upsert({
    where: { key },
    create: { key, count: 1, expiresAt: new Date(Date.now() + 900000) },
    update: { count: { increment: 1 } },
  });
  if (row.expiresAt < now) {
    await db.rateLimit.update({
      where: { key },
      data: { count: 1, expiresAt: new Date(Date.now() + 900000) },
    });
  } else if (row.count > max)
    fail(429, "Too many requests. Try again in 15 minutes.");
}
async function user(req: NextRequest) {
  const raw = req.cookies.get("evently_session")?.value;
  if (!raw) return fail(401, "Please sign in");
  const s = await db.session.findUnique({
    where: { tokenHash: digest(raw) },
    include: { user: true },
  });
  if (!s || s.expiresAt < new Date()) return fail(401, "Please sign in");
  return s.user;
}
async function owned(req: NextRequest, id: string, resource = "event") {
  const u = await user(req);
  const e = await db.event.findFirst({
    where: {
      id,
      OR: [
        { ownerId: u.id },
        {
          collaborators: {
            some: {
              userId: u.id,
              acceptedAt: { not: null },
              role: { in: ["MANAGER", "VIEWER"] },
            },
          },
        },
      ],
    },
    include: { ...include, collaborators: true },
  });
  if (!e) return fail(404, "Event not found");
  const accessRole: AccessRole =
    e.ownerId === u.id
      ? "OWNER"
      : (e.collaborators.find((c) => c.userId === u.id)!.role as AccessRole);
  if (!canPerform(accessRole, req.method, resource))
    fail(403, "Your event role does not allow this action");
  return { ...e, accessRole, actorId: u.id };
}
function eventView(e: any, accessRole: AccessRole) {
  const { collaborators, actorId, ...data } = e;
  void collaborators;
  void actorId;
  if (accessRole === "VIEWER") {
    return {
      ...data,
      publicToken: "",
      invitations: [],
      sessions: e.sessions.map(({ checkIns, ...session }: any) => {
        void checkIns;
        return session;
      }),
      accessRole,
      analytics: aggregate(e),
    };
  }
  return { ...data, accessRole, analytics: aggregate(e) };
}
function partnerSummary(e: any) {
  const a = aggregate(e);
  return {
    id: e.id,
    title: e.title,
    startsAt: e.startsAt,
    timezone: e.timezone,
    functions: e.sessions
      .filter((s: any) => s.mealsEnabled)
      .map((s: any) => {
        const f = a.functions.find((v: any) => v.id === s.id);
        const p = s.plans[0];
        return {
          title: s.title,
          startsAt: s.startsAt,
          confirmed: f.confirmed,
          expected: p?.expected ?? f.expected,
          suggested: p ? catering(p).count : f.recommended,
          meals: p
            ? {
                Vegetarian: p.vegetarian,
                "Non-vegetarian": p.nonVegetarian,
                Unassigned: p.expected - p.vegetarian - p.nonVegetarian,
              }
            : f.meals,
          planningNotes: p?.planningNotes || "",
          calculatedAt: p?.updatedAt || new Date().toISOString(),
        };
      }),
  };
}
async function audit(action: string, actorId?: string, entityId?: string) {
  await db.auditLog.create({ data: { action, actorId, entityId } });
  console.info(
    JSON.stringify({
      level: "info",
      action,
      entityId,
      at: new Date().toISOString(),
    }),
  );
}
function sessionCookie(res: NextResponse, value: string, maxAge = 2592000) {
  res.cookies.set("evently_session", value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });
  return res;
}
async function json(req: NextRequest) {
  const body = await req.text();
  if (Buffer.byteLength(body) > 1000000) fail(413, "Request too large");
  try {
    return JSON.parse(body);
  } catch {
    return fail(400, "Invalid JSON");
  }
}
async function invitation(t: string) {
  if (!/^[a-f0-9]{64}$/.test(t)) return fail(404, "Invitation unavailable");
  const tracked = await db.invitation.findUnique({
    where: { token: t },
    include: {
      event: { include: { settings: true, sessions: true } },
      rsvp: { include: { selections: true } },
    },
  });
  if (tracked) {
    if (tracked.revoked || tracked.event.status !== "PUBLISHED")
      return fail(404, "Invitation unavailable");
    return { event: tracked.event, guest: tracked };
  }
  const event = await db.event.findUnique({
    where: { publicToken: t },
    include: { settings: true, sessions: true },
  });
  if (
    !event ||
    event.status !== "PUBLISHED" ||
    !event.settings?.publicLinksEnabled
  )
    return fail(404, "Invitation unavailable");
  return { event, guest: null };
}
async function handle(
  req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> },
) {
  const { path: p } = await ctx.params;
  const method = req.method;
  try {
    if (!["GET", "HEAD"].includes(method)) {
      const origin = req.headers.get("origin");
      if (
        origin &&
        origin !==
          new URL(process.env.APP_URL || "http://localhost:3000").origin
      )
        fail(403, "Request origin rejected");
    }
    if (p[0] === "health") return ok({ status: "ok" });
    if (p[0] === "auth") {
      if (p[1] === "me" && method === "GET") {
        const u = await user(req);
        return ok({ id: u.id, name: u.name, email: u.email });
      }
      if (p[1] === "profile" && method === "PATCH") {
        const u = await user(req);
        const { name } = z
          .object({ name: z.string().trim().min(2).max(100) })
          .parse(await json(req));
        await db.user.update({ where: { id: u.id }, data: { name } });
        return ok({ id: u.id, name, email: u.email });
      }
      if (p[1] === "password" && method === "POST") {
        const u = await user(req);
        const v = z
          .object({
            currentPassword: z.string().max(200),
            password: z
              .string()
              .min(12)
              .refine((v) => Buffer.byteLength(v, "utf8") <= 72),
          })
          .parse(await json(req));
        await limit(req, "password-change", 10);
        if (!(await compare(v.currentPassword, u.passwordHash)))
          fail(403, "Current password is incorrect");
        await db.$transaction(async (tx) => {
          await tx.user.update({
            where: { id: u.id },
            data: { passwordHash: await hash(v.password, 12) },
          });
          await tx.session.deleteMany({ where: { userId: u.id } });
        });
        await audit("account.password_changed", u.id);
        return sessionCookie(
          ok({ message: "Password changed. Sign in again." }),
          "",
          0,
        );
      }
      if (p[1] === "export" && method === "GET") {
        const u = await user(req);
        const events = await db.event.findMany({
          where: { ownerId: u.id },
          include: {
            ...include,
            households: true,
            forecasts: true,
            collaborators: {
              select: { email: true, role: true, acceptedAt: true },
            },
          },
        });
        return ok({
          exportedAt: new Date().toISOString(),
          profile: { name: u.name, email: u.email },
          events,
        });
      }
      if (p[1] === "logout" && method === "POST") {
        const raw = req.cookies.get("evently_session")?.value;
        if (raw)
          await db.session.deleteMany({ where: { tokenHash: digest(raw) } });
        return sessionCookie(ok({ signedOut: true }), "", 0);
      }
      if (p[1] === "account" && method === "DELETE") {
        const u = await user(req);
        const b = await json(req);
        if (!(await compare(String(b.password), u.passwordHash)))
          fail(403, "Password is incorrect");
        await db.user.delete({ where: { id: u.id } });
        await audit("account.deleted", u.id);
        return sessionCookie(ok({ deleted: true }), "", 0);
      }
      await limit(req, "auth", 20);
      const b = await json(req);
      if (p[1] === "register" || p[1] === "login") {
        const v = z
          .object({
            name: z.string().trim().min(2).max(100).optional(),
            email: z.email().transform((v) => v.toLowerCase()),
            password: z
              .string()
              .min(12)
              .max(72)
              .refine(
                (v) => Buffer.byteLength(v, "utf8") <= 72,
                "Password must be at most 72 UTF-8 bytes",
              ),
          })
          .parse(b);
        let u = await db.user.findUnique({ where: { email: v.email } });
        if (p[1] === "register") {
          if (!v.name) fail(400, "Name is required");
          if (u) fail(400, "Unable to register with those details");
          u = await db.user.create({
            data: {
              name: v.name!,
              email: v.email,
              passwordHash: await hash(v.password, 12),
            },
          });
          await audit("account.created", u.id);
        } else {
          const valid = await compare(
            v.password,
            u?.passwordHash ||
              "$2b$12$JZYF3dF1p6X9gO8mQQ.K7OoqB.OLVAGbN4IBBxIOyKPRY2Rslz6vO",
          );
          if (!u || !valid) fail(401, "Invalid email or password");
        }
        const raw = token();
        await db.session.create({
          data: {
            tokenHash: digest(raw),
            userId: u!.id,
            expiresAt: new Date(Date.now() + 2592000000),
          },
        });
        return sessionCookie(ok({ name: u!.name }), raw);
      }
      if (p[1] === "forgot-password") {
        const { email } = z.object({ email: z.email() }).parse(b);
        const u = await db.user.findUnique({
          where: { email: email.toLowerCase() },
        });
        if (u) {
          const raw = token();
          await db.passwordResetToken.create({
            data: {
              userId: u.id,
              tokenHash: digest(raw),
              expiresAt: new Date(Date.now() + 3600000),
            },
          });
          const link = `${process.env.APP_URL}/reset-password?token=${raw}`;
          if (process.env.SMTP_HOST) {
            await nodemailer
              .createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT || 587),
                secure: process.env.SMTP_PORT === "465",
                auth: {
                  user: process.env.SMTP_USER,
                  pass: process.env.SMTP_PASSWORD,
                },
              })
              .sendMail({
                from: process.env.MAIL_FROM,
                to: u.email,
                subject: "Reset your Inviora password",
                text: `Reset your password within one hour: ${link}`,
              });
          } else if (process.env.NODE_ENV !== "production") {
            console.info(
              JSON.stringify({
                level: "debug",
                message: "Development password reset link",
                link,
              }),
            );
          } else {
            console.error(
              JSON.stringify({
                level: "error",
                message: "SMTP is not configured",
              }),
            );
          }
        }
        return ok({
          message: "If an account exists, a reset link has been sent.",
        });
      }
      if (p[1] === "reset-password") {
        const v = z
          .object({
            token: z.string().length(64),
            password: z
              .string()
              .min(12)
              .max(72)
              .refine(
                (v) => Buffer.byteLength(v, "utf8") <= 72,
                "Password must be at most 72 UTF-8 bytes",
              ),
          })
          .parse(b);
        await db.$transaction(async (tx) => {
          const reset = await tx.passwordResetToken.findUnique({
            where: { tokenHash: digest(v.token) },
          });
          if (!reset || reset.expiresAt < new Date())
            return fail(400, "Reset link is invalid or expired");
          const removed = await tx.passwordResetToken.deleteMany({
            where: { id: reset.id },
          });
          if (!removed.count) fail(400, "Reset link already used");
          await tx.user.update({
            where: { id: reset.userId },
            data: { passwordHash: await hash(v.password, 12) },
          });
          await tx.session.deleteMany({ where: { userId: reset.userId } });
          await tx.passwordResetToken.deleteMany({
            where: { userId: reset.userId },
          });
        });
        return ok({ message: "Password updated. Please sign in." });
      }
    }
    if (p[0] === "collaborations" && p[1] && method === "POST") {
      const u = await user(req);
      await limit(req, "collaboration-accept", 20);
      if (!/^[a-f0-9]{64}$/.test(p[1])) fail(404, "Invitation unavailable");
      const invitation = await db.collaborator.findUnique({
        where: { tokenHash: digest(p[1]) },
        include: { event: true },
      });
      if (
        !invitation ||
        invitation.expiresAt < new Date() ||
        invitation.acceptedAt ||
        invitation.email !== u.email
      )
        fail(404, "Invitation unavailable or sign in with the invited email");
      await db.$transaction(async (tx) => {
        const accepted = await tx.collaborator.updateMany({
          where: {
            id: invitation!.id,
            acceptedAt: null,
            expiresAt: { gt: new Date() },
            email: u.email,
          },
          data: { userId: u.id, acceptedAt: new Date() },
        });
        if (!accepted.count) fail(409, "Invitation already used");
        await tx.auditLog.create({
          data: {
            actorId: u.id,
            action: "collaborator.accepted",
            entityId: invitation!.eventId,
          },
        });
        await tx.notification.create({
          data: {
            userId: invitation!.event.ownerId,
            eventId: invitation!.eventId,
            kind: "COLLABORATION",
            message: `${invitation!.role === "PARTNER" ? "Partner" : "Family collaborator"} invitation accepted for ${invitation!.event.title}`,
            dedupeKey: `collaborator:${invitation!.id}`,
          },
        });
      });
      return ok({
        accepted: true,
        role: invitation!.role,
        eventId: invitation!.eventId,
      });
    }
    if (p[0] === "partner-events" && method === "GET") {
      const u = await user(req);
      const events = await db.event.findMany({
        where: {
          collaborators: {
            some: { userId: u.id, role: "PARTNER", acceptedAt: { not: null } },
          },
        },
        include,
      });
      return ok(events.map(partnerSummary));
    }
    if (p[0] === "notifications") {
      const u = await user(req);
      if (method === "GET") {
        const upcoming = await db.event.findMany({
          where: {
            ownerId: u.id,
            startsAt: {
              gte: new Date(),
              lte: new Date(Date.now() + 7 * 86400000),
            },
          },
          include: { settings: true },
        });
        const deadlines = await db.event.findMany({
          where: {
            ownerId: u.id,
            settings: {
              deadline: {
                gte: new Date(),
                lte: new Date(Date.now() + 3 * 86400000),
              },
              rsvpEnabled: true,
            },
          },
          include: { settings: true },
        });
        for (const e of upcoming)
          await db.notification.upsert({
            where: {
              dedupeKey: `upcoming:${e.id}:${e.startsAt.toISOString()}`,
            },
            create: {
              userId: u.id,
              eventId: e.id,
              kind: "UPCOMING",
              message: `${e.title} takes place within seven days`,
              dedupeKey: `upcoming:${e.id}:${e.startsAt.toISOString()}`,
            },
            update: {},
          });
        for (const e of deadlines)
          await db.notification.upsert({
            where: {
              dedupeKey: `deadline:${e.id}:${e.settings!.deadline!.toISOString()}`,
            },
            create: {
              userId: u.id,
              eventId: e.id,
              kind: "DEADLINE",
              message: `RSVP deadline approaching for ${e.title}`,
              dedupeKey: `deadline:${e.id}:${e.settings!.deadline!.toISOString()}`,
            },
            update: {},
          });
        return ok(
          await db.notification.findMany({
            where: { userId: u.id },
            orderBy: { createdAt: "desc" },
            take: 100,
          }),
        );
      }
      if (method === "PATCH") {
        const { id, read } = z
          .object({ id: z.string(), read: z.boolean() })
          .parse(await json(req));
        const result = await db.notification.updateMany({
          where: { id, userId: u.id },
          data: { readAt: read ? new Date() : null },
        });
        if (!result.count) fail(404, "Notification not found");
        return ok({ updated: true });
      }
    }
    if (p[0] === "partners" && p[1] === "interest" && method === "POST") {
      await limit(req, "partners", 5);
      const v = z
        .object({
          services: z.string().max(1000).default(""),
          businessName: z.string().min(2).max(150),
          contactName: z.string().min(2).max(100),
          category: z.enum(["Caterer", "Event planner", "Other"]),
          email: z.email(),
          phone: z.string().min(7).max(30),
          city: z.string().min(2).max(100),
          message: z.string().max(2000),
        })
        .parse(await json(req));
      await db.partnerLead.create({ data: v });
      return ok(
        { message: "Thank you. Your interest has been recorded." },
        201,
      );
    }
    if (p[0] === "invitations") {
      await limit(
        req,
        method === "GET" ? "invite-read" : "rsvp",
        method === "GET" ? 150 : 40,
      );
      const { event, guest } = await invitation(p[1]);
      if (method === "GET") {
        let response = guest?.rsvp;
        let respondentName: string | null = null;
        const rt = req.nextUrl.searchParams.get("responseToken");
        if (!guest && rt && /^[a-f0-9]{64}$/.test(rt)) {
          const own = await db.invitation.findFirst({
            where: { eventId: event.id, token: rt, source: "OPEN" },
            include: { rsvp: { include: { selections: true } } },
          });
          response = own?.rsvp || null;
          respondentName = own?.name || null;
        }
        const publicEvent = {
          title: event.title,
          type: event.type,
          host: event.host,
          description: event.description,
          startsAt: event.startsAt,
          endsAt: event.endsAt,
          timezone: event.timezone,
          venue: event.venue,
          address: event.address,
          mapsUrl: event.mapsUrl,
          coverImage: event.coverImage,
          template: event.template,
          theme: event.theme,
          message: event.message,
          font: event.font,
          rsvpLabel: event.rsvpLabel,
          settings: {
            rsvpEnabled: event.settings!.rsvpEnabled,
            deadline: event.settings!.deadline,
            allowMaybe: event.settings!.allowMaybe,
            allowPartySize: event.settings!.allowPartySize,
            maxPartySize: event.settings!.maxPartySize,
            mealsEnabled: event.settings!.mealsEnabled,
            messagesEnabled: event.settings!.messagesEnabled,
          },
          sessions: event.sessions.filter(
            (s) =>
              !guest?.invitedSessionIds.length ||
              guest.invitedSessionIds.includes(s.id),
          ),
        };
        const { id, publicToken, ownerId } = event;
        void id;
        void publicToken;
        void ownerId;
        return ok({
          event: publicEvent,
          respondentName,
          guest: guest
            ? {
                name: guest.name,
                invitedSize: guest.invitedSize,
                source: guest.source,
              }
            : null,
          response: response
            ? {
                status: response.status,
                partySize: response.partySize,
                meal: response.meal,
                message: response.message,
                updatedAt: response.updatedAt,
                selections: response.selections.map((v) => ({
                  sessionId: v.sessionId,
                  attendees: v.attendees,
                  meal: v.meal,
                })),
              }
            : null,
        });
      }
      if (["POST", "PATCH"].includes(method) && p[2] === "rsvp") {
        const v = responseSchema.parse(await json(req));
        if (!guest && !v.name) fail(400, "Your name is required");
        const responseToken = guest?.token || v.responseToken || token();
        await db.$transaction(async (tx) => {
          await tx.$queryRaw`SELECT id FROM "Event" WHERE id = ${event.id} FOR UPDATE`;
          const fresh = await tx.event.findUniqueOrThrow({
            where: { id: event.id },
            include: { settings: true, sessions: true },
          });
          const existing = guest
            ? await tx.invitation.findUnique({ where: { id: guest.id } })
            : await tx.invitation.findFirst({
                where: {
                  token: responseToken,
                  eventId: event.id,
                  source: "OPEN",
                },
              });
          if (
            (!fresh.settings?.publicLinksEnabled ||
              fresh.publicToken !== p[1]) &&
            !guest
          )
            fail(404, "Invitation unavailable");
          if (guest && !existing) fail(404, "Invitation unavailable");
          validateResponse(v, fresh, existing);
          let inv = existing;
          if (!inv)
            inv = await tx.invitation.create({
              data: {
                eventId: event.id,
                token: responseToken,
                name: v.name!,
                source: "OPEN",
                invitedSize: v.status === "NO" ? 1 : v.partySize,
                dedupeKey: `open:${responseToken}`,
              },
            });
          if (inv.source === "OPEN")
            await tx.invitation.update({
              where: { id: inv.id },
              data: {
                name: v.name,
                invitedSize: v.status === "NO" ? inv.invitedSize : v.partySize,
              },
            });
          const data = {
            status: v.status,
            partySize: v.status === "NO" ? 0 : v.partySize,
            meal: fresh.settings!.mealsEnabled ? v.meal : "No preference",
            message: fresh.settings!.messagesEnabled ? v.message : "",
          };
          const previous = await tx.rSVP.findUnique({
            where: { invitationId: inv.id },
            include: { selections: true },
          });
          const r = await tx.rSVP.upsert({
            where: { invitationId: inv.id },
            create: { ...data, invitationId: inv.id },
            update: data,
          });
          await tx.rSVPMealSelection.deleteMany({ where: { rsvpId: r.id } });
          const selections =
            v.selections ??
            fresh.sessions
              .filter(
                (s) =>
                  !inv.invitedSessionIds.length ||
                  inv.invitedSessionIds.includes(s.id),
              )
              .map((s) => ({
                sessionId: s.id,
                attendees: data.partySize,
                meal: data.meal,
              }));
          validateResponse({ ...v, selections }, fresh, inv);
          if (selections.length)
            await tx.rSVPMealSelection.createMany({
              data: selections.map((s) => ({
                ...s,
                meal:
                  fresh.settings!.mealsEnabled &&
                  fresh.sessions.find((x) => x.id === s.sessionId)?.mealsEnabled
                    ? s.meal
                    : "No preference",
                rsvpId: r.id,
                attendees: v.status === "NO" ? 0 : s.attendees,
              })),
            });
          await tx.auditLog.create({
            data: { action: "rsvp.updated", entityId: event.id },
          });
          const changed =
            !previous ||
            ["status", "partySize", "meal", "message"].some(
              (k) => (previous as any)[k] !== (data as any)[k],
            ) ||
            JSON.stringify(
              previous.selections
                .map((x) => [x.sessionId, x.attendees, x.meal])
                .sort(),
            ) !==
              JSON.stringify(
                selections
                  .map((x) => [
                    x.sessionId,
                    v.status === "NO" ? 0 : x.attendees,
                    fresh.settings!.mealsEnabled &&
                    fresh.sessions.find((s) => s.id === x.sessionId)
                      ?.mealsEnabled
                      ? x.meal
                      : "No preference",
                  ])
                  .sort(),
              );
          if (changed)
            await tx.notification.create({
              data: {
                userId: fresh.ownerId,
                eventId: fresh.id,
                kind: previous ? "RSVP_UPDATED" : "RSVP_NEW",
                message: `${previous ? "Guest attendance updated" : "New RSVP received"} for ${fresh.title}`,
                dedupeKey: `rsvp:${r.id}:${token()}`,
              },
            });
        });
        return ok({ message: "Your response has been saved", responseToken });
      }
    }
    if (p[0] === "events") {
      if (p.length === 1) {
        const u = await user(req);
        if (method === "GET") {
          const events = await db.event.findMany({
            where: {
              OR: [
                { ownerId: u.id },
                {
                  collaborators: {
                    some: {
                      userId: u.id,
                      acceptedAt: { not: null },
                      role: { in: ["MANAGER", "VIEWER"] },
                    },
                  },
                },
              ],
            },
            include: { ...include, collaborators: true },
            orderBy: { startsAt: "asc" },
          });
          return ok(
            events.map((e) =>
              eventView(
                e,
                e.ownerId === u.id
                  ? "OWNER"
                  : (e.collaborators.find((c) => c.userId === u.id)!
                      .role as AccessRole),
              ),
            ),
          );
        }
        if (method === "POST") {
          const v = eventSchema.parse(await json(req));
          const { settings, ...data } = v;
          const e = await db.event.create({
            data: {
              ...data,
              ownerId: u.id,
              publicToken: token(),
              settings: { create: settings },
              sessions: {
                create: { title: "Main celebration", startsAt: data.startsAt },
              },
            },
          });
          await audit("event.created", u.id, e.id);
          return ok(e, 201);
        }
      }
      const e = await owned(req, p[1], p[2] || "event");
      if (p.length === 2) {
        if (method === "GET") return ok(eventView(e, e.accessRole));
        if (method === "PATCH") {
          const v = eventSchema.parse(await json(req));
          const { settings, ...data } = v;
          await db.event.update({
            where: { id: e.id },
            data: { ...data, settings: { update: settings } },
          });
          await audit("event.updated", e.actorId, e.id);
          return ok({ id: e.id });
        }
        if (method === "DELETE") {
          await db.$transaction(async (tx) => {
            await tx.notification.deleteMany({ where: { eventId: e.id } });
            await tx.event.delete({ where: { id: e.id } });
          });
          await audit("event.deleted", e.actorId, e.id);
          return ok({ deleted: true });
        }
      }
      if (p[2] === "analytics") return ok(aggregate(e));
      if (p[2] === "guests") {
        if (p[3] === "import" && method === "POST") {
          const { csv, mapping, preview, partial } = z
            .object({
              csv: z.string().max(500000),
              mapping: z.record(z.string(), z.string()).default({}),
              preview: z.boolean().default(false),
              partial: z.boolean().default(false),
            })
            .parse(await json(req));
          let report;
          try {
            report = previewImport(csv, e.invitations, mapping);
          } catch (err) {
            return fail(400, (err as Error).message);
          }
          if (preview) return ok(report);
          const { errors } = report;
          if (errors.length && !partial)
            return ok({ imported: 0, errors }, 422);
          const valid = report.rows.flatMap((r) => (r.data ? [r.data] : []));
          await db.$transaction(async (tx) => {
            for (const g of valid) {
              const h = g.household
                ? await tx.household.upsert({
                    where: {
                      eventId_name: { eventId: e.id, name: g.household },
                    },
                    create: { eventId: e.id, name: g.household },
                    update: {},
                  })
                : null;
              const { household, ...data } = g;
              void household;
              await tx.invitation.create({
                data: {
                  ...data,
                  eventId: e.id,
                  householdId: h?.id,
                  token: token(),
                  dedupeKey: dedupe(g),
                },
              });
            }
          });
          await audit("guests.imported", e.actorId, e.id);
          return ok({ imported: valid.length, errors });
        }
        if (method === "GET") return ok(e.invitations);
        if (method === "POST" || method === "PATCH") {
          const g = guestSchema.parse(await json(req));
          if (g.members.length > g.invitedSize)
            fail(400, "Member names exceed invited size");
          if (
            g.invitedSessionIds.some(
              (id) => !e.sessions.some((s) => s.id === id),
            )
          )
            fail(400, "Invalid function selection");
          if (g.household) {
            const canonical = await db.household.findFirst({
              where: {
                eventId: e.id,
                name: { equals: g.household, mode: "insensitive" },
              },
            });
            if (canonical) g.household = canonical.name;
          }
          const target = p[3] ? e.invitations.find((i) => i.id === p[3]) : null;
          if (method === "PATCH" && !target) fail(404, "Guest not found");
          if (target?.rsvp && target.rsvp.partySize > g.invitedSize)
            fail(400, "Invited size cannot be below the current RSVP");
          const h = g.household
            ? await db.household.upsert({
                where: { eventId_name: { eventId: e.id, name: g.household } },
                create: { eventId: e.id, name: g.household },
                update: {},
              })
            : null;
          const { household, ...data } = g;
          void household;
          const data2 = {
            ...data,
            householdId: h?.id || null,
            dedupeKey: dedupe(g),
          };
          const inv =
            method === "POST"
              ? await db.invitation.create({
                  data: { ...data2, eventId: e.id, token: token() },
                })
              : await db.invitation.update({
                  where: { id: target!.id },
                  data: data2,
                });
          await audit("guest.saved", e.actorId, e.id);
          return ok(inv, method === "POST" ? 201 : 200);
        }
        if (method === "DELETE") {
          const target = e.invitations.find((i) => i.id === p[3]);
          if (!target) fail(404, "Guest not found");
          await db.invitation.delete({ where: { id: target!.id } });
          await audit("guest.deleted", e.actorId, e.id);
          return ok({ deleted: true });
        }
      }
      if (p[2] === "invitations" && method === "POST") {
        const b = z
          .object({
            guestId: z.string().optional(),
            revoke: z.boolean().optional(),
            rotatePublic: z.boolean().optional(),
          })
          .parse(await json(req));
        if (b.rotatePublic) {
          const updated = await db.event.update({
            where: { id: e.id },
            data: { publicToken: token() },
          });
          await audit("invitation.public_rotated", e.actorId, e.id);
          return ok({ token: updated.publicToken });
        }
        const i = e.invitations.find((i) => i.id === b.guestId);
        if (!i) fail(404, "Guest not found");
        await db.invitation.update({
          where: { id: i!.id },
          data: { revoked: b.revoke ?? false, sentAt: new Date() },
        });
        await audit(
          b.revoke ? "invitation.revoked" : "invitation.shared",
          e.ownerId,
          e.id,
        );
        return ok({ token: i!.token });
      }
      if (p[2] === "sessions" && ["POST", "PATCH"].includes(method)) {
        if (method === "POST" && e.sessions.length >= 30)
          fail(400, "Maximum 30 functions");
        if (method === "PATCH" && !e.sessions.some((s) => s.id === p[3]))
          fail(404, "Function not found");
        const v = z
          .object({
            title: z.string().trim().min(2).max(100),
            startsAt: z.iso.datetime(),
            venue: z.string().max(200).default(""),
            mapsUrl: z
              .union([
                z.url().refine((v) => v.startsWith("https://")),
                z.literal(""),
              ])
              .default(""),
            rsvpEnabled: z.boolean().default(true),
            deadline: z.iso.datetime().nullable().default(null),
            mealsEnabled: z.boolean().default(true),
          })
          .parse(await json(req));
        const saved =
          method === "POST"
            ? await db.eventSession.create({ data: { ...v, eventId: e.id } })
            : await db.eventSession.update({ where: { id: p[3] }, data: v });
        await audit("function.saved", e.actorId, e.id);
        return ok(saved, method === "POST" ? 201 : 200);
      }
      if (p[2] === "households") {
        if (method === "GET")
          return ok(
            await db.household.findMany({
              where: { eventId: e.id },
              include: {
                invitations: {
                  include: { rsvp: { include: { selections: true } } },
                },
              },
            }),
          );
        const h = p[3]
          ? await db.household.findFirst({ where: { id: p[3], eventId: e.id } })
          : null;
        if (p[3] && !h) fail(404, "Household not found");
        if (method === "DELETE") {
          if (!h) fail(404, "Household not found");
          await db.household.delete({ where: { id: h!.id } });
          await audit("household.removed", e.actorId, e.id);
          return ok({ deleted: true });
        }
        if (method === "POST" && p[4] === "merge") {
          const { targetId } = z
            .object({ targetId: z.string() })
            .parse(await json(req));
          const target = await db.household.findFirst({
            where: { id: targetId, eventId: e.id },
          });
          if (!h || !target || h.id === target.id)
            fail(400, "Choose two different households from this event");
          await db.$transaction(async (tx) => {
            await tx.invitation.updateMany({
              where: { householdId: h!.id, eventId: e.id },
              data: { householdId: target!.id },
            });
            await tx.household.delete({ where: { id: h!.id } });
            await tx.auditLog.create({
              data: {
                action: "household.merged",
                actorId: e.actorId,
                entityId: e.id,
              },
            });
          });
          return ok({ merged: true });
        }
        if (["POST", "PATCH"].includes(method)) {
          const { name } = z
            .object({ name: z.string().trim().min(1).max(120) })
            .parse(await json(req));
          const duplicate = await db.household.findFirst({
            where: {
              eventId: e.id,
              name: { equals: name, mode: "insensitive" },
              ...(h ? { id: { not: h.id } } : {}),
            },
          });
          if (duplicate) fail(409, "Household already exists");
          const saved = h
            ? await db.household.update({ where: { id: h.id }, data: { name } })
            : await db.household.create({ data: { name, eventId: e.id } });
          await audit("household.saved", e.actorId, e.id);
          return ok(saved);
        }
      }
      if (p[2] === "collaborators") {
        if (method === "GET")
          return ok(
            e.collaborators.map((c) => ({
              id: c.id,
              email: c.email,
              role: c.role,
              acceptedAt: c.acceptedAt,
              expiresAt: c.expiresAt,
            })),
          );
        if (method === "DELETE") {
          const result = await db.collaborator.deleteMany({
            where: { id: p[3], eventId: e.id },
          });
          if (!result.count) fail(404, "Collaborator not found");
          await audit("collaborator.removed", e.actorId, e.id);
          return ok({ removed: true });
        }
        if (method === "POST") {
          const { email, role } = z
            .object({
              email: z.email().transform((v) => v.toLowerCase()),
              role: z.enum(["MANAGER", "VIEWER", "PARTNER"]),
            })
            .parse(await json(req));
          const u = await user(req);
          if (email === u.email) fail(400, "The owner already has full access");
          const raw = token();
          const c = await db.collaborator.upsert({
            where: { eventId_email: { eventId: e.id, email } },
            create: {
              eventId: e.id,
              email,
              role,
              tokenHash: digest(raw),
              expiresAt: new Date(Date.now() + 7 * 86400000),
            },
            update: {
              role,
              tokenHash: digest(raw),
              expiresAt: new Date(Date.now() + 7 * 86400000),
              userId: null,
              acceptedAt: null,
            },
          });
          await audit("collaborator.invited", e.actorId, e.id);
          return ok(
            {
              id: c.id,
              invitationUrl: `${new URL(process.env.APP_URL || "http://localhost:3000").origin}/dashboard?collaborationToken=${raw}`,
              expiresAt: c.expiresAt,
            },
            201,
          );
        }
      }
      if (p[2] === "reminders") {
        if (method === "GET")
          return ok(
            await db.reminder.findMany({
              where: { invitation: { eventId: e.id } },
              orderBy: { preparedAt: "desc" },
              take: 500,
            }),
          );
        if (method === "POST") {
          const { invitationId, kind } = z
            .object({ invitationId: z.string(), kind: z.enum(reminderKinds) })
            .parse(await json(req));
          const i = e.invitations.find(
            (i) =>
              i.id === invitationId && !i.revoked && i.source === "TRACKED",
          );
          if (!i) fail(404, "Invitation not found");
          const url = `${new URL(process.env.APP_URL || "http://localhost:3000").origin}/invite/${i!.token}`;
          const message = reminderMessage(kind, e, i!.name, url);
          const reminder = await db.reminder.create({
            data: { invitationId, kind, message },
          });
          await audit("reminder.prepared", e.actorId, e.id);
          return ok(
            {
              ...reminder,
              shareUrl: `https://wa.me/${i!.phone?.replace(/\D/g, "") || ""}?text=${encodeURIComponent(message)}`,
            },
            201,
          );
        }
      }
      if (p[2] === "forecasts") {
        if (method === "GET")
          return ok(
            await db.forecastSnapshot.findMany({
              where: { eventId: e.id },
              orderBy: { calculatedAt: "desc" },
              take: 100,
            }),
          );
        if (method === "POST") {
          const { sessionId } = z
            .object({ sessionId: z.string() })
            .parse(await json(req));
          const result = aggregate(e).functions.find(
            (s: { id: string }) => s.id === sessionId,
          );
          if (!result) fail(404, "Function not found");
          return ok(
            await db.forecastSnapshot.create({
              data: {
                eventId: e.id,
                sessionId,
                assumptions: {
                  confirmedProbability: e.settings!.confirmedProbability,
                  maybeProbability: e.settings!.maybeProbability,
                  pendingProbability: e.settings!.pendingProbability,
                  contingency: e.settings!.contingency,
                  publicPendingPopulation: "unknown",
                },
                inputs: {
                  confirmed: result!.confirmed,
                  maybe: result!.maybe,
                  pending: result!.pending,
                },
                result: result!,
              },
            }),
            201,
          );
        }
      }
      if (p[2] === "check-ins") {
        if (method === "GET")
          return ok(
            await db.checkIn.findMany({
              where: { invitation: { eventId: e.id } },
            }),
          );
        if (["POST", "PATCH"].includes(method)) {
          const v = z
            .object({
              sessionId: z.string(),
              invitationId: z.string().optional(),
              token: z
                .string()
                .regex(/^[a-f0-9]{64}$/)
                .optional(),
              count: z.number().int().min(0).max(100),
              reason: z.string().trim().min(3).max(300).optional(),
            })
            .parse(await json(req));
          if (!e.sessions.some((s) => s.id === v.sessionId))
            fail(404, "Function not found");
          const inv = e.invitations.find((i) =>
            v.invitationId ? i.id === v.invitationId : i.token === v.token,
          );
          if (
            !inv ||
            inv.revoked ||
            (inv.invitedSessionIds.length &&
              !inv.invitedSessionIds.includes(v.sessionId))
          )
            fail(404, "Invitation unavailable for this function");
          if (v.count > inv!.invitedSize)
            fail(400, "Arrival count exceeds invited party size");
          if (method === "PATCH" && !v.reason)
            fail(400, "A correction reason is required");
          const saved = await db.$transaction(async (tx) => {
            await tx.$queryRaw`SELECT id FROM "Event" WHERE id = ${e.id} FOR UPDATE`;
            const existing = await tx.checkIn.findUnique({
              where: {
                invitationId_sessionId: {
                  invitationId: inv!.id,
                  sessionId: v.sessionId,
                },
              },
            });
            if (method === "POST" && existing)
              fail(
                409,
                "This household is already checked in for this function",
              );
            if (method === "PATCH" && !existing)
              fail(404, "Check-in not found");
            const result = existing
              ? await tx.checkIn.update({
                  where: { id: existing.id },
                  data: { count: v.count },
                })
              : await tx.checkIn.create({
                  data: {
                    invitationId: inv!.id,
                    sessionId: v.sessionId,
                    count: v.count,
                  },
                });
            await tx.auditLog.create({
              data: {
                actorId: e.actorId,
                action: existing
                  ? `checkin.corrected:${existing.count}->${v.count}:${v.reason}`
                  : `checkin.created:${v.count}`,
                entityId: result.id,
              },
            });
            return result;
          });
          return ok(saved, method === "POST" ? 201 : 200);
        }
      }
      if (p[2] === "catering") {
        if (method === "GET")
          return ok(
            e.sessions.map((s) => ({
              ...s,
              plan: s.plans[0],
              calculation: s.plans[0] ? catering(s.plans[0]) : null,
            })),
          );
        if (method === "PUT") {
          const v = z
            .object({
              sessionId: z.string(),
              expected: z.coerce.number().int().min(0).max(100000),
              pricePerPlate: z.coerce.number().min(0).max(1000000),
              contingency: z.coerce.number().min(0).max(100),
              overrideCount: z.coerce
                .number()
                .int()
                .min(0)
                .max(100000)
                .nullable(),
              vegetarian: z.coerce.number().int().min(0),
              nonVegetarian: z.coerce.number().int().min(0),
              originalCount: z.coerce.number().int().min(0).max(100000),
              mealType: z.string().max(100),
              planningNotes: z.string().max(2000).default(""),
            })
            .parse(await json(req));
          if (!e.sessions.some((s) => s.id === v.sessionId))
            fail(404, "Session not found");
          if (v.vegetarian + v.nonVegetarian > v.expected)
            fail(400, "Meal counts exceed expected attendance");
          const saved = await db.cateringPlan.upsert({
            where: { sessionId: v.sessionId },
            create: v,
            update: v,
          });
          await audit("catering.saved", e.actorId, e.id);
          return ok({ ...saved, calculation: catering(saved) });
        }
      }
    }
    return fail(404, "Not found");
  } catch (err) {
    if (err instanceof z.ZodError)
      return NextResponse.json(
        {
          error: {
            message: err.issues
              .map((i) => `${i.path.join(".")}: ${i.message}`)
              .join("; "),
          },
        },
        { status: 422 },
      );
    if (err instanceof HttpError)
      return NextResponse.json(
        { error: { message: err.message } },
        { status: err.status },
      );
    if ((err as any)?.code === "P2002")
      return NextResponse.json(
        {
          error: {
            message: "This record already exists. Check for duplicates.",
          },
        },
        { status: 409 },
      );
    if (
      err instanceof Error &&
      [
        "Party size",
        "Responses are closed",
        "Maybe responses",
        "Invalid session",
        "Invitation unavailable",
      ].some((s) => err.message.startsWith(s))
    )
      return NextResponse.json(
        { error: { message: err.message } },
        { status: 400 },
      );
    console.error(
      JSON.stringify({ level: "error", message: (err as Error).message }),
    );
    return NextResponse.json(
      { error: { message: "Something went wrong. Please try again." } },
      { status: 500 },
    );
  }
}
export {
  handle as GET,
  handle as POST,
  handle as PATCH,
  handle as DELETE,
  handle as PUT,
};
