import { parse } from "csv-parse/sync";
import { guestSchema, dedupe } from "./domain";
export const importFields = [
  "name",
  "email",
  "phone",
  "household",
  "invitedSize",
  "category",
  "members",
] as const;
export function previewImport(
  csv: string,
  existing: any[],
  mapping: Record<string, string> = {},
) {
  const rows: string[][] = parse(csv, {
    skip_empty_lines: true,
    relax_column_count: true,
    bom: true,
    trim: true,
  });
  const headers = rows.shift() || [];
  if (new Set(headers).size !== headers.length)
    throw Error("Duplicate CSV headers");
  if (rows.length > 1000) throw Error("Maximum 1,000 rows per import");
  const seen = new Set(
    existing.map((i) =>
      dedupe({
        ...i,
        household:
          typeof i.household === "string" ? i.household : i.household?.name,
      }),
    ),
  );
  const households = new Map<string, string>();
  for (const i of existing)
    if (i.household?.name)
      households.set(i.household.name.trim().toLowerCase(), i.household.name);
  const results = rows.map((values, index) => {
    if (values.length !== headers.length)
      return {
        row: index + 2,
        error: "Column count does not match CSV headers",
        data: null,
      };
    const raw: Record<string, any> = {};
    for (const field of importFields) {
      const position = headers.indexOf(mapping[field] || field);
      if (position >= 0) raw[field] = values[position];
    }
    if (raw.members !== undefined)
      raw.members = raw.members
        .split(";")
        .map((v: string) => v.trim())
        .filter(Boolean);
    if (!raw.category) raw.category = "Other";
    const parsed = guestSchema.safeParse(raw);
    if (!parsed.success)
      return {
        row: index + 2,
        error: parsed.error.issues
          .map((v) => `${v.path.join(".")}: ${v.message}`)
          .join("; "),
        data: null,
      };
    const g = parsed.data;
    if (g.members.length > g.invitedSize)
      return {
        row: index + 2,
        error: "Member names exceed invited size",
        data: null,
      };
    if (g.household) {
      const key = g.household.toLowerCase();
      g.household = households.get(key) || g.household;
      households.set(key, g.household);
    }
    const key = dedupe(g);
    if (seen.has(key))
      return { row: index + 2, error: "Duplicate guest", data: null };
    seen.add(key);
    return { row: index + 2, error: null, data: g };
  });
  return {
    headers,
    rows: results,
    valid: results.filter((r) => r.data).length,
    errors: results
      .filter((r) => r.error)
      .map((r) => ({ row: r.row, message: r.error })),
  };
}
