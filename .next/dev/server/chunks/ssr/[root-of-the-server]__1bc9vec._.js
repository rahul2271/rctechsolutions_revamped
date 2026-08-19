module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/blogs/CategoryFilter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// app/blogs/CategoryFilter.js
// Renders one pill per WordPress category. Fully dynamic — create a new
// category in WordPress (Posts → Categories) and it shows up here on the
// next revalidation with zero code changes. No "hardcoded category list"
// to maintain in Next.js.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function CategoryFilter({ categories = [], activeSlug = null }) {
    // Skip WP's noise: default "Uncategorized" bucket and empty categories
    // clutter the filter bar without adding value for readers.
    const visible = categories.filter((c)=>c.count > 0 && c.slug !== "uncategorized");
    if (visible.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Filter by category",
        className: "mt-7 flex flex-wrap gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/blogs",
                className: `rc-mono text-[0.65rem] uppercase tracking-wider px-3.5 py-2 border transition-colors ${!activeSlug ? "border-[var(--rc-circuit)] bg-[var(--rc-circuit)] text-[var(--rc-ink)]" : "border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)]"}`,
                children: "All"
            }, void 0, false, {
                fileName: "[project]/app/blogs/CategoryFilter.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            visible.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/blogs?category=${cat.slug}`,
                    className: `rc-mono text-[0.65rem] uppercase tracking-wider px-3.5 py-2 border transition-colors ${activeSlug === cat.slug ? "border-[var(--rc-circuit)] bg-[var(--rc-circuit)] text-[var(--rc-ink)]" : "border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)]"}`,
                    children: [
                        cat.name,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "opacity-50",
                            children: [
                                "(",
                                cat.count,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blogs/CategoryFilter.js",
                            lineNumber: 40,
                            columnNumber: 22
                        }, this)
                    ]
                }, cat.id, true, {
                    fileName: "[project]/app/blogs/CategoryFilter.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/blogs/CategoryFilter.js",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/blogs/Pagination.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// app/blogs/Pagination.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function pageHref(page, category) {
    const params = new URLSearchParams();
    if (page > 1) params.set("page", page);
    if (category) params.set("category", category);
    const qs = params.toString();
    return qs ? `/blogs?${qs}` : "/blogs";
}
// Builds a compact page list with ellipses, e.g. 1 … 4 5 [6] 7 8 … 14
function getPageList(current, total) {
    const pages = new Set([
        1,
        total,
        current,
        current - 1,
        current + 1
    ]);
    return [
        ...pages
    ].filter((p)=>p >= 1 && p <= total).sort((a, b)=>a - b);
}
function Pagination({ page, totalPages, category = null }) {
    if (totalPages <= 1) return null;
    const pageList = getPageList(page, totalPages);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Blog pagination",
        className: "mt-14 flex items-center justify-center gap-2 flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: pageHref(page - 1, category),
                "aria-disabled": page <= 1,
                className: `rc-mono text-[0.65rem] uppercase tracking-wider px-4 py-2.5 border border-[var(--rc-wire)] transition-colors ${page <= 1 ? "pointer-events-none opacity-30" : "text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)]"}`,
                children: "← Prev"
            }, void 0, false, {
                fileName: "[project]/app/blogs/Pagination.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: pageList.map((p, i)=>{
                    const prev = pageList[i - 1];
                    const showEllipsis = prev !== undefined && p - prev > 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1",
                        children: [
                            showEllipsis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rc-mono text-xs text-[rgba(42,45,53,0.35)] px-1",
                                children: "…"
                            }, void 0, false, {
                                fileName: "[project]/app/blogs/Pagination.jsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: pageHref(p, category),
                                "aria-current": p === page ? "page" : undefined,
                                className: `rc-mono text-xs w-9 h-9 flex items-center justify-center border transition-colors ${p === page ? "border-[var(--rc-circuit)] bg-[var(--rc-circuit)] text-[var(--rc-ink)]" : "border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)]"}`,
                                children: p
                            }, void 0, false, {
                                fileName: "[project]/app/blogs/Pagination.jsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this)
                        ]
                    }, p, true, {
                        fileName: "[project]/app/blogs/Pagination.jsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/blogs/Pagination.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: pageHref(page + 1, category),
                "aria-disabled": page >= totalPages,
                className: `rc-mono text-[0.65rem] uppercase tracking-wider px-4 py-2.5 border border-[var(--rc-wire)] transition-colors ${page >= totalPages ? "pointer-events-none opacity-30" : "text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)]"}`,
                children: "Next →"
            }, void 0, false, {
                fileName: "[project]/app/blogs/Pagination.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/blogs/Pagination.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/blogs/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogsPage,
    "metadata",
    ()=>metadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// app/blogs/page.js
// Blog listing — WordPress is now the single source of truth.
// Paginated: ?page=2, ?page=3, etc. — PAGE_SIZE items per page.
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$wordpress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/wordpress.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CircuitTrace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/CircuitTrace.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blogs$2f$Pagination$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/blogs/Pagination.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blogs$2f$CategoryFilter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/blogs/CategoryFilter.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const revalidate = 300; // 5 min — falls back to this if the WP webhook doesn't fire
const PAGE_SIZE = 9; // 1 featured + 8 grid on page 1, 9 grid items per page after that
const metadata = {
    metadataBase: new URL("https://www.rctechsolutions.com"),
    // Layout's title template already appends "| RC Tech Solutions" — don't
    // add it here too, or it doubles up.
    title: "The Journal — Web Development, SEO & Growth Notes",
    description: "Field notes on web development, Next.js, SEO strategy, and digital growth from RC Tech Solutions. Written by the people actually shipping the work.",
    keywords: [
        "web development blog India",
        "SEO tips 2025",
        "Next.js tutorials",
        "RC Tech Solutions blog"
    ],
    authors: [
        {
            name: "Rahul Chauhan",
            url: "https://www.rctechsolutions.com/about"
        }
    ],
    alternates: {
        canonical: "https://www.rctechsolutions.com/blogs"
    },
    openGraph: {
        title: "The Journal | RC Tech Solutions",
        description: "Field notes on web development, SEO, and digital growth — written by the people actually shipping the work.",
        url: "https://www.rctechsolutions.com/blogs",
        siteName: "RC Tech Solutions",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.rctechsolutions.com/og/blogs-cover.jpg",
                width: 1200,
                height: 630
            }
        ]
    }
};
const stripHtml = (html = "")=>html.replace(/<[^>]+>/g, "");
// Prefer the WP-computed reading_time field (cheap, always present on listing
// calls) — only fall back to computing from content if it's missing (e.g.
// the functions.php snippet hasn't been added to WordPress yet).
const readingTime = (blog)=>{
    if (blog?.readingTime) return `${blog.readingTime} min read`;
    const words = stripHtml(blog?.content || "").trim().split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 200))} min read`;
};
const getImg = (b)=>b.blogImageUrl || b.imageUrl || b.image || b.coverImage || null;
const formatDate = (val)=>{
    try {
        if (!val) return "";
        const d = new Date(val);
        if (isNaN(d)) return "";
        return d.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    } catch  {
        return "";
    }
};
async function BlogsPage({ searchParams }) {
    const resolvedSearchParams = await searchParams;
    const requestedPage = parseInt(resolvedSearchParams?.page, 10) || 1;
    const activeCategorySlug = resolvedSearchParams?.category || null;
    // Categories are cheap (1hr cache) and needed either way for the filter pills.
    const allCategories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$wordpress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchWPCategories"])();
    const activeCategory = activeCategorySlug ? allCategories.find((c)=>c.slug === activeCategorySlug) : null;
    // Fetch ONLY the page being shown — not all posts. This is the fix for the
    // slow /blogs load: previously every visit fetched 60 full posts (with
    // embedded media/author/terms) and sliced them in JS. Now we ask WordPress
    // for exactly PAGE_SIZE posts for the requested page/category and read the
    // true totals straight from the X-WP-Total response headers.
    const { posts: pageBlogsRaw, total, totalPages: wpTotalPages } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$wordpress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchWPPostsPage"])({
        perPage: PAGE_SIZE,
        page: requestedPage,
        category: activeCategory?.id || null
    });
    const totalPages = Math.max(1, wpTotalPages);
    const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
    // Page 1: 1 featured + up to 8 grid items, all from the same single fetch.
    let featuredBlog = null;
    let pageBlogs = pageBlogsRaw;
    if (currentPage === 1 && !activeCategory) {
        featuredBlog = pageBlogsRaw[0];
        pageBlogs = pageBlogsRaw.slice(1);
    }
    const blogHref = (b)=>`/blogs/${b.slug}`;
    const categoryHref = (slug)=>slug ? `/blogs?category=${slug}` : "/blogs";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            style: {
                background: "var(--rc-paper)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "border-b border-[var(--rc-wire)] rc-grid-bg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-5xl px-4 py-16 sm:py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rc-via rc-via-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/blogs/page.js",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rc-eyebrow",
                                        style: {
                                            color: "var(--rc-trace)"
                                        },
                                        children: [
                                            "Updated weekly · ",
                                            total,
                                            " issue",
                                            total === 1 ? "" : "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blogs/page.js",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blogs/page.js",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "rc-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[0.98] text-[var(--rc-ink)] max-w-2xl",
                                children: "The journal."
                            }, void 0, false, {
                                fileName: "[project]/app/blogs/page.js",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rc-body mt-5 text-[var(--rc-ink-soft)] max-w-lg text-base sm:text-lg leading-relaxed",
                                children: "Notes on what's actually working in web development, SEO, and growth — written by the people shipping the work."
                            }, void 0, false, {
                                fileName: "[project]/app/blogs/page.js",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blogs$2f$CategoryFilter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                categories: allCategories,
                                activeSlug: activeCategorySlug
                            }, void 0, false, {
                                fileName: "[project]/app/blogs/page.js",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blogs/page.js",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/blogs/page.js",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "mx-auto max-w-5xl px-4 py-12 sm:py-14",
                    children: [
                        featuredBlog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: blogHref(featuredBlog),
                            className: "group block rc-blueprint-card mb-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-0",
                                children: [
                                    getImg(featuredBlog) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-64 md:h-full min-h-[260px] overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: getImg(featuredBlog),
                                            alt: featuredBlog.title,
                                            fill: true,
                                            className: "object-cover transition-transform duration-500 group-hover:scale-[1.03]",
                                            sizes: "(max-width: 768px) 100vw, 50vw",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/blogs/page.js",
                                            lineNumber: 124,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/blogs/page.js",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col justify-center p-7 sm:p-9",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rc-eyebrow mb-3",
                                                style: {
                                                    color: "var(--rc-circuit)"
                                                },
                                                children: "Latest issue"
                                            }, void 0, false, {
                                                fileName: "[project]/app/blogs/page.js",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this),
                                            featuredBlog.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rc-mono text-[0.65rem] uppercase tracking-wider w-fit px-2.5 py-1 border border-[var(--rc-wire)] text-[var(--rc-ink-soft)] mb-3",
                                                children: featuredBlog.category
                                            }, void 0, false, {
                                                fileName: "[project]/app/blogs/page.js",
                                                lineNumber: 132,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] leading-tight group-hover:text-[var(--rc-circuit)] transition-colors",
                                                children: featuredBlog.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/blogs/page.js",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this),
                                            featuredBlog.metaDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rc-body mt-3 text-sm text-[var(--rc-ink-soft)] leading-relaxed line-clamp-3",
                                                children: featuredBlog.metaDescription
                                            }, void 0, false, {
                                                fileName: "[project]/app/blogs/page.js",
                                                lineNumber: 140,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 flex flex-wrap items-center gap-3 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.7)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: featuredBlog.author || "RC Tech Team"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blogs/page.js",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--rc-wire)"
                                                        },
                                                        children: "/"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blogs/page.js",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: formatDate(featuredBlog.date)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blogs/page.js",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--rc-wire)"
                                                        },
                                                        children: "/"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blogs/page.js",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: readingTime(featuredBlog)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blogs/page.js",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blogs/page.js",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blogs/page.js",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blogs/page.js",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/blogs/page.js",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CircuitTrace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            variant: "horizontal",
                            className: "mb-10 opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/app/blogs/page.js",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]",
                            children: pageBlogs.map((blog, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: blogHref(blog),
                                    className: "group flex flex-col bg-[var(--rc-paper)] hover:bg-white transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full overflow-hidden",
                                            style: {
                                                aspectRatio: "16/9"
                                            },
                                            children: getImg(blog) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: getImg(blog),
                                                alt: blog.title,
                                                fill: true,
                                                className: "object-cover transition-transform duration-500 group-hover:scale-[1.05]",
                                                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            }, void 0, false, {
                                                fileName: "[project]/app/blogs/page.js",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center rc-grid-bg",
                                                style: {
                                                    background: "var(--rc-paper-deep)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rc-mono text-xs text-[rgba(42,45,53,0.4)]",
                                                    children: [
                                                        "No. ",
                                                        String(i + 1).padStart(2, "0")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blogs/page.js",
                                                    lineNumber: 170,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/blogs/page.js",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/blogs/page.js",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col flex-1 p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-2",
                                                    children: blog.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rc-mono text-[0.6rem] uppercase tracking-wider text-[var(--rc-trace)]",
                                                        children: blog.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blogs/page.js",
                                                        lineNumber: 177,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/page.js",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "rc-display text-base font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors line-clamp-2 leading-snug",
                                                    children: blog.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/page.js",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this),
                                                blog.metaDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rc-body mt-2 text-xs text-[rgba(42,45,53,0.8)] line-clamp-2 flex-1 leading-relaxed",
                                                    children: blog.metaDescription
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/page.js",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 flex items-center gap-2 rc-mono text-[0.6rem] text-[rgba(42,45,53,0.5)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: formatDate(blog.date)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blogs/page.js",
                                                            lineNumber: 191,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "·"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blogs/page.js",
                                                            lineNumber: 192,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: readingTime(blog)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blogs/page.js",
                                                            lineNumber: 193,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blogs/page.js",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blogs/page.js",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, blog.id, true, {
                                    fileName: "[project]/app/blogs/page.js",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/blogs/page.js",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        pageBlogsRaw.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "rc-body text-center text-[var(--rc-ink-soft)] py-20",
                            children: activeCategory ? `No issues in "${activeCategory.name}" yet.` : "No issues published yet."
                        }, void 0, false, {
                            fileName: "[project]/app/blogs/page.js",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this),
                        totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blogs$2f$Pagination$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            page: currentPage,
                            totalPages: totalPages,
                            category: activeCategorySlug
                        }, void 0, false, {
                            fileName: "[project]/app/blogs/page.js",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/blogs/page.js",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/blogs/page.js",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/blogs/page.js",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/blogs/page.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/blogs/page.js [app-rsc] (ecmascript)"));
}),
"[project]/app/components/CircuitTrace.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/CircuitTrace.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/CircuitTrace.js", "default");
}),
"[project]/app/components/CircuitTrace.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/CircuitTrace.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/CircuitTrace.js <module evaluation>", "default");
}),
"[project]/app/components/CircuitTrace.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CircuitTrace$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/components/CircuitTrace.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CircuitTrace$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/components/CircuitTrace.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CircuitTrace$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.03kbp6m78yw8p.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 32
};
}),
"[project]/app/lib/media.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SITE_URL",
    ()=>SITE_URL,
    "WP_URL",
    ()=>WP_URL,
    "isAllowedMediaHost",
    ()=>isAllowedMediaHost,
    "proxiedMediaUrl",
    ()=>proxiedMediaUrl
]);
// app/lib/media.js
//
// WHY THIS FILE EXISTS:
// WordPress media (featured images, author avatars, project/webinar images)
// were being served directly from the WP host's raw URL — e.g.
//   https://darkorchid-swallow-640839.hostingersite.com/wp-content/uploads/...
// That's a temporary Hostinger staging subdomain, not your own domain. Two
// real problems came from this:
//   1. Google Images (and social-share scrapers reading og:image) fetch
//      that URL directly and attribute/index the image under the staging
//      host, not rctechsolutions.com — which is very likely why images
//      show up inconsistently in Google Image Search for this site.
//   2. If that staging subdomain is ever recycled, suspended, or renamed by
//      Hostinger, every blog/project/webinar image breaks sitewide at once,
//      including every social share preview.
//
// The fix: every image URL that leaves this codebase (in <Image> tags,
// og:image, twitter:image, and JSON-LD) is rewritten to route through
// /api/media on YOUR OWN domain, which fetches from WordPress server-side
// and re-serves the bytes with a long, immutable cache. To Google, social
// scrapers, and browsers, every image now genuinely lives on
// rctechsolutions.com — decoupled from whatever the WP host happens to be.
// FIX: this used to be hardcoded to the production domain. That meant
// running `next dev` locally would build image URLs like
// https://www.rctechsolutions.com/api/media?url=... even before anything
// was deployed — pointing at production instead of localhost. Reading from
// NEXT_PUBLIC_SITE_URL (already defined in .env.local) means local dev
// proxies through the local server, and production continues to use the
// real domain, with no code change needed between environments.
const SITE_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || "https://www.rctechsolutions.com";
const WP_URL = process.env.WORDPRESS_URL || "";
// Gravatar is fine to reference directly — it's a stable, permanent CDN
// (used for author avatars), not a staging host, so we don't proxy it.
const DIRECT_OK_HOSTS = new Set([
    "secure.gravatar.com",
    "www.gravatar.com"
]);
function hostOf(url) {
    try {
        return new URL(url).host;
    } catch  {
        return null;
    }
}
function isAllowedMediaHost(url) {
    const wpHost = WP_URL ? hostOf(WP_URL) : null;
    const targetHost = hostOf(url);
    return Boolean(wpHost && targetHost && targetHost === wpHost);
}
function proxiedMediaUrl(rawUrl) {
    if (!rawUrl) return null;
    // Already same-origin (e.g. a local /public asset) — leave untouched.
    if (rawUrl.startsWith(SITE_URL) || rawUrl.startsWith("/")) return rawUrl;
    const host = hostOf(rawUrl);
    if (host && DIRECT_OK_HOSTS.has(host)) return rawUrl;
    if (!isAllowedMediaHost(rawUrl)) {
        // Unknown/unexpected host — don't silently proxy arbitrary URLs.
        // Fall back to the original so nothing breaks, but this is worth
        // noticing in logs if it ever fires.
        return rawUrl;
    }
    return `${SITE_URL}/api/media?url=${encodeURIComponent(rawUrl)}`;
}
;
}),
"[project]/app/lib/wordpress.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAllWPProjectSlugs",
    ()=>fetchAllWPProjectSlugs,
    "fetchAllWPSlugs",
    ()=>fetchAllWPSlugs,
    "fetchAllWPWebinarSlugs",
    ()=>fetchAllWPWebinarSlugs,
    "fetchWPCategories",
    ()=>fetchWPCategories,
    "fetchWPPostBySlug",
    ()=>fetchWPPostBySlug,
    "fetchWPPosts",
    ()=>fetchWPPosts,
    "fetchWPPostsPage",
    ()=>fetchWPPostsPage,
    "fetchWPProjectBySlug",
    ()=>fetchWPProjectBySlug,
    "fetchWPProjects",
    ()=>fetchWPProjects,
    "fetchWPWebinarBySlug",
    ()=>fetchWPWebinarBySlug,
    "fetchWPWebinars",
    ()=>fetchWPWebinars,
    "normaliseWPPost",
    ()=>normaliseWPPost,
    "normaliseWPProject",
    ()=>normaliseWPProject,
    "normaliseWPWebinar",
    ()=>normaliseWPWebinar,
    "safeTruncate",
    ()=>safeTruncate
]);
// app/lib/wordpress.js
// WordPress Headless CMS integration via REST API.
// Fetches posts from your WordPress site and normalises them into the same
// shape as your Firestore blog documents so the blogs listing and blog detail
// pages work identically for both sources.
//
// Setup:
// 1. Add to .env.local:  WORDPRESS_URL=https://yourblog.wordpress.com
//    (or your self-hosted WP URL — no trailing slash)
// 2. Make sure your WP site has REST API enabled (default on all WP installs)
// 3. For private sites: add  WORDPRESS_AUTH=Basic base64(user:app-password)
//
// The functions below are used in:
//   app/blogs/page.js       (listing — merges WP + Firestore posts)
//   app/blogs/[slug]/page.js (post detail — Firestore tried first, WP as fallback)
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$media$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/media.js [app-rsc] (ecmascript)");
;
const WP_URL = process.env.WORDPRESS_URL || '';
const WP_AUTH = process.env.WORDPRESS_AUTH || '';
const wpHeaders = {
    'Content-Type': 'application/json',
    ...WP_AUTH ? {
        Authorization: `Basic ${WP_AUTH}`
    } : {}
};
function safeTruncate(text = '', maxLen = 160) {
    const clean = text.trim();
    if (clean.length <= maxLen) return clean;
    const cut = clean.slice(0, maxLen);
    const lastSpace = cut.lastIndexOf(' ');
    return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLen)}…`;
}
// Fields requested on LISTING calls — deliberately excludes full `content`.
// Fetching full post HTML for 9+ posts at once is the #1 cause of a slow
// /blogs page. `reading_time` is a tiny custom field (see functions.php
// snippet in WORDPRESS_SETUP.md) computed once by WP and cached with the
// post, so we get an accurate reading time without downloading the body.
const LISTING_FIELDS = 'id,slug,title,excerpt,date,modified,link,sticky,reading_time,_links,_embedded';
function normaliseWPPost(post) {
    const words = post.content?.rendered ? post.content.rendered.replace(/<[^>]+>/g, '').trim().split(/\s+/).filter(Boolean).length : null;
    return {
        // Source identifier — used in the blog listing to route to correct detail page
        source: 'wordpress',
        id: `wp-${post.id}`,
        slug: post.slug,
        title: post.title?.rendered || '',
        content: post.content?.rendered || '',
        metaDescription: post.excerpt?.rendered ? safeTruncate(post.excerpt.rendered.replace(/<[^>]+>/g, ''), 160) : '',
        date: post.date || null,
        createdAt: post.date || null,
        updatedAt: post.modified || null,
        // Featured image — proxied through /api/media so it's served from our
        // own domain instead of the WordPress staging host (see app/lib/media.js)
        blogImageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$media$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["proxiedMediaUrl"])(post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null),
        author: post._embedded?.author?.[0]?.name || 'RC Tech Solutions',
        authorSlug: post._embedded?.author?.[0]?.slug || null,
        authorAvatar: post._embedded?.author?.[0]?.avatar_urls?.['96'] || post._embedded?.author?.[0]?.avatar_urls?.['48'] || null,
        authorBio: post._embedded?.author?.[0]?.description || '',
        category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Article',
        categoryId: post._embedded?.['wp:term']?.[0]?.[0]?.id || null,
        categorySlug: post._embedded?.['wp:term']?.[0]?.[0]?.slug || null,
        keywords: post._embedded?.['wp:term']?.[1]?.map((t)=>t.name) || [],
        commentsEnabled: post.comment_status ? post.comment_status === 'open' : true,
        // Prefer the WP-computed field (cheap — always present on listing calls);
        // fall back to computing from content when the full body was fetched
        // (post detail calls) or when the WP site doesn't have the snippet yet.
        readingTime: post.reading_time || (words ? Math.max(1, Math.ceil(words / 200)) : null),
        views: 0,
        featured: post.sticky || false,
        // WP-specific fields
        wpId: post.id,
        link: post.link || ''
    };
}
async function fetchWPPosts({ perPage = 10, page = 1, category = null, fields = LISTING_FIELDS } = {}) {
    if (!WP_URL) return [];
    try {
        let url = `${WP_URL}/wp-json/wp/v2/posts?_embed=true&per_page=${perPage}&page=${page}&status=publish`;
        if (category) url += `&categories=${category}`;
        if (fields) url += `&_fields=${fields}`;
        const res = await fetch(url, {
            headers: wpHeaders,
            next: {
                revalidate: 300,
                tags: [
                    'wp-posts'
                ]
            }
        });
        if (!res.ok) {
            console.warn(`WordPress API returned ${res.status} — skipping WP posts`);
            return [];
        }
        const posts = await res.json();
        return Array.isArray(posts) ? posts.map(normaliseWPPost) : [];
    } catch (err) {
        console.warn('WordPress fetch failed:', err.message);
        return [];
    }
}
async function fetchWPPostsPage({ perPage = 9, page = 1, category = null } = {}) {
    if (!WP_URL) return {
        posts: [],
        total: 0,
        totalPages: 1
    };
    try {
        let url = `${WP_URL}/wp-json/wp/v2/posts?_embed=true&per_page=${perPage}&page=${page}&status=publish&_fields=${LISTING_FIELDS}`;
        if (category) url += `&categories=${category}`;
        const res = await fetch(url, {
            headers: wpHeaders,
            next: {
                revalidate: 300,
                tags: [
                    'wp-posts'
                ]
            }
        });
        if (!res.ok) {
            console.warn(`WordPress API returned ${res.status} — skipping WP posts`);
            return {
                posts: [],
                total: 0,
                totalPages: 1
            };
        }
        const posts = await res.json();
        const total = Number(res.headers.get('X-WP-Total')) || posts.length;
        const totalPages = Number(res.headers.get('X-WP-TotalPages')) || 1;
        return {
            posts: Array.isArray(posts) ? posts.map(normaliseWPPost) : [],
            total,
            totalPages
        };
    } catch (err) {
        console.warn('WordPress paged fetch failed:', err.message);
        return {
            posts: [],
            total: 0,
            totalPages: 1
        };
    }
}
async function fetchWPPostBySlug(slug) {
    if (!WP_URL) return null;
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed=true&status=publish`, {
            headers: wpHeaders,
            next: {
                revalidate: 120,
                tags: [
                    'wp-posts',
                    `wp-post-${slug}`
                ]
            }
        });
        if (!res.ok) return null;
        const posts = await res.json();
        if (!Array.isArray(posts) || posts.length === 0) return null;
        return normaliseWPPost(posts[0]);
    } catch (err) {
        console.warn('WordPress fetch by slug failed:', err.message);
        return null;
    }
}
async function fetchAllWPSlugs() {
    if (!WP_URL) return [];
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?_fields=slug,modified&per_page=100&status=publish`, {
            headers: wpHeaders,
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) return [];
        const posts = await res.json();
        return Array.isArray(posts) ? posts.map((p)=>({
                slug: p.slug,
                modified: p.modified
            })) : [];
    } catch  {
        return [];
    }
}
// ─────────────────────────────────────────────────────────────────────────
// PROJECTS — WordPress custom post type integration
//
// Requires a "Project" custom post type in WordPress (REST base: "projects")
// with these ACF fields, "Show in REST API" enabled on the field group:
//   project_client        (Text)
//   project_industry      (Text)
//   project_services      (Text — comma separated, e.g. "SEO, Web Development")
//   project_stack         (Text — comma separated, e.g. "Next.js, Tailwind")
//   project_summary       (Text — the one-line result shown on cards)
//   project_live_url      (URL)
//   project_featured      (True/False)
//   project_gallery       (Gallery — extra screenshots beyond the featured image)
//   project_metrics       (Repeater with sub-fields: metric_value, metric_label)
//
// The post's Featured Image is used as the cover image. The post's main
// content (the normal WP editor) is used as the full case-study writeup —
// write it as regular paragraphs in the WP editor, same as a blog post.
// ─────────────────────────────────────────────────────────────────────────
function htmlToParagraphs(html = "") {
    // Converts WP's rendered HTML into the same "\n\n"-separated plain-text
    // paragraphs the project detail page already expects (p.description.split('\n\n')).
    return html.replace(/<\/p>\s*<p[^>]*>/gi, "\n\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
}
const splitCsv = (s = "")=>s.split(",").map((v)=>v.trim()).filter(Boolean);
function normaliseWPProject(post) {
    const acf = post.acf || {};
    return {
        source: "wordpress",
        id: `wp-${post.id}`,
        slug: post.slug,
        title: post.title?.rendered || "",
        client: acf.project_client || "",
        industry: acf.project_industry || "",
        services: splitCsv(acf.project_services),
        stack: splitCsv(acf.project_stack),
        summary: acf.project_summary || "",
        description: htmlToParagraphs(post.content?.rendered || ""),
        liveUrl: acf.project_live_url || "",
        featured: !!acf.project_featured,
        imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$media$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["proxiedMediaUrl"])(post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null),
        images: Array.isArray(acf.project_gallery) ? acf.project_gallery.map((img)=>typeof img === "string" ? img : img?.url).filter(Boolean).map(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$media$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["proxiedMediaUrl"]) : [],
        metrics: Array.isArray(acf.project_metrics) ? acf.project_metrics.map((m)=>({
                value: m.metric_value || "",
                label: m.metric_label || ""
            })) : [],
        date: post.date || null,
        modified: post.modified || post.date || null,
        wpId: post.id
    };
}
async function fetchWPProjects({ perPage = 50, page = 1 } = {}) {
    if (!WP_URL) return [];
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/projects?_embed=true&per_page=${perPage}&page=${page}&status=publish&orderby=date&order=desc`, {
            headers: wpHeaders,
            next: {
                revalidate: 3600,
                tags: [
                    "wp-projects"
                ]
            }
        });
        if (!res.ok) {
            console.warn(`WordPress projects API returned ${res.status} — skipping WP projects`);
            return [];
        }
        const posts = await res.json();
        return Array.isArray(posts) ? posts.map(normaliseWPProject) : [];
    } catch (err) {
        console.warn("WordPress projects fetch failed:", err.message);
        return [];
    }
}
async function fetchWPProjectBySlug(slug) {
    if (!WP_URL) return null;
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/projects?slug=${slug}&_embed=true&status=publish`, {
            headers: wpHeaders,
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) return null;
        const posts = await res.json();
        if (!Array.isArray(posts) || posts.length === 0) return null;
        return normaliseWPProject(posts[0]);
    } catch (err) {
        console.warn("WordPress project fetch by slug failed:", err.message);
        return null;
    }
}
async function fetchAllWPProjectSlugs() {
    if (!WP_URL) return [];
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/projects?_fields=slug,modified&per_page=100&status=publish`, {
            headers: wpHeaders,
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) return [];
        const posts = await res.json();
        return Array.isArray(posts) ? posts.map((p)=>({
                slug: p.slug,
                modified: p.modified
            })) : [];
    } catch  {
        return [];
    }
} // Fetch WP categories — for a future category filter
async function fetchWPCategories() {
    if (!WP_URL) return [];
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/categories?per_page=50`, {
            headers: wpHeaders,
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) return [];
        return await res.json();
    } catch  {
        return [];
    }
}
function normaliseWPWebinar(post) {
    const acf = post.acf || {};
    return {
        source: 'wordpress',
        id: `wp-${post.id}`,
        slug: post.slug,
        title: post.title?.rendered || '',
        description: post.excerpt?.rendered ? post.excerpt.rendered.replace(/<[^>]+>/g, '').trim() : (post.content?.rendered || '').replace(/<[^>]+>/g, '').trim().slice(0, 300),
        content: post.content?.rendered || '',
        date: acf.webinar_date || post.date || null,
        price: Number(acf.webinar_price) || 0,
        speaker: acf.webinar_speaker || '',
        speakerBio: acf.webinar_speaker_bio || '',
        live: !!acf.webinar_live,
        imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$media$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["proxiedMediaUrl"])(post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null),
        modified: post.modified || post.date || null,
        wpId: post.id,
        link: post.link || ''
    };
}
async function fetchWPWebinars({ perPage = 30, page = 1 } = {}) {
    if (!WP_URL) return [];
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/webinars?_embed=true&per_page=${perPage}&page=${page}&status=publish`, {
            headers: wpHeaders,
            next: {
                revalidate: 300
            }
        } // 5 min cache — webinars change more often
        );
        if (!res.ok) {
            console.warn(`WordPress webinars API returned ${res.status} — skipping WP webinars`);
            return [];
        }
        const posts = await res.json();
        return Array.isArray(posts) ? posts.map(normaliseWPWebinar) : [];
    } catch (err) {
        console.warn('WordPress webinars fetch failed:', err.message);
        return [];
    }
}
async function fetchWPWebinarBySlug(slug) {
    if (!WP_URL) return null;
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/webinars?slug=${slug}&_embed=true&status=publish`, {
            headers: wpHeaders,
            next: {
                revalidate: 120
            }
        });
        if (!res.ok) return null;
        const posts = await res.json();
        if (!Array.isArray(posts) || posts.length === 0) return null;
        return normaliseWPWebinar(posts[0]);
    } catch (err) {
        console.warn('WordPress webinar fetch by slug failed:', err.message);
        return null;
    }
}
async function fetchAllWPWebinarSlugs() {
    if (!WP_URL) return [];
    try {
        const res = await fetch(`${WP_URL}/wp-json/wp/v2/webinars?_fields=slug,modified&per_page=100&status=publish`, {
            headers: wpHeaders,
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) return [];
        const posts = await res.json();
        return Array.isArray(posts) ? posts.map((p)=>({
                slug: p.slug,
                modified: p.modified
            })) : [];
    } catch  {
        return [];
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1bc9vec._.js.map