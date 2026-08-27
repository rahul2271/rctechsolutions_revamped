"use client";

// RC Tech Solutions hero -- the brand's thesis statement.
// Signature device: an animated circuit-trace connecting the headline to a
// live-style "build readout" panel, echoing the literal engineering RC Tech
// does. Display type is Fraunces (editorial weight), body is IBM Plex Sans,
// and the schematic/mono layer (eyebrows, labels, readout) is IBM Plex Mono.

import Image from "next/image";
import { useState } from "react";
import CircuitTrace from "./CircuitTrace";
import RecaptchaField, { useRecaptcha } from "./Recaptcha";
import { verifyRecaptcha } from "../lib/verifyRecaptcha";

export default function HeroSection() {
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const { ref: recaptchaRef, token: captchaToken, onChange: onCaptchaChange, reset: resetCaptcha } = useRecaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setError("Please check the reCAPTCHA box to verify you're human.");
      return;
    }
    const form = e.target;
    const email = form.email.value;
    setSubmitting(true);
    setSuccessMessage("");
    setError("");

    const captchaOk = await verifyRecaptcha(captchaToken);
    if (!captchaOk) {
      setError("reCAPTCHA verification failed. Please try again.");
      resetCaptcha();
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("https://sheetdb.io/api/v1/7tneevoxn7zax", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { email } }),
      });
      if (res.ok) {
        setShowModal(true);
        form.reset();
        setSuccessMessage("Thank you! We'll be in touch shortly.");
      } else {
        setError("Submission failed. Please try again.");
        resetCaptcha();
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      resetCaptcha();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <header
        className="relative overflow-hidden border-b border-[var(--rc-wire)]"
        style={{ background: "var(--rc-paper)" }}
        role="banner"
      >
        {/* Subtle schematic grid, top portion only */}
        <div className="absolute inset-x-0 top-0 h-[420px] rc-grid-bg pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">

            {/* Left: thesis */}
            <div className="max-w-xl">
              <div className="flex items-center gap-2.5 mb-6 rc-animate-in rc-animate-in-1">
                <span className="rc-via rc-via-pulse" />
                <span className="rc-eyebrow" style={{ color: "var(--rc-trace)" }}>
                  RC Tech Solutions · Mohali, India — Serving Clients Worldwide
                </span>
              </div>

              <h1 className="rc-display text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] leading-[0.98] font-semibold text-[var(--rc-ink)] rc-animate-in rc-animate-in-2">
                We engineer
                <br />
                websites that
                <br />
                <span className="italic" style={{ color: "var(--rc-circuit)" }}>
                  actually convert.
                </span>
              </h1>

              <p className="rc-body mt-7 text-[1.05rem] leading-relaxed text-[var(--rc-ink-soft)] max-w-md rc-animate-in rc-animate-in-3">
                Fast, SEO-built websites and growth campaigns for founders who'd rather
                ship than wait. Based in Mohali, India — building for clients across
                India, the USA, UK, Canada and Australia, on your time zone.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 rc-animate-in rc-animate-in-3">
                {["🇮🇳 India", "🇺🇸 USA", "🇬🇧 UK", "🇨🇦 Canada", "🇦🇺 Australia"].map((item) => (
                  <span key={item} className="rc-mono text-[0.68rem] text-[var(--rc-ink-soft)]">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                {["Next.js & React", "Core Web Vitals tuned", "SEO-built from day one"].map((item) => (
                  <span key={item} className="rc-mono text-[0.7rem] text-[var(--rc-ink-soft)] flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full" style={{ background: "var(--rc-trace)" }} />
                    {item}
                  </span>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-9 flex flex-col gap-3 max-w-md rc-animate-in rc-animate-in-4" aria-label="Free consultation form">
                <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="hero-email" className="sr-only">Your business email address</label>
                <input
                  id="hero-email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  disabled={submitting}
                  className="rc-body w-full rounded-none border border-[var(--rc-ink)] bg-white px-4 py-3 text-sm text-[var(--rc-ink)] placeholder-rc-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-[var(--rc-circuit)] transition"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className={`rc-mono text-xs font-medium uppercase tracking-wider px-6 py-3.5 text-white transition whitespace-nowrap ${
                    submitting ? "bg-[var(--rc-circuit-dim)] cursor-not-allowed" : "bg-[var(--rc-ink)] hover:bg-[var(--rc-circuit)] active:scale-[0.98]"
                  }`}
                >
                  {submitting ? "Sending…" : "Get free quote →"}
                </button>
                </div>

                <RecaptchaField recaptchaRef={recaptchaRef} onChange={onCaptchaChange} className="justify-start" />
              </form>

              {error && (
                <p role="alert" className="mt-3 text-sm text-red-600 rc-mono">{error}</p>
              )}

              {successMessage && (
                <p role="alert" className="mt-3 text-sm text-[var(--rc-trace)] rc-mono">{successMessage}</p>
              )}

              <p className="mt-4 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.6)]">
                No spam. We respond within 24 hours.
              </p>
            </div>

            {/* Right: live build readout panel — the signature device */}
            <div className="relative">
              <div className="rc-blueprint-card p-6 sm:p-7">
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-[var(--rc-wire)]">
                  <span className="rc-eyebrow text-[var(--rc-ink)]">Build readout</span>
                  <span className="flex items-center gap-1.5 rc-mono text-[0.65rem]" style={{ color: "var(--rc-trace)" }}>
                    <span className="w-1.5 h-1.5 rounded-full rc-via-pulse" style={{ background: "var(--rc-trace)" }} />
                    live
                  </span>
                </div>

                <dl className="space-y-4">
                  {[
                    ["Avg. Lighthouse score", "96 / 100"],
                    ["Avg. time to first byte", "0.31s"],
                    ["Projects shipped", "50+"],
                    ["Client retention", "92%"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-baseline justify-between">
                      <dt className="rc-body text-sm text-[var(--rc-ink-soft)]">{label}</dt>
                      <dd className="rc-mono text-lg font-medium text-[var(--rc-ink)]">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 pt-5 border-t border-[var(--rc-wire)]">
                  <Image
                    src="/speedinsights.png"
                    alt="RC Tech Solutions — web development and digital marketing"
                    width={400}
                    height={260}
                    priority
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Floating via-node accents */}
              <div className="absolute -top-3 -left-3 rc-via" />
              <div className="absolute -bottom-3 -right-3 rc-via" style={{ background: "var(--rc-trace)" }} />
            </div>
          </div>
        </div>

        {/* Signature trace divider at the bottom of the hero */}
        <CircuitTrace variant="horizontal" className="mt-4" />
      </header>

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-heading"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rc-blueprint-card p-8 max-w-sm mx-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(45,95,76,0.1)" }}>
              <span style={{ color: "var(--rc-trace)" }} className="text-xl">✓</span>
            </div>
            <h2 id="modal-heading" className="rc-display text-lg font-semibold text-[var(--rc-ink)] mb-2">
              We've got your email
            </h2>
            <p className="rc-body text-sm text-[var(--rc-ink-soft)] mb-5">
              Our team will reach out within 24 hours to schedule your free strategy call.
            </p>
            <button
              className="rc-mono text-xs uppercase tracking-wider px-5 py-2.5 bg-[var(--rc-ink)] text-white hover:bg-[var(--rc-circuit)] transition"
              onClick={() => setShowModal(false)}
              autoFocus
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
