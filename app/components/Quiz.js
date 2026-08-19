"use client";

// Business diagnostic quiz — collects lead info, asks about business needs,
// recommends specific RC Tech services with real pricing.
// Brand-aligned: rc-ink/paper/circuit palette, blueprint cards, mono eyebrows.

import { useState } from "react";
import { useRouter } from "next/navigation";
import RecaptchaField, { useRecaptcha } from "./Recaptcha";
import { verifyRecaptcha } from "../lib/verifyRecaptcha";

const QUESTIONS = [
  {
    question: "What is the main goal you're trying to achieve right now?",
    key: "businessNeeds",
    options: ["Increase sales / leads", "Build or improve my website", "Get found on Google (SEO)", "Grow on social media", "Automate or scale operations"],
  },
  {
    question: "Do you currently have a website?",
    key: "website",
    options: ["Yes — and it's working well", "Yes — but it needs improvement", "No — I need one built from scratch"],
  },
  {
    question: "How would you describe your business?",
    key: "businessType",
    options: ["Product / e-commerce", "Service business", "SaaS / tech startup", "Professional services (CA, lawyer, doctor)", "Other"],
  },
  {
    question: "Are you running any paid advertising?",
    key: "paidAds",
    options: ["Yes, and it's working", "Yes, but it's not converting", "No, not yet", "Planning to start"],
  },
  {
    question: "What's your biggest challenge online right now?",
    key: "biggestChallenge",
    options: ["Not enough website traffic", "Traffic but no conversions", "Poor Google rankings", "Weak brand / design", "No time to manage it all"],
  },
];

const SERVICES = {
  "Increase sales / leads": { name: "Google Ads + Landing page", price: "From ₹25,000/mo", slug: "digital-marketing/google-ads-campaigns" },
  "Build or improve my website": { name: "Web Development", price: "From ₹30,000", slug: "web-development" },
  "Get found on Google (SEO)": { name: "Technical SEO + Content Strategy", price: "From ₹15,000/mo", slug: "seo" },
  "Grow on social media": { name: "Social Media Management", price: "From ₹20,000/mo", slug: "digital-marketing/social-media-management" },
  "Automate or scale operations": { name: "AI-Powered Solutions", price: "From ₹50,000", slug: "ai-powered" },
};

