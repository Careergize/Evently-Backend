import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { randomBytes } from "node:crypto";
const db = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL, max: 5 }),
});
async function main() {
  if (process.env.NODE_ENV === "production")
    throw Error("Demo seed is disabled in production");
  const password = process.env.DEMO_PASSWORD;
  if (!password || password.length < 12)
    throw Error("Set DEMO_PASSWORD with at least 12 characters");
  const user = await db.user.upsert({
    where: { email: "demo@evently.local" },
    update: {},
    create: {
      name: "Ananya Sharma · Demo",
      email: "demo@evently.local",
      passwordHash: await hash(password, 12),
    },
  });
  if (await db.event.count({ where: { ownerId: user.id } })) return;
  const event = await db.event.create({
    data: {
      ownerId: user.id,
      title: "Ananya & Aarav",
      host: "The Sharma & Mehta families",
      type: "Wedding",
      startsAt: new Date("2027-02-14T12:30:00Z"),
      venue: "The Leela Palace",
      address: "Bengaluru, Karnataka",
      status: "PUBLISHED",
      publicToken: randomBytes(32).toString("hex"),
      message:
        "With full hearts, we invite you to share in our beautiful beginning.",
      settings: { create: {} },
      sessions: {
        create: {
          title: "Wedding dinner",
          startsAt: new Date("2027-02-14T14:00:00Z"),
        },
      },
    },
  });
  for (let i = 0; i < 12; i++)
    await db.invitation.create({
      data: {
        eventId: event.id,
        name: [
          "Priya Kapoor",
          "Rahul Verma",
          "The Iyer Family",
          "Neha Patel",
          "Vikram Singh",
          "The Rao Family",
          "Meera Shah",
          "Arjun Nair",
          "Kavya Reddy",
          "Rohan Joshi",
          "The Das Family",
          "Ishita Gupta",
        ][i],
        token: randomBytes(32).toString("hex"),
        invitedSize: (i % 3) + 1,
        dedupeKey: `demo-${i}`,
        sentAt: new Date(),
        ...(i < 8
          ? {
              rsvp: {
                create: {
                  status: i < 5 ? "YES" : i < 7 ? "MAYBE" : "NO",
                  partySize: i === 7 ? 0 : (i % 3) + 1,
                  meal: i % 2 ? "Vegetarian" : "Non-vegetarian",
                },
              },
            }
          : {}),
      },
    });
  console.info("Demo account created: demo@evently.local");
}
main().finally(() => db.$disconnect());
