-- Additive only: existing invitations remain eligible for all functions.
ALTER TABLE "Event" ADD COLUMN "font" TEXT NOT NULL DEFAULT 'serif', ADD COLUMN "rsvpLabel" TEXT NOT NULL DEFAULT 'Send my RSVP';
ALTER TABLE "Invitation" ADD COLUMN "members" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[], ADD COLUMN "category" TEXT NOT NULL DEFAULT 'Other', ADD COLUMN "invitedSessionIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "EventSession" ADD COLUMN "venue" TEXT NOT NULL DEFAULT '', ADD COLUMN "mapsUrl" TEXT NOT NULL DEFAULT '', ADD COLUMN "rsvpEnabled" BOOLEAN NOT NULL DEFAULT true, ADD COLUMN "deadline" TIMESTAMP(3), ADD COLUMN "mealsEnabled" BOOLEAN NOT NULL DEFAULT true;
