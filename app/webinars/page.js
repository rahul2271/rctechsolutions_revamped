// app/webinars/page.js — WordPress-powered, brand-themed webinars listing
import { fetchWPWebinars } from "../lib/wordpress";
import Link from "next/link";
import Image from "next/image";
import CircuitTrace from "../components/CircuitTrace";

export const revalidate = 300;

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  // Layout's title template already appends "| RC Tech Solutions" — don't
  // add it here too, or it doubles up.
  title: "Free Webinars on Web Development, SEO & Digital Growth",
  description: "Join free and paid webinars by RC Tech Solutions on web development, Next.js, SEO, digital marketing, and career growth. Register for live sessions and get exclusive resources.",
  keywords: ["webinar web development India", "free SEO webinar", "Next.js masterclass", "digital marketing webinar India", "RC Tech webinars"],
  alternates: { canonical: "https://www.rctechsolutions.com/webinars" },
  openGraph: {
    title: "Webinars | RC Tech Solutions",
    description: "Free and paid webinars on web development, SEO, and digital growth.",
    url: "https://www.rctechsolutions.com/webinars",
    siteName: "RC Tech Solutions",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.rctechsolutions.com/og/home-cover.jpg", width: 1200, height: 630 }],
  },
};

async function fetchWebinars() {
  return fetchWPWebinars({ perPage: 30 });
}

// Route helper — both sources land on /webinars/[id], WP uses its slug there
const webinarHref = (w) => `/webinars/${w.slug || w.id}`;

function getStatus(webinar) {
  if (webinar.live) return { label: "Live now", color: "var(--rc-circuit)" };
  const d = new Date(webinar.date?.toDate?.() || webinar.date);
  if (d > new Date()) return { label: "Upcoming", color: "var(--rc-trace)" };
  return { label: "Past", color: "var(--rc-wire)" };
}

function formatDate(val) {
  try {
    const d = typeof val?.toDate === "function" ? val.toDate() : new Date(val);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  } catch { return ""; }
}