export default function Quiz() {
  const [step, setStep] = useState("form");
  const [formData, setFormData] = useState({ name: "", email: "", businessName: "" });
  const [answers, setAnswers] = useState({});
  const [currentQ, setCurrentQ] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const { ref: recaptchaRef, token: captchaToken, onChange: onCaptchaChange, reset: resetCaptcha } = useRecaptcha();
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaError("Please check the reCAPTCHA box to verify you're human.");
      return;
    }
    setSubmitting(true);
    setCaptchaError("");

    const captchaOk = await verifyRecaptcha(captchaToken);
    if (!captchaOk) {
      setCaptchaError("reCAPTCHA verification failed. Please try again.");
      resetCaptcha();
      setSubmitting(false);
      return;
    }

    try {
      await fetch("https://sheetdb.io/api/v1/nac4zyu6aoaoz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { ...formData, source: "quiz" } }),
      });
      setStep("quiz");
    } catch {
      setStep("quiz"); // proceed anyway
    } finally {
      setSubmitting(false);
    }
  };

  const handleAnswer = (key, value) => {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    if (currentQ + 1 < QUESTIONS.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setStep("results");
    }
  };

  const primaryService = SERVICES[answers.businessNeeds] || {
    name: "Web Development + SEO",
    price: "From ₹30,000",
    slug: "web-development",
  };

  const extraRecs = [];
  if (answers.website?.includes("scratch")) extraRecs.push({ name: "Web Development", slug: "web-development" });
  if (answers.paidAds === "Yes, but it's not converting") extraRecs.push({ name: "Landing Page Optimisation", slug: "web-development/ecommerce-development" });
  if (answers.biggestChallenge === "Poor Google rankings") extraRecs.push({ name: "Technical SEO Audit", slug: "seo/technical-seo-audit" });

  return (
    <section className="py-20 sm:py-24 border-b border-[var(--rc-wire)] bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">

          {/* Left: intro */}
          <div>
            <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>2-minute diagnostic</span>
            <h2 className="rc-display text-3xl sm:text-4xl font-semibold text-[var(--rc-ink)] mt-2 mb-5 leading-tight">
              Not sure where to start?<br />We'll tell you.
            </h2>
            <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed mb-8 max-w-md">
              Answer five quick questions about your business and we'll recommend the specific
              RC Tech service that will have the most impact — with real pricing, not "contact us for a quote."
            </p>

            <div className="space-y-4">
              {[
                { label: "50+", desc: "businesses diagnosed" },
                { label: "2 min", desc: "to complete" },
                { label: "Free", desc: "no strings attached" },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="rc-display text-2xl font-bold text-[var(--rc-ink)] w-16 flex-shrink-0">{label}</span>
                  <span className="rc-body text-sm text-[var(--rc-ink-soft)]">{desc}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rc-blueprint-card p-5">
              <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-3">What you'll get</p>
              <ul className="space-y-2">
                {[
                  "A specific service recommendation with pricing",
                  "A direct link to learn more about that service",
                  "An option to book a free strategy call",
                ].map((item) => (
                  <li key={item} className="flex gap-2 rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed">
                    <span style={{ color: "var(--rc-trace)" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: quiz panel */}
          <div className="rc-blueprint-card p-7">

            {/* Step: contact form */}
            {step === "form" && (
              <>
                <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-5">Step 0 of 5 — Tell us who you are</p>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {[
                    { label: "Your name", name: "name", type: "text", placeholder: "Rahul Sharma" },
                    { label: "Business email", name: "email", type: "email", placeholder: "rahul@company.com" },
                    { label: "Business name", name: "businessName", type: "text", placeholder: "Sharma Enterprises" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block rc-mono text-[0.65rem] uppercase tracking-wide text-[rgba(42,45,53,0.6)] mb-1.5">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                        required
                        className="w-full border border-[var(--rc-wire)] px-4 py-3 rc-body text-sm text-[var(--rc-ink)] bg-white placeholder-rc-ink-soft/30 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors"
                      />
                    </div>
                  ))}
                  <RecaptchaField recaptchaRef={recaptchaRef} onChange={onCaptchaChange} />
                  {captchaError && <p className="rc-mono text-[0.7rem] text-red-600 text-center">{captchaError}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rc-mono text-xs uppercase tracking-wider py-3.5 bg-[var(--rc-ink)] text-[var(--rc-paper)] hover:bg-[var(--rc-circuit)] transition-colors mt-2"
                  >
                    {submitting ? "Starting…" : "Start the diagnostic →"}
                  </button>
                  <p className="text-center rc-mono text-[0.6rem] text-[rgba(42,45,53,0.4)]">
                    We'll never spam you. Your details go straight to our team.
                  </p>
                </form>
              </>
            )}

            {/* Step: quiz questions */}
            {step === "quiz" && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <p className="rc-eyebrow text-[rgba(42,45,53,0.4)]">
                    Question {currentQ + 1} of {QUESTIONS.length}
                  </p>
                  <div className="flex gap-1">
                    {QUESTIONS.map((_, i) => (
                      <div
                        key={i}
                        className="h-1 w-6 rounded-sm transition-colors"
                        style={{ background: i <= currentQ ? "var(--rc-circuit)" : "var(--rc-wire)" }}
                      />
                    ))}
                  </div>
                </div>

                <p className="rc-body text-base font-medium text-[var(--rc-ink)] mb-5 leading-snug">
                  {QUESTIONS[currentQ].question}
                </p>

                <div className="space-y-2">
                  {QUESTIONS[currentQ].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(QUESTIONS[currentQ].key, option)}
                      className="w-full text-left px-4 py-3 border border-[var(--rc-wire)] rc-body text-sm text-[var(--rc-ink)] hover:border-[var(--rc-circuit)] hover:bg-[var(--rc-paper)] transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step: results */}
            {step === "results" && (
              <>
                <p className="rc-eyebrow mb-4" style={{ color: "var(--rc-circuit)" }}>
                  Your recommendation
                </p>
                <div className="border border-[rgba(255,90,31,0.3)] p-5 mb-5" style={{ background: "var(--rc-paper)" }}>
                  <p className="rc-mono text-[0.6rem] uppercase tracking-wide text-[rgba(42,45,53,0.5)] mb-1">Primary recommendation</p>
                  <p className="rc-display text-xl font-semibold text-[var(--rc-ink)]">{primaryService.name}</p>
                  <p className="rc-mono text-xs mt-1" style={{ color: "var(--rc-trace)" }}>{primaryService.price}</p>
                </div>

                {extraRecs.length > 0 && (
                  <div className="mb-5 space-y-2">
                    <p className="rc-mono text-[0.6rem] uppercase tracking-wide text-[rgba(42,45,53,0.5)] mb-2">Also consider</p>
                    {extraRecs.map((r) => (
                      <div key={r.name} className="flex items-center gap-2 rc-body text-xs text-[var(--rc-ink-soft)]">
                        <span style={{ color: "var(--rc-trace)" }}>—</span>{r.name}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col gap-2 mt-6">
                  <button
                    onClick={() => router.push(`/services/${primaryService.slug}`)}
                    className="w-full rc-mono text-xs uppercase tracking-wider py-3 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:opacity-90 transition-opacity"
                  >
                    Learn about {primaryService.name} →
                  </button>
                  <button
                    onClick={() => router.push("/contact")}
                    className="w-full rc-mono text-xs uppercase tracking-wider py-3 border border-[var(--rc-ink)] text-[var(--rc-ink)] hover:bg-[var(--rc-ink)] hover:text-[var(--rc-paper)] transition-colors"
                  >
                    Book a free strategy call
                  </button>
                  <button
                    onClick={() => { setStep("form"); setAnswers({}); setCurrentQ(0); }}
                    className="text-center rc-mono text-[0.6rem] text-[rgba(42,45,53,0.4)] hover:text-[var(--rc-ink-soft)] transition-colors mt-1"
                  >
                    Retake the quiz
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
