"use client";

// app/blogs/InfiniteBlogFeed.jsx
// Renders the post grid starting from server-rendered `initialPosts` (so
// first paint + SEO for page 1 is untouched), then auto-fetches further
// WordPress pages from /api/blogs as the user nears the bottom, appending
// cards in place — no click, no page reload. Falls back to a manual
// button if IntersectionObserver isn't available or a fetch fails, since
// silently doing nothing on error reads as a broken/dead page.
//
// Real pagination links still exist server-side (rendered in a <noscript>
// block in page.js) so search engines and no-JS visitors can still reach
// every page directly — pure infinite-scroll-only setups are notorious
// for tanking indexing of anything past page 1.

import { useState, useRef, useCallback, useEffect } from "react";
import BlogCard from "./BlogCard";

export default function InfiniteBlogFeed({ initialPosts, initialPage, totalPages, category }) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(initialPage >= totalPages);
  const sentinelRef = useRef(null);

  const loadMore = useCallback(async () => {
    if (loading || done) return;
    setLoading(true);
    setError(false);
    const nextPage = page + 1;
    try {
      const params = new URLSearchParams({ page: String(nextPage) });
      if (category) params.set("category", category);
      const res = await fetch(`/api/blogs?${params.toString()}`);
      if (!res.ok) throw new Error("bad response");
      const data = await res.json();
      setPosts((prev) => [...prev, ...(data.posts || [])]);
      setPage(nextPage);
      if (nextPage >= (data.totalPages || totalPages) || !data.posts?.length) {
        setDone(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [loading, done, page, category, totalPages]);

  // Start fetching ~600px before the sentinel actually enters the
  // viewport, so the next batch is usually ready before the user hits the
  // bottom rather than making them wait on a visible spinner.
  useEffect(() => {
    if (done) return;
    const node = sentinelRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { rootMargin: "600px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done, page]);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
        {posts.map((blog, i) => (
          <BlogCard key={blog.id} blog={blog} index={i} />
        ))}
      </div>

      {/* Sentinel — invisible, just here for IntersectionObserver to watch */}
      {!done && <div ref={sentinelRef} className="h-px" aria-hidden="true" />}

      {loading && (
        <div className="flex justify-center py-10">
          <span className="rc-mono text-xs uppercase tracking-wider text-[var(--rc-ink-soft)] animate-pulse">
            Loading more issues…
          </span>
        </div>
      )}

      {error && !loading && (
        <div className="flex flex-col items-center gap-3 py-10">
          <span className="rc-mono text-xs text-[var(--rc-ink-soft)]">Couldn&apos;t load more right now.</span>
          <button
            onClick={loadMore}
            className="rc-mono text-[0.65rem] uppercase tracking-wider px-4 py-2.5 border border-[var(--rc-wire)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)] transition-colors"
          >
            Try again
          </button>
        </div>
      )}

      {done && posts.length > 0 && !error && (
        <p className="rc-mono text-[0.65rem] uppercase tracking-wider text-center text-[rgba(42,45,53,0.4)] py-10">
          You&apos;ve reached the end — that&apos;s every issue.
        </p>
      )}
    </>
  );
}
