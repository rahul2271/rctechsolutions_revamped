"use client";
// app/webinars/[id]/WebinarRegisterForm.js
// Client-side registration + Razorpay payment flow.
// Receives a plain webinar object as a prop from the server component —
// works identically whether the webinar came from Firestore or WordPress.

import { useState } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import Link from "next/link";
import RecaptchaField, { useRecaptcha } from "../../components/Recaptcha";
import { verifyRecaptcha } from "../../lib/verifyRecaptcha";

export default function WebinarRegisterForm({ webinar }) {
  const [formData, setFormData] = useState({ name: "", email: "", contact: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const { ref: recaptchaRef, token: captchaToken, onChange: onCaptchaChange, reset: resetCaptcha } = useRecaptcha();

  const isFree = !webinar?.price || webinar.price === 0;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const recordRegistration = async (extra = {}) => {
    // Best-effort registration log — same sheet for free + paid so nothing is lost
    try {
      await fetch("https://sheetdb.io/api/v1/nac4zyu6aoaoz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            ...formData,
            webinar: webinar.title,
            webinarId: webinar.id,
            source: "wordpress",
            ...extra,
          },
        }),
      });
    } catch (err) {
      console.error("Registration log failed:", err);
    }
  };

  const handlePayment = async () => {
    if (!formData.name || !formData.email || !formData.contact) {
      alert("Please fill all fields.");
      return;
    }
    if (!captchaToken) {
      setCaptchaError("Please check the reCAPTCHA box to verify you\'re human.");
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
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ webinarId: webinar.id, amount: webinar.price, ...formData }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("Payment failed");

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: webinar.title,
        description: `Register for ${webinar.title}`,
        order_id: data.order_id,
        handler: (response) => {
          recordRegistration({
            paymentId: response.razorpay_payment_id,
            amountPaid: webinar.price,
            type: "paid",
          });
          setSuccess(true);
        },
        prefill: { name: formData.name, email: formData.email, contact: formData.contact },
        theme: { color: "#FF5A1F" },
      };

      if (typeof window !== "undefined" && window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        alert("Payment SDK not loaded yet. Please refresh and try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleFreeRegister = async () => {
    if (!formData.name || !formData.email || !formData.contact) {
      alert("Please fill all fields.");
      return;
    }
    if (!captchaToken) {
      setCaptchaError("Please check the reCAPTCHA box to verify you\'re human.");
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
      await recordRegistration({ type: "free" });
      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {!isFree && (
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
          onError={() => console.warn("Razorpay SDK failed to load.")}
        />
      )}

      {success ? (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="rc-blueprint-card p-8 text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: "rgba(45,95,76,0.12)" }}>
            <span className="text-2xl" style={{ color: "var(--rc-trace)" }}>✓</span>
          </div>
          <h2 className="rc-display text-xl font-semibold text-[var(--rc-ink)] mb-2">
            You're registered!
          </h2>
          <p className="rc-body text-sm text-[var(--rc-ink-soft)] mb-5">
            Check your email for the webinar link and details.
          </p>
          <Link href="/webinars"
            className="rc-mono text-xs uppercase tracking-wider text-[var(--rc-circuit)] hover:underline">
            ← Browse more webinars
          </Link>
        </motion.div>
      ) : (
        <div className="rc-blueprint-card p-6 sm:p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="rc-via rc-via-pulse" />
            <span className="rc-eyebrow" style={{ color: "var(--rc-trace)" }}>
              {isFree ? "Free registration" : `₹${webinar.price} · Secure payment`}
            </span>
          </div>
          <h2 className="rc-display text-xl font-semibold text-[var(--rc-ink)] mb-5">
            Reserve your spot
          </h2>

          <div className="space-y-3">
            {[
              { name: "name", placeholder: "Full name", type: "text" },
              { name: "email", placeholder: "Email address", type: "email" },
              { name: "contact", placeholder: "Phone number", type: "tel" },
            ].map((field) => (
              <div key={field.name}>
                <label htmlFor={`wbr-${field.name}`} className="sr-only">{field.placeholder}</label>
                <input
                  id={`wbr-${field.name}`}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full border border-[var(--rc-wire)] px-4 py-3 rc-body text-sm text-[var(--rc-ink)] bg-white placeholder-rc-ink-soft/40 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors"
                />
              </div>
            ))}

            <RecaptchaField recaptchaRef={recaptchaRef} onChange={onCaptchaChange} />
            {captchaError && <p className="rc-mono text-[0.7rem] text-red-600 text-center">{captchaError}</p>}

            <button
              onClick={isFree ? handleFreeRegister : handlePayment}
              disabled={submitting}
              className={`w-full rc-mono text-xs uppercase tracking-wider py-3.5 text-[var(--rc-ink)] transition-colors mt-2 ${
                submitting ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
              }`}
              style={{ background: "var(--rc-circuit)" }}
            >
              {submitting ? "Processing…" : isFree ? "Register for free" : `Pay ₹${webinar.price} & register`}
            </button>

            <p className="rc-mono text-[0.6rem] text-[rgba(42,45,53,0.5)] text-center">
              {isFree ? "No payment required." : "Secure payment via Razorpay."}
              {" "}You'll receive details via email.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
