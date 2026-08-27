'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  RiPenNibLine, RiPaletteLine, RiLayoutLine,
  RiInstagramLine, RiFileTextLine, RiVideoLine,
  RiMagicLine, RiBrushLine,
} from 'react-icons/ri';
import ServicePageLayout from '../../components/ServicePageLayout';

const SERVICES = [
  { icon: RiPenNibLine, title: 'Logo & Brand Identity', price: '₹20,000+', time: '2–3 weeks', desc: 'Primary logo, alternate marks, icon, colour palette, and typography — delivered as editable Figma/AI/SVG source files plus a usage guide.' },
  { icon: RiPaletteLine, title: 'Brand Strategy', price: '₹15,000+', time: '1–2 weeks', desc: 'Positioning, tone of voice, target audience definition, and competitive mapping before any visual work begins.' },
  { icon: RiLayoutLine, title: 'Brand Guidelines', price: '₹12,000+', time: '1 week', desc: 'Comprehensive PDF covering logo usage, colour values, typography hierarchy, photography style, and do/don\'t examples.' },
  { icon: RiInstagramLine, title: 'Social Media Branding', price: '₹10,000+', time: '1 week', desc: 'Profile images, cover photos, post templates, and story frames for Instagram, LinkedIn, and Facebook — ready in Canva or Figma.' },
  { icon: RiFileTextLine, title: 'Marketing Collateral', price: '₹8,000+', time: '1 week', desc: 'Business cards, letterheads, email signatures, presentations, and brochures — consistently on-brand.' },
  { icon: RiVideoLine, title: 'Motion & Video Branding', price: '₹15,000+', time: '1–2 weeks', desc: 'Animated logo intros, lower thirds, and branded video templates for YouTube and Instagram Reels.' },
  { icon: RiMagicLine, title: 'Brand Refresh', price: '₹18,000+', time: '2 weeks', desc: 'Evolving an existing brand without losing equity — updating logo, palette, and visual language while keeping what\'s recognisable.' },
  { icon: RiBrushLine, title: 'Packaging Design', price: '₹20,000+', time: '2 weeks', desc: 'Product packaging, labels, and unboxing experience design for D2C brands — designed for Indian print production.' },
];

const PROBLEMS = [
  { p: 'Your brand looks amateur compared to your actual quality', fix: 'A brand identity system that matches what you actually deliver. We audit your current brand before touching a pixel so we keep what\'s working.' },
  { p: 'Different team members use the logo differently everywhere', fix: 'A complete brand guidelines document with exact colour values, spacing rules, and real do/don\'t examples. One source of truth for your whole team.' },
  { p: 'You got a logo but nothing else — and it shows', fix: 'We deliver a full identity system: logo variations, colour palette, typography stack, icon set, and social templates — not just a single PNG.' },
  { p: 'Your brand feels generic and forgettable', fix: 'We start with strategy — positioning, tone of voice, audience — before design. Visual work built on strategic clarity is distinctive by default.' },
];

const CASE_STUDIES = [
  { tag: 'Full Brand Identity', result: 'D2C brand relaunch — 2× price increase post-rebrand', image: '/images/service-branding.svg', metrics: [{ v: '2×', l: 'Price point' }, { v: '14d', l: 'Identity delivery' }, { v: '100%', l: 'Source files' }], desc: 'Ayurvedic wellness brand: full rebrand with logo, colour system, packaging design, and social templates. The brand repositioned from mass-market to premium, doubling their average order value within 3 months.' },
  { tag: 'Agency Brand', result: 'New agency positioning — won first enterprise client in month 2', image: '/images/service-branding.svg', metrics: [{ v: '3', l: 'Concepts delivered' }, { v: '2wk', l: 'Total timeline' }, { v: '1st', l: 'Enterprise client' }], desc: 'IT consulting firm in Bengaluru: strategic repositioning, new visual identity, pitch deck, and LinkedIn overhaul. Won their first enterprise contract within 60 days of relaunch.' },
];

