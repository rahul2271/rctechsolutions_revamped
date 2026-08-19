'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  RiCodeSSlashLine, RiPaintBrushLine, RiMegaphoneLine,
  RiSearchLine, RiCloudLine, RiSmartphoneLine,
  RiShoppingCartLine, RiRobot2Line, RiStackLine,
} from "react-icons/ri";

const CATEGORIES = ["All", "Web Development", "Design & Branding", "Marketing & SEO", "Cloud & DevOps"];

const SERVICES = [
  {
    id: 1, title: "Web Development",
    icon: <RiCodeSSlashLine size={22} />,
    category: "Web Development", slug: "web-development",
    price: "From ₹25,000",
    timeline: "2–4 weeks",
    description: "Next.js and React applications built for Core Web Vitals — fast, SEO-ready, and designed to rank on day one. Average mobile LCP across our client sites: 1.3 seconds.",
    highlights: ["Next.js 15 / React 18", "90+ PageSpeed guaranteed", "All pages indexed in 14 days"],
  },
  {
    id: 2, title: "E-commerce Development",
    icon: <RiShoppingCartLine size={22} />,
    category: "Web Development", slug: "web-development/ecommerce-development",
    price: "From ₹60,000",
    timeline: "4–8 weeks",
    description: "Shopify, WooCommerce, or fully custom storefronts — built for conversion with Razorpay, UPI, and COD support, plus GST-compliant invoice generation baked in.",
    highlights: ["Razorpay + UPI + COD", "GST-compliant invoicing", "Abandoned cart recovery"],
  },
  {
    id: 3, title: "Mobile App Development",
    icon: <RiSmartphoneLine size={22} />,
    category: "Web Development", slug: "mobile-apps",
    price: "From ₹80,000",
    timeline: "8–16 weeks",
    description: "React Native apps tested on real mid-range Indian devices — one codebase for iOS and Android at 40% the cost of two native builds. App Store submission handled.",
    highlights: ["React Native — iOS + Android", "Real-device testing", "App Store submission included"],
  },
  {
    id: 4, title: "SEO Services",
    icon: <RiSearchLine size={22} />,
    category: "Marketing & SEO", slug: "seo",
    price: "From ₹15,000/mo",
    timeline: "Results in 6–12 weeks",
    description: "Technical SEO audits, local search optimisation, and content strategy calibrated for the Indian search landscape. We've driven 0 → 12,000 monthly visitors for clients in under 6 months.",
    highlights: ["Technical audit + roadmap", "Google Business Profile", "Monthly ranking reports"],
  },
  {
    id: 5, title: "Digital Marketing",
    icon: <RiMegaphoneLine size={22} />,
    category: "Marketing & SEO", slug: "digital-marketing",
    price: "From ₹20,000/mo",
    timeline: "Results in 30–45 days",
    description: "Google Ads, Meta campaigns, and email marketing built around your cost-per-acquisition. We've reduced CPL by 62% for clients by fixing campaign structure — not increasing budgets.",
    highlights: ["Google Ads + Meta Ads", "Conversion tracking first", "Monthly transparent reporting"],
  },
  {
    id: 6, title: "Digital Branding",
    icon: <RiPaintBrushLine size={22} />,
    category: "Design & Branding", slug: "digital-branding",
    price: "From ₹20,000",
    timeline: "2–3 weeks",
    description: "Brand identity systems — logo, colour palette, typography, guidelines, and collateral — delivered as editable source files. Three design concepts presented before any refinement begins.",
    highlights: ["Full source files included", "3 concepts before refinement", "Print + digital formats"],
  },
  {
    id: 7, title: "AI-Powered Solutions",
    icon: <RiRobot2Line size={22} />,
    category: "Web Development", slug: "ai-powered",
    price: "From ₹30,000",
    timeline: "Proof of concept in 48h",
    description: "Custom chatbots, LLM integrations, and ML-powered automation — built to solve a specific, measurable business problem. Proof of concept on your data before any full build commitment.",
    highlights: ["LLM + RAG pipelines", "WhatsApp chatbot setup", "48h proof of concept"],
  },
  {
    id: 8, title: "Cloud Integration",
    icon: <RiCloudLine size={22} />,
    category: "Cloud & DevOps", slug: "cloud-integration",
    price: "From ₹30,000",
    timeline: "1–3 weeks",
    description: "AWS Mumbai and GCP Mumbai infrastructure setups — so your application is fast for Indian users and your data stays in India. We typically find 20–35% savings on existing cloud bills.",
    highlights: ["AWS / GCP Mumbai default", "Zero-downtime migration", "Cost audit included"],
  },
  {
    id: 9, title: "DevOps & CI/CD",
    icon: <RiStackLine size={22} />,
    category: "Cloud & DevOps", slug: "devops-and-cloud",
    price: "From ₹25,000",
    timeline: "1–2 weeks",
    description: "CI/CD pipelines, Docker containerisation, and monitoring dashboards that let your team ship multiple times per day without fear. Documented runbook included on every setup.",
    highlights: ["GitHub Actions / GitLab CI", "Docker + Kubernetes", "Grafana monitoring"],
  },
];

