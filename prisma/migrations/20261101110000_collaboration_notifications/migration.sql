CREATE TABLE "Collaborator" ("id" TEXT PRIMARY KEY, "eventId" TEXT NOT NULL REFERENCES "Event"("id") ON DELETE CASCADE, "email" TEXT NOT NULL, "role" TEXT NOT NULL CHECK ("role" IN ('MANAGER','VIEWER','PARTNER')), "userId" TEXT REFERENCES "User"("id") ON DELETE CASCADE, "tokenHash" TEXT NOT NULL UNIQUE, "expiresAt" TIMESTAMP(3) NOT NULL, "acceptedAt" TIMESTAMP(3), "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP);
CREATE UNIQUE INDEX "Collaborator_eventId_email_key" ON "Collaborator"("eventId", "email");
CREATE INDEX "Collaborator_userId_idx" ON "Collaborator"("userId");
CREATE TABLE "Notification" ("id" TEXT PRIMARY KEY, "userId" TEXT NOT NULL REFERENCES "User"("id") ON DELETE CASCADE, "eventId" TEXT, "kind" TEXT NOT NULL, "message" TEXT NOT NULL, "dedupeKey" TEXT NOT NULL UNIQUE, "readAt" TIMESTAMP(3), "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP);
CREATE INDEX "Notification_userId_createdAt_idx" ON "Notification"("userId", "createdAt");

ALTER TABLE "EventSettings" ADD COLUMN "publicLinksEnabled" BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE "PartnerLead" ADD COLUMN "services" TEXT NOT NULL DEFAULT '';
