module.exports = [
(()=>{"use strict";return[
"[project]/backend/src/app/api/[...path]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "DELETE",
    ()=>handle,
    "GET",
    ()=>handle,
    "PATCH",
    ()=>handle,
    "POST",
    ()=>handle,
    "PUT",
    ()=>handle,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__ = __turbopack_context__.i("[externals]/bcryptjs [external] (bcryptjs, esm_import, [project]/node_modules/bcryptjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .email>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .coerce>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .iso>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .boolean>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$ZodError$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .ZodError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$sync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/sync.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__ = __turbopack_context__.i("[externals]/nodemailer [external] (nodemailer, esm_import, [project]/node_modules/nodemailer)");
var __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/backend/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/backend/src/lib/domain.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const runtime = "nodejs";
const token = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(32).toString("hex");
const digest = (v)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(v).digest("hex");
const ok = (data, status = 200)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        data
    }, {
        status
    });
class HttpError extends Error {
    status;
    constructor(status, message){
        super(message), this.status = status;
    }
}
const fail = (status, message)=>{
    throw new HttpError(status, message);
};
const include = {
    settings: true,
    invitations: {
        include: {
            rsvp: true,
            household: true
        }
    },
    sessions: {
        include: {
            plans: true
        }
    }
};
async function limit(req, scope, max = 30) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    const key = digest(`${scope}:${ip}`);
    const now = new Date();
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].rateLimit.upsert({
        where: {
            key
        },
        create: {
            key,
            count: 1,
            expiresAt: new Date(Date.now() + 900000)
        },
        update: {
            count: {
                increment: 1
            }
        }
    });
    if (row.expiresAt < now) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].rateLimit.update({
            where: {
                key
            },
            data: {
                count: 1,
                expiresAt: new Date(Date.now() + 900000)
            }
        });
    } else if (row.count > max) fail(429, "Too many requests. Try again in 15 minutes.");
}
async function user(req) {
    const raw = req.cookies.get("evently_session")?.value;
    if (!raw) return fail(401, "Please sign in");
    const s = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].session.findUnique({
        where: {
            tokenHash: digest(raw)
        },
        include: {
            user: true
        }
    });
    if (!s || s.expiresAt < new Date()) return fail(401, "Please sign in");
    return s.user;
}
async function owned(req, id) {
    const u = await user(req);
    const e = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].event.findFirst({
        where: {
            id,
            ownerId: u.id
        },
        include
    });
    if (!e) return fail(404, "Event not found");
    return e;
}
async function audit(action, actorId, entityId) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].auditLog.create({
        data: {
            action,
            actorId,
            entityId
        }
    });
    console.info(JSON.stringify({
        level: "info",
        action,
        entityId,
        at: new Date().toISOString()
    }));
}
function sessionCookie(res, value, maxAge = 2592000) {
    res.cookies.set("evently_session", value, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        path: "/",
        maxAge
    });
    return res;
}
async function json(req) {
    const body = await req.text();
    if (Buffer.byteLength(body) > 1000000) fail(413, "Request too large");
    try {
        return JSON.parse(body);
    } catch  {
        return fail(400, "Invalid JSON");
    }
}
async function invitation(t) {
    if (!/^[a-f0-9]{64}$/.test(t)) return fail(404, "Invitation unavailable");
    const tracked = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].invitation.findUnique({
        where: {
            token: t
        },
        include: {
            event: {
                include: {
                    settings: true,
                    sessions: true
                }
            },
            rsvp: {
                include: {
                    selections: true
                }
            }
        }
    });
    if (tracked) {
        if (tracked.revoked || tracked.event.status !== "PUBLISHED") return fail(404, "Invitation unavailable");
        return {
            event: tracked.event,
            guest: tracked
        };
    }
    const event = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].event.findUnique({
        where: {
            publicToken: t
        },
        include: {
            settings: true,
            sessions: true
        }
    });
    if (!event || event.status !== "PUBLISHED") return fail(404, "Invitation unavailable");
    return {
        event,
        guest: null
    };
}
async function handle(req, ctx) {
    const { path: p } = await ctx.params;
    const method = req.method;
    try {
        if (![
            "GET",
            "HEAD"
        ].includes(method)) {
            const origin = req.headers.get("origin");
            if (origin && origin !== new URL(process.env.APP_URL || "http://localhost:3000").origin) fail(403, "Request origin rejected");
        }
        if (p[0] === "health") return ok({
            status: "ok"
        });
        if (p[0] === "auth") {
            if (p[1] === "me" && method === "GET") {
                const u = await user(req);
                return ok({
                    id: u.id,
                    name: u.name,
                    email: u.email
                });
            }
            if (p[1] === "logout" && method === "POST") {
                const raw = req.cookies.get("evently_session")?.value;
                if (raw) await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].session.deleteMany({
                    where: {
                        tokenHash: digest(raw)
                    }
                });
                return sessionCookie(ok({
                    signedOut: true
                }), "", 0);
            }
            if (p[1] === "account" && method === "DELETE") {
                const u = await user(req);
                const b = await json(req);
                if (!await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__["compare"])(String(b.password), u.passwordHash)) fail(403, "Password is incorrect");
                await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].user.delete({
                    where: {
                        id: u.id
                    }
                });
                await audit("account.deleted", u.id);
                return sessionCookie(ok({
                    deleted: true
                }), "", 0);
            }
            await limit(req, "auth", 20);
            const b = await json(req);
            if (p[1] === "register" || p[1] === "login") {
                const v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(2).max(100).optional(),
                    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__["z"].email().transform((v)=>v.toLowerCase()),
                    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(12).max(72).refine((v)=>Buffer.byteLength(v, "utf8") <= 72, "Password must be at most 72 UTF-8 bytes")
                }).parse(b);
                let u = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].user.findUnique({
                    where: {
                        email: v.email
                    }
                });
                if (p[1] === "register") {
                    if (!v.name) fail(400, "Name is required");
                    if (u) fail(400, "Unable to register with those details");
                    u = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].user.create({
                        data: {
                            name: v.name,
                            email: v.email,
                            passwordHash: await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__["hash"])(v.password, 12)
                        }
                    });
                    await audit("account.created", u.id);
                } else {
                    const valid = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__["compare"])(v.password, u?.passwordHash || "$2b$12$JZYF3dF1p6X9gO8mQQ.K7OoqB.OLVAGbN4IBBxIOyKPRY2Rslz6vO");
                    if (!u || !valid) fail(401, "Invalid email or password");
                }
                const raw = token();
                await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].session.create({
                    data: {
                        tokenHash: digest(raw),
                        userId: u.id,
                        expiresAt: new Date(Date.now() + 2592000000)
                    }
                });
                return sessionCookie(ok({
                    name: u.name
                }), raw);
            }
            if (p[1] === "forgot-password") {
                const { email } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__["z"].email()
                }).parse(b);
                const u = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].user.findUnique({
                    where: {
                        email: email.toLowerCase()
                    }
                });
                if (u) {
                    const raw = token();
                    await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].passwordResetToken.create({
                        data: {
                            userId: u.id,
                            tokenHash: digest(raw),
                            expiresAt: new Date(Date.now() + 3600000)
                        }
                    });
                    const link = `${process.env.APP_URL}/reset-password?token=${raw}`;
                    if (process.env.SMTP_HOST) {
                        await __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__["default"].createTransport({
                            host: process.env.SMTP_HOST,
                            port: Number(process.env.SMTP_PORT || 587),
                            secure: process.env.SMTP_PORT === "465",
                            auth: {
                                user: process.env.SMTP_USER,
                                pass: process.env.SMTP_PASSWORD
                            }
                        }).sendMail({
                            from: process.env.MAIL_FROM,
                            to: u.email,
                            subject: "Reset your Evently password",
                            text: `Reset your password within one hour: ${link}`
                        });
                    } else if ("TURBOPACK compile-time truthy", 1) {
                        console.info(JSON.stringify({
                            level: "debug",
                            message: "Development password reset link",
                            link
                        }));
                    } else //TURBOPACK unreachable
                    ;
                }
                return ok({
                    message: "If an account exists, a reset link has been sent."
                });
            }
            if (p[1] === "reset-password") {
                const v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().length(64),
                    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(12).max(72).refine((v)=>Buffer.byteLength(v, "utf8") <= 72, "Password must be at most 72 UTF-8 bytes")
                }).parse(b);
                await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].$transaction(async (tx)=>{
                    const reset = await tx.passwordResetToken.findUnique({
                        where: {
                            tokenHash: digest(v.token)
                        }
                    });
                    if (!reset || reset.expiresAt < new Date()) return fail(400, "Reset link is invalid or expired");
                    const removed = await tx.passwordResetToken.deleteMany({
                        where: {
                            id: reset.id
                        }
                    });
                    if (!removed.count) fail(400, "Reset link already used");
                    await tx.user.update({
                        where: {
                            id: reset.userId
                        },
                        data: {
                            passwordHash: await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__["hash"])(v.password, 12)
                        }
                    });
                    await tx.session.deleteMany({
                        where: {
                            userId: reset.userId
                        }
                    });
                    await tx.passwordResetToken.deleteMany({
                        where: {
                            userId: reset.userId
                        }
                    });
                });
                return ok({
                    message: "Password updated. Please sign in."
                });
            }
        }
        if (p[0] === "partners" && p[1] === "interest" && method === "POST") {
            await limit(req, "partners", 5);
            const v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                businessName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(2).max(150),
                contactName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(2).max(100),
                category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
                    "Caterer",
                    "Event planner",
                    "Other"
                ]),
                email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__["z"].email(),
                phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(7).max(30),
                city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(2).max(100),
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(2000)
            }).parse(await json(req));
            await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].partnerLead.create({
                data: v
            });
            return ok({
                message: "Thank you. Your interest has been recorded."
            }, 201);
        }
        if (p[0] === "invitations") {
            await limit(req, method === "GET" ? "invite-read" : "rsvp", method === "GET" ? 150 : 40);
            const { event, guest } = await invitation(p[1]);
            if (method === "GET") {
                let response = guest?.rsvp;
                const rt = req.nextUrl.searchParams.get("responseToken");
                if (!guest && rt && /^[a-f0-9]{64}$/.test(rt)) {
                    const own = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].invitation.findFirst({
                        where: {
                            eventId: event.id,
                            token: rt,
                            source: "OPEN"
                        },
                        include: {
                            rsvp: {
                                include: {
                                    selections: true
                                }
                            }
                        }
                    });
                    response = own?.rsvp || null;
                }
                const { id, publicToken, ownerId, ...publicEvent } = event;
                void id;
                void publicToken;
                void ownerId;
                return ok({
                    event: publicEvent,
                    guest: guest ? {
                        name: guest.name,
                        invitedSize: guest.invitedSize
                    } : null,
                    response: response ? {
                        status: response.status,
                        partySize: response.partySize,
                        meal: response.meal,
                        message: response.message,
                        updatedAt: response.updatedAt,
                        selections: response.selections.map((v)=>({
                                sessionId: v.sessionId,
                                attendees: v.attendees,
                                meal: v.meal
                            }))
                    } : null
                });
            }
            if ([
                "POST",
                "PATCH"
            ].includes(method) && p[2] === "rsvp") {
                const v = __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["responseSchema"].parse(await json(req));
                if (!guest && !v.name) fail(400, "Your name is required");
                const responseToken = guest?.token || v.responseToken || token();
                await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].$transaction(async (tx)=>{
                    await tx.$queryRaw`SELECT id FROM "Event" WHERE id = ${event.id} FOR UPDATE`;
                    const fresh = await tx.event.findUniqueOrThrow({
                        where: {
                            id: event.id
                        },
                        include: {
                            settings: true,
                            sessions: true
                        }
                    });
                    const existing = guest ? await tx.invitation.findUnique({
                        where: {
                            id: guest.id
                        }
                    }) : await tx.invitation.findFirst({
                        where: {
                            token: responseToken,
                            eventId: event.id,
                            source: "OPEN"
                        }
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateResponse"])(v, fresh, existing);
                    let inv = existing;
                    if (!inv) inv = await tx.invitation.create({
                        data: {
                            eventId: event.id,
                            token: responseToken,
                            name: v.name,
                            source: "OPEN",
                            invitedSize: v.status === "NO" ? 1 : v.partySize,
                            dedupeKey: `open:${responseToken}`
                        }
                    });
                    const data = {
                        status: v.status,
                        partySize: v.status === "NO" ? 0 : v.partySize,
                        meal: fresh.settings.mealsEnabled ? v.meal : "No preference",
                        message: fresh.settings.messagesEnabled ? v.message : ""
                    };
                    const r = await tx.rSVP.upsert({
                        where: {
                            invitationId: inv.id
                        },
                        create: {
                            ...data,
                            invitationId: inv.id
                        },
                        update: data
                    });
                    await tx.rSVPMealSelection.deleteMany({
                        where: {
                            rsvpId: r.id
                        }
                    });
                    if (v.selections?.length) await tx.rSVPMealSelection.createMany({
                        data: v.selections.map((s)=>({
                                ...s,
                                rsvpId: r.id,
                                attendees: v.status === "NO" ? 0 : s.attendees
                            }))
                    });
                    await tx.auditLog.create({
                        data: {
                            action: "rsvp.updated",
                            entityId: event.id
                        }
                    });
                });
                return ok({
                    message: "Your response has been saved",
                    responseToken
                });
            }
        }
        if (p[0] === "events") {
            if (p.length === 1) {
                const u = await user(req);
                if (method === "GET") {
                    const events = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].event.findMany({
                        where: {
                            ownerId: u.id
                        },
                        include,
                        orderBy: {
                            startsAt: "asc"
                        }
                    });
                    return ok(events.map((e)=>({
                            ...e,
                            analytics: (0, __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aggregate"])(e)
                        })));
                }
                if (method === "POST") {
                    const v = __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eventSchema"].parse(await json(req));
                    const { settings, ...data } = v;
                    const e = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].event.create({
                        data: {
                            ...data,
                            ownerId: u.id,
                            publicToken: token(),
                            settings: {
                                create: settings
                            },
                            sessions: {
                                create: {
                                    title: "Main celebration",
                                    startsAt: data.startsAt
                                }
                            }
                        }
                    });
                    await audit("event.created", u.id, e.id);
                    return ok(e, 201);
                }
            }
            const e = await owned(req, p[1]);
            if (p.length === 2) {
                if (method === "GET") return ok({
                    ...e,
                    analytics: (0, __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aggregate"])(e)
                });
                if (method === "PATCH") {
                    const v = __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eventSchema"].parse(await json(req));
                    const { settings, ...data } = v;
                    await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].event.update({
                        where: {
                            id: e.id
                        },
                        data: {
                            ...data,
                            settings: {
                                update: settings
                            }
                        }
                    });
                    await audit("event.updated", e.ownerId, e.id);
                    return ok({
                        id: e.id
                    });
                }
                if (method === "DELETE") {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].event.delete({
                        where: {
                            id: e.id
                        }
                    });
                    await audit("event.deleted", e.ownerId, e.id);
                    return ok({
                        deleted: true
                    });
                }
            }
            if (p[2] === "analytics") return ok((0, __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aggregate"])(e));
            if (p[2] === "guests") {
                if (p[3] === "import" && method === "POST") {
                    const { csv } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                        csv: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(500000)
                    }).parse(await json(req));
                    let rows;
                    try {
                        rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$sync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(csv, {
                            columns: true,
                            skip_empty_lines: true,
                            bom: true,
                            trim: true
                        });
                    } catch  {
                        return fail(400, "Invalid CSV format");
                    }
                    if (rows.length > 1000) fail(400, "Maximum 1,000 rows per import");
                    const errors = [];
                    const seen = new Set(e.invitations.map((i)=>i.dedupeKey));
                    const valid = [];
                    rows.forEach((row, i)=>{
                        const result = __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["guestSchema"].safeParse(row);
                        if (!result.success) {
                            errors.push({
                                row: i + 2,
                                message: result.error.issues.map((x)=>`${x.path.join(".")}: ${x.message}`).join("; ")
                            });
                            return;
                        }
                        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dedupe"])(result.data);
                        if (seen.has(key)) {
                            errors.push({
                                row: i + 2,
                                message: "Duplicate guest"
                            });
                            return;
                        }
                        seen.add(key);
                        valid.push(result.data);
                    });
                    if (errors.length) return ok({
                        imported: 0,
                        errors
                    }, 422);
                    await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].$transaction(async (tx)=>{
                        for (const g of valid){
                            const h = g.household ? await tx.household.upsert({
                                where: {
                                    eventId_name: {
                                        eventId: e.id,
                                        name: g.household
                                    }
                                },
                                create: {
                                    eventId: e.id,
                                    name: g.household
                                },
                                update: {}
                            }) : null;
                            const { household, ...data } = g;
                            void household;
                            await tx.invitation.create({
                                data: {
                                    ...data,
                                    eventId: e.id,
                                    householdId: h?.id,
                                    token: token(),
                                    dedupeKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dedupe"])(g)
                                }
                            });
                        }
                    });
                    await audit("guests.imported", e.ownerId, e.id);
                    return ok({
                        imported: valid.length,
                        errors: []
                    });
                }
                if (method === "GET") return ok(e.invitations);
                if (method === "POST" || method === "PATCH") {
                    const g = __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["guestSchema"].parse(await json(req));
                    const target = p[3] ? e.invitations.find((i)=>i.id === p[3]) : null;
                    if (method === "PATCH" && !target) fail(404, "Guest not found");
                    if (target?.rsvp && target.rsvp.partySize > g.invitedSize) fail(400, "Invited size cannot be below the current RSVP");
                    const h = g.household ? await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].household.upsert({
                        where: {
                            eventId_name: {
                                eventId: e.id,
                                name: g.household
                            }
                        },
                        create: {
                            eventId: e.id,
                            name: g.household
                        },
                        update: {}
                    }) : null;
                    const { household, ...data } = g;
                    void household;
                    const data2 = {
                        ...data,
                        householdId: h?.id || null,
                        dedupeKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dedupe"])(g)
                    };
                    const inv = method === "POST" ? await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].invitation.create({
                        data: {
                            ...data2,
                            eventId: e.id,
                            token: token()
                        }
                    }) : await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].invitation.update({
                        where: {
                            id: target.id
                        },
                        data: data2
                    });
                    await audit("guest.saved", e.ownerId, e.id);
                    return ok(inv, method === "POST" ? 201 : 200);
                }
                if (method === "DELETE") {
                    const target = e.invitations.find((i)=>i.id === p[3]);
                    if (!target) fail(404, "Guest not found");
                    await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].invitation.delete({
                        where: {
                            id: target.id
                        }
                    });
                    await audit("guest.deleted", e.ownerId, e.id);
                    return ok({
                        deleted: true
                    });
                }
            }
            if (p[2] === "invitations" && method === "POST") {
                const b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                    guestId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
                    revoke: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().optional(),
                    rotatePublic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().optional()
                }).parse(await json(req));
                if (b.rotatePublic) {
                    const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].event.update({
                        where: {
                            id: e.id
                        },
                        data: {
                            publicToken: token()
                        }
                    });
                    await audit("invitation.public_rotated", e.ownerId, e.id);
                    return ok({
                        token: updated.publicToken
                    });
                }
                const i = e.invitations.find((i)=>i.id === b.guestId);
                if (!i) fail(404, "Guest not found");
                await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].invitation.update({
                    where: {
                        id: i.id
                    },
                    data: {
                        revoked: b.revoke ?? false,
                        sentAt: new Date()
                    }
                });
                await audit(b.revoke ? "invitation.revoked" : "invitation.shared", e.ownerId, e.id);
                return ok({
                    token: i.token
                });
            }
            if (p[2] === "sessions" && method === "POST") {
                const v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(2).max(100),
                    startsAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__["z"].iso.datetime()
                }).parse(await json(req));
                return ok(await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].eventSession.create({
                    data: {
                        ...v,
                        eventId: e.id
                    }
                }), 201);
            }
            if (p[2] === "catering") {
                if (method === "GET") return ok(e.sessions.map((s)=>({
                        ...s,
                        plan: s.plans[0],
                        calculation: s.plans[0] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["catering"])(s.plans[0]) : null
                    })));
                if (method === "PUT") {
                    const v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                        sessionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
                        expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().int().min(0).max(100000),
                        pricePerPlate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().min(0).max(1000000),
                        contingency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().min(0).max(100),
                        overrideCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().int().min(0).max(100000).nullable(),
                        vegetarian: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().int().min(0),
                        nonVegetarian: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().int().min(0),
                        originalCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().int().min(0).max(100000),
                        mealType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(100)
                    }).parse(await json(req));
                    if (!e.sessions.some((s)=>s.id === v.sessionId)) fail(404, "Session not found");
                    if (v.vegetarian + v.nonVegetarian > v.expected) fail(400, "Meal counts exceed expected attendance");
                    const saved = await __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].cateringPlan.upsert({
                        where: {
                            sessionId: v.sessionId
                        },
                        create: v,
                        update: v
                    });
                    await audit("catering.saved", e.ownerId, e.id);
                    return ok({
                        ...saved,
                        calculation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$backend$2f$src$2f$lib$2f$domain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["catering"])(saved)
                    });
                }
            }
        }
        return fail(404, "Not found");
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$ZodError$3e$__["z"].ZodError) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: {
                message: err.issues.map((i)=>`${i.path.join(".")}: ${i.message}`).join("; ")
            }
        }, {
            status: 422
        });
        if (err instanceof HttpError) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: {
                message: err.message
            }
        }, {
            status: err.status
        });
        if (err?.code === "P2002") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: {
                message: "This record already exists. Check for duplicates."
            }
        }, {
            status: 409
        });
        if (err instanceof Error && [
            "Party size",
            "Responses are closed",
            "Maybe responses",
            "Invalid session",
            "Invitation unavailable"
        ].some((s)=>err.message.startsWith(s))) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: {
                message: err.message
            }
        }, {
            status: 400
        });
        console.error(JSON.stringify({
            level: "error",
            message: err.message
        }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: {
                message: "Something went wrong. Please try again."
            }
        }, {
            status: 500
        });
    }
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/backend/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const globalDb = globalThis;
const db = globalDb.db || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    adapter: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaPg"]({
        connectionString: process.env.DATABASE_URL,
        max: 5
    })
});
if ("TURBOPACK compile-time truthy", 1) globalDb.db = db;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/backend/src/lib/domain.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aggregate",
    ()=>aggregate,
    "catering",
    ()=>catering,
    "dedupe",
    ()=>dedupe,
    "eventSchema",
    ()=>eventSchema,
    "guestSchema",
    ()=>guestSchema,
    "responseSchema",
    ()=>responseSchema,
    "validateResponse",
    ()=>validateResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$union$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .union>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .email>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .literal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .coerce>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .iso>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$url$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .url>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .boolean>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .array>");