export const CONFIG = {
  eyebrow: 'Digital Branding · RC Tech Solutions · Mohali',
  h1: 'Brand Identity Systems That Make Premium Pricing Feel Obvious',
  intro: 'Most Indian businesses are undercharging because their brand doesn\'t match their actual quality. We build complete identity systems — not just logos — that justify premium positioning and make you the obvious choice.',
  parentLabel: 'Services', parentPath: '/',
  stats: [{ value: 30, suffix: '+', label: 'Brands built' }, { value: 2, suffix: 'x', label: 'Avg price increase post-rebrand' }, { value: 14, suffix: ' days', label: 'Identity system delivery' }],
  guarantees: [
    { title: 'Source files always included', desc: 'Figma, Adobe Illustrator, and all logo variations — editable source files, not just PNG exports. You own everything.' },
    { title: '3 design concepts to choose from', desc: 'We present three distinct visual directions before going deep on any one. No guessing whether you\'ll like the output.' },
    { title: 'Unlimited revisions on chosen concept', desc: 'Once you\'ve chosen a direction, we refine it until it\'s exactly right. No per-revision billing on the selected concept.' },
    { title: 'Print-ready files included', desc: 'All deliverables in CMYK print-ready formats alongside RGB screen formats.' },
  ],
  faqs: [
    { q: 'What\'s the difference between a logo and a brand identity?', a: 'A logo is a single mark. A brand identity is the complete system — logo, colour palette, typography, iconography, guidelines. A logo without a system leads to inconsistent application that weakens the brand over time.' },
    { q: 'How long does a brand identity project take?', a: 'A full brand identity (logo, palette, typography, guidelines) takes 3–4 weeks. Logo-only: 1–2 weeks. Brand strategy before visual work adds 1 week.' },
    { q: 'Can you redesign our existing logo?', a: 'Yes. Brand refreshes are a significant part of our work. We audit what\'s working in your current brand equity before changing anything, so the refresh builds on what exists.' },
    { q: 'Do you design the website too?', a: 'Yes. Many branding clients go on to build their website with us after the identity project. The handoff is clean because we already have all the brand assets.' },
  ],
  relatedLinks: [
    { href: '/services/web-development', label: 'Web Development' },
    { href: '/services/digital-marketing/social-media-management', label: 'Social Media Management' },
    { href: '/services/digital-marketing', label: 'Digital Marketing' },
  ],
};

export default function BrandingPage() {
  return (
    <ServicePageLayout config={CONFIG}>

      <section className="mb-12">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Problems we fix</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Why most Indian brand identities don't work — and how we fix them.</h2>
        <div className="grid sm:grid-cols-2 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)] mb-10">
          {PROBLEMS.map((item, i) => (
            <div key={i} className="bg-white p-5">
              <p className="rc-mono text-[0.7rem] mb-2" style={{ color: 'var(--rc-circuit)' }}>✗ Problem</p>
              <p className="rc-body text-sm font-semibold text-[var(--rc-ink)] mb-2">{item.p}</p>
              <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed"><span style={{ color: 'var(--rc-trace)' }}>→ </span>{item.fix}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Services & pricing</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Every asset your brand needs, built to last.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.title} className="group bg-[var(--rc-paper)] hover:bg-white transition-colors p-5 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <Icon size={18} style={{ color: 'var(--rc-circuit)' }} />
                  <div className="text-right">
                    <span className="rc-mono text-[0.7rem] font-semibold text-[var(--rc-ink)] block">{svc.price}</span>
                    <span className="rc-mono text-[0.65rem] text-[rgba(42,45,53,0.45)]">{svc.time}</span>
                  </div>
                </div>
                <h3 className="rc-display text-sm font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors mb-1.5">{svc.title}</h3>
                <p className="rc-body text-xs text-[var(--rc-ink-soft)]/75 leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-0">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Real results</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Two brand projects. Both measurable outcomes.</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rc-blueprint-card overflow-hidden bg-white">
              <div className="relative h-44 bg-[var(--rc-paper-deep)]">
                <Image src={cs.image} alt={cs.result} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="p-5">
                <span className="rc-mono text-[0.7rem] px-2 py-0.5 border border-[var(--rc-circuit)]/20 text-[var(--rc-circuit)]/70">{cs.tag}</span>
                <p className="rc-display text-lg font-semibold text-[var(--rc-ink)] mt-2 mb-2">{cs.result}</p>
                <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed mb-4">{cs.desc}</p>
                <div className="flex gap-5 pt-3 border-t border-[var(--rc-wire)]">
                  {cs.metrics.map(m => (
                    <div key={m.l}>
                      <p className="rc-mono text-base font-bold text-[var(--rc-ink)]">{m.v}</p>
                      <p className="rc-mono text-[0.65rem] text-[rgba(42,45,53,0.4)] uppercase tracking-wider">{m.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </ServicePageLayout>
  );
}
