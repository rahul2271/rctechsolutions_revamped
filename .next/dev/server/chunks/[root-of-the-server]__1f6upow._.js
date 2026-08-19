module.exports = [
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
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/app/api/blogs/views/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
// app/api/blogs/views/route.js
// View counter — stored in WordPress as post meta, no external database.
//
// Requires a small custom REST endpoint in WordPress (functions.php) that
// reads/increments a "rc_views" post meta field. See the snippet in
// WORDPRESS_SETUP.md §6f.
//
// GET  /api/blogs/views?slug=my-post        -> { views: 123 }
// POST /api/blogs/views  { slug: "my-post" } -> { views: 124 }  (increments)
const WP_URL = process.env.WORDPRESS_URL || "";
const WP_AUTH = process.env.WORDPRESS_AUTH || "";
const wpHeaders = {
    "Content-Type": "application/json",
    ...WP_AUTH ? {
        Authorization: `Basic ${WP_AUTH}`
    } : {}
};
async function GET(req) {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    if (!slug) return Response.json({
        error: "Missing slug"
    }, {
        status: 400
    });
    if (!WP_URL) return Response.json({
        views: 0
    });
    try {
        const res = await fetch(`${WP_URL}/wp-json/rc/v1/views/${encodeURIComponent(slug)}`, {
            headers: wpHeaders,
            next: {
                revalidate: 30
            }
        });
        if (!res.ok) return Response.json({
            views: 0
        });
        const data = await res.json();
        return Response.json({
            views: data.views || 0
        });
    } catch (err) {
        console.error("View fetch failed:", err);
        return Response.json({
            views: 0
        });
    }
}
async function POST(req) {
    try {
        const { slug } = await req.json();
        if (!slug) return Response.json({
            error: "Missing slug"
        }, {
            status: 400
        });
        if (!WP_URL) return Response.json({
            views: 0
        });
        const res = await fetch(`${WP_URL}/wp-json/rc/v1/views/${encodeURIComponent(slug)}`, {
            method: "POST",
            headers: wpHeaders
        });
        if (!res.ok) return Response.json({
            views: 0
        });
        const data = await res.json();
        return Response.json({
            views: data.views || 1
        });
    } catch (err) {
        console.error("View increment failed:", err);
        return Response.json({
            error: "Failed to record view"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1f6upow._.js.map