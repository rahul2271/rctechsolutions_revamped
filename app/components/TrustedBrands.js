"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const LOGOS = [
  { name: "Zoho", src: "/zoho.png" },
  { name: "Freshworks", src: "/freshworks.png" },
  { name: "Chargebee", src: "/chargebee.png" },
  { name: "Razorpay", src: "/razorpay.png" },
  { name: "Cleartax", src: "/cleartax.png" },
  { name: "Redtape", src: "/redtape.png" },
  { name: "Yukti Herbs", src: "/yukti herbs.png" },
  { name: "Unacademy", src: "/un.png" },
];

const TESTIMONIALS = [
  {
    quote: "RC Tech rebuilt our Chandigarh law firm website in 3 weeks. Load time dropped from 7 seconds to under 1.5 seconds. We went from zero Google leads to 3–4 per week within 90 days.",
    name: "Manpreet Singh",
    role: "Partner, Singh & Associates, Chandigarh",
    result: "7s → 1.2s load time",
  },
  {
    quote: "We tried two agencies before RC Tech. Both delivered slow, generic WordPress sites. Rahul's team shipped a proper Next.js store that actually ranks for our keywords in Mohali.",
    name: "Priya Sharma",
    role: "Founder, Yukti Herbs",
    result: "0 → 12,000 monthly visitors",
  },
  {
    quote: "Fixed price, delivered on time, and the SEO work they did in the first month already has us ranking on page one for three of our target keywords. No hidden charges, no surprises.",
    name: "Amandeep Kaur",
    role: "Director, Bedeol Technologies",
    result: "Page 1 rankings in 6 weeks",
  },
];

const STATS = [
  { n: "50+", l: "Projects shipped" },
  { n: "92%", l: "Client retention" },
  { n: "3+", l: "Years in Mohali" },
  { n: "5★", l: "Average rating" },
];

export default function BrandsSection() {
  return (
    <section className="border-b border-[var(--rc-wire)] bg-white">

      {/* Logo strip */}
      <div className="border-b border-[var(--rc-wire)] py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="rc-eyebrow text-center text-[rgba(42,45,53,0.35)] mb-7">
            Trusted by 50+ brands across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {LOGOS.map((b) => (
              <img key={b.name} src={b.src} alt={b.name}
                className="h-6 sm:h-7 w-auto object-contain grayscale opacity-45
                           hover:opacity-80 hover:grayscale-0 transition-all duration-300" />
            ))}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="border-b border-[var(--rc-wire)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[var(--rc-wire)]">
            {STATS.map(({ n, l }) => (
              <div key={l} className="py-6 px-4 text-center">
                <p className="rc-display text-3xl font-bold text-[var(--rc-ink)]">{n}</p>
                <p className="rc-mono text-[0.6rem] uppercase tracking-wider text-[rgba(42,45,53,0.45)] mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-10">
          <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Client outcomes</span>
          <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mt-2">
            Real projects. Real numbers.
          </h2>
          <p className="rc-body mt-2 text-sm text-[var(--rc-ink-soft)] max-w-md leading-relaxed">
            Every result below is from an actual client project. We've changed some identifying
            details for privacy, but every number is verifiable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-7 flex flex-col">
              <span className="rc-mono text-[0.6rem] uppercase tracking-wider px-2.5 py-1 w-fit
                               border border-[var(--rc-wire)] text-[var(--rc-trace)] mb-5">
                {t.result}
              </span>
              <blockquote className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed flex-1 italic">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 pt-5 border-t border-[var(--rc-wire)]">
                <p className="rc-body text-xs font-semibold text-[var(--rc-ink)]">{t.name}</p>
                <p className="rc-mono text-[0.6rem] text-[rgba(42,45,53,0.45)] mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <p className="rc-body text-sm text-[var(--rc-ink-soft)]">
            Want results like these for your business?
          </p>
          <Link href="/contact"
            className="rc-mono text-xs uppercase tracking-wider px-6 py-3 bg-[var(--rc-ink)] text-[var(--rc-paper)]
                       hover:bg-[var(--rc-circuit)] transition-colors">
            Book a free strategy call →
          </Link>
        </div>
      </div>
    </section>
  );
}
