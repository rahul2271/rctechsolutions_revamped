'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CircuitTrace from './CircuitTrace';

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "We ship on Next.js — not WordPress themes",
    desc: "Every site we build gets a 90+ PageSpeed score before handover. Our average mobile LCP across client sites is 1.3 seconds. That's not a coincidence — it's the stack.",
    metric: "1.3s avg LCP",
  },
  {
    number: "02",
    title: "SEO is built in, not bolted on",
    desc: "Schema markup, sitemap generation, Core Web Vitals tuning, and canonical tags are part of every build. Not an add-on. Not a retainer. Included.",
    metric: "96 avg PageSpeed",
  },
  {
    number: "03",
    title: "You own everything, forever",
    desc: "Your code, your domain, your Firestore data, your hosting account. We don't create vendor lock-in. Every project ends with full documentation and credentials transferred to you.",
    metric: "100% ownership",
  },
  {
    number: "04",
    title: "Transparent pricing, no surprises",
    desc: "We quote fixed prices, not hourly ranges. You know exactly what you're paying before we write a single line of code. Scope changes are discussed openly, not billed silently.",
    metric: "Fixed pricing",
  },
];

const TECH_STACK = [
  { name: "Next.js 15", tag: "Framework" },
  { name: "React 18", tag: "UI Library" },
  { name: "Firebase", tag: "Backend" },
  { name: "Tailwind CSS", tag: "Styling" },
  { name: "Vercel", tag: "Deployment" },
  { name: "TypeScript", tag: "Language" },
  { name: "Framer Motion", tag: "Animation" },
  { name: "Razorpay", tag: "Payments" },
  { name: "Ahrefs", tag: "SEO Tooling" },
  { name: "Google Search Console", tag: "Analytics" },
];

export default function ValueProposition() {
  return (
    <section className="py-20 sm:py-24 border-b border-[var(--rc-wire)] bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">

          {/* Left: differentiators */}
          <div>
            <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Why us</span>
            <h2 className="rc-display text-3xl sm:text-4xl font-semibold text-[var(--rc-ink)] mt-2 mb-10 leading-tight">
              Why brands choose<br />RC Tech Solutions.
            </h2>

            <div className="space-y-0 divide-y divide-[var(--rc-wire)]">
              {DIFFERENTIATORS.map((d, i) => (
                <motion.div
                  key={d.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="py-6 flex gap-5"
                >
                  <span className="rc-mono text-xs font-medium pt-0.5 flex-shrink-0" style={{ color: "var(--rc-circuit)" }}>
                    {d.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="rc-body text-sm font-semibold text-[var(--rc-ink)] leading-snug">{d.title}</h3>
                      <span className="rc-mono text-[0.6rem] flex-shrink-0 px-2 py-1 border border-[var(--rc-wire)] text-[var(--rc-trace)]">
                        {d.metric}
                      </span>
                    </div>
                    <p className="rc-body text-xs text-[var(--rc-ink-soft)] mt-2 leading-relaxed">{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/contact" className="rc-mono text-xs uppercase tracking-wider px-6 py-3 bg-[var(--rc-ink)] text-[var(--rc-paper)] hover:bg-[var(--rc-circuit)] transition-colors inline-block">
                Start a project →
              </Link>
            </div>
          </div>

          {/* Right: tech stack + badges */}
          <div className="space-y-6">
            <div className="rc-blueprint-card p-6">
              <span className="rc-eyebrow text-[rgba(42,45,53,0.5)] block mb-4">Our tech stack</span>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((t) => (
                  <div key={t.name} className="border border-[var(--rc-wire)] px-3 py-2">
                    <p className="rc-body text-xs font-semibold text-[var(--rc-ink)]">{t.name}</p>
                    <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.5)] uppercase tracking-wider mt-0.5">{t.tag}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Authentic badges */}
            <div className="rc-blueprint-card p-6">
              <span className="rc-eyebrow text-[rgba(42,45,53,0.5)] block mb-4">Verifications</span>
              <div className="space-y-3">
                {[
                  { label: "Crunchbase verified", sub: "crunchbase.com/organization/rc-tech-solutions", href: "https://www.crunchbase.com/organization/rc-tech-solutions", icon: "◎" },
                  { label: "Google Business verified", sub: "rctechsolutions.com — Mohali, Punjab", href: "https://maps.google.com", icon: "◎" },
                  { label: "Incorporated in India", sub: "RC Tech Solutions, Sector 82, Mohali 140306", href: "/about", icon: "◎" },
                  { label: "AdSense publisher", sub: "ca-pub-4074858392407979", href: "#", icon: "◎" },
                ].map((b) => (
                  <a
                    key={b.label}
                    href={b.href}
                    target={b.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <span className="text-xs mt-0.5 flex-shrink-0" style={{ color: "var(--rc-trace)" }}>{b.icon}</span>
                    <div>
                      <p className="rc-body text-xs font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors">{b.label}</p>
                      <p className="rc-mono text-[0.6rem] text-[rgba(42,45,53,0.5)] mt-0.5">{b.sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rc-blueprint-card p-6" style={{ background: "var(--rc-ink)" }}>
              <span className="rc-eyebrow block mb-3" style={{ color: "var(--rc-circuit)" }}>Current availability</span>
              <div className="flex items-center gap-2 mb-2">
                <span className="rc-via rc-via-pulse" />
                <span className="rc-mono text-xs text-[var(--rc-paper)]">Accepting 3 new projects · July 2026</span>
              </div>
              <p className="rc-body text-xs text-[rgba(246,242,233,0.5)] leading-relaxed">
                We limit active projects to ensure quality. Once slots are full, the next
                opening is announced here.
              </p>
              <Link href="/contact" className="mt-4 rc-mono text-[0.65rem] uppercase tracking-wider text-[var(--rc-circuit)] hover:underline block">
                Check availability →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
