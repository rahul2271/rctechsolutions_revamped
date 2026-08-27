'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";
const PROCESS = [
  {
    step: "01",
    title: "Discovery call (free)",
    desc: "30 minutes. We learn your goals, constraints, and timeline. You learn whether we're the right fit. No sales pressure — just an honest conversation.",
    duration: "30 min",
  },
  {
    step: "02",
    title: "Proposal & fixed quote",
    desc: "We send a written scope and fixed price within 48 hours. No hourly ranges. No 'it depends'. One clear number with a clear delivery date.",
    duration: "48 hrs",
  },
  {
    step: "03",
    title: "Build & review",
    desc: "We build in sprints with a shared staging URL throughout. You can review progress at any time — no waiting until the end to see your project.",
    duration: "2–8 weeks",
  },
  {
    step: "04",
    title: "Launch & handover",
    desc: "Go-live with you present. Full credentials, documentation, and a 30-day support window included. No lock-in, no ongoing dependency on us.",
    duration: "1 day",
  },
];

const STACK_BADGES = [
  { label: "Next.js 15", color: "var(--rc-ink)" },
  { label: "React 18", color: "var(--rc-trace)" },
  { label: "TypeScript", color: "var(--rc-circuit)" },
  { label: "Tailwind CSS", color: "var(--rc-trace)" },
  { label: "Firebase", color: "var(--rc-circuit)" },
  { label: "Vercel Edge", color: "var(--rc-ink)" },
];

export default function ProductTeamSection() {
  return (
    <section className="py-20 sm:py-24 border-b border-[var(--rc-wire)] bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: process */}
          <div>
            <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>How we work</span>
            <h2 className="rc-display text-3xl sm:text-4xl font-semibold text-[var(--rc-ink)] mt-2 mb-10 leading-tight">
              From discovery call<br />to live site — in weeks.
            </h2>

            <div className="space-y-0">
              {PROCESS.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 pb-8 relative"
                >
                  {/* Connector line */}
                  {i < PROCESS.length - 1 && (
                    <div className="absolute left-[7px] top-6 w-px h-full" style={{ background: "var(--rc-wire)" }} />
                  )}
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-3.5 h-3.5 rounded-full border-2 z-10 relative" style={{ borderColor: "var(--rc-circuit)", background: "white" }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="rc-mono text-[0.6rem] text-[var(--rc-circuit)]">{p.step}</span>
                      <span className="rc-mono text-[0.7rem] px-1.5 py-0.5 border border-[var(--rc-wire)] text-[rgba(42,45,53,0.5)]">{p.duration}</span>
                    </div>
                    <h3 className="rc-body text-sm font-semibold text-[var(--rc-ink)] mb-1">{p.title}</h3>
                    <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/contact" className="rc-mono text-xs uppercase tracking-wider px-6 py-3 bg-[var(--rc-ink)] text-[var(--rc-paper)] hover:bg-[var(--rc-circuit)] transition-colors inline-block mt-2">
              Book your discovery call →
            </Link>
          </div>

          {/* Right: stack + real commitments */}
          {/* Right: Hero Image + Commitments */}
<div className="space-y-5">

  {/* Hero Image */}
  <div className="rc-blueprint-card overflow-hidden p-0">
    <Image
      src="/sixsteps.png"
      alt="RC Tech Solutions Development Process"
      width={1200}
      height={800}
      priority
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Guarantee Cards */}
  <div className="grid sm:grid-cols-2 gap-4">

    <div className="rc-blueprint-card p-5">
      <h3 className="font-semibold text-sm text-[var(--rc-ink)] mb-2">
        90+ PageSpeed
      </h3>
      <p className="rc-body text-xs text-[var(--rc-ink-soft)]">
        Verified before handover using real PageSpeed Insights data.
      </p>
    </div>

    <div className="rc-blueprint-card p-5">
      <h3 className="font-semibold text-sm text-[var(--rc-ink)] mb-2">
        Google Indexed
      </h3>
      <p className="rc-body text-xs text-[var(--rc-ink-soft)]">
        Sitemap submission and Search Console setup included.
      </p>
    </div>

    <div className="rc-blueprint-card p-5">
      <h3 className="font-semibold text-sm text-[var(--rc-ink)] mb-2">
        Fixed Pricing
      </h3>
      <p className="rc-body text-xs text-[var(--rc-ink-soft)]">
        No hidden costs. The quoted amount is the final amount.
      </p>
    </div>

    <div className="rc-blueprint-card p-5">
      <h3 className="font-semibold text-sm text-[var(--rc-ink)] mb-2">
        30-Day Support
      </h3>
      <p className="rc-body text-xs text-[var(--rc-ink-soft)]">
        Bug fixes and minor changes included after launch.
      </p>
    </div>

  </div>

</div>

        </div>
      </div>
    </section>
  );
}
