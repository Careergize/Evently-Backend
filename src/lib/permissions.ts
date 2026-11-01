export type AccessRole = "OWNER" | "MANAGER" | "VIEWER" | "PARTNER";
export function canPerform(role: AccessRole, method: string, resource: string) {
  if (role === "OWNER") return true;
  if (role === "PARTNER") return false; // Partner summary has a separate, explicitly projected API.
  if (
    resource === "collaborators" ||
    (resource === "event" && method === "DELETE")
  )
    return false;
  if (role === "MANAGER") return true;
  return (
    method === "GET" &&
    ["event", "analytics", "catering", "forecasts"].includes(resource)
  );
}
