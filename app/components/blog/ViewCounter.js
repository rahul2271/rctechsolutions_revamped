"use client";
// app/components/blog/ViewCounter.js
// Displays a live view count and increments it once per browser session per
// post (sessionStorage guard) so refreshing the page doesn't inflate it.

import { useEffect, useState } from "react";
import { RiEyeLine } from "react-icons/ri";

export default function ViewCounter({ slug, initialViews = null }) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    const key = `rc-viewed-${slug}`;
    const alreadyCounted = typeof window !== "undefined" && sessionStorage.getItem(key);

    const run = async () => {
      try {
        if (alreadyCounted) {
          const res = await fetch(`/api/blogs/views?slug=${encodeURIComponent(slug)}`);
          const data = await res.json();
          setViews(data.views);
        } else {
          const res = await fetch("/api/blogs/views", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug }),
          });
          const data = await res.json();
          setViews(data.views);
          sessionStorage.setItem(key, "1");
        }
      } catch {
        // Fail silently — a view counter is decorative, never worth an error state.
      }
    };
    run();
  }, [slug]);

  if (views === null) return null;

  return (
    <span className="inline-flex items-center gap-1 rc-mono text-xs text-[rgba(42,45,53,0.5)]">
      <RiEyeLine size={13} />
      {views.toLocaleString("en-IN")} view{views === 1 ? "" : "s"}
    </span>
  );
}
