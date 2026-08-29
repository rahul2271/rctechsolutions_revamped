// "use client";

// // Site-wide bounce-reduction popup.
// //
// // Why this design, specifically:
// // - Value-first, not a discount/spam popup: it offers the *free instant
// //   website audit tool that already exists at /website-audit*, so a visitor
// //   who engages gets something real and useful, not a "10% off, give us your
// //   email" wall. That's what keeps it from feeling cheap or from attracting
// //   junk leads.
// // - Multi-trigger so it works on both desktop and mobile:
// //     1) Desktop exit-intent — mouse leaves through the top of the viewport
// //        (the classic "closing the tab" gesture).
// //     2) Mobile/touch fallback — scroll depth past 55%, since there's no
// //        mouseleave signal on touch devices.
// //     3) Time-on-page fallback (30s) for readers who never trigger the above.
// // - Frequency-capped: never shows twice in the same session, and if
// //   dismissed, waits 14 days before trying again. If the visitor converts
// //   (submits the email capture, or clicks through to the audit tool), it
// //   won't show again for 90 days. This is what keeps it from becoming an
// //   annoyance that increases bounce rate instead of reducing it.
// // - Suppressed entirely on pages where it would be redundant or rude:
// //   the audit tool itself, contact/thank-you pages, and legal pages.
// // - A minimum 8s dwell time gates ALL triggers, so it never fires on someone
// //   who is clearly just bouncing immediately — that visitor was never going
// //   to convert and showing a popup to them only reinforces the bounce.

// import { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { AnimatePresence, motion } from "framer-motion";

// const STORAGE_KEY = "rc_exit_popup_v1";
// const MIN_DWELL_MS = 8000;
// const TIME_FALLBACK_MS = 30000;
// const SCROLL_DEPTH_TRIGGER = 0.55;
// const DISMISS_COOLDOWN_DAYS = 14;
// const CONVERT_COOLDOWN_DAYS = 90;
// const SHEETDB_ENDPOINT = "https://sheetdb.io/api/v1/7tneevoxn7zax";

// const EXCLUDED_PREFIXES = [
//   "/website-audit",
//   "/contact",
//   "/thank-you",
//   "/privacy-policy",
//   "/terms-of-services",
//   "/return-policy",
//   "/admin",
// ];

// function readState() {
//   try {
//     return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
//   } catch {
//     return {};
//   }
// }

// function writeState(patch) {
//   try {
//     const current = readState();
//     localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...current, ...patch }));
//   } catch {
//     /* localStorage unavailable — fail silently, popup just won't be capped */
//   }
// }

// function daysAgo(timestamp) {
//   if (!timestamp) return Infinity;
//   return (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
// }

// export default function ExitIntentPopup() {
//   const pathname = usePathname();
//   const [visible, setVisible] = useState(false);
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState(""); // "", "loading", "success", "error"
//   const shownRef = useRef(false);
//   const sessionShownRef = useRef(false);

//   const isExcluded = EXCLUDED_PREFIXES.some((p) => pathname?.startsWith(p));

//   useEffect(() => {
//     if (isExcluded) return;

//     const state = readState();
//     if (state.converted && daysAgo(state.convertedAt) < CONVERT_COOLDOWN_DAYS) return;
//     if (state.dismissedAt && daysAgo(state.dismissedAt) < DISMISS_COOLDOWN_DAYS) return;
//     if (sessionStorage.getItem(STORAGE_KEY + "_session")) return;

//     let dwellOk = false;
//     let cleanupFns = [];

//     const dwellTimer = setTimeout(() => {
//       dwellOk = true;
//     }, MIN_DWELL_MS);

//     function trigger(reason) {
//       if (shownRef.current || !dwellOk) return;
//       shownRef.current = true;
//       sessionShownRef.current = true;
//       try {
//         sessionStorage.setItem(STORAGE_KEY + "_session", "1");
//       } catch {}
//       setVisible(true);
//       cleanupFns.forEach((fn) => fn());
//     }

//     function onMouseOut(e) {
//       if (e.clientY <= 0 && !e.relatedTarget) trigger("exit-intent");
//     }

//     function onScroll() {
//       const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//       if (scrollable <= 0) return;
//       const depth = window.scrollY / scrollable;
//       if (depth >= SCROLL_DEPTH_TRIGGER) trigger("scroll-depth");
//     }

//     const timeFallback = setTimeout(() => trigger("time-on-page"), TIME_FALLBACK_MS);

//     document.addEventListener("mouseout", onMouseOut);
//     window.addEventListener("scroll", onScroll, { passive: true });

//     cleanupFns = [
//       () => document.removeEventListener("mouseout", onMouseOut),
//       () => window.removeEventListener("scroll", onScroll),
//       () => clearTimeout(timeFallback),
//     ];

