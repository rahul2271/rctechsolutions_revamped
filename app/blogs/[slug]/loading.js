// app/blogs/[slug]/loading.js
// Same reasoning as app/blogs/loading.js — shown instantly on click while
// fetchWPPostBySlug() (and the related-posts fetch after it) are still
// waiting on the WordPress host.

function Pulse({ className = "" }) {
  return <div className={`animate-pulse bg-[var(--rc-wire)]/40 ${className}`} />;
}

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <Pulse className="h-3 w-32 mb-6" />
        <Pulse className="h-10 sm:h-12 w-full mb-3" />
        <Pulse className="h-10 sm:h-12 w-3/4 mb-6" />
        <div className="flex items-center gap-3 mb-8">
          <Pulse className="h-3 w-24" />
          <Pulse className="h-3 w-24" />
          <Pulse className="h-3 w-24" />
        </div>
        <Pulse className="w-full mb-10" style={{ aspectRatio: "16/9" }} />
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <Pulse key={i} className={`h-4 ${i % 3 === 2 ? "w-2/3" : "w-full"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
