import { z } from "zod";
export function validCoverImage(value: string) {
  if (!value) return true;
  const match =
    /^data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(value);
  if (!match) return false;
  const bytes = Buffer.from(match[2], "base64");
  if (bytes.length > 500000) return false;
  if (match[1] === "png")
    return bytes
      .subarray(0, 8)
      .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  if (match[1] === "jpeg")
    return bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
  return (
    bytes.toString("ascii", 0, 4) === "RIFF" &&
    bytes.toString("ascii", 8, 12) === "WEBP"
  );
}
export const guestSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.union([z.email(), z.literal("")]).optional(),
  phone: z.string().max(30).optional(),
  household: z.string().trim().max(120).optional(),
  members: z.array(z.string().trim().min(1).max(120)).max(100).default([]),
  category: z.string().trim().min(1).max(60).default("Other"),
  invitedSessionIds: z.array(z.string().min(1)).max(30).default([]),
  invitedSize: z.coerce.number().int().min(1).max(100),
});
export const eventSchema = z.object({
  title: z.string().trim().min(3).max(150),
  type: z.string().max(50),
  host: z.string().trim().min(2).max(150),
  description: z.string().max(3000).default(""),
  startsAt: z.iso.datetime(),
  endsAt: z.iso.datetime().nullable().optional(),
  timezone: z.string().refine((v) => {
    try {
      new Intl.DateTimeFormat("en", { timeZone: v });
      return true;
    } catch {
      return false;
    }
  }),
  venue: z.string().max(200).default(""),
  address: z.string().max(500).default(""),
  mapsUrl: z
    .union([z.url().refine((v) => v.startsWith("https://")), z.literal("")])
    .default(""),
  coverImage: z
    .string()
    .max(750000)
    .refine(validCoverImage, "Use a PNG, JPEG or WebP under 500 KB")
    .default(""),
  font: z.enum(["serif", "sans", "classic"]).default("serif"),
  rsvpLabel: z.string().trim().min(1).max(60).default("Send my RSVP"),
  template: z
    .enum([
      "Botanical",
      "Royal",
      "Minimal",
      "Kerala",
      "Modern",
      "Floral",
      "Birthday",
      "Family",
    ])
    .default("Botanical"),
  theme: z.enum(["emerald", "gold", "rose"]).default("emerald"),
  message: z.string().max(3000).default(""),
  status: z.enum(["DRAFT", "PUBLISHED"]).default("DRAFT"),
  settings: z.object({
    publicLinksEnabled: z.boolean().default(true),
    rsvpEnabled: z.boolean(),
    deadline: z.iso.datetime().nullable(),
    allowMaybe: z.boolean(),
    allowPartySize: z.boolean(),
    maxPartySize: z.coerce.number().int().min(1).max(100),
    mealsEnabled: z.boolean(),
    messagesEnabled: z.boolean(),
    confirmedProbability: z.number().min(0).max(1).default(1),
    maybeProbability: z.number().min(0).max(1).default(0.5),
    pendingProbability: z.number().min(0).max(1).default(0.3),
    adjustment: z.number().int().min(-10000).max(10000).default(0),
    contingency: z.number().min(0).max(100).default(10),
  }),
});
export const responseSchema = z.object({
  name: z.string().trim().min(1).max(120).optional(),
  status: z.enum(["YES", "MAYBE", "NO"]),
  partySize: z.coerce.number().int().min(0).max(100),
  meal: z
    .enum(["Vegetarian", "Non-vegetarian", "No preference"])
    .default("Vegetarian"),
  message: z.string().max(1000).default(""),
  responseToken: z
    .string()
    .regex(/^[a-f0-9]{64}$/)
    .optional(),
  selections: z
    .array(
      z.object({
        sessionId: z.string(),
        attendees: z.number().int().min(0).max(100),
        meal: z.enum(["Vegetarian", "Non-vegetarian", "No preference"]),
      }),
    )
    .max(30)
    .optional(),
});
export function validateResponse(
  input: any,
  event: any,
  invitation: any,
  now = new Date(),
) {
  const s = event.settings;
  if (
    input.status !== "NO" &&
    input.selections?.some((v: any) => {
      const session = event.sessions.find((x: any) => x.id === v.sessionId);
      const allowed =
        !invitation?.invitedSessionIds?.length ||
        invitation.invitedSessionIds.includes(v.sessionId);
      return (
        v.attendees > 0 &&
        (!allowed ||
          session?.rsvpEnabled === false ||
          (session?.deadline && new Date(session.deadline) < now))
      );
    })
  )
    throw Error("Invalid session attendance: function unavailable or closed");
  if (event.status !== "PUBLISHED" || invitation?.revoked)
    throw Error("Invitation unavailable");
  if (!s.rsvpEnabled || (s.deadline && new Date(s.deadline) < now))
    throw Error("Responses are closed");
  if (input.status === "MAYBE" && !s.allowMaybe)
    throw Error("Maybe responses are disabled");
  const max =
    invitation && invitation.source !== "OPEN"
      ? Math.min(invitation.invitedSize, s.maxPartySize)
      : s.maxPartySize;
  if (
    input.status !== "NO" &&
    (input.partySize < 1 ||
      input.partySize > max ||
      (!s.allowPartySize && input.partySize !== 1))
  )
    throw Error(`Party size must be between 1 and ${max}`);
  if (
    input.selections &&
    new Set(input.selections.map((v: any) => v.sessionId)).size !==
      input.selections.length
  )
    throw Error("Invalid session attendance");
  if (
    input.selections?.some(
      (v: any) =>
        v.attendees > input.partySize ||
        !event.sessions.some((s: any) => s.id === v.sessionId),
    )
  )
    throw Error("Invalid session attendance");
}
export function aggregate(event: any) {
  let invited = 0,
    confirmed = 0,
    maybe = 0,
    declined = 0,
    pending = 0,
    responded = 0,
    sent = 0;
  const meals: Record<string, number> = {};
  const trend: Record<string, number> = {};
  for (const i of event.invitations.filter((i: any) => !i.revoked)) {
    const r = i.rsvp;
    if (i.source === "TRACKED") {
      invited += i.invitedSize;
      if (!r) pending += i.invitedSize;
    }
    if (i.sentAt) sent++;
    if (!r) continue;
    responded++;
    if (r.status === "YES") confirmed += r.partySize;
    if (r.status === "MAYBE") maybe += r.partySize;
    if (r.status === "NO") declined += i.invitedSize;
    if (r.status === "YES") meals[r.meal] = (meals[r.meal] || 0) + r.partySize;
    const day = new Date(r.createdAt).toISOString().slice(0, 10);
    trend[day] = (trend[day] || 0) + 1;
  }
  const s = event.settings;
  const expected = Math.max(
    0,
    Math.round(
      confirmed * s.confirmedProbability +
        maybe * s.maybeProbability +
        pending * s.pendingProbability +
        s.adjustment,
    ),
  );
  const invitations = event.invitations.filter((i: any) => !i.revoked).length;
  return {
    invited,
    confirmed,
    maybe,
    declined,
    pending,
    responded,
    sent,
    invitations,
    completion: invitations ? Math.round((responded / invitations) * 100) : 0,
    expected,
    recommended: Math.ceil(expected * (1 + s.contingency / 100)),
    meals,
    trend: Object.entries(trend)
      .sort()
      .map(([date, responses]) => ({ date, responses })),
    functions: (event.sessions || []).map((session: any) => {
      let invited = 0,
        confirmed = 0,
        maybe = 0,
        pending = 0;
      const meals: Record<string, number> = {};
      for (const i of event.invitations.filter((i: any) => !i.revoked)) {
        if (
          i.invitedSessionIds?.length &&
          !i.invitedSessionIds.includes(session.id)
        )
          continue;
        if (i.source === "TRACKED") invited += i.invitedSize;
        if (!i.rsvp && i.source === "TRACKED") pending += i.invitedSize;
        const selection = i.rsvp?.selections?.find(
          (v: any) => v.sessionId === session.id,
        );
        if (!selection) continue;
        if (i.rsvp.status === "YES") {
          confirmed += selection.attendees;
          meals[selection.meal] =
            (meals[selection.meal] || 0) + selection.attendees;
        }
        if (i.rsvp.status === "MAYBE") maybe += selection.attendees;
      }
      const expected = Math.max(
        0,
        Math.round(
          confirmed * s.confirmedProbability +
            maybe * s.maybeProbability +
            pending * s.pendingProbability,
        ),
      );
      return {
        id: session.id,
        title: session.title,
        actual: (session.checkIns || []).reduce(
          (n: number, row: any) => n + row.count,
          0,
        ),
        invited,
        confirmed,
        maybe,
        pending,
        expected,
        meals,
        recommended: Math.ceil(expected * (1 + s.contingency / 100)),
      };
    }),
    categories: Object.entries(
      event.invitations
        .filter((i: any) => !i.revoked)
        .reduce((acc: Record<string, any>, i: any) => {
          const key = i.category || "Other";
          acc[key] ||= { invited: 0, confirmed: 0, maybe: 0 };
          if (i.source === "TRACKED") acc[key].invited += i.invitedSize;
          if (i.rsvp?.status === "YES") acc[key].confirmed += i.rsvp.partySize;
          if (i.rsvp?.status === "MAYBE") acc[key].maybe += i.rsvp.partySize;
          return acc;
        }, {}),
    ).map(([name, counts]: any) => ({ name, ...counts })),
    represented: confirmed + maybe + declined,
    openPopulationUnknown: true,
  };
}
export function catering(p: any) {
  const count =
    p.overrideCount ?? Math.ceil(p.expected * (1 + p.contingency / 100));
  return {
    count,
    cost: Math.round(count * p.pricePerPlate),
    originalCost: Math.round(p.originalCount * p.pricePerPlate),
    difference: Math.round((p.originalCount - count) * p.pricePerPlate),
  };
}
export const dedupe = (g: any) =>
  g.email?.trim().toLowerCase() ||
  g.phone?.replace(/\D/g, "") ||
  `${g.name.trim().toLowerCase()}|${g.household?.trim().toLowerCase() || ""}`;
