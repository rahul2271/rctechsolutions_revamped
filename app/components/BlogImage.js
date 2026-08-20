"use client";
// app/components/BlogImage.js
//
// WHY THIS EXISTS ("sometimes shows, sometimes vanishes" — the real fix)
// --------------------------------------------------------------------
// There are TWO caches between a visitor and a WordPress image:
//   1. Next.js's built-in Image Optimizer (/_next/image?url=...), governed
//      by `images.minimumCacheTTL: 604800` in next.config.mjs — a 7-DAY
//      FLOOR that applies no matter what caching headers anything downstream
//      sends. This is separate from and outside our own /api/media route.
//   2. Our own /api/media proxy (app/api/media/route.js), which fetches the
//      real file from WordPress.
//
// The old design had /api/media silently 302-redirect to a local
// placeholder PNG on failure. That made a WordPress failure LOOK like a
// perfectly normal, valid, 200-status image to layer #1 — the Next.js
// optimizer has no way to know "this is a fallback standing in for a
// failure" vs. "this is the real photo." Both look identical: a
// successful image fetch. So the optimizer cached the FAILURE for a
// minimum of 7 days, exactly as confidently as it would cache a real
// photo. Whichever result got cached first (real image or placeholder)
// stuck around for a week regardless of whether WordPress recovered
// moments later — hence "sometimes shows, sometimes vanishes" depending
// on which cached version a given visitor/edge node happened to have.
//
// The fix: never let a failure pretend to be a valid image server-side.
// /api/media now returns a genuine error status (see route.js) when the
// upstream fetch fails, which Next's optimizer does NOT cache long-term
// (only real successes get the 7-day floor). The visual fallback is
// instead handled HERE, client-side, via the standard <img> onError
// event — so users still see a clean placeholder immediately, but nothing
// about the failure gets baked into any server/CDN cache. The very next
// page load retries WordPress completely fresh.

import { useState } from "react";
import Image from "next/image";

export default function BlogImage({ src, alt, fallbackSrc = "/media-placeholder.png", ...props }) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    // Plain <img>, not next/image — deliberately skips the optimizer
    // entirely for the fallback, so there's nothing here for any cache
    // layer to remember at all.
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={fallbackSrc}
        alt={alt || "Image temporarily unavailable"}
        className={props.className}
        style={props.fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } : undefined}
      />
    );
  }

  return <Image src={src} alt={alt} {...props} onError={() => setErrored(true)} />;
}
