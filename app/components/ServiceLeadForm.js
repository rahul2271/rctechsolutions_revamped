"use client";

// Reusable lead-capture form for service pages -- now in brand voice.
// Wired to the same SheetDB endpoint as the main contact form, tagged with
// `service`, `source`, and `submittedAt` fields so submissions are traceable per page.

import { useState } from "react";
import RecaptchaField, { useRecaptcha } from "./Recaptcha";
import { verifyRecaptcha } from "../lib/verifyRecaptcha";

const SHEETDB_ENDPOINT = "https://sheetdb.io/api/v1/7tneevoxn7zax";

export default function ServiceLeadForm({
  serviceName,
  heading,
  subheading,
  badge = "Free 20-min strategy call",
  ctaLabel = "Get my free quote",
}) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { ref: recaptchaRef, token: captchaToken, onChange: onCaptchaChange, reset: resetCaptcha } = useRecaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setError("Please check the reCAPTCHA box to verify you're human.");
      return;
    }

    setLoading(true);
    setError("");

    const captchaOk = await verifyRecaptcha(captchaToken);
    if (!captchaOk) {
      setError("reCAPTCHA verification failed. Please try again.");
      resetCaptcha();
      setLoading(false);
      return;
    }

    const formData = new FormData(e.target);
    const formFillTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const payload = {
      data: {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        message: formData.get("message") || "",
        service: serviceName,
        source: typeof window !== "undefined" ? window.location.pathname : "",
        submittedAt: formFillTime
      },
    };

    try {
      const res = await fetch(SHEETDB_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setError("Something went wrong. Please try again or call us directly.");
        resetCaptcha();
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      resetCaptcha();
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rc-blueprint-card p-8 text-center" style={{ background: "var(--rc-paper)" }}>
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(45,95,76,0.12)" }}>
          <span style={{ color: "var(--rc-trace)" }} className="text-xl">✓</span>
        </div>
        <h3 className="rc-display text-lg font-semibold text-[var(--rc-ink)] mb-2">Request received!</h3>
        <p className="rc-body text-sm text-[var(--rc-ink-soft)]">
          Our team will reach out within 24 hours to discuss your {serviceName.toLowerCase()} project.
        </p>
      </div>
    );
  }

  return (
    <div
      id="get-quote"
      className="rc-blueprint-card p-6 sm:p-7 scroll-mt-24"
      style={{ background: "var(--rc-paper)" }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="rc-via rc-via-pulse" />
        <span className="rc-eyebrow" style={{ color: "var(--rc-trace)" }}>{badge}</span>
      </div>

      <h3 className="rc-display text-xl sm:text-2xl font-semibold text-[var(--rc-ink)] leading-snug">
        {heading}
      </h3>
      <p className="rc-body mt-2 text-sm text-[var(--rc-ink-soft)] leading-relaxed">{subheading}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
        <div className="grid sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={`${serviceName}-name`} className="sr-only">Full name</label>
            <input
              id={`${serviceName}-name`}
              type="text"
              name="name"
              required
              placeholder="Your name *"
              className="rc-body w-full rounded-none border border-[var(--rc-wire)] px-4 py-3 text-sm text-[var(--rc-ink)] placeholder-rc-ink-soft/40 bg-white focus:outline-none focus:border-[var(--rc-circuit)] transition-colors"
            />
          </div>
          <div>
            <label htmlFor={`${serviceName}-phone`} className="sr-only">Phone number</label>
            <input
              id={`${serviceName}-phone`}
              type="tel"
              name="phone"
              required
              placeholder="Phone number *"
              className="rc-body w-full rounded-none border border-[var(--rc-wire)] px-4 py-3 text-sm text-[var(--rc-ink)] placeholder-rc-ink-soft/40 bg-white focus:outline-none focus:border-[var(--rc-circuit)] transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${serviceName}-email`} className="sr-only">Email address</label>
          <input
            id={`${serviceName}-email`}
            type="email"
            name="email"
            required
            placeholder="Email *"
            className="rc-body w-full rounded-none border border-[var(--rc-wire)] px-4 py-3 text-sm text-[var(--rc-ink)] placeholder-rc-ink-soft/40 bg-white focus:outline-none focus:border-[var(--rc-circuit)] transition-colors"
          />
        </div>

        <div>
          <label htmlFor={`${serviceName}-message`} className="sr-only">Project details</label>
          <textarea
            id={`${serviceName}-message`}
            name="message"
            rows={3}
            placeholder={`Tell us a bit about your ${serviceName.toLowerCase()} needs (optional)`}
            className="rc-body w-full rounded-none border border-[var(--rc-wire)] px-4 py-3 text-sm text-[var(--rc-ink)] placeholder-rc-ink-soft/40 bg-white focus:outline-none focus:border-[var(--rc-circuit)] transition-colors resize-none"
          />
        </div>

        <RecaptchaField recaptchaRef={recaptchaRef} onChange={onCaptchaChange} className="mt-1" />

        {error && <p className="rc-mono text-xs text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`rc-mono text-xs uppercase tracking-wider w-full px-6 py-3.5 text-white transition ${
            loading ? "bg-[var(--rc-circuit-dim)] cursor-not-allowed" : "bg-[var(--rc-ink)] hover:bg-[var(--rc-circuit)] active:scale-[0.98]"
          }`}
        >
          {loading ? "Sending…" : ctaLabel}
        </button>

        <p className="text-center rc-mono text-[0.65rem] text-[rgba(42,45,53,0.5)]">
          No spam, ever. We respond within 24 hours.
        </p>
      </form>
    </div>
  );
}