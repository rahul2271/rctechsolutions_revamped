// app/blogs/loading.js
// Shown IMMEDIATELY on click, before the WordPress fetch in page.js even
// starts to resolve. Without this file, Next.js has nothing to render
// during the await in page.js, so the browser shows nothing until BOTH the
// categories and posts requests finish — on a slow upstream host that can
// be several seconds of a dead-looking screen, which reads as "broken" and
// drives people to hit back. This skeleton makes the click feel instant;
// it doesn't make the data arrive any faster, but it removes the "did my
// click even register" moment that causes the bounce.

function Pulse({ className = "" }) {
  return <div className={`animate-pulse bg-[var(--rc-wire)]/40 ${className}`} />;
}

export default function BlogsLoading() {
  return (
    <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>
      {/* Hero skeleton */}
      <section className="border-b border-[var(--rc-wire)] rc-grid-bg">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <Pulse className="h-3 w-40 mb-5" />
          <Pulse className="h-12 sm:h-14 w-64 mb-5" />
          <Pulse className="h-5 w-full max-w-lg mb-2" />
          <Pulse className="h-5 w-2/3 max-w-lg" />
          <div className="mt-7 flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Pulse key={i} className="h-8 w-20" />
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:py-14">
        {/* Featured post skeleton */}
        <div className="grid md:grid-cols-2 gap-0 border border-[var(--rc-wire)] mb-12">
          <Pulse className="w-full" style={{ aspectRatio: "16/9" }} />
          <div className="flex flex-col justify-center p-7 sm:p-9 gap-3">
            <Pulse className="h-3 w-20" />
            <Pulse className="h-8 w-full" />
            <Pulse className="h-8 w-3/4" />
            <Pulse className="h-4 w-full" />
            <Pulse className="h-4 w-2/3" />
          </div>
        </div>

        {/* Grid skeleton */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col bg-[var(--rc-paper)]">
              <Pulse className="w-full" style={{ aspectRatio: "16/9" }} />
              <div className="flex flex-col flex-1 p-5 gap-2">
                <Pulse className="h-3 w-16" />
                <Pulse className="h-4 w-full" />
                <Pulse className="h-4 w-2/3" />
                <Pulse className="h-3 w-24 mt-2" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
