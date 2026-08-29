"use client";

// Site-wide bounce-reduction popup.
//
// Why this design, specifically:
// - Value-first, not a discount/spam popup: it offers the free instant
//   website audit tool that already exists at /website-audit, so a visitor
//   who engages gets something real and useful, not a "10% off, give us your
//   email" wall.
// - Multi-trigger so it works on both desktop and mobile:
//     1) Desktop exit-intent — mouse leaves through the top of the viewport.
//     2) Mobile/touch fallback — scroll depth past 55%, since there's no
//        mouseleave signal on touch devices.
//     3) Time-on-page fallback (30s) for readers who never trigger the above.
// - Frequency-capped: never shows twice in the same session, and if
//   dismissed, waits 14 days before trying again. If the visitor converts
//   (submits the email capture, or clicks through to the audit tool), it
//   won't show again for 90 days.
// - Suppressed entirely on pages where it would be redundant or rude: the
//   audit tool itself, contact/thank-you pages, and legal pages.
// - A minimum 8s dwell time gates ALL triggers, so it never fires on someone
//   who is clearly just bouncing immediately.

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// The site header is `sticky top-0 z-[998]` (see Header.js), and its mobile
// menu overlay sits at z-index 9990. This popup must render above BOTH or
// the header bar bleeds through on top of it. z-[9995] clears the header
// and the mobile menu, while staying under the decorative cursor ring
// (z-[9999], pointer-events:none, harmless either way).
const POPUP_Z = "z-[9995]";

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
    /* localStorage unavailable — fail silently, popup just won't be capped */
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
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"
  const shownRef = useRef(false);

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

    function trigger() {
      if (shownRef.current || !dwellOk) return;
      shownRef.current = true;
      try {
        sessionStorage.setItem(STORAGE_KEY + "_session", "1");
      } catch {}
      setVisible(true);
      cleanupFns.forEach((fn) => fn());
    }

    function onMouseOut(e) {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    }

    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const depth = window.scrollY / scrollable;
      if (depth >= SCROLL_DEPTH_TRIGGER) trigger();
    }

    const timeFallback = setTimeout(trigger, TIME_FALLBACK_MS);

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

  function handleServiceLinkClick() {
    writeState({ dismissedAt: Date.now() });
    setVisible(false);
  }

  async function handleLeadSubmit(e) {
    e.preventDefault();
    if (!email && !phone) return;
    setStatus("loading");
    try {
      const res = await fetch(SHEETDB_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: { email, phone, source: "exit_intent_popup", page: pathname },
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
          className={`fixed inset-0 ${POPUP_Z} flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-popup-heading"
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-[440px] max-h-[90dvh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8"
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3 pr-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff4a22] shrink-0"></span>
              <span className="text-[11px] font-bold tracking-widest text-[#ff4a22] uppercase">
                Free Consultation
              </span>
            </div>

            <h2
              id="exit-popup-heading"
              className="text-[21px] sm:text-[26px] font-extrabold text-gray-900 leading-[1.2] pr-6"
            >
              Building a website? Let&apos;s talk before you go.
            </h2>

            <p className="text-[14px] sm:text-[15px] text-gray-600 mt-3 leading-relaxed">
              Fixed-price, SEO-built websites with a 90+ PageSpeed guarantee.
              Leave your email or phone and we&apos;ll reach out — no sales
              pressure, just a straight answer on scope and pricing.
            </p>

            <div className="mt-5">
              {status === "success" ? (
                <p className="text-sm font-medium text-[#254F42] text-center py-3 bg-[#254F42]/10 rounded-lg">
                  Got it — we&apos;ll be in touch shortly.
                </p>
              ) : (
                <form onSubmit={handleLeadSubmit} className="flex flex-col gap-3">
                  <label htmlFor="exit-popup-email" className="sr-only">Email address</label>
                  <input
                    id="exit-popup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#254F42] focus:border-transparent transition"
                  />

                  <label htmlFor="exit-popup-phone" className="sr-only">Phone number</label>
                  <input
                    id="exit-popup-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210 (optional)"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#254F42] focus:border-transparent transition"
                  />

                  <button
                    type="submit"
                    disabled={status === "loading" || (!email && !phone)}
                    className="w-full text-[13px] font-bold uppercase tracking-wider px-6 py-4 rounded-xl text-white bg-[#254F42] hover:bg-[#1a3a30] shadow-md transition disabled:opacity-50"
                  >
                    {status === "loading" ? "Sending…" : "Get My Free Quote"}
                  </button>
                  {status === "error" && (
                    <p className="text-xs font-medium text-red-500">Could not submit — please try again.</p>
                  )}
                </form>
              )}
            </div>

            <div className="mt-5 pt-5 border-t border-gray-100 text-center">
              <Link
                href="/services/web-development"
                onClick={handleServiceLinkClick}
                className="text-[13px] font-semibold text-[#254F42] hover:text-[#ff4a22] underline underline-offset-2 transition"
              >
                Or see our Web Development services →
              </Link>
            </div>

            <p className="text-[11px] text-gray-400 mt-5 text-center leading-relaxed font-mono">
              No spam · Based in Mohali, Punjab
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