;
const guestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1).max(120),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$union$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__["z"].email(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal("")
    ]).optional(),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(30).optional(),
    household: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(120).optional(),
    invitedSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().int().min(1).max(100)
});
const eventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(3).max(150),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(50),
    host: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(2).max(150),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(3000).default(""),
    startsAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__["z"].iso.datetime(),
    endsAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__["z"].iso.datetime().nullable().optional(),
    timezone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().refine((v)=>{
        try {
            new Intl.DateTimeFormat("en", {
                timeZone: v
            });
            return true;
        } catch  {
            return false;
        }
    }),
    venue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(200).default(""),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(500).default(""),
    mapsUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$union$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$url$3e$__["z"].url().refine((v)=>v.startsWith("https://")),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal("")
    ]).default(""),
    coverImage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(750000).refine((v)=>!v || /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(v), "Use a PNG, JPEG or WebP under 500 KB").default(""),
    template: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "Botanical",
        "Royal",
        "Minimal"
    ]).default("Botanical"),
    theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "emerald",
        "gold",
        "rose"
    ]).default("emerald"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(3000).default(""),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "DRAFT",
        "PUBLISHED"
    ]).default("DRAFT"),
    settings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        rsvpEnabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean(),
        deadline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__["z"].iso.datetime().nullable(),
        allowMaybe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean(),
        allowPartySize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean(),
        maxPartySize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().int().min(1).max(100),
        mealsEnabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean(),
        messagesEnabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean(),
        confirmedProbability: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().min(0).max(1).default(1),
        maybeProbability: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().min(0).max(1).default(0.5),
        pendingProbability: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().min(0).max(1).default(0.3),
        adjustment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(-10000).max(10000).default(0),
        contingency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().min(0).max(100).default(10)
    })
});
const responseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1).max(120).optional(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "YES",
        "MAYBE",
        "NO"
    ]),
    partySize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().int().min(0).max(100),
    meal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "Vegetarian",
        "Non-vegetarian",
        "No preference"
    ]).default("Vegetarian"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(1000).default(""),
    responseToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(/^[a-f0-9]{64}$/).optional(),
    selections: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        sessionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        attendees: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(0).max(100),
        meal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
            "Vegetarian",
            "Non-vegetarian",
            "No preference"
        ])
    })).max(30).optional()
});
function validateResponse(input, event, invitation, now = new Date()) {
    const s = event.settings;
    if (event.status !== "PUBLISHED" || invitation?.revoked) throw Error("Invitation unavailable");
    if (!s.rsvpEnabled || s.deadline && new Date(s.deadline) < now) throw Error("Responses are closed");
    if (input.status === "MAYBE" && !s.allowMaybe) throw Error("Maybe responses are disabled");
    const max = invitation ? Math.min(invitation.invitedSize, s.maxPartySize) : s.maxPartySize;
    if (input.status !== "NO" && (input.partySize < 1 || input.partySize > max || !s.allowPartySize && input.partySize !== 1)) throw Error(`Party size must be between 1 and ${max}`);
    if (input.selections && new Set(input.selections.map((v)=>v.sessionId)).size !== input.selections.length) throw Error("Invalid session attendance");
    if (input.selections?.some((v)=>v.attendees > input.partySize || !event.sessions.some((s)=>s.id === v.sessionId))) throw Error("Invalid session attendance");
}
function aggregate(event) {
    let invited = 0, confirmed = 0, maybe = 0, declined = 0, pending = 0, responded = 0, sent = 0;
    const meals = {};
    const trend = {};
    for (const i of event.invitations.filter((i)=>!i.revoked)){
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
    const expected = Math.max(0, Math.round(confirmed * s.confirmedProbability + maybe * s.maybeProbability + pending * s.pendingProbability + s.adjustment));
    const invitations = event.invitations.filter((i)=>!i.revoked).length;
    return {
        invited,
        confirmed,
        maybe,
        declined,
        pending,
        responded,
        sent,
        invitations,
        completion: invitations ? Math.round(responded / invitations * 100) : 0,
        expected,
        recommended: Math.ceil(expected * (1 + s.contingency / 100)),
        meals,
        trend: Object.entries(trend).sort().map(([date, responses])=>({
                date,
                responses
            })),
        represented: confirmed + maybe + declined,
        openPopulationUnknown: true
    };
}
function catering(p) {
    const count = p.overrideCount ?? Math.ceil(p.expected * (1 + p.contingency / 100));
    return {
        count,
        cost: Math.round(count * p.pricePerPlate),
        originalCost: Math.round(p.originalCount * p.pricePerPlate),
        difference: Math.round((p.originalCount - count) * p.pricePerPlate)
    };
}
const dedupe = (g)=>g.email?.trim().toLowerCase() || g.phone?.replace(/\D/g, "") || `${g.name.trim().toLowerCase()}|${g.household?.trim().toLowerCase() || ""}`;
}),
]})(),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1228n5mxpqh9d._.js.map