export default async function WebinarsPage() {
  const webinars = await fetchWebinars();
  const today = new Date();

  const live = webinars.filter((w) => w.live);
  const upcoming = webinars.filter((w) => {
    if (w.live) return false;
    const d = new Date(w.date?.toDate?.() || w.date);
    return d >= today;
  });
  const past = webinars.filter((w) => {
    if (w.live) return false;
    const d = new Date(w.date?.toDate?.() || w.date);
    return d < today;
  });

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "RC Tech Solutions Webinars",
    url: "https://www.rctechsolutions.com/webinars",
    itemListElement: webinars.map((w, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Event",
        name: w.title,
        url: `https://www.rctechsolutions.com${webinarHref(w)}`,
        startDate: w.date?.toDate?.().toISOString() || w.date,
        description: w.description,
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        organizer: { "@type": "Organization", name: "RC Tech Solutions", url: "https://www.rctechsolutions.com" },
      },
    })),
  };

  const WebinarCard = ({ webinar }) => {
    const status = getStatus(webinar);
    return (
      <Link href={webinarHref(webinar)}
        className="group flex flex-col bg-[var(--rc-paper)] hover:bg-white transition-colors border border-[var(--rc-wire)] hover:border-[var(--rc-circuit)] rc-blueprint-card overflow-hidden">
        {webinar.imageUrl && (
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image src={webinar.imageUrl} alt={webinar.title} fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
        )}
        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="rc-mono text-[0.6rem] uppercase tracking-wider"
              style={{ color: status.color }}>{status.label}</span>
            <div className="flex items-center gap-2">
              {webinar.source === "wordpress" && (
                <span className="rc-mono text-[0.55rem] px-1.5 py-0.5 border border-[rgba(255,90,31,0.2)] text-[rgba(255,90,31,0.6)]">WP</span>
              )}
              {webinar.price > 0
                ? <span className="rc-mono text-xs font-semibold text-[var(--rc-ink)]">₹{webinar.price}</span>
                : <span className="rc-mono text-[0.6rem] uppercase tracking-wider text-[var(--rc-trace)]">Free</span>}
            </div>
          </div>
          <h3 className="rc-display text-base font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors leading-snug mb-2">
            {webinar.title}
          </h3>
          <p className="rc-body text-xs text-[rgba(42,45,53,0.75)] leading-relaxed line-clamp-2 flex-1">
            {webinar.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="rc-mono text-[0.6rem] text-[rgba(42,45,53,0.5)]">{formatDate(webinar.date)}</span>
            {webinar.speaker && (
              <span className="rc-mono text-[0.6rem] text-[rgba(42,45,53,0.5)]">{webinar.speaker}</span>
            )}
          </div>
          {status.label !== "Past" && (
            <div className="mt-4 rc-mono text-[0.65rem] uppercase tracking-wider text-[var(--rc-circuit)] border-t border-[var(--rc-wire)] pt-3">
              Register {webinar.price > 0 ? "& pay" : "free"} →
            </div>
          )}
        </div>
      </Link>
    );
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>

        {/* Hero */}
        <section className="border-b border-[var(--rc-wire)] rc-grid-bg">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.5)] mb-6">
              <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[var(--rc-ink-soft)]">Webinars</span>
            </nav>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="rc-via rc-via-pulse" />
              <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>
                Live sessions · {upcoming.length + live.length} upcoming
              </span>
            </div>
            <h1 className="rc-display text-4xl sm:text-5xl font-semibold text-[var(--rc-ink)] leading-tight max-w-2xl">
              Learn directly from the people shipping the work.
            </h1>
            <p className="rc-body mt-5 text-[var(--rc-ink-soft)] max-w-xl text-base sm:text-lg leading-relaxed">
              Free and paid webinars on web development, Next.js, SEO, digital marketing, and career growth.
              Interactive Q&amp;A, real examples, and exclusive resources included.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/ebook"
                className="rc-mono text-xs uppercase tracking-wider px-6 py-3 border border-[var(--rc-ink)] text-[var(--rc-ink)] hover:bg-[var(--rc-ink)] hover:text-[var(--rc-paper)] transition-colors">
                Get the free eBook →
              </Link>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-5xl px-4 py-12 sm:py-14 space-y-14">

          {/* Live now */}
          {live.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--rc-circuit)" }} />
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Live right now</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {live.map((w) => <WebinarCard key={w.id} webinar={w} />)}
              </div>
            </section>
          )}

          {/* Upcoming */}
          {upcoming.length > 0 && (
            <section>
              <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-6">Upcoming sessions</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcoming.map((w) => <WebinarCard key={w.id} webinar={w} />)}
              </div>
            </section>
          )}

          {/* Past */}
          {past.length > 0 && (
            <section>
              <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-6">Past sessions</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {past.map((w) => <WebinarCard key={w.id} webinar={w} />)}
              </div>
            </section>
          )}

          {webinars.length === 0 && (
            <div className="text-center py-20">
              <p className="rc-display text-2xl text-[var(--rc-ink)] mb-3">No webinars yet.</p>
              <p className="rc-body text-sm text-[var(--rc-ink-soft)]">Check back soon — sessions are added regularly.</p>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="rc-blueprint-card p-8 text-center" style={{ background: "var(--rc-ink)" }}>
            <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>While you wait</span>
            <h2 className="rc-display text-2xl font-semibold text-[var(--rc-paper)] mt-2 mb-3">
              Get the free eBook — 120+ pages on web dev & freelancing.
            </h2>
            <Link href="/ebook"
              className="inline-flex rc-mono text-xs uppercase tracking-wider px-7 py-3.5 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors">
              Download the eBook →
            </Link>
          </div>
        </main>

        <CircuitTrace variant="horizontal" className="opacity-40 mt-10" />
      </div>
    </>
  );
}