//     return () => {
//       clearTimeout(dwellTimer);
//       clearTimeout(timeFallback);
//       document.removeEventListener("mouseout", onMouseOut);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, [isExcluded, pathname]);

//   function handleClose() {
//     setVisible(false);
//     writeState({ dismissedAt: Date.now() });
//   }

//   function handleAuditClick() {
//     writeState({ dismissedAt: Date.now() });
//     setVisible(false);
//   }

//   async function handleEmailSubmit(e) {
//     e.preventDefault();
//     if (!email) return;
//     setStatus("loading");
//     try {
//       const res = await fetch(SHEETDB_ENDPOINT, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           data: { email, source: "exit_intent_popup", page: pathname },
//         }),
//       });
//       if (res.ok) {
//         setStatus("success");
//         writeState({ converted: true, convertedAt: Date.now() });
//         setTimeout(() => setVisible(false), 2500);
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     }
//   }

//   if (isExcluded) return null;

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="exit-popup-heading"
//           onClick={handleClose}
//         >
//           <motion.div
//             className="relative w-full max-w-md rc-blueprint-card bg-[var(--rc-paper)] p-7 sm:p-8"
//             initial={{ scale: 0.92, y: 24, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.92, y: 24, opacity: 0 }}
//             transition={{ type: "spring", damping: 22, stiffness: 260 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={handleClose}
//               aria-label="Close"
//               className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-lg text-[var(--rc-ink-soft)] hover:text-[var(--rc-circuit)] transition"
//             >
//               ×
//             </button>

//             <span className="rc-eyebrow" style={{ color: "var(--rc-trace)" }}>
//               Before you go
//             </span>

//             <h2
//               id="exit-popup-heading"
//               className="rc-display text-2xl sm:text-[1.7rem] font-semibold text-[var(--rc-ink)] mt-2 leading-tight"
//             >
//               Want to know what's actually slowing your site down?
//             </h2>

//             <p className="rc-body text-sm text-[var(--rc-ink-soft)] mt-3 leading-relaxed">
//               Run our free instant audit — real PageSpeed, SEO, and Core Web
//               Vitals data on your own site in under a minute. No sales call,
//               no obligation, just the numbers.
//             </p>

//             <Link
//               href="/website-audit"
//               onClick={handleAuditClick}
//               className="rc-mono mt-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider px-6 py-3.5 text-white bg-[var(--rc-ink)] hover:bg-[var(--rc-circuit)] transition"
//             >
//               Run my free audit →
//             </Link>

//             <div className="mt-5 pt-5 border-t border-[var(--rc-wire)]">
//               {status === "success" ? (
//                 <p className="rc-mono text-xs text-[var(--rc-trace)]">
//                   Got it — check your inbox shortly.
//                 </p>
//               ) : (
//                 <form onSubmit={handleEmailSubmit} className="flex flex-col gap-2">
//                   <label htmlFor="exit-popup-email" className="rc-mono text-[0.68rem] text-[var(--rc-ink-soft)]">
//                     Not now — just email me the SEO checklist instead
//                   </label>
//                   <div className="flex gap-2">
//                     <input
//                       id="exit-popup-email"
//                       type="email"
//                       required
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="you@company.com"
//                       className="rc-body flex-1 min-w-0 border border-[var(--rc-wire)] bg-white px-3 py-2.5 text-sm text-[var(--rc-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--rc-circuit)]"
//                     />
//                     <button
//                       type="submit"
//                       disabled={status === "loading"}
//                       className="rc-mono text-[0.68rem] font-medium uppercase tracking-wider px-4 py-2.5 border border-[var(--rc-ink)] text-[var(--rc-ink)] hover:bg-[var(--rc-ink)] hover:text-white transition whitespace-nowrap"
//                     >
//                       {status === "loading" ? "Sending…" : "Send"}
//                     </button>
//                   </div>
//                   {status === "error" && (
//                     <p className="text-xs text-red-600">Could not submit — please try again.</p>
//                   )}
//                 </form>
//               )}
//             </div>

//             <p className="rc-mono text-[0.62rem] text-[rgba(42,45,53,0.55)] mt-4">
//               Serving founders in India, the USA, UK, Canada & Australia. No spam, ever.
//             </p>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }




"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "rc_exit_popup_v1";
const MIN_DWELL_MS = 8000;
const TIME_FALLBACK_MS = 30000;
const SCROLL_DEPTH_TRIGGER = 0.55;
const DISMISS_COOLDOWN_DAYS = 14;
const CONVERT_COOLDOWN_DAYS = 90;
const SHEETDB_ENDPOINT = "https://sheetdb.io/api/v1/7tneevoxn7zax";

const EXCLUDED_PREFIXES = [
  "/website-audit",
  "/contact",
  "/thank-you",
  "/privacy-policy",
  "/terms-of-services",
  "/return-policy",
  "/admin",
];

function readState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeState(patch) {
  try {
    const current = readState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...current, ...patch }));
  } catch {
    /* localStorage unavailable */
  }
}

