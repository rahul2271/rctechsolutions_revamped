"use client";
import { useState } from "react";
import Link from "next/link";
import RecaptchaField, { useRecaptcha } from "../components/Recaptcha";
import { verifyRecaptcha } from "../lib/verifyRecaptcha";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
    const payload = {
      data: {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        budget: formData.get("budget"),
        message: formData.get("message"),
      },
    };
    try {
      const res = await fetch("https://sheetdb.io/api/v1/nac4zyu6aoaoz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) { setSubmitted(true); e.target.reset(); }
      else { setError("Something went wrong. Please email us at business@rctechsolutions.com"); resetCaptcha(); }
    } catch (err) {
      setError("Error: " + err.message);
      resetCaptcha();
    } finally {
      setLoading(false);
    }
  };

  const SERVICES = [
    "Web Development", "E-commerce Development", "SEO Services", "Local SEO",
    "Google Ads Management", "Social Media Management", "Email Marketing",
    "Branding & Design", "Cloud Integration", "AI-Powered Solutions", "Other",
  ];

  const BUDGETS = [
    "Under ₹15,000", "₹15,000 – ₹30,000", "₹30,000 – ₹75,000",
    "₹75,000 – ₹2,00,000", "₹2,00,000+", "Not sure yet",
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-[var(--rc-wire)] rc-grid-bg" style={{ background: "var(--rc-paper)" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <span className="rc-eyebrow block mb-4" style={{ color: "var(--rc-trace)" }}>Let's talk</span>
          <h1 className="rc-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[var(--rc-ink)] leading-[1.02] max-w-2xl">
            Start a project with RC Tech.
          </h1>
          <p className="rc-body mt-5 text-lg text-[var(--rc-ink-soft)] max-w-xl leading-relaxed">
            Tell us what you're building and we'll respond with a clear scope and honest timeline — usually within 24 hours.
            Based in Mohali, working across India.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16 grid lg:grid-cols-[1.6fr_1fr] gap-12">
        {/* ── Form ── */}
        <div>
          {submitted ? (
            <div className="rc-blueprint-card p-10 text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(45,95,76,0.12)" }}>
                <span className="text-2xl" style={{ color: "var(--rc-trace)" }}>✓</span>
              </div>
              <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mb-3">Message received</h2>
              <p className="rc-body text-[var(--rc-ink-soft)] leading-relaxed">
                Rahul or a senior team member will review your brief and respond within 24 hours.
                If it's urgent, call us directly: <a href="tel:+917009646377" className="font-medium text-[var(--rc-ink)]">+91 70096 46377</a>
              </p>
              <button onClick={() => setSubmitted(false)} className="mt-6 rc-mono text-xs uppercase tracking-wider px-5 py-2.5 border border-[var(--rc-wire)] text-[var(--rc-ink)] hover:border-[var(--rc-ink)] transition-colors">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="c-name" className="rc-mono text-[0.7rem] uppercase tracking-wider text-[var(--rc-ink)] block mb-1.5">Full name *</label>
                  <input id="c-name" name="name" required placeholder="Rahul Sharma" className="rc-body w-full border border-[var(--rc-wire)] bg-white px-4 py-3 text-sm text-[var(--rc-ink)] placeholder-rc-ink-soft/40 focus:outline-none focus:border-[var(--rc-ink)] transition-colors" />
                </div>
                <div>
                  <label htmlFor="c-email" className="rc-mono text-[0.7rem] uppercase tracking-wider text-[var(--rc-ink)] block mb-1.5">Email *</label>
                  <input id="c-email" type="email" name="email" required placeholder="you@company.com" className="rc-body w-full border border-[var(--rc-wire)] bg-white px-4 py-3 text-sm text-[var(--rc-ink)] placeholder-rc-ink-soft/40 focus:outline-none focus:border-[var(--rc-ink)] transition-colors" />
                </div>
              </div>

              <div>
                <label htmlFor="c-phone" className="rc-mono text-[0.7rem] uppercase tracking-wider text-[var(--rc-ink)] block mb-1.5">Phone number</label>
                <input id="c-phone" type="tel" name="phone" placeholder="+91 98765 43210" className="rc-body w-full border border-[var(--rc-wire)] bg-white px-4 py-3 text-sm text-[var(--rc-ink)] placeholder-rc-ink-soft/40 focus:outline-none focus:border-[var(--rc-ink)] transition-colors" />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="c-service" className="rc-mono text-[0.7rem] uppercase tracking-wider text-[var(--rc-ink)] block mb-1.5">Service needed</label>
                  <select id="c-service" name="service" className="rc-body w-full border border-[var(--rc-wire)] bg-white px-4 py-3 text-sm text-[var(--rc-ink)] focus:outline-none focus:border-[var(--rc-ink)] transition-colors">
                    <option value="">Select a service</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-budget" className="rc-mono text-[0.7rem] uppercase tracking-wider text-[var(--rc-ink)] block mb-1.5">Budget range</label>
                  <select id="c-budget" name="budget" className="rc-body w-full border border-[var(--rc-wire)] bg-white px-4 py-3 text-sm text-[var(--rc-ink)] focus:outline-none focus:border-[var(--rc-ink)] transition-colors">
                    <option value="">Select a range</option>
                    {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="c-message" className="rc-mono text-[0.7rem] uppercase tracking-wider text-[var(--rc-ink)] block mb-1.5">Project brief *</label>
                <textarea id="c-message" name="message" required rows={5} placeholder="Tell us about your project — what you're building, who it's for, and what success looks like." className="rc-body w-full border border-[var(--rc-wire)] bg-white px-4 py-3 text-sm text-[var(--rc-ink)] placeholder-rc-ink-soft/40 focus:outline-none focus:border-[var(--rc-ink)] transition-colors resize-none" />
              </div>

              <RecaptchaField recaptchaRef={recaptchaRef} onChange={onCaptchaChange} />

              {error && <p className="rc-mono text-xs text-red-600">{error}</p>}

              <button type="submit" disabled={loading} className={`rc-mono text-xs uppercase tracking-wider w-full px-6 py-4 text-white transition-colors ${loading ? "bg-[var(--rc-ink-soft)] cursor-not-allowed" : "bg-[var(--rc-ink)] hover:bg-[var(--rc-circuit)]"}`}>
                {loading ? "Sending…" : "Send brief →"}
              </button>
              <p className="rc-mono text-[0.65rem] text-center text-[rgba(42,45,53,0.5)]">We respond within 24 hours. Your details are never shared.</p>
            </form>
          )}
        </div>

        {/* ── Sidebar info ── */}
        <aside className="space-y-6">
          <div className="rc-blueprint-card p-6">
            <p className="rc-eyebrow mb-4" style={{ color: "var(--rc-circuit)" }}>Direct contact</p>
            <address className="not-italic space-y-3 rc-body text-sm text-[var(--rc-ink-soft)]">
              <div>
                <p className="rc-mono text-[0.65rem] uppercase tracking-wider text-[rgba(42,45,53,0.5)] mb-0.5">Phone</p>
                <a href="tel:+917009646377" className="text-[var(--rc-ink)] hover:text-[var(--rc-circuit)] transition-colors font-medium">+91 70096 46377</a>
              </div>
              <div>
                <p className="rc-mono text-[0.65rem] uppercase tracking-wider text-[rgba(42,45,53,0.5)] mb-0.5">Email</p>
                <a href="mailto:business@rctechsolutions.com" className="text-[var(--rc-ink)] hover:text-[var(--rc-circuit)] transition-colors font-medium">business@rctechsolutions.com</a>
              </div>
              <div>
                <p className="rc-mono text-[0.65rem] uppercase tracking-wider text-[rgba(42,45,53,0.5)] mb-0.5">Office</p>
                <p>3126, Sector 82, JLPL Industrial Area<br />Mohali, Punjab 140306</p>
              </div>
              <div>
                <p className="rc-mono text-[0.65rem] uppercase tracking-wider text-[rgba(42,45,53,0.5)] mb-0.5">Hours</p>
                <p>Mon – Fri, 9:00 AM – 6:00 PM IST</p>
              </div>
            </address>
          </div>

          <div className="rc-blueprint-card p-6" style={{ background: "var(--rc-ink)" }}>
            <p className="rc-eyebrow mb-3" style={{ color: "var(--rc-circuit)" }}>What to expect</p>
            <ul className="space-y-2.5 rc-body text-sm text-[rgba(246,242,233,0.7)]">
              {["Response within 24 hours", "Free 20-min strategy call", "Honest scope & timeline", "No lock-in contracts", "Senior team on every project"].map(item => (
                <li key={item} className="flex gap-2.5 items-center">
                  <span className="rc-via flex-shrink-0" style={{ background: "var(--rc-trace)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rc-blueprint-card p-6">
            <p className="rc-eyebrow mb-3 text-[rgba(42,45,53,0.5)]">Or browse first</p>
            <div className="space-y-2">
              {[["Our services", "/services/web-development"], ["Recent work (journal)", "/blogs"], ["About Rahul & the team", "/about"]].map(([label, href]) => (
                <Link key={href} href={href} className="rc-body text-sm text-[var(--rc-ink)] hover:text-[var(--rc-circuit)] transition-colors flex items-center justify-between py-1.5 border-b border-[var(--rc-wire)] last:border-0">
                  {label} <span className="text-[var(--rc-wire)]">→</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
