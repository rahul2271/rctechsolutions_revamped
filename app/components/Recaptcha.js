"use client";
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

import { useRef, useState, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Same site key used across the site (web-development landing page origin).
// Override per-environment via NEXT_PUBLIC_RECAPTCHA_SITE_KEY.
export const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeZlYMtAAAAAHwInLlu_0oT0T69132GMd97LeUU";

// Convenience hook so every form doesn't re-implement the same state/ref wiring.
export function useRecaptcha() {
  const ref = useRef(null);
  const [token, setToken] = useState(null);

  const onChange = useCallback((t) => setToken(t), []);
  const reset = useCallback(() => {
    ref.current?.reset();
    setToken(null);
  }, []);

  return { ref, token, onChange, reset };
}

export default function RecaptchaField({ recaptchaRef, onChange, className = "", size }) {
  return (
    <div className={`flex justify-center w-full overflow-hidden ${className}`}>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={onChange}
        onExpired={() => onChange(null)}
        size={size}
      />
    </div>
  );
}
