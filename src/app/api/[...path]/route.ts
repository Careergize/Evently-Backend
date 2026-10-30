import { NextRequest, NextResponse } from "next/server";
import { randomBytes, createHash } from "node:crypto";
import { hash, compare } from "bcryptjs";
import { z } from "zod";
import { parse } from "csv-parse/sync";
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
  invitations: { include: { rsvp: true, household: true } },
  sessions: { include: { plans: true } },
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
async function owned(req: NextRequest, id: string) {
  const u = await user(req);
  const e = await db.event.findFirst({ where: { id, ownerId: u.id }, include });
  if (!e) return fail(404, "Event not found");
  return e;
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
  if (!event || event.status !== "PUBLISHED")
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
                subject: "Reset your Evently password",
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
    if (p[0] === "partners" && p[1] === "interest" && method === "POST") {
      await limit(req, "partners", 5);
      const v = z
        .object({
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
        const { id, publicToken, ownerId, ...publicEvent } = event;
        void id;
        void publicToken;
        void ownerId;
        return ok({
          event: publicEvent,
          respondentName,
          guest: guest
            ? { name: guest.name, invitedSize: guest.invitedSize }
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
          const r = await tx.rSVP.upsert({
            where: { invitationId: inv.id },
            create: { ...data, invitationId: inv.id },
            update: data,
          });
          await tx.rSVPMealSelection.deleteMany({ where: { rsvpId: r.id } });
          if (v.selections?.length)
            await tx.rSVPMealSelection.createMany({
              data: v.selections.map((s) => ({
                ...s,
                rsvpId: r.id,
                attendees: v.status === "NO" ? 0 : s.attendees,
              })),
            });
          await tx.auditLog.create({
            data: { action: "rsvp.updated", entityId: event.id },
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
            where: { ownerId: u.id },
            include,
            orderBy: { startsAt: "asc" },
          });
          return ok(events.map((e) => ({ ...e, analytics: aggregate(e) })));
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
      const e = await owned(req, p[1]);
      if (p.length === 2) {
        if (method === "GET") return ok({ ...e, analytics: aggregate(e) });
        if (method === "PATCH") {
          const v = eventSchema.parse(await json(req));
          const { settings, ...data } = v;
          await db.event.update({
            where: { id: e.id },
            data: { ...data, settings: { update: settings } },
          });
          await audit("event.updated", e.ownerId, e.id);
          return ok({ id: e.id });
        }
        if (method === "DELETE") {
          await db.event.delete({ where: { id: e.id } });
          await audit("event.deleted", e.ownerId, e.id);
          return ok({ deleted: true });
        }
      }
      if (p[2] === "analytics") return ok(aggregate(e));
      if (p[2] === "guests") {
        if (p[3] === "import" && method === "POST") {
          const { csv } = z
            .object({ csv: z.string().max(500000) })
            .parse(await json(req));
          let rows: any[];
          try {
            rows = parse(csv, {
              columns: true,
              skip_empty_lines: true,
              bom: true,
              trim: true,
            });
          } catch {
            return fail(400, "Invalid CSV format");
          }
          if (rows.length > 1000) fail(400, "Maximum 1,000 rows per import");
          const errors: { row: number; message: string }[] = [];
          const seen = new Set(e.invitations.map((i) => i.dedupeKey));
          const valid: any[] = [];
          rows.forEach((row, i) => {
            const result = guestSchema.safeParse(row);
            if (!result.success) {
              errors.push({
                row: i + 2,
                message: result.error.issues
                  .map((x) => `${x.path.join(".")}: ${x.message}`)
                  .join("; "),
              });
              return;
            }
            const key = dedupe(result.data);
            if (seen.has(key)) {
              errors.push({ row: i + 2, message: "Duplicate guest" });
              return;
            }
            seen.add(key);
            valid.push(result.data);
          });
          if (errors.length) return ok({ imported: 0, errors }, 422);
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
          await audit("guests.imported", e.ownerId, e.id);
          return ok({ imported: valid.length, errors: [] });
        }
        if (method === "GET") return ok(e.invitations);
        if (method === "POST" || method === "PATCH") {
          const g = guestSchema.parse(await json(req));
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
          await audit("guest.saved", e.ownerId, e.id);
          return ok(inv, method === "POST" ? 201 : 200);
        }
        if (method === "DELETE") {
          const target = e.invitations.find((i) => i.id === p[3]);
          if (!target) fail(404, "Guest not found");
          await db.invitation.delete({ where: { id: target!.id } });
          await audit("guest.deleted", e.ownerId, e.id);
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
          await audit("invitation.public_rotated", e.ownerId, e.id);
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
      if (p[2] === "sessions" && method === "POST") {
        const v = z
          .object({
            title: z.string().min(2).max(100),
            startsAt: z.iso.datetime(),
          })
          .parse(await json(req));
        return ok(
          await db.eventSession.create({ data: { ...v, eventId: e.id } }),
          201,
        );
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
          await audit("catering.saved", e.ownerId, e.id);
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
