ALTER TABLE "User" ADD CONSTRAINT "User_role_check" CHECK ("role" IN ('ORGANISER','ADMIN','PLANNER','CATERER'));
ALTER TABLE "Event" ADD CONSTRAINT "Event_status_check" CHECK ("status" IN ('DRAFT','PUBLISHED'));
ALTER TABLE "Event" ADD CONSTRAINT "Event_schedule_check" CHECK ("endsAt" IS NULL OR "endsAt" >= "startsAt");
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_party_check" CHECK ("invitedSize" BETWEEN 1 AND 100);
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_source_check" CHECK ("source" IN ('TRACKED','OPEN'));
ALTER TABLE "RSVP" ADD CONSTRAINT "RSVP_status_party_check" CHECK (("status" IN ('YES','MAYBE') AND "partySize" BETWEEN 1 AND 100) OR ("status"='NO' AND "partySize"=0));
ALTER TABLE "EventSettings" ADD CONSTRAINT "EventSettings_probability_check" CHECK ("confirmedProbability" BETWEEN 0 AND 1 AND "maybeProbability" BETWEEN 0 AND 1 AND "pendingProbability" BETWEEN 0 AND 1 AND "contingency" BETWEEN 0 AND 100 AND "maxPartySize" BETWEEN 1 AND 100);
ALTER TABLE "RSVPMealSelection" ADD CONSTRAINT "RSVPMealSelection_attendees_check" CHECK ("attendees" BETWEEN 0 AND 100);
ALTER TABLE "CateringPlan" ADD CONSTRAINT "CateringPlan_quantities_check" CHECK ("expected">=0 AND "pricePerPlate">=0 AND "contingency" BETWEEN 0 AND 100 AND ("overrideCount" IS NULL OR "overrideCount">=0) AND "vegetarian">=0 AND "nonVegetarian">=0 AND "vegetarian"+"nonVegetarian"<="expected" AND "originalCount">=0);
