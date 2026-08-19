(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/CircuitTrace.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircuitTrace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Signature brand element: an animated PCB-style trace line with glowing
// via-nodes. Draws itself on scroll-into-view using stroke-dashoffset,
// echoing "the engineering behind the brand" -- this is the one unique,
// memorable visual device tying hero -> sections -> footer together.
// Used sparingly: as a section divider, never as decoration on every element.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CircuitTrace({ variant = "horizontal", className = "", color = "var(--rc-circuit)" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CircuitTrace.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "CircuitTrace.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect();
                    }
                }
            }["CircuitTrace.useEffect"], {
                threshold: 0.3
            });
            observer.observe(el);
            return ({
                "CircuitTrace.useEffect": ()=>observer.disconnect()
            })["CircuitTrace.useEffect"];
        }
    }["CircuitTrace.useEffect"], []);
    if (variant === "branching") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ref: ref,
            viewBox: "0 0 1200 80",
            className: `w-full h-auto ${className}`,
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 40 H440 M440 40 L480 10 H720 M720 10 L760 40 H1200",
                    fill: "none",
                    stroke: "var(--rc-wire)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/app/components/CircuitTrace.js",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 40 H440 M440 40 L480 10 H720 M720 10 L760 40 H1200",
                    fill: "none",
                    stroke: color,
                    strokeWidth: "1.5",
                    strokeDasharray: "1400",
                    strokeDashoffset: visible ? 0 : 1400,
                    style: {
                        transition: "stroke-dashoffset 2.2s cubic-bezier(0.65, 0, 0.35, 1)"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/CircuitTrace.js",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                [
                    0,
                    440,
                    480,
                    720,
                    760,
                    1199
                ].map((cx, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: cx,
                        cy: cx === 480 || cx === 720 ? 10 : 40,
                        r: visible ? 3.5 : 0,
                        fill: i % 2 === 0 ? color : "var(--rc-signal)",
                        style: {
                            transition: `r 0.3s ease ${0.3 + i * 0.25}s`
                        }
                    }, i, false, {
                        fileName: "[project]/app/components/CircuitTrace.js",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/CircuitTrace.js",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        viewBox: "0 0 1200 24",
        className: `w-full h-auto ${className}`,
        preserveAspectRatio: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "0",
                y1: "12",
                x2: "1200",
                y2: "12",
                stroke: "var(--rc-wire)",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/app/components/CircuitTrace.js",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "0",
                y1: "12",
                x2: "1200",
                y2: "12",
                stroke: color,
                strokeWidth: "1.5",
                strokeDasharray: "1200",
                strokeDashoffset: visible ? 0 : 1200,
                style: {
                    transition: "stroke-dashoffset 1.6s cubic-bezier(0.65, 0, 0.35, 1)"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/CircuitTrace.js",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            [
                0,
                300,
                600,
                900,
                1199
            ].map((cx, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: cx,
                    cy: 12,
                    r: visible ? 3 : 0,
                    fill: i % 2 === 0 ? color : "var(--rc-trace)",
                    style: {
                        transition: `r 0.3s ease ${0.2 + i * 0.15}s`
                    }
                }, i, false, {
                    fileName: "[project]/app/components/CircuitTrace.js",
                    lineNumber: 94,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/CircuitTrace.js",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(CircuitTrace, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = CircuitTrace;
var _c;
__turbopack_context__.k.register(_c, "CircuitTrace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CircuitTrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/CircuitTrace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Recaptcha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Recaptcha.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$verifyRecaptcha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/verifyRecaptcha.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const SHEETDB_NEWSLETTER_ENDPOINT = 'https://sheetdb.io/api/v1/7tneevoxn7zax';
const EXPLORE_LINKS = [
    {
        href: '/about',
        label: 'About'
    },
    {
        href: '/blogs',
        label: 'Journal'
    },
    {
        href: '/services/web-development',
        label: 'Web development'
    },
    {
        href: '/services/seo',
        label: 'SEO'
    },
    {
        href: '/services/digital-marketing',
        label: 'Digital marketing'
    }
];
const LEGAL_LINKS = [
    {
        href: '/privacy-policy',
        label: 'Privacy policy'
    },
    {
        href: '/terms-of-services',
        label: 'Terms of service'
    },
    {
        href: '/return-policy',
        label: 'Return policy'
    }
];
function Footer() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const { ref: recaptchaRef, token: captchaToken, onChange: onCaptchaChange, reset: resetCaptcha } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Recaptcha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecaptcha"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email.includes('@') || email.length < 6) {
            setStatus('error');
            return;
        }
        if (!captchaToken) {
            setStatus('captcha');
            return;
        }
        setStatus('loading');
        const captchaOk = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$verifyRecaptcha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyRecaptcha"])(captchaToken);
        if (!captchaOk) {
            setStatus('error');
            resetCaptcha();
            return;
        }
        try {
            const response = await fetch(SHEETDB_NEWSLETTER_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: {
                        email,
                        source: 'footer-newsletter'
                    }
                })
            });
            if (response.ok) {
                setEmail('');
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "rc-ink-section",
        style: {
            background: 'var(--rc-ink)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CircuitTrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "horizontal",
                color: "var(--rc-circuit)"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 md:grid-cols-12 gap-12 pb-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rc-display text-2xl font-semibold text-[var(--rc-paper)]",
                                        children: [
                                            "RC Tech Solutions",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'var(--rc-circuit)'
                                                },
                                                children: "."
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "rc-body mt-4 text-sm leading-relaxed text-[rgba(246,242,233,0.6)] max-w-xs",
                                        children: [
                                            "3126, Sector 82, JLPL Industrial Area,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 82,
                                                columnNumber: 53
                                            }, this),
                                            "Mohali, Punjab 140306, India"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-1 rc-mono text-xs text-[rgba(246,242,233,0.5)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "+91 70096-46377"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "business@rctechsolutions.com"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "rc-eyebrow text-[var(--rc-circuit)] mb-4",
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2.5 rc-body text-sm text-[rgba(246,242,233,0.7)]",
                                        children: EXPLORE_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "hover:text-[var(--rc-paper)] transition-colors",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this)
                                            }, link.href, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "rc-eyebrow text-[var(--rc-circuit)] mb-4",
                                        children: "The journal, weekly"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "rc-body text-sm text-[rgba(246,242,233,0.6)] mb-4 leading-relaxed",
                                        children: "Web dev, SEO, and growth notes — no fluff, unsubscribe anytime."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "footer-email",
                                                        className: "sr-only",
                                                        children: "Email address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.js",
                                                        lineNumber: 113,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "footer-email",
                                                        type: "email",
                                                        placeholder: "you@company.com",
                                                        value: email,
                                                        onChange: (e)=>setEmail(e.target.value),
                                                        className: "rc-body w-full px-3 py-2.5 text-sm bg-transparent border border-[rgba(246,242,233,0.25)] text-[var(--rc-paper)] placeholder-rc-paper/40 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.js",
                                                        lineNumber: 114,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: status === 'loading',
                                                        className: "rc-mono text-xs uppercase tracking-wider px-4 py-2.5 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors whitespace-nowrap",
                                                        children: status === 'loading' ? '…' : 'Join'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.js",
                                                        lineNumber: 123,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Recaptcha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                recaptchaRef: recaptchaRef,
                                                onChange: onCaptchaChange,
                                                className: "justify-start",
                                                size: "compact"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this),
                                            status === 'captcha' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rc-mono text-[0.65rem] text-red-400",
                                                children: "Please verify you're human."
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 132,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    status === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "rc-mono text-xs mt-2.5",
                                        style: {
                                            color: 'var(--rc-trace-bright)'
                                        },
                                        children: "Subscribed. Welcome aboard."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 134,
                                        columnNumber: 38
                                    }, this),
                                    status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "rc-mono text-xs mt-2.5 text-red-400",
                                        children: "That didn't go through — check the address."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 135,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "rc-eyebrow text-[var(--rc-circuit)] mb-4",
                                        children: "Connect"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 mb-6 text-[rgba(246,242,233,0.6)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.facebook.com/rchauhanweb",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Facebook",
                                                className: "hover:text-[var(--rc-paper)] transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.linkedin.com/in/er-rahul-chauhan/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "LinkedIn",
                                                className: "hover:text-[var(--rc-paper)] transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.instagram.com/rc_tech_solutions/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Instagram",
                                                className: "hover:text-[var(--rc-paper)] transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 rc-body text-xs text-[rgba(246,242,233,0.5)]",
                                        children: LEGAL_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "hover:text-[rgba(246,242,233,0.8)] transition-colors",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this)
                                            }, link.href, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:justify-between items-center gap-4 border-t border-[rgba(246,242,233,0.1)] pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.crunchbase.com/organization/rc-tech-solutions",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "opacity-70 hover:opacity-100 transition-opacity",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/crush verified.png",
                                    alt: "RC Tech Solutions — verified on Crunchbase",
                                    className: "h-5 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.js",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rc-mono text-xs text-[rgba(246,242,233,0.4)]",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " RC Tech Solutions · Built in Mohali"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.js",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(Footer, "tncB1cyT8b1BDz7O3XRtH84bD3E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Recaptcha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecaptcha"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdvancedHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
// ─── Utility for Google Ads Tracking ──────────────────────────────────────────
const trackConversion = (type)=>{
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.gtag) {
        if (type === 'whatsapp') {
            // Replace with your actual Google Ads WhatsApp conversion ID and label
            window.gtag('event', 'conversion', {
                'send_to': 'AW-18337263682/whatsapp_label'
            });
        } else if (type === 'call') {
            // Replace with your actual Google Ads Phone Call conversion ID and label
            window.gtag('event', 'conversion', {
                'send_to': 'AW-18337263682/call_label'
            });
        }
    }
};
const SERVICES_MENU = [
    {
        category: 'Build',
        items: [
            {
                label: 'Web Development',
                href: '/services/web-development',
                desc: 'Next.js, React, e-commerce'
            },
            {
                label: 'Mobile Apps',
                href: '/services/mobile-apps',
                desc: 'iOS, Android, React Native'
            },
            {
                label: 'E-commerce',
                href: '/services/web-development/ecommerce-development',
                desc: 'Shopify, WooCommerce, custom'
            },
            {
                label: 'Progressive Web Apps',
                href: '/services/web-development/progressive-web-apps',
                desc: 'Installable, offline-capable'
            },
            {
                label: 'Custom CMS',
                href: '/services/web-development/custom-cms-development',
                desc: 'Headless, Sanity, Firebase'
            }
        ]
    },
    {
        category: 'Grow',
        items: [
            {
                label: 'SEO Services',
                href: '/services/seo',
                desc: 'Technical, local, content'
            },
            {
                label: 'Digital Marketing',
                href: '/services/digital-marketing',
                desc: 'Google Ads, Meta, email'
            },
            {
                label: 'Technical SEO Audit',
                href: '/services/seo/technical-seo-audit',
                desc: 'Core Web Vitals, indexing'
            },
            {
                label: 'Google Ads',
                href: '/services/digital-marketing/google-ads-campaigns',
                desc: 'Search, Shopping, Display'
            },
            {
                label: 'Social Media',
                href: '/services/digital-marketing/social-media-management',
                desc: 'Instagram, LinkedIn, Facebook'
            }
        ]
    },
    {
        category: 'Scale',
        items: [
            {
                label: 'Digital Branding',
                href: '/services/digital-branding',
                desc: 'Identity, logo, guidelines'
            },
            {
                label: 'AI-Powered Solutions',
                href: '/services/ai-powered',
                desc: 'Chatbots, ML, automation'
            },
            {
                label: 'Cloud Integration',
                href: '/services/cloud-integration',
                desc: 'AWS, GCP, Azure Mumbai'
            },
            {
                label: 'DevOps & Cloud',
                href: '/services/devops-and-cloud',
                desc: 'CI/CD, Docker, Kubernetes'
            },
            {
                label: 'Keyword Research',
                href: '/services/seo/keyword-research-content-strategy',
                desc: 'Content strategy & planning'
            }
        ]
    }
];
const TOP_NAV = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/about',
        label: 'About'
    },
    {
        href: '/projects',
        label: 'Projects'
    },
    {
        href: '/webinars',
        label: 'Webinars'
    },
    {
        href: '/ebook',
        label: 'eBook'
    },
    {
        href: '/blogs',
        label: 'Journal'
    },
    {
        href: '/contact',
        label: 'Contact'
    }
];
function MobileNav({ open, onClose }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileNav.useEffect": ()=>{
            setMounted(true);
        }
    }["MobileNav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileNav.useEffect": ()=>{
            document.body.style.overflow = open ? 'hidden' : '';
            return ({
                "MobileNav.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["MobileNav.useEffect"];
        }
    }["MobileNav.useEffect"], [
        open
    ]);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    onClick: onClose,
                    style: {
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9990,
                        background: 'rgba(0,0,0,0.55)'
                    }
                }, "backdrop", false, {
                    fileName: "[project]/app/components/Header.js",
                    lineNumber: 83,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                    initial: {
                        x: '100%'
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: '100%'
                    },
                    transition: {
                        type: 'spring',
                        stiffness: 340,
                        damping: 34
                    },
                    style: {
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 9999,
                        width: 'min(340px, 90vw)',
                        background: 'var(--rc-ink)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflowY: 'auto'
                    },
                    "aria-label": "Mobile navigation",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '20px',
                                borderBottom: '1px solid rgba(246,242,233,0.1)',
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    onClick: onClose,
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/rclogo.png",
                                            alt: "RC Tech Solutions",
                                            width: 28,
                                            height: 28,
                                            style: {
                                                objectFit: 'contain'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: 'var(--font-fraunces)',
                                                fontSize: 16,
                                                fontWeight: 600,
                                                color: 'var(--rc-paper)'
                                            },
                                            children: [
                                                "RC Tech",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'var(--rc-circuit)'
                                                    },
                                                    children: "."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Header.js",
                                                    lineNumber: 123,
                                                    columnNumber: 26
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    "aria-label": "Close menu",
                                    style: {
                                        padding: 8,
                                        color: 'rgba(246,242,233,0.6)',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.js",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Header.js",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                padding: '20px',
                                overflowY: 'auto'
                            },
                            children: [
                                TOP_NAV.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: i * 0.055
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            onClick: onClose,
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 12,
                                                padding: '14px 0',
                                                borderBottom: '1px solid rgba(246,242,233,0.08)',
                                                fontFamily: 'var(--font-fraunces)',
                                                fontSize: 22,
                                                fontWeight: 600,
                                                color: 'var(--rc-paper)',
                                                textDecoration: 'none'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'var(--font-plex-mono)',
                                                        fontSize: 10,
                                                        color: 'var(--rc-circuit)',
                                                        letterSpacing: 2
                                                    },
                                                    children: [
                                                        "0",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Header.js",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this),
                                                link.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this)
                                    }, link.href, false, {
                                        fileName: "[project]/app/components/Header.js",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.35
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'var(--font-plex-mono)',
                                                fontSize: 10,
                                                textTransform: 'uppercase',
                                                letterSpacing: 3,
                                                color: 'rgba(246,242,233,0.28)',
                                                margin: '24px 0 10px'
                                            },
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this),
                                        SERVICES_MENU.flatMap((g)=>g.items).slice(0, 9).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                onClick: onClose,
                                                style: {
                                                    display: 'block',
                                                    padding: '8px 0',
                                                    fontSize: 14,
                                                    fontFamily: 'var(--font-plex-sans)',
                                                    color: 'rgba(246,242,233,0.65)',
                                                    textDecoration: 'none'
                                                },
                                                children: [
                                                    "→ ",
                                                    item.label
                                                ]
                                            }, item.href, true, {
                                                fileName: "[project]/app/components/Header.js",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Header.js",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: 20,
                                borderTop: '1px solid rgba(246,242,233,0.1)',
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    onClick: onClose,
                                    style: {
                                        display: 'block',
                                        textAlign: 'center',
                                        padding: '14px',
                                        background: 'var(--rc-circuit)',
                                        color: 'var(--rc-ink)',
                                        fontFamily: 'var(--font-plex-mono)',
                                        fontSize: 11,
                                        textTransform: 'uppercase',
                                        letterSpacing: 2,
                                        textDecoration: 'none',
                                        fontWeight: 600
                                    },
                                    children: "Start a project →"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: 'var(--font-plex-mono)',
                                        fontSize: 10,
                                        color: 'rgba(246,242,233,0.25)',
                                        textAlign: 'center',
                                        marginTop: 10
                                    },
                                    children: "+91 70096-46377 · Mohali, Punjab"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Header.js",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this)
                    ]
                }, "panel", true, {
                    fileName: "[project]/app/components/Header.js",
                    lineNumber: 93,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Header.js",
            lineNumber: 82,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Header.js",
        lineNumber: 80,
        columnNumber: 5
    }, this), document.body);
}
_s(MobileNav, "BShlRgxf1Xjno/mi6QXyq9ZqIDE=");
_c = MobileNav;
function AdvancedHeader() {
    _s1();
    const [navOpen, setNavOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesOpen, setServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const servicesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancedHeader.useEffect": ()=>{
            const onScroll = {
                "AdvancedHeader.useEffect.onScroll": ()=>setScrolled(window.scrollY > 12)
            }["AdvancedHeader.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            onScroll();
            return ({
                "AdvancedHeader.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["AdvancedHeader.useEffect"];
        }
    }["AdvancedHeader.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvancedHeader.useEffect": ()=>{
            const onOutside = {
                "AdvancedHeader.useEffect.onOutside": (e)=>{
                    if (servicesRef.current && !servicesRef.current.contains(e.target)) {
                        setServicesOpen(false);
                    }
                }
            }["AdvancedHeader.useEffect.onOutside"];
            document.addEventListener('mousedown', onOutside);
            return ({
                "AdvancedHeader.useEffect": ()=>document.removeEventListener('mousedown', onOutside)
            })["AdvancedHeader.useEffect"];
        }
    }["AdvancedHeader.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "b3592d8a946c69f2",
                children: "@keyframes urgentBlink{0%,to{opacity:1;transform:scale(1);box-shadow:0 0 #25d366b3}50%{opacity:.85;transform:scale(1.04);box-shadow:0 0 14px 6px #25d36673}}@keyframes callBlink{0%,to{transform:scale(1)}50%{transform:scale(1.05)}}.rc-btn-whatsapp{animation:1.4s ease-in-out infinite urgentBlink}.rc-btn-call{animation:1.2s ease-in-out infinite callBlink}.rc-btn-quote{animation:1.6s ease-in-out infinite urgentBlink}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-b3592d8a946c69f2" + " " + "sticky top-0 z-[998] w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b3592d8a946c69f2" + " " + `w-full transition-all duration-300 relative z-20 ${scrolled ? 'border-b border-[var(--rc-wire)] bg-[rgba(246,242,233,0.96)] backdrop-blur-md shadow-sm' : 'border-b border-transparent bg-[var(--rc-paper)]'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b3592d8a946c69f2" + " " + "mx-auto max-w-7xl px-3 sm:px-6 flex items-center justify-between h-14 sm:h-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2 flex-shrink-0",
                                    "aria-label": "RC Tech Solutions home",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/rclogo.png",
                                            alt: "RC Tech Solutions",
                                            width: 30,
                                            height: 30,
                                            className: "w-7 h-7 sm:w-8 sm:h-8 object-contain",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b3592d8a946c69f2" + " " + "rc-display text-sm sm:text-base font-semibold text-[var(--rc-ink)] tracking-tight",
                                            children: [
                                                "RC Tech Solutions",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'var(--rc-circuit)'
                                                    },
                                                    className: "jsx-b3592d8a946c69f2",
                                                    children: "."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Header.js",
                                                    lineNumber: 253,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "jsx-b3592d8a946c69f2" + " " + "hidden lg:flex items-center gap-6 rc-mono text-[0.7rem] uppercase tracking-wider text-[var(--rc-ink-soft)]",
                                    children: [
                                        TOP_NAV.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "relative group py-1 hover:text-[var(--rc-circuit)] transition-colors",
                                                children: [
                                                    link.label,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            background: 'var(--rc-circuit)'
                                                        },
                                                        className: "jsx-b3592d8a946c69f2" + " " + "absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Header.js",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, link.href, true, {
                                                fileName: "[project]/app/components/Header.js",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: servicesRef,
                                            className: "jsx-b3592d8a946c69f2" + " " + "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setServicesOpen(!servicesOpen),
                                                    onMouseEnter: ()=>setServicesOpen(true),
                                                    className: "jsx-b3592d8a946c69f2" + " " + "flex items-center gap-1 py-1 hover:text-[var(--rc-circuit)] transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/services",
                                                            onClick: (e)=>e.stopPropagation(),
                                                            className: "hover:text-[var(--rc-circuit)]",
                                                            children: "Services"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Header.js",
                                                            lineNumber: 275,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                            animate: {
                                                                rotate: servicesOpen ? 180 : 0
                                                            },
                                                            transition: {
                                                                duration: 0.2
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Header.js",
                                                                lineNumber: 278,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Header.js",
                                                            lineNumber: 277,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Header.js",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    children: servicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 8,
                                                            scale: 0.97
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0,
                                                            scale: 1
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            y: 6,
                                                            scale: 0.97
                                                        },
                                                        transition: {
                                                            duration: 0.16
                                                        },
                                                        onMouseLeave: ()=>setServicesOpen(false),
                                                        className: "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] border border-[var(--rc-wire)] shadow-2xl z-50",
                                                        style: {
                                                            background: 'var(--rc-paper)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    background: 'var(--rc-paper)'
                                                                },
                                                                className: "jsx-b3592d8a946c69f2" + " " + "absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t border-[var(--rc-wire)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Header.js",
                                                                lineNumber: 293,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-b3592d8a946c69f2" + " " + "grid grid-cols-3 divide-x divide-[var(--rc-wire)] p-2",
                                                                children: SERVICES_MENU.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-b3592d8a946c69f2" + " " + "p-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-b3592d8a946c69f2" + " " + "rc-eyebrow text-[rgba(42,45,53,0.4)] mb-3",
                                                                                children: group.category
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Header.js",
                                                                                lineNumber: 298,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: item.href,
                                                                                    onClick: ()=>setServicesOpen(false),
                                                                                    className: "group/item flex flex-col px-3 py-2.5 hover:bg-white transition-colors rounded",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-b3592d8a946c69f2" + " " + "rc-body text-xs font-semibold text-[var(--rc-ink)] group-hover/item:text-[var(--rc-circuit)] transition-colors",
                                                                                            children: item.label
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/Header.js",
                                                                                            lineNumber: 303,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-b3592d8a946c69f2" + " " + "rc-mono text-[0.7rem] text-[rgba(42,45,53,0.5)] mt-0.5",
                                                                                            children: item.desc
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/Header.js",
                                                                                            lineNumber: 306,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, item.href, true, {
                                                                                    fileName: "[project]/app/components/Header.js",
                                                                                    lineNumber: 300,
                                                                                    columnNumber: 31
                                                                                }, this))
                                                                        ]
                                                                    }, group.category, true, {
                                                                        fileName: "[project]/app/components/Header.js",
                                                                        lineNumber: 297,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Header.js",
                                                                lineNumber: 295,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    background: 'var(--rc-paper-deep)'
                                                                },
                                                                className: "jsx-b3592d8a946c69f2" + " " + "border-t border-[var(--rc-wire)] px-5 py-3 flex items-center justify-between",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-b3592d8a946c69f2" + " " + "rc-mono text-[0.6rem] text-[rgba(42,45,53,0.5)]",
                                                                    children: "50+ projects delivered · Mohali, Punjab"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Header.js",
                                                                    lineNumber: 314,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Header.js",
                                                                lineNumber: 312,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Header.js",
                                                        lineNumber: 284,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Header.js",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "hidden lg:inline-flex items-center gap-1.5 rc-mono text-[0.7rem] uppercase tracking-wider px-4 py-2 border border-[var(--rc-ink)] text-[var(--rc-ink)] hover:bg-[var(--rc-ink)] hover:text-[var(--rc-paper)] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                background: 'var(--rc-circuit)',
                                                animation: 'rc-pulse 2.4s ease-in-out infinite'
                                            },
                                            className: "jsx-b3592d8a946c69f2" + " " + "w-1.5 h-1.5 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this),
                                        "Start a project"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-label": navOpen ? 'Close menu' : 'Open menu',
                                    onClick: ()=>setNavOpen(!navOpen),
                                    style: {
                                        padding: 6,
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: 'var(--rc-ink)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: 38,
                                        minHeight: 38,
                                        flexShrink: 0
                                    },
                                    className: "jsx-b3592d8a946c69f2" + " " + "lg:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        initial: false,
                                        children: navOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                rotate: -90,
                                                opacity: 0
                                            },
                                            animate: {
                                                rotate: 0,
                                                opacity: 1
                                            },
                                            exit: {
                                                rotate: 90,
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.15
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Header.js",
                                                lineNumber: 353,
                                                columnNumber: 182
                                            }, this)
                                        }, "x", false, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 353,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                rotate: 90,
                                                opacity: 0
                                            },
                                            animate: {
                                                rotate: 0,
                                                opacity: 1
                                            },
                                            exit: {
                                                rotate: -90,
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.15
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Header.js",
                                                lineNumber: 354,
                                                columnNumber: 182
                                            }, this)
                                        }, "m", false, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 354,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.js",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Header.js",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.js",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b3592d8a946c69f2" + " " + "w-full bg-[var(--rc-ink)] text-white border-b border-[var(--rc-circuit)] shadow-md py-1.5 sm:py-2.5 px-2.5 sm:px-6 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b3592d8a946c69f2" + " " + "max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-1.5 sm:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b3592d8a946c69f2" + " " + "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b3592d8a946c69f2" + " " + "rc-via rc-via-pulse w-1.5 h-1.5 sm:w-2 sm:h-2 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b3592d8a946c69f2" + " " + "rc-mono text-[0.65rem] sm:text-xs md:text-sm font-semibold tracking-tight sm:tracking-wide",
                                            children: "Mohali’s #1 Web Agency — Fixed Price & 90+ PageSpeed Guaranteed"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b3592d8a946c69f2" + " " + "flex items-center gap-1.5 sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+917009646377",
                                            onClick: ()=>trackConversion('call'),
                                            className: "jsx-b3592d8a946c69f2" + " " + "inline-flex items-center gap-1 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white text-[var(--rc-ink)] rc-mono text-[0.65rem] sm:text-xs font-bold hover:bg-[var(--rc-paper)] transition-all transform hover:scale-105 shadow-md rc-btn-call",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiPhoneLine"], {
                                                    size: 11,
                                                    className: "text-[var(--rc-trace)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Header.js",
                                                    lineNumber: 376,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-b3592d8a946c69f2" + " " + "hidden xs:inline",
                                                    children: "Call: "
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Header.js",
                                                    lineNumber: 377,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-b3592d8a946c69f2",
                                                    children: "70096-46377"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Header.js",
                                                    lineNumber: 377,
                                                    columnNumber: 65
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/917009646377?text=Hello%20RC%20Tech%20Solutions",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            onClick: ()=>trackConversion('whatsapp'),
                                            className: "jsx-b3592d8a946c69f2" + " " + "inline-flex items-center gap-1 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#25D366] text-white rc-mono text-[0.65rem] sm:text-xs font-bold hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-md rc-btn-whatsapp",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiWhatsappLine"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Header.js",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-b3592d8a946c69f2",
                                                    children: "WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Header.js",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Header.js",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Header.js",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Header.js",
                            lineNumber: 363,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.js",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Header.js",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileNav, {
                open: navOpen,
                onClose: ()=>setNavOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/components/Header.js",
                lineNumber: 395,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Header.js",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_s1(AdvancedHeader, "5rTLv7rSSvNlwQqiUHBQZxWqQRo=");
_c1 = AdvancedHeader;
var _c, _c1;
__turbopack_context__.k.register(_c, "MobileNav");
__turbopack_context__.k.register(_c1, "AdvancedHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Recaptcha.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RECAPTCHA_SITE_KEY",
    ()=>RECAPTCHA_SITE_KEY,
    "default",
    ()=>RecaptchaField,
    "useRecaptcha",
    ()=>useRecaptcha
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// app/components/Recaptcha.js
// Shared Google reCAPTCHA v2 checkbox for every public lead form.
// Replaces the old Honeypot pattern site-wide.
//
// Usage:
//   import RecaptchaField, { useRecaptcha } from "./Recaptcha";
//   const { token, reset, onChange, ref } = useRecaptcha();
//   ...
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!token) { setError("Please verify you're not a robot."); return; }
//     ...submit, then reset() the widget so it can be used again on error...
//   };
//   ...
//   <RecaptchaField recaptchaRef={ref} onChange={onChange} />
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-google-recaptcha/lib/esm/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const RECAPTCHA_SITE_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeZlYMtAAAAAHwInLlu_0oT0T69132GMd97LeUU";
function useRecaptcha() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRecaptcha.useCallback[onChange]": (t)=>setToken(t)
    }["useRecaptcha.useCallback[onChange]"], []);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRecaptcha.useCallback[reset]": ()=>{
            ref.current?.reset();
            setToken(null);
        }
    }["useRecaptcha.useCallback[reset]"], []);
    return {
        ref,
        token,
        onChange,
        reset
    };
}
_s(useRecaptcha, "zzs+flniGjjyl1XaJSByJka9DNE=");
function RecaptchaField({ recaptchaRef, onChange, className = "", size }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex justify-center w-full overflow-hidden ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            ref: recaptchaRef,
            sitekey: RECAPTCHA_SITE_KEY,
            onChange: onChange,
            onExpired: ()=>onChange(null),
            size: size
        }, void 0, false, {
            fileName: "[project]/app/components/Recaptcha.js",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Recaptcha.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = RecaptchaField;
var _c;
__turbopack_context__.k.register(_c, "RecaptchaField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/SmoothProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// SmoothProvider — safe version:
// 1. Custom magnetic cursor (desktop pointer devices only)
// 2. Global scroll progress bar
// 3. NO aggressive DOM mutation for scroll reveals — those are handled per-component
//    via Framer Motion whileInView, which is already in place on section cards.
//    The previous approach of adding opacity:0 globally was causing invisible text.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function SmoothProvider({ children }) {
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorDotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothProvider.useEffect": ()=>{
            // ── Custom cursor (desktop pointer devices only) ──────────────────────
            const mq = window.matchMedia('(pointer: fine)');
            if (!mq.matches) return;
            const cursor = cursorRef.current;
            const dot = cursorDotRef.current;
            if (!cursor || !dot) return;
            let cx = 0, cy = 0, mx = 0, my = 0, raf, visible = false;
            const onMove = {
                "SmoothProvider.useEffect.onMove": (e)=>{
                    mx = e.clientX;
                    my = e.clientY;
                    // Dot snaps immediately
                    dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
                    if (!visible) {
                        visible = true;
                        cursor.style.opacity = '1';
                        dot.style.opacity = '1';
                        cx = mx;
                        cy = my;
                    }
                }
            }["SmoothProvider.useEffect.onMove"];
            const tick = {
                "SmoothProvider.useEffect.tick": ()=>{
                    cx = lerp(cx, mx, 0.1);
                    cy = lerp(cy, my, 0.1);
                    cursor.style.transform = `translate(${cx - 18}px, ${cy - 18}px)`;
                    raf = requestAnimationFrame(tick);
                }
            }["SmoothProvider.useEffect.tick"];
            const bindHover = {
                "SmoothProvider.useEffect.bindHover": ()=>{
                    document.querySelectorAll('a, button, [role="button"]').forEach({
                        "SmoothProvider.useEffect.bindHover": (el)=>{
                            el.addEventListener('mouseenter', {
                                "SmoothProvider.useEffect.bindHover": ()=>cursor.classList.add('rc-cursor-hover')
                            }["SmoothProvider.useEffect.bindHover"]);
                            el.addEventListener('mouseleave', {
                                "SmoothProvider.useEffect.bindHover": ()=>cursor.classList.remove('rc-cursor-hover')
                            }["SmoothProvider.useEffect.bindHover"]);
                        }
                    }["SmoothProvider.useEffect.bindHover"]);
                }
            }["SmoothProvider.useEffect.bindHover"];
            bindHover();
            // Re-bind on new interactive elements (dynamic content)
            const mo = new MutationObserver(bindHover);
            mo.observe(document.body, {
                childList: true,
                subtree: true
            });
            window.addEventListener('mousemove', onMove);
            raf = requestAnimationFrame(tick);
            return ({
                "SmoothProvider.useEffect": ()=>{
                    window.removeEventListener('mousemove', onMove);
                    cancelAnimationFrame(raf);
                    mo.disconnect();
                }
            })["SmoothProvider.useEffect"];
        }
    }["SmoothProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothProvider.useEffect": ()=>{
            // ── Scroll progress bar ───────────────────────────────────────────────
            const bar = document.getElementById('rc-scroll-bar');
            if (!bar) return;
            const onScroll = {
                "SmoothProvider.useEffect.onScroll": ()=>{
                    const total = document.documentElement.scrollHeight - window.innerHeight;
                    bar.style.width = total > 0 ? `${window.scrollY / total * 100}%` : '0%';
                }
            }["SmoothProvider.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "SmoothProvider.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["SmoothProvider.useEffect"];
        }
    }["SmoothProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "rc-scroll-bar",
                "aria-hidden": "true",
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '2px',
                    width: '0%',
                    background: 'linear-gradient(90deg, var(--rc-circuit), var(--rc-signal))',
                    zIndex: 9999,
                    pointerEvents: 'none',
                    transition: 'width 0.08s linear'
                }
            }, void 0, false, {
                fileName: "[project]/app/components/SmoothProvider.js",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                "aria-hidden": "true",
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 9998,
                    pointerEvents: 'none',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    opacity: 0,
                    border: '1.5px solid var(--rc-circuit)',
                    transition: 'width 0.2s, height 0.2s, opacity 0.3s, border-color 0.2s',
                    mixBlendMode: 'multiply'
                }
            }, void 0, false, {
                fileName: "[project]/app/components/SmoothProvider.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorDotRef,
                "aria-hidden": "true",
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 9999,
                    pointerEvents: 'none',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    opacity: 0,
                    background: 'var(--rc-circuit)',
                    transition: 'opacity 0.3s'
                }
            }, void 0, false, {
                fileName: "[project]/app/components/SmoothProvider.js",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SmoothProvider.js",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(SmoothProvider, "RFAdQMZvYIHOuEHC0Ay0J7l0BIQ=");
_c = SmoothProvider;
var _c;
__turbopack_context__.k.register(_c, "SmoothProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/verifyRecaptcha.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/lib/verifyRecaptcha.js
// Call this from a form's submit handler, right after checking the token
// exists, and before writing to SheetDB/Firestore. Returns true/false.
__turbopack_context__.s([
    "verifyRecaptcha",
    ()=>verifyRecaptcha
]);
async function verifyRecaptcha(token) {
    if (!token) return false;
    try {
        const res = await fetch("/api/verify-recaptcha", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token
            })
        });
        const data = await res.json();
        return !!data.success;
    } catch  {
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_0-li6w3._.js.map