module.exports = [
"[project]/app/components/ReadingProgressBar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReadingProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Lightweight reading progress indicator — pure client component, no deps.
// Tracks scroll position against document height and fills a fixed top bar.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ReadingProgressBar() {
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? scrollTop / docHeight * 100 : 0;
            setProgress(Math.min(100, Math.max(0, pct)));
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        handleScroll();
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "reading-progress",
        style: {
            width: `${progress}%`
        },
        role: "progressbar",
        "aria-valuenow": Math.round(progress),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": "Reading progress"
    }, void 0, false, {
        fileName: "[project]/app/components/ReadingProgressBar.js",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/blog/CommentSection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommentSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// app/components/blog/CommentSection.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Recaptcha$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Recaptcha.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const stripHtml = (html = "")=>html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
function timeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / 86400000);
    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 30) return `${days} days ago`;
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}
function CommentSection({ postId, commentsEnabled = true }) {
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        author_name: "",
        author_email: "",
        content: ""
    });
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // { type: 'success' | 'error', message }
    const { ref: recaptchaRef, token: captchaToken, onChange: onCaptchaChange, reset: resetCaptcha } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Recaptcha$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecaptcha"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!postId) return;
        fetch(`/api/blogs/comments?postId=${postId}`).then((r)=>r.json()).then((data)=>setComments(data.comments || [])).catch(()=>setComments([])).finally(()=>setLoading(false));
    }, [
        postId
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setFeedback(null);
        if (!captchaToken) {
            setFeedback({
                type: "error",
                message: "Please check the reCAPTCHA box to verify you're human."
            });
            return;
        }
        setSubmitting(true);
        try {
            const res = await fetch("/api/blogs/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    postId,
                    ...form,
                    captchaToken
                })
            });
            const data = await res.json();
            if (!res.ok || data.error) {
                setFeedback({
                    type: "error",
                    message: data.error || "Couldn't post your comment."
                });
                resetCaptcha();
                return;
            }
            if (data.status === "approve" || data.status === "approved") {
                setComments((prev)=>[
                        ...prev,
                        {
                            id: data.comment.id,
                            author: data.comment.author,
                            content: data.comment.content,
                            date: data.comment.date,
                            parent: 0
                        }
                    ]);
                setFeedback({
                    type: "success",
                    message: "Comment posted!"
                });
            } else {
                setFeedback({
                    type: "success",
                    message: "Thanks! Your comment is awaiting moderation and will appear once approved."
                });
            }
            setForm({
                author_name: "",
                author_email: "",
                content: ""
            });
            resetCaptcha();
        } catch  {
            setFeedback({
                type: "error",
                message: "Network error. Please try again."
            });
            resetCaptcha();
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-14 pt-10 border-t border-[var(--rc-wire)]",
        "aria-label": "Comments",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "rc-eyebrow text-[var(--rc-circuit)] mb-6",
                children: loading ? "Comments" : `${comments.length} Comment${comments.length === 1 ? "" : "s"}`
            }, void 0, false, {
                fileName: "[project]/app/components/blog/CommentSection.js",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            !loading && comments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-6 mb-10",
                children: comments.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: c.parent ? "ml-8 sm:ml-12" : "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 overflow-hidden",
                                    style: {
                                        background: "var(--rc-paper-deep)",
                                        color: "var(--rc-trace)"
                                    },
                                    children: c.avatar ? // eslint-disable-next-line @next/next/no-img-element
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: c.avatar,
                                        alt: c.author,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/blog/CommentSection.js",
                                        lineNumber: 93,
                                        columnNumber: 21
                                    }, this) : c.author.charAt(0).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/app/components/blog/CommentSection.js",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rc-body text-sm font-medium text-[var(--rc-ink)]",
                                                    children: c.author
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/blog/CommentSection.js",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rc-mono text-[0.65rem] text-[rgba(42,45,53,0.45)]",
                                                    children: timeAgo(c.date)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/blog/CommentSection.js",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/blog/CommentSection.js",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "rc-body text-sm text-[var(--rc-ink-soft)] mt-1 leading-relaxed",
                                            children: stripHtml(c.content)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/blog/CommentSection.js",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/blog/CommentSection.js",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/blog/CommentSection.js",
                            lineNumber: 88,
                            columnNumber: 15
                        }, this)
                    }, c.id, false, {
                        fileName: "[project]/app/components/blog/CommentSection.js",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/blog/CommentSection.js",
                lineNumber: 85,
                columnNumber: 9
            }, this),
            !loading && comments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rc-body text-sm text-[var(--rc-ink-soft)] mb-10",
                children: "Be the first to comment on this issue."
            }, void 0, false, {
                fileName: "[project]/app/components/blog/CommentSection.js",
                lineNumber: 112,
                columnNumber: 9
            }, this),
            commentsEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "rc-blueprint-card p-6 space-y-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "rc-eyebrow text-[rgba(42,45,53,0.5)] mb-1",
                        children: "Leave a comment"
                    }, void 0, false, {
                        fileName: "[project]/app/components/blog/CommentSection.js",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 gap-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                required: true,
                                placeholder: "Your name *",
                                value: form.author_name,
                                onChange: (e)=>setForm({
                                        ...form,
                                        author_name: e.target.value
                                    }),
                                className: "w-full border border-[var(--rc-wire)] px-4 py-3 rc-body text-sm text-[var(--rc-ink)] bg-white placeholder-rc-ink-soft/30 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/app/components/blog/CommentSection.js",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                required: true,
                                placeholder: "Email * (not published)",
                                value: form.author_email,
                                onChange: (e)=>setForm({
                                        ...form,
                                        author_email: e.target.value
                                    }),
                                className: "w-full border border-[var(--rc-wire)] px-4 py-3 rc-body text-sm text-[var(--rc-ink)] bg-white placeholder-rc-ink-soft/30 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/app/components/blog/CommentSection.js",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/blog/CommentSection.js",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        required: true,
                        rows: 4,
                        placeholder: "Share your thoughts...",
                        value: form.content,
                        onChange: (e)=>setForm({
                                ...form,
                                content: e.target.value
                            }),
                        className: "w-full border border-[var(--rc-wire)] px-4 py-3 rc-body text-sm text-[var(--rc-ink)] bg-white placeholder-rc-ink-soft/30 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors resize-none"
                    }, void 0, false, {
                        fileName: "[project]/app/components/blog/CommentSection.js",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Recaptcha$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        recaptchaRef: recaptchaRef,
                        onChange: onCaptchaChange,
                        className: "justify-start"
                    }, void 0, false, {
                        fileName: "[project]/app/components/blog/CommentSection.js",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `rc-mono text-xs ${feedback.type === "error" ? "text-red-600" : "text-[var(--rc-trace)]"}`,
                        children: feedback.message
                    }, void 0, false, {
                        fileName: "[project]/app/components/blog/CommentSection.js",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: submitting,
                        className: "rc-mono text-xs uppercase tracking-wider px-6 py-3 bg-[var(--rc-ink)] text-white hover:bg-[var(--rc-circuit)] transition-colors disabled:opacity-50",
                        children: submitting ? "Posting…" : "Post comment"
                    }, void 0, false, {
                        fileName: "[project]/app/components/blog/CommentSection.js",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/blog/CommentSection.js",
                lineNumber: 116,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rc-body text-sm text-[var(--rc-ink-soft)]",
                children: "Comments are closed on this issue."
            }, void 0, false, {
                fileName: "[project]/app/components/blog/CommentSection.js",
                lineNumber: 153,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/blog/CommentSection.js",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/blog/ShareButtons.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShareButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// app/components/blog/ShareButtons.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function ShareButtons({ url, title }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const links = [
        {
            label: "WhatsApp",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiWhatsappLine"],
            href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
        },
        {
            label: "X",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiTwitterXLine"],
            href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
        },
        {
            label: "LinkedIn",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiLinkedinBoxLine"],
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
        },
        {
            label: "Facebook",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiFacebookCircleLine"],
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        }
    ];
    const handleCopy = async ()=>{
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch  {
        // clipboard API unavailable — no-op, the buttons above still work
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            links.map(({ label, icon: Icon, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": `Share on ${label}`,
                    className: "w-8 h-8 flex items-center justify-center border border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)] transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/app/components/blog/ShareButtons.js",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                }, label, false, {
                    fileName: "[project]/app/components/blog/ShareButtons.js",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleCopy,
                "aria-label": "Copy link",
                className: "w-8 h-8 flex items-center justify-center border border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)] transition-colors",
                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiCheckLine"], {
                    size: 15,
                    style: {
                        color: "var(--rc-trace)"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/blog/ShareButtons.js",
                    lineNumber: 73,
                    columnNumber: 19
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiLinkM"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/app/components/blog/ShareButtons.js",
                    lineNumber: 73,
                    columnNumber: 84
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/blog/ShareButtons.js",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/blog/ShareButtons.js",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/blog/ViewCounter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ViewCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// app/components/blog/ViewCounter.js
// Displays a live view count and increments it once per browser session per
// post (sessionStorage guard) so refreshing the page doesn't inflate it.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function ViewCounter({ slug, initialViews = null }) {
    const [views, setViews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialViews);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const key = `rc-viewed-${slug}`;
        const alreadyCounted = ("TURBOPACK compile-time value", "undefined") !== "undefined" && sessionStorage.getItem(key);
        const run = async ()=>{
            try {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                else {
                    const res = await fetch("/api/blogs/views", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            slug
                        })
                    });
                    const data = await res.json();
                    setViews(data.views);
                    sessionStorage.setItem(key, "1");
                }
            } catch  {
            // Fail silently — a view counter is decorative, never worth an error state.
            }
        };
        run();
    }, [
        slug
    ]);
    if (views === null) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1 rc-mono text-xs text-[rgba(42,45,53,0.5)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiEyeLine"], {
                size: 13
            }, void 0, false, {
                fileName: "[project]/app/components/blog/ViewCounter.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            views.toLocaleString("en-IN"),
            " view",
            views === 1 ? "" : "s"
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/blog/ViewCounter.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_components_0eauxxh._.js.map