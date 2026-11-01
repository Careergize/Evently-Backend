export const reminderKinds = [
  "INITIAL",
  "RSVP_REMINDER",
  "FINAL_CONFIRMATION",
  "EVENT_DETAILS",
] as const;
export function reminderMessage(
  kind: (typeof reminderKinds)[number],
  event: { title: string; venue: string; startsAt: Date; timezone: string },
  name: string,
  url: string,
) {
  const date = event.startsAt.toLocaleString("en-IN", {
    timeZone: event.timezone,
    dateStyle: "medium",
    timeStyle: "short",
  });
  const content = {
    INITIAL: `You're invited to ${event.title}!`,
    RSVP_REMINDER: `Please let us know your plans for ${event.title}.`,
    FINAL_CONFIRMATION: `Please review your final attendance for ${event.title}.`,
    EVENT_DETAILS: `${event.title} is on ${date} at ${event.venue || "the venue on your invitation"}.`,
  };
  return `${name}, ${content[kind]} ${url}`;
}
// Provider integrations must supply a receipt from an approved, consent-aware sender.
// Opening a share URL is never a delivery event. No provider is enabled by default.
export interface MessagingProvider {
  send(input: {
    recipient: string;
    message: string;
    consentReference: string;
  }): Promise<{ receipt: string; deliveredAt?: Date }>;
}
