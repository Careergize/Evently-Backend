import path from "node:path";
import { fileURLToPath } from "node:url";
const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
export default {
  turbopack: { root: projectRoot },
  serverExternalPackages: ["@prisma/client", "bcryptjs", "nodemailer"],
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "private, no-store" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
    ];
  },
};
