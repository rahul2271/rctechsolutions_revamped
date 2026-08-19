"use client";

// Reusable AdSense slot. Renders the <ins> ad unit and pushes it once mounted.
// Use distinct `slot` IDs per placement (create these in your AdSense dashboard).
// `format="fluid"` + `layout="in-article"` works best for in-content blog ads.

import { useEffect, useRef } from "react";

export default function AdSlot({
  slot,
  format = "auto",
  layout,
  className = "",
  label = "Advertisement",
}) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch (e) {
      // AdSense script may not be loaded yet (e.g. dev mode) — fail silently
    }
  }, []);

  return (
    <div className={`my-8 ${className}`} aria-label="Advertisement">
      <p className="text-center text-[10px] uppercase tracking-widest text-gray-300 mb-1.5">{label}</p>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client="ca-pub-4074858392407979"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { "data-ad-layout": layout } : {})}
        data-full-width-responsive="true"
      />
    </div>
  );
}
