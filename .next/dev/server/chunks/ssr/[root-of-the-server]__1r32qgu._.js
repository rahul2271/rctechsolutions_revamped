module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/blogs/[slug]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// app/blogs/[slug]/page.js
// WordPress is now the single source of truth for blog content.
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$wordpress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/wordpress.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$html$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/node-html-parser/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReadingProgressBar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ReadingProgressBar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$ViewCounter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/blog/ViewCounter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$ShareButtons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/blog/ShareButtons.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$CommentSection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/blog/CommentSection.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const revalidate = 120; // falls back to this if the WP webhook doesn't fire
const stripHtml = (html = "")=>html.replace(/<[^>]+>/g, "");
const readingTime = (html)=>{
    const words = stripHtml(html).trim().split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 200))} min read`;
};
const wordCount = (html)=>stripHtml(html).trim().split(/\s+/).filter(Boolean).length;
const getImageSource = (blog)=>blog.blogImageUrl || blog.imageUrl || blog.image || blog.coverImage || null;
async function generateStaticParams() {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$wordpress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAllWPSlugs"])();
}
async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const decodedSlug = decodeURIComponent(resolvedParams.slug);
    const blog = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$wordpress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchWPPostBySlug"])(decodedSlug);
    if (!blog) {
        return {
            title: "Issue not found",
            description: "This journal entry could not be found.",
            robots: {
                index: false,
                follow: false
            }
        };
    }
    // FIX: this used to be `${blog.title} | RC Tech Solutions` — but the root
    // layout already applies a `"%s | RC Tech Solutions"` title template to
    // every page. Passing a title that already contains the suffix means
    // Next.js appends the template ON TOP of it, producing
    // "...Right Partner | RC Tech Solutions | RC Tech Solutions" — exactly
    // the doubled title you saw live on the Dubai post. Just pass the raw
    // post title and let the layout's template add the suffix once.
    const pageTitle = blog.title;
    const pageDesc = blog.metaDescription || blog.title;
    const canonical = `https://www.rctechsolutions.com/blogs/${blog.slug}`;
    const ogImage = getImageSource(blog) || "https://www.rctechsolutions.com/og/blogs-cover.jpg";
    return {
        metadataBase: new URL("https://www.rctechsolutions.com"),
        title: pageTitle,
        description: pageDesc,
        keywords: blog.keywords || [],
        authors: [
            {
                name: blog.author || "Rahul Chauhan",
                url: "https://www.rctechsolutions.com/about"
            }
        ],
        alternates: {
            canonical
        },
        openGraph: {
            title: blog.title,
            description: pageDesc,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: blog.title
                }
            ],
            url: canonical,
            type: "article",
            publishedTime: blog.createdAt,
            modifiedTime: blog.updatedAt || blog.createdAt,
            section: blog.category || "Technology"
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: pageDesc,
            images: [
                ogImage
            ]
        },
        robots: {
            index: true,
            follow: true
        }
    };
}
async function fetchRelatedPosts(categoryId, currentSlug) {
    try {
        if (!categoryId) return [];
        const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$wordpress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchWPPosts"])({
            perPage: 4,
            category: categoryId
        });
        return posts.filter((p)=>p.slug !== currentSlug).slice(0, 3);
    } catch  {
        return [];
    }
}
async function BlogPage({ params }) {
    const resolvedParams = await params;
    const decodedSlug = decodeURIComponent(resolvedParams.slug);
    const blog = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$wordpress$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchWPPostBySlug"])(decodedSlug);
    if (!blog) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const relatedPosts = await fetchRelatedPosts(blog.categoryId, blog.slug);
    let toc = [];
    let contentChunks = [];
    if (blog.content) {
        const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$html$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(blog.content);
        const headings = root.querySelectorAll("h2, h3");
        toc = headings.map((h, i)=>{
            const id = `heading-${i}`;
            h.setAttribute("id", id);
            return {
                id,
                text: h.textContent,
                level: h.tagName
            };
        });
        const topLevelNodes = root.childNodes.filter((n)=>n.nodeType === 1 || n.nodeType === 3 && n.textContent.trim());
        contentChunks = [
            topLevelNodes.map((n)=>n.toString()).join("")
        ].filter(Boolean);
    }
    const formattedDate = blog.date ? new Date(blog.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }) : null;
    const rt = readingTime(blog.content || "");
    const wc = wordCount(blog.content || "");
    const canonicalUrl = `https://www.rctechsolutions.com/blogs/${blog.slug}`;
    const blogImage = getImageSource(blog);
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": canonicalUrl,
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": canonicalUrl
            },
            headline: blog.title,
            description: blog.metaDescription || blog.title,
            image: {
                "@type": "ImageObject",
                url: blogImage || "https://www.rctechsolutions.com/og/blogs-cover.jpg",
                width: 1200,
                height: 630
            },
            author: {
                "@type": "Person",
                name: blog.author || "Rahul Chauhan",
                url: "https://www.rctechsolutions.com/about",
                jobTitle: "Founder & Web Developer",
                worksFor: {
                    "@type": "Organization",
                    name: "RC Tech Solutions",
                    url: "https://www.rctechsolutions.com"
                }
            },
            publisher: {
                "@type": "Organization",
                name: "RC Tech Solutions",
                url: "https://www.rctechsolutions.com",
                logo: {
                    "@type": "ImageObject",
                    url: "https://www.rctechsolutions.com/rclogo.png",
                    width: 400,
                    height: 400
                }
            },
            datePublished: blog.createdAt || blog.date,
            dateModified: blog.updatedAt || blog.createdAt || blog.date,
            wordCount: wc,
            articleSection: blog.category || "Technology",
            keywords: blog.keywords?.join(", ") || blog.category || "",
            inLanguage: "en-IN",
            url: canonicalUrl
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.rctechsolutions.com"
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Journal",
                    item: "https://www.rctechsolutions.com/blogs"
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: blog.title,
                    item: canonicalUrl
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/app/blogs/[slug]/page.js",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReadingProgressBar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/blogs/[slug]/page.js",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen",
                style: {
                    background: "var(--rc-paper)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "border-b border-[var(--rc-wire)]",
                        "aria-label": "Breadcrumb",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-3xl px-4 py-3 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.6)] flex flex-wrap items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-[var(--rc-circuit)] transition-colors",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/blogs",
                                    className: "hover:text-[var(--rc-circuit)] transition-colors",
                                    children: "Journal"
                                }, void 0, false, {
                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "line-clamp-1 max-w-[240px] text-[var(--rc-ink-soft)]",
                                    children: blog.title
                                }, void 0, false, {
                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blogs/[slug]/page.js",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/blogs/[slug]/page.js",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "mx-auto max-w-6xl px-4 lg:px-6 py-10 lg:py-14",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(260px,1fr)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                            className: "max-w-3xl mb-8",
                                            children: [
                                                blog.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rc-eyebrow inline-block mb-4",
                                                    style: {
                                                        color: "var(--rc-circuit)"
                                                    },
                                                    children: blog.category
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "rc-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[var(--rc-ink)] leading-[1.08]",
                                                    children: blog.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                blog.metaDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rc-body mt-4 text-lg text-[var(--rc-ink-soft)] leading-relaxed",
                                                    children: blog.metaDescription
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 pt-5 border-t border-[var(--rc-wire)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap items-center gap-x-4 gap-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium overflow-hidden flex-shrink-0",
                                                                            style: {
                                                                                background: "var(--rc-paper-deep)",
                                                                                color: "var(--rc-trace)"
                                                                            },
                                                                            children: blog.authorAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: blog.authorAvatar,
                                                                                alt: blog.author || "Author",
                                                                                width: 32,
                                                                                height: 32,
                                                                                className: "w-full h-full object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/blogs/[slug]/page.js",
                                                                                lineNumber: 210,
                                                                                columnNumber: 27
                                                                            }, this) : (blog.author || "RC").charAt(0).toUpperCase()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                                                            lineNumber: 208,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rc-body text-sm font-medium text-[var(--rc-ink)]",
                                                                            children: blog.author || "Rahul Chauhan"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                                                            lineNumber: 215,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                                    lineNumber: 207,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rc-mono text-xs text-[rgba(42,45,53,0.5)]",
                                                                    children: [
                                                                        formattedDate && `${formattedDate} · `,
                                                                        rt
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                                    lineNumber: 217,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$ViewCounter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                    slug: blog.slug
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                                    lineNumber: 220,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                                            lineNumber: 206,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$ShareButtons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            url: canonicalUrl,
                                                            title: blog.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                                            lineNumber: 222,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this),
                                        blogImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full mb-10 overflow-hidden rc-blueprint-card",
                                            style: {
                                                aspectRatio: "16/9"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: blogImage,
                                                alt: blog.title,
                                                fill: true,
                                                className: "object-cover",
                                                priority: true,
                                                sizes: "(max-width: 1024px) 100vw, 70vw"
                                            }, void 0, false, {
                                                fileName: "[project]/app/blogs/[slug]/page.js",
                                                lineNumber: 229,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prose prose-lg max-w-none prose-img:rounded-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-a:text-[var(--rc-circuit)] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-p:text-[1.0625rem] prose-p:leading-[1.85] prose-p:text-[var(--rc-ink-soft)] prose-blockquote:border-l-[var(--rc-circuit)]",
                                            style: {
                                                fontFamily: "var(--font-plex-sans), var(--rc-font-body)"
                                            },
                                            children: contentChunks.length > 0 ? contentChunks.map((chunk, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: chunk
                                                    }
                                                }, i, false, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 240,
                                                    columnNumber: 21
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[rgba(42,45,53,0.6)] italic",
                                                children: "This entry doesn't have any content yet."
                                            }, void 0, false, {
                                                fileName: "[project]/app/blogs/[slug]/page.js",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        blog.keywords && blog.keywords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10 pt-6 border-t border-[var(--rc-wire)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rc-eyebrow text-[rgba(42,45,53,0.5)] mb-3",
                                                    children: "Tagged"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: blog.keywords.map((kw, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rc-mono text-[0.65rem] uppercase tracking-wide border border-[var(--rc-wire)] px-2.5 py-1 text-[var(--rc-ink-soft)]",
                                                            children: kw
                                                        }, i, false, {
                                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                                            lineNumber: 252,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this),
                                        relatedPosts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: "mt-14",
                                            "aria-label": "Related posts",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "rc-eyebrow text-[var(--rc-circuit)] mb-5",
                                                    children: "More from the journal"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid sm:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]",
                                                    children: relatedPosts.map((rp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/blogs/${rp.slug}`,
                                                            className: "group flex flex-col bg-[var(--rc-paper)] hover:bg-white transition-colors",
                                                            children: [
                                                                getImageSource(rp) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative w-full overflow-hidden",
                                                                    style: {
                                                                        aspectRatio: "16/9"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: getImageSource(rp),
                                                                        alt: rp.title,
                                                                        fill: true,
                                                                        className: "object-cover transition-transform duration-500 group-hover:scale-105",
                                                                        sizes: "33vw"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blogs/[slug]/page.js",
                                                                        lineNumber: 267,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                                    lineNumber: 266,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "rc-display text-sm font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors line-clamp-2 leading-snug",
                                                                            children: rp.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                                                            lineNumber: 271,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "rc-mono text-[0.6rem] mt-1.5 text-[rgba(42,45,53,0.5)]",
                                                                            children: readingTime(rp.content || "")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                                                            lineNumber: 272,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                                    lineNumber: 270,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, rp.id, true, {
                                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                                            lineNumber: 264,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-14 rc-blueprint-card p-8 sm:p-10 text-center",
                                            style: {
                                                background: "var(--rc-ink)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rc-eyebrow",
                                                    style: {
                                                        color: "var(--rc-circuit)"
                                                    },
                                                    children: "Next step"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "rc-display text-xl sm:text-2xl font-semibold mt-2 mb-3 text-[var(--rc-paper)]",
                                                    children: "Need a website that actually ranks?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rc-body text-sm text-[rgba(246,242,233,0.6)] mb-6 max-w-md mx-auto",
                                                    children: "We build fast, SEO-engineered websites for founders across India. Let's scope your project."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 286,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/contact",
                                                    className: "inline-flex items-center rc-mono text-xs uppercase tracking-wider px-6 py-3.5 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors",
                                                    children: "Get a free strategy call →"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$CommentSection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            postId: blog.wpId,
                                            commentsEnabled: blog.commentsEnabled
                                        }, void 0, false, {
                                            fileName: "[project]/app/blogs/[slug]/page.js",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "hidden lg:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sticky top-24 space-y-5",
                                        children: [
                                            toc.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rc-blueprint-card p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "rc-eyebrow text-[rgba(42,45,53,0.5)] mb-3",
                                                        children: "On this page"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blogs/[slug]/page.js",
                                                        lineNumber: 302,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                        "aria-label": "Table of contents",
                                                        className: "space-y-0.5 text-sm",
                                                        children: toc.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `#${item.id}`,
                                                                className: "block truncate py-1.5 rc-body text-[var(--rc-ink-soft)] hover:text-[var(--rc-circuit)] transition-colors " + (item.level === "H3" ? "ml-3 text-xs" : ""),
                                                                children: item.text
                                                            }, item.id, false, {
                                                                fileName: "[project]/app/blogs/[slug]/page.js",
                                                                lineNumber: 305,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blogs/[slug]/page.js",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blogs/[slug]/page.js",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rc-blueprint-card p-5",
                                                style: {
                                                    background: "var(--rc-ink)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "rc-eyebrow mb-2",
                                                        style: {
                                                            color: "var(--rc-circuit)"
                                                        },
                                                        children: "Work with RC Tech"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blogs/[slug]/page.js",
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "rc-display text-sm font-semibold text-[var(--rc-paper)] leading-snug",
                                                        children: "Turn ideas into sharp, revenue-focused web experiences."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blogs/[slug]/page.js",
                                                        lineNumber: 319,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "rc-body mt-2 text-xs text-[rgba(246,242,233,0.5)] leading-relaxed",
                                                        children: "Next.js websites, SEO-built launches, and conversion-focused funnels."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blogs/[slug]/page.js",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/contact",
                                                                className: "rc-mono text-[0.65rem] uppercase tracking-wider text-center px-4 py-3 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors",
                                                                children: "Book a strategy call"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blogs/[slug]/page.js",
                                                                lineNumber: 326,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/blogs",
                                                                className: "rc-mono text-[0.65rem] uppercase tracking-wider text-center px-4 py-3 border border-[rgba(246,242,233,0.2)] text-[rgba(246,242,233,0.7)] hover:text-[var(--rc-paper)] transition-colors",
                                                                children: "← More issues"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blogs/[slug]/page.js",
                                                                lineNumber: 329,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/blogs/[slug]/page.js",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blogs/[slug]/page.js",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rc-blueprint-card p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 overflow-hidden",
                                                                style: {
                                                                    background: "var(--rc-paper-deep)",
                                                                    color: "var(--rc-trace)"
                                                                },
                                                                children: blog.authorAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: blog.authorAvatar,
                                                                    alt: blog.author || "Author",
                                                                    width: 36,
                                                                    height: 36,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                                                    lineNumber: 339,
                                                                    columnNumber: 25
                                                                }, this) : (blog.author || "RC").charAt(0).toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/blogs/[slug]/page.js",
                                                                lineNumber: 337,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "rc-body text-sm font-medium text-[var(--rc-ink)]",
                                                                        children: blog.author || "Rahul Chauhan"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blogs/[slug]/page.js",
                                                                        lineNumber: 345,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "rc-mono text-[0.6rem] text-[rgba(42,45,53,0.5)]",
                                                                        children: blog.authorSlug === "rahul" || (blog.author || "").includes("Rahul") ? "Founder, RC Tech Solutions" : "RC Tech Solutions"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/blogs/[slug]/page.js",
                                                                        lineNumber: 346,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/blogs/[slug]/page.js",
                                                                lineNumber: 344,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/blogs/[slug]/page.js",
                                                        lineNumber: 336,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "rc-body text-xs text-[rgba(42,45,53,0.7)] leading-relaxed",
                                                        children: blog.authorBio || "Building brands and websites for startups across India."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blogs/[slug]/page.js",
                                                        lineNumber: 351,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blogs/[slug]/page.js",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blogs/[slug]/page.js",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/blogs/[slug]/page.js",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blogs/[slug]/page.js",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/blogs/[slug]/page.js",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blogs/[slug]/page.js",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/blogs/[slug]/page.js",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/blogs/[slug]/page.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/blogs/[slug]/page.js [app-rsc] (ecmascript)"));
}),
"[project]/app/components/ReadingProgressBar.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/ReadingProgressBar.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/ReadingProgressBar.js", "default");
}),
"[project]/app/components/ReadingProgressBar.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/ReadingProgressBar.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/ReadingProgressBar.js <module evaluation>", "default");
}),
"[project]/app/components/ReadingProgressBar.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReadingProgressBar$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/components/ReadingProgressBar.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReadingProgressBar$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/components/ReadingProgressBar.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReadingProgressBar$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/components/blog/CommentSection.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/blog/CommentSection.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/blog/CommentSection.js", "default");
}),
"[project]/app/components/blog/CommentSection.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/blog/CommentSection.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/blog/CommentSection.js <module evaluation>", "default");
}),
"[project]/app/components/blog/CommentSection.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$CommentSection$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/components/blog/CommentSection.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$CommentSection$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/components/blog/CommentSection.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$CommentSection$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/components/blog/ShareButtons.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/blog/ShareButtons.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/blog/ShareButtons.js", "default");
}),
"[project]/app/components/blog/ShareButtons.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/blog/ShareButtons.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/blog/ShareButtons.js <module evaluation>", "default");
}),
"[project]/app/components/blog/ShareButtons.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$ShareButtons$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/components/blog/ShareButtons.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$ShareButtons$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/components/blog/ShareButtons.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$ShareButtons$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/components/blog/ViewCounter.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/blog/ViewCounter.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/blog/ViewCounter.js", "default");
}),
"[project]/app/components/blog/ViewCounter.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/blog/ViewCounter.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/blog/ViewCounter.js <module evaluation>", "default");
}),
"[project]/app/components/blog/ViewCounter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$ViewCounter$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/components/blog/ViewCounter.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$ViewCounter$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/components/blog/ViewCounter.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$blog$2f$ViewCounter$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1r32qgu._.js.map