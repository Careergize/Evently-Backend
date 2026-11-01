import { db } from "../src/lib/db";
// No event, guest, invitation or RSVP records are removed by maintenance.
async function main() {
  const now = new Date();
  try {
    const counts = await db.$transaction(async (tx) => ({
      sessions: (
        await tx.session.deleteMany({ where: { expiresAt: { lt: now } } })
      ).count,
      passwordResets: (
        await tx.passwordResetToken.deleteMany({
          where: { expiresAt: { lt: now } },
        })
      ).count,
      rateLimits: (
        await tx.rateLimit.deleteMany({ where: { expiresAt: { lt: now } } })
      ).count,
      unusedCollaborationInvites: (
        await tx.collaborator.deleteMany({
          where: { expiresAt: { lt: now }, acceptedAt: null },
        })
      ).count,
    }));
    console.info(
      JSON.stringify({
        action: "maintenance.expired_credentials",
        at: now.toISOString(),
        counts,
      }),
    );
  } finally {
    await db.$disconnect();
  }
}
main().catch(() => {
  console.error("Expired credential maintenance failed");
  process.exitCode = 1;
});
