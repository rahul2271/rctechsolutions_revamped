// app/webinars/[id]/page.js — server-rendered webinar detail page
// WordPress-only: [id] is the WP post slug. Server-rendered for real SEO
// metadata + JSON-LD.

import { fetchWPWebinarBySlug, safeTruncate } from "../../lib/wordpress";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import WebinarRegisterForm from "./WebinarRegisterForm";

export const revalidate = 300;

async function fetchWebinarByIdentifier(identifier) {
  return await fetchWPWebinarBySlug(identifier);
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const webinar = await fetchWebinarByIdentifier(decodedId);

  if (!webinar) {
    return {
      title: "Webinar not found", // layout template adds "| RC Tech Solutions"
      robots: { index: false, follow: false },
    };
  }

  const canonical = `https://www.rctechsolutions.com/webinars/${decodedId}`;
  // FIX: was a hard `.slice(0, 160)` that cuts mid-word (e.g. "...promising
  // beautiful designs, affor"). Trims to the last whole word instead.
  const description = safeTruncate(webinar.description || webinar.title || "", 160);

  // FIX: was `${webinar.title} | RC Tech Solutions Webinars` — doubles up
  // with the layout's own "%s | RC Tech Solutions" title template. Passing
  // just the title lets the template add the suffix exactly once.
  return {
    metadataBase: new URL("https://www.rctechsolutions.com"),
    title: webinar.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: webinar.title,
      description,
      images: webinar.imageUrl ? [{ url: webinar.imageUrl, width: 1200, height: 630 }] : [],
      url: canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: webinar.title,
      description,
      images: webinar.imageUrl ? [webinar.imageUrl] : [],
    },
    robots: { index: true, follow: true },
  };
}

export default async function WebinarPage({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const webinar = await fetchWebinarByIdentifier(decodedId);

  if (!webinar) notFound();

  const isFree = !webinar.price || webinar.price === 0;
  const formattedDate = webinar.date
    ? new Date(webinar.date).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    : "";
  const canonicalUrl = `https://www.rctechsolutions.com/webinars/${decodedId}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: webinar.title,
    description: webinar.description || webinar.title,
    startDate: webinar.date || undefined,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: canonicalUrl },
    image: webinar.imageUrl ? [webinar.imageUrl] : undefined,
    organizer: { "@type": "Organization", name: "RC Tech Solutions", url: "https://www.rctechsolutions.com" },
    offers: {
      "@type": "Offer",
      price: webinar.price || 0,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: canonicalUrl,
    },
  };

  // Pass only plain, serialisable fields down to the client form
  const webinarForForm = {
    id: decodedId,
    source: "wordpress",
    title: webinar.title,
    price: webinar.price || 0,
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav className="border-b border-[var(--rc-wire)] bg-white" aria-label="Breadcrumb">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-1.5 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.6)]">
          <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/webinars" className="hover:text-[var(--rc-circuit)] transition-colors">Webinars</Link>
          <span>/</span>
          <span className="text-[var(--rc-ink-soft)] line-clamp-1 max-w-[200px]">{webinar.title}</span>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-start">

          {/* Left: webinar info */}
          <div>
            {webinar.imageUrl && (
              <div className="relative w-full rc-blueprint-card overflow-hidden mb-8" style={{ aspectRatio: "16/9" }}>
                <Image src={webinar.imageUrl} alt={webinar.title} fill className="object-cover" priority sizes="100vw" />
                {webinar.live && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 rc-mono text-[0.65rem] uppercase tracking-wider px-3 py-1.5 text-white"
                    style={{ background: "var(--rc-circuit)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Live now
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center gap-2 mb-4">
              <span className="rc-mono text-[0.65rem] uppercase tracking-wider px-2.5 py-1 border border-[var(--rc-wire)] text-[var(--rc-ink-soft)]">
                {webinar.live ? "Live" : formattedDate}
              </span>
              <span className="rc-mono text-[0.65rem] uppercase tracking-wider px-2.5 py-1"
                style={{ background: isFree ? "var(--rc-paper-deep)" : "var(--rc-circuit)", color: isFree ? "var(--rc-trace)" : "var(--rc-ink)" }}>
                {isFree ? "Free" : `₹${webinar.price}`}
              </span>
              {webinar.source === "wordpress" && (
                <span className="rc-mono text-[0.6rem] px-2 py-0.5 border border-[rgba(255,90,31,0.2)] text-[rgba(255,90,31,0.6)]">WordPress</span>
              )}
            </div>

            <h1 className="rc-display text-3xl sm:text-4xl font-semibold text-[var(--rc-ink)] leading-tight mb-4">
              {webinar.title}
            </h1>
            <p className="rc-body text-base text-[var(--rc-ink-soft)] leading-relaxed mb-6">
              {webinar.description}
            </p>

            {webinar.speaker && (
              <div className="rc-blueprint-card p-5 mb-6">
                <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-2">Speaker</p>
                <p className="rc-body text-sm font-semibold text-[var(--rc-ink)]">{webinar.speaker}</p>
                {webinar.speakerBio && (
                  <p className="rc-body text-xs text-[var(--rc-ink-soft)] mt-1 leading-relaxed">{webinar.speakerBio}</p>
                )}
              </div>
            )}

            {/* What you'll get */}
            <div className="space-y-3 mb-8">
              {["Expert insights with hands-on guidance", "Practical skills you can apply immediately", "Interactive Q&A session", "Exclusive resources & templates", "Session recording sent after the event"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-sm text-[0.6rem]"
                    style={{ background: "var(--rc-trace)", color: "white" }}>✓</span>
                  <span className="rc-body text-sm text-[var(--rc-ink-soft)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: registration form (client component) */}
          <div className="lg:sticky lg:top-24">
            <WebinarRegisterForm webinar={webinarForForm} />

            <div className="mt-4 rc-blueprint-card p-4">
              <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-2">Also available</p>
              <Link href="/ebook" className="rc-body text-sm text-[var(--rc-ink)] hover:text-[var(--rc-circuit)] transition-colors">
                Free eBook: Learn to Code, Earn from Code →
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
