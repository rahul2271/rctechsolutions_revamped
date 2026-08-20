"use client";
// app/components/blog/ViewCounter.js
// Displays a live, real view count and increments it once per browser
// session per post (sessionStorage guard) so refreshing the page doesn't
// inflate it.
//
// If the WordPress backend for this isn't wired up yet (see
// wordpress-snippets/mu-plugins/rc-blog-features.php), the API returns
// `configured: false` and this component renders nothing rather than a
// static "0 views" that never changes — a number that never moves no
// matter how much traffic a post gets is what made this look fake.

import { useEffect, useRef, useState } from "react";
import { RiEyeLine } from "react-icons/ri";

export default function ViewCounter({ slug, initialViews = null }) {
  const [views, setViews] = useState(initialViews);
  const [configured, setConfigured] = useState(true);
  // Guards against React 18 Strict Mode double-invoking this effect in dev
  // (and any other double-mount scenario), which would otherwise fire two
  // POSTs before sessionStorage is set from the first one and double-count
  // a single real visit.
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const key = `rc-viewed-${slug}`;
    const alreadyCounted = typeof window !== "undefined" && sessionStorage.getItem(key);

    const run = async () => {
      try {
        if (alreadyCounted) {
          const res = await fetch(`/api/blogs/views?slug=${encodeURIComponent(slug)}`);
          const data = await res.json();
          setViews(data.views);
          setConfigured(data.configured !== false);
        } else {
          const res = await fetch("/api/blogs/views", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug }),
          });
          const data = await res.json();
          setViews(data.views);
          setConfigured(data.configured !== false);
          sessionStorage.setItem(key, "1");
        }
      } catch {
        setConfigured(false);
      }
    };
    run();
  }, [slug]);

  if (views === null || !configured) return null;

  return (
    <span className="inline-flex items-center gap-1 rc-mono text-xs text-[rgba(42,45,53,0.5)]">
      <RiEyeLine size={13} />
      {views.toLocaleString("en-IN")} view{views === 1 ? "" : "s"}
    </span>
  );
}