function daysAgo(timestamp) {
  if (!timestamp) return Infinity;
  return (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
}

export default function ExitIntentPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); 
  const shownRef = useRef(false);
  const sessionShownRef = useRef(false);

  const isExcluded = EXCLUDED_PREFIXES.some((p) => pathname?.startsWith(p));

  useEffect(() => {
    if (isExcluded) return;

    const state = readState();
    if (state.converted && daysAgo(state.convertedAt) < CONVERT_COOLDOWN_DAYS) return;
    if (state.dismissedAt && daysAgo(state.dismissedAt) < DISMISS_COOLDOWN_DAYS) return;
    if (sessionStorage.getItem(STORAGE_KEY + "_session")) return;

    let dwellOk = false;
    let cleanupFns = [];

    const dwellTimer = setTimeout(() => {
      dwellOk = true;
    }, MIN_DWELL_MS);

    function trigger(reason) {
      if (shownRef.current || !dwellOk) return;
      shownRef.current = true;
      sessionShownRef.current = true;
      try {
        sessionStorage.setItem(STORAGE_KEY + "_session", "1");
      } catch {}
      setVisible(true);
      cleanupFns.forEach((fn) => fn());
    }

    function onMouseOut(e) {
      if (e.clientY <= 0 && !e.relatedTarget) trigger("exit-intent");
    }

    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const depth = window.scrollY / scrollable;
      if (depth >= SCROLL_DEPTH_TRIGGER) trigger("scroll-depth");
    }

    const timeFallback = setTimeout(() => trigger("time-on-page"), TIME_FALLBACK_MS);

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });

    cleanupFns = [
      () => document.removeEventListener("mouseout", onMouseOut),
      () => window.removeEventListener("scroll", onScroll),
      () => clearTimeout(timeFallback),
    ];

    return () => {
      clearTimeout(dwellTimer);
      clearTimeout(timeFallback);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isExcluded, pathname]);

  function handleClose() {
    setVisible(false);
    writeState({ dismissedAt: Date.now() });
  }

  function handleAuditClick() {
    writeState({ dismissedAt: Date.now() });
    setVisible(false);
  }

  async function handleEmailSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch(SHEETDB_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: { email, source: "exit_intent_popup", page: pathname },
        }),
      });
      if (res.ok) {
        setStatus("success");
        writeState({ converted: true, convertedAt: Date.now() });
        setTimeout(() => setVisible(false), 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (isExcluded) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          onClick={handleClose}
        >
          <motion.div
            /* THE FIX: Using w-[92vw] forces it to take up 92% of the screen on mobile, overriding any shrinking constraints */
            className="relative w-[92vw] sm:w-[480px] max-w-[480px] max-h-[90dvh] overflow-y-auto bg-white rounded-[24px] shadow-2xl p-6 sm:p-8"
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Red Dot Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff4a22]"></span>
              <span className="text-[11px] font-bold tracking-widest text-[#ff4a22] uppercase">
                Limited Time Opportunity
              </span>
            </div>

            <h2 className="text-[22px] sm:text-[28px] font-extrabold text-gray-900 leading-[1.1] pr-4">
              Want to know what's actually slowing your site down?
            </h2>

            <p className="text-[15px] text-gray-600 mt-3 leading-relaxed">
              Run our free instant audit — real PageSpeed, SEO, and Core Web
              Vitals data on your own site in under a minute. No sales call,
              no obligation, just the numbers.
            </p>

            <Link
              href="/website-audit"
              onClick={handleAuditClick}
              className="mt-5 w-full flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-wider px-6 py-4 rounded-xl text-white bg-[#254F42] hover:bg-[#1a3a30] shadow-md transition text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Run my free audit →
            </Link>

            <div className="mt-6 pt-5 border-t border-gray-100">
              {status === "success" ? (
                <p className="text-sm font-medium text-[#254F42] text-center py-2 bg-[#254F42]/10 rounded-lg">
                  Got it — check your inbox shortly.
                </p>
              ) : (
                <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3">
                  <label htmlFor="exit-popup-email" className="text-[13px] font-medium text-gray-700">
                    Not now — just email me the SEO checklist instead
                  </label>
                  
                  <div className="flex flex-col gap-2.5">
                    <input
                      id="exit-popup-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#254F42] focus:border-transparent transition"
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full text-[13px] font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition disabled:opacity-50"
                    >
                      {status === "loading" ? "Sending…" : "Send Checklist"}
                    </button>
                  </div>
                  {status === "error" && (
                    <p className="text-xs font-medium text-red-500 mt-1">Could not submit — please try again.</p>
                  )}
                </form>
              )}
            </div>

            <p className="text-[11px] text-gray-400 mt-5 text-center leading-relaxed font-mono">
              No spam · Transparent data · Based in Mohali, Punjab
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