const PROOF_POINTS = [
  { n: "50+", l: "Projects delivered" },
  { n: "₹480→₹180", l: "CPL reduction for EdTech client" },
  { n: "7s→1.2s", l: "Load time for law firm rebuild" },
  { n: "183%", l: "GMV growth for fashion D2C" },
];

export default function ServicesCard() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = activeCategory === "All"
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 sm:py-24 border-b border-[var(--rc-wire)]"
      style={{ background: "var(--rc-paper)" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>What we build</span>
            <h2 className="rc-display text-3xl sm:text-4xl font-semibold text-[var(--rc-ink)] mt-2 leading-tight">
              Nine services. One quality bar.
            </h2>
            <p className="rc-body mt-3 text-sm text-[var(--rc-ink-soft)] leading-relaxed max-w-md">
              Every service we offer runs on the same engineering quality standard — whether it's
              a 5-page business site or a multi-region cloud migration.
              Prices and timelines are real numbers, not "contact for quote" placeholders.
            </p>
          </div>

          {/* Proof strip */}
          <div className="grid grid-cols-2 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
            {PROOF_POINTS.map(({ n, l }) => (
              <div key={l} className="bg-white px-4 py-3">
                <p className="rc-display text-xl font-bold text-[var(--rc-ink)]">{n}</p>
                <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.45)] uppercase tracking-wider mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-7">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`rc-mono text-[0.65rem] uppercase tracking-wider px-3.5 py-1.5 border transition-colors ${
                activeCategory === cat
                  ? "bg-[var(--rc-ink)] text-[var(--rc-paper)] border-[var(--rc-ink)]"
                  : "border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-ink)] hover:text-[var(--rc-ink)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service cards */}
        <motion.div layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)] mb-12">
          <AnimatePresence>
            {filtered.map((svc) => (
              <motion.div key={svc.id} layout
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}>
                <Link href={`/services/${svc.slug}`}
                  className="group flex flex-col h-full bg-[var(--rc-paper)] hover:bg-white transition-colors p-6"
                  onMouseEnter={() => setHoveredId(svc.id)}
                  onMouseLeave={() => setHoveredId(null)}>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[var(--rc-circuit)]">{svc.icon}</span>
                    <div className="flex items-center gap-2">
                      <span className="rc-mono text-[0.7rem] border border-[var(--rc-wire)] px-1.5 py-0.5 text-[rgba(42,45,53,0.5)]">
                        {svc.price}
                      </span>
                      <span className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.3)]">
                        {String(svc.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <h3 className="rc-display text-base font-semibold text-[var(--rc-ink)] mb-1.5 group-hover:text-[var(--rc-circuit)] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="rc-mono text-[0.6rem] text-[var(--rc-trace)] mb-3">
                    {svc.timeline}
                  </p>

                  <p className="rc-body text-xs text-[rgba(42,45,53,0.75)] leading-relaxed flex-1">
                    {svc.description}
                  </p>

                  {/* Highlights — shown on hover */}
                  <AnimatePresence>
                    {hoveredId === svc.id && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 pt-3 border-t border-[var(--rc-wire)] space-y-1 overflow-hidden">
                        {svc.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-1.5 rc-mono text-[0.6rem] text-[var(--rc-ink-soft)]">
                            <span style={{ color: "var(--rc-trace)" }}>—</span>{h}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="rc-mono text-[0.6rem] uppercase tracking-wider text-[var(--rc-wire)] group-hover:text-[var(--rc-circuit)] transition-colors">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom: integrated offer */}
        <div className="grid lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
          <div className="bg-white p-7 lg:col-span-2">
            <span className="rc-eyebrow text-[rgba(42,45,53,0.4)] block mb-3">Why clients use us for multiple services</span>
            <h3 className="rc-display text-xl font-semibold text-[var(--rc-ink)] mb-3 leading-snug">
              A website without SEO is a brochure. SEO without a fast site wastes spend. Ads without a converting landing page burn money.
            </h3>
            <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed max-w-xl">
              These services compound when they work together. Our most successful clients — the ones
              who went from no online presence to consistent inbound leads — used at least two of these
              services in the first six months. We'll tell you honestly which combination makes sense
              for your specific situation and budget on the discovery call.
            </p>
          </div>
          <div className="p-7 flex flex-col justify-between" style={{ background: "var(--rc-ink)" }}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="rc-via rc-via-pulse" />
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Start here</span>
              </div>
              <p className="rc-body text-sm font-semibold text-[var(--rc-paper)] leading-snug mb-2">
                Free 30-min discovery call. Fixed-price proposal in 48 hours.
              </p>
              <p className="rc-body text-xs text-[rgba(246,242,233,0.45)] leading-relaxed">
                No pitch decks. No NDAs before we've spoken. Just a clear conversation about what you need.
              </p>
            </div>
            <Link href="/contact"
              className="rc-mono text-xs uppercase tracking-wider px-5 py-3 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors inline-block mt-6 text-center">
              Book the call →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
