'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  RiSmartphoneLine, RiAppleLine, RiAndroidLine,
  RiCodeSSlashLine, RiPaintBrushLine, RiBugLine,
  RiStoreLine, RiSpeedLine,
} from 'react-icons/ri';
import ServicePageLayout from '../../components/ServicePageLayout';

const SERVICES = [
  { icon: RiSmartphoneLine, title: 'React Native Apps', price: '₹80,000+', time: '8–12 weeks', desc: 'One codebase, iOS and Android. 40% cost saving over two native builds — without compromising user experience or performance.' },
  { icon: RiAppleLine, title: 'iOS App Development', price: '₹1,20,000+', time: '10–16 weeks', desc: 'Swift and React Native iOS apps for the App Store, built to Apple\'s Human Interface Guidelines and ready for first-submission approval.' },
  { icon: RiAndroidLine, title: 'Android App Development', price: '₹80,000+', time: '8–14 weeks', desc: 'Kotlin and React Native Android apps optimised for the full range of devices Indian users own — including 3GB RAM mid-range phones.' },
  { icon: RiPaintBrushLine, title: 'UI/UX Design for Mobile', price: '₹30,000+', time: '2–3 weeks', desc: 'Figma prototypes and high-fidelity designs built to pass App Store review and keep users engaged after install.' },
  { icon: RiCodeSSlashLine, title: 'Backend & API Integration', price: '₹40,000+', time: '3–5 weeks', desc: 'Firebase, Node.js, or REST API backends — push notifications, authentication, real-time data, Razorpay payments.' },
  { icon: RiStoreLine, title: 'App Store Optimisation', price: '₹15,000', time: '1 week', desc: 'App Store and Google Play listing optimisation: screenshots, descriptions, keywords, and review strategy to maximise organic installs.' },
  { icon: RiBugLine, title: 'Testing & QA', price: '₹20,000+', time: '1–2 weeks', desc: 'Cross-device testing on real Android and iOS devices — not just emulators — before every build goes to the stores.' },
  { icon: RiSpeedLine, title: 'Performance Optimisation', price: '₹25,000+', time: '1–2 weeks', desc: 'App size reduction, startup time tuning, and memory management for smooth performance on 3GB RAM Android devices.' },
];

const PROBLEMS = [
  { p: 'Your app idea needs both iOS and Android but budget is tight', fix: 'React Native covers both platforms from one codebase at 40% the cost of two native builds. Performance is near-native for 95% of use cases.' },
  { p: 'Previous developers disappeared after taking payment', fix: 'We work in weekly sprints with a shared TestFlight / APK link from week 2. You see the real app being built — not slides and mockups.' },
  { p: 'App keeps getting rejected by the App Store', fix: 'We build to Apple\'s HIG from the first wireframe. Our first-submission approval rate is over 90% — we know what reviewers flag.' },
  { p: 'Your app is slow on budget Android phones', fix: 'We test on real mid-range Indian devices (Redmi, Realme, Samsung A-series) throughout development, not just flagships.' },
];

const CASE_STUDIES = [
  { tag: 'React Native', result: 'iOS + Android app · 4.8★ rating', image: '/images/service-mobile.svg', metrics: [{ v: '4.8★', l: 'App Store rating' }, { v: '10K+', l: 'Downloads month 1' }, { v: '40%', l: 'Cost vs native' }], desc: 'D2C brand needed a companion app for their Shopify store. React Native with Firebase backend, Razorpay in-app payments, and push notifications. Launched on both stores in 10 weeks.' },
  { tag: 'Progressive Web App', result: 'App-like experience · no App Store needed', image: '/images/service-web.svg', metrics: [{ v: '0ms', l: 'App Store wait' }, { v: '65%', l: 'Lower dev cost' }, { v: '2.1s', l: 'Load time' }], desc: 'EdTech startup needed an installable, offline-capable app without App Store complexity. PWA on Next.js with service workers. Launched in 4 weeks — no store review process.' },
];

export const CONFIG = {
  eyebrow: 'Mobile App Development · RC Tech Solutions · Mohali',
  h1: 'Mobile Apps Built for India — iOS, Android, React Native',
  intro: 'Cross-platform React Native apps that run natively on iOS and Android — tested on real mid-range Indian devices, not just emulators. One build cycle, two platforms, App Store submission handled.',
  parentLabel: 'Services', parentPath: '/',
  stats: [{ value: 15, suffix: '+', label: 'Apps shipped' }, { value: 40, suffix: '%', label: 'Cost saving vs native' }, { value: 4, suffix: '.7★', label: 'Avg App Store rating' }],
  guarantees: [
    { title: 'Real-device testing throughout', desc: 'Tested on physical iOS and Android devices — including mid-range Indian market phones — at every sprint.' },
    { title: 'App Store submission handled', desc: 'We manage the full App Store and Play Store submission including screenshots, descriptions, and compliance review.' },
    { title: 'Performance on 3G/4G', desc: 'Apps are optimised for variable network conditions — not just perfect office Wi-Fi.' },
    { title: '30-day post-launch support', desc: 'Crash monitoring and critical bug fixes included for 30 days after App Store approval.' },
  ],
  faqs: [
    { q: 'React Native or native iOS/Android?', a: 'React Native is right for most startups — one codebase, both platforms, 40% lower cost. Native makes sense only for apps needing deep device integration (Bluetooth, AR, custom camera). We\'ll tell you which fits your requirements honestly.' },
    { q: 'How long does a mobile app take?', a: 'A standard consumer app with authentication and basic backend: 8–12 weeks. Complex apps with real-time features or custom APIs: 16–24 weeks. We give you a written timeline in our proposal.' },
    { q: 'Do you handle App Store and Play Store accounts?', a: 'Yes. Apple Developer Program: ₹8,299/year. Google Play: one-time $25. We handle all the submission paperwork, screenshots, and compliance — you just need the account.' },
    { q: 'Can you build an app for my existing website?', a: 'Yes — either a companion app that connects to your existing backend, or a Progressive Web App (installable, offline-capable) if a full native build isn\'t necessary for your use case.' },
  ],
  relatedLinks: [
    { href: '/services/web-development/progressive-web-apps', label: 'Progressive Web Apps' },
    { href: '/services/web-development', label: 'Web Development' },
    { href: '/services/cloud-integration', label: 'Cloud Integration' },
    { href: '/services/ai-powered', label: 'AI-Powered Solutions' },
  ],
};

export default function MobileAppsPage() {
  return (
    <ServicePageLayout config={CONFIG}>

      <section className="mb-12">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Problems we fix</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Four app development problems Indian businesses face — and how we solve them.</h2>
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
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">End-to-end mobile development — design through App Store.</h2>
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
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Two app projects. Two different approaches.</h2>
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
