'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  RiCloudLine, RiServerLine, RiShieldLine, RiArrowRightUpLine,
  RiDatabase2Line, RiGitBranchLine, RiSpeedLine, RiGlobalLine,
} from 'react-icons/ri';
import ServicePageLayout from '../../components/ServicePageLayout';

const SERVICES = [
  { icon: RiCloudLine, title: 'Cloud Migration', price: '₹40,000+', desc: 'Moving from on-premise or legacy hosting to AWS, GCP, or Azure — with zero-downtime migration planning and rollback capability.' },
  { icon: RiServerLine, title: 'Infrastructure Setup', price: '₹30,000+', desc: 'VPC, subnets, security groups, load balancers, and auto-scaling on AWS Mumbai or GCP Mumbai for low-latency performance for Indian users.' },
  { icon: RiDatabase2Line, title: 'Managed Database Setup', price: '₹20,000+', desc: 'RDS PostgreSQL, MongoDB Atlas, or Firebase Firestore with automated backups, read replicas, and point-in-time recovery.' },
  { icon: RiShieldLine, title: 'Cloud Security', price: '₹25,000+', desc: 'IAM policy audits, security group reviews, secrets management with AWS Secrets Manager, and compliance hardening for Indian data laws.' },
  { icon: RiArrowRightUpLine, title: 'Serverless Architecture', price: '₹35,000+', desc: 'AWS Lambda, Google Cloud Functions, and Firebase Functions for event-driven, infinitely scalable backends — pay only for what you use.' },
  { icon: RiGitBranchLine, title: 'Multi-Cloud Strategy', price: '₹50,000+', desc: 'Architecting systems spanning multiple providers for compliance, cost optimisation, or redundancy requirements.' },
  { icon: RiSpeedLine, title: 'CDN & Performance', price: '₹15,000+', desc: 'Cloudflare, AWS CloudFront, or GCP Cloud CDN with Indian edge nodes — reducing latency for Indian users by 200–400ms.' },
  { icon: RiGlobalLine, title: 'Cloud Cost Optimisation', price: '₹20,000', desc: 'Rightsizing, reserved instance planning, and cost allocation tagging. We typically find 20–35% savings on existing AWS and GCP bills.' },
];

const PROBLEMS = [
  { p: 'Your site is slow for Indian users because it\'s hosted in Singapore or the US', fix: 'We migrate to AWS Mumbai (ap-south-1) or GCP Mumbai and add Cloudflare CDN with Indian edge nodes. Typical TTFB improvement: 300–600ms for Indian users.' },
  { p: 'Your cloud bill keeps growing and you don\'t know why', fix: 'We audit your AWS or GCP bill, identify idle resources, oversized instances, and unused reservations. We typically find 20–35% savings without reducing performance.' },
  { p: 'You\'re on shared hosting and it breaks under real traffic', fix: 'We migrate to a properly sized VPS or auto-scaling cloud setup that handles traffic spikes without manual intervention — and without the 10x shared hosting bill.' },
  { p: 'Your data needs to stay in India for compliance', fix: 'We architect every deployment on Indian region infrastructure by default — AWS ap-south-1, GCP asia-south1 — with data residency documentation for your legal team.' },
];

const CASE_STUDIES = [
  { tag: 'Cloud Migration', result: '0.18s TTFB · was 1.1s', image: '/images/service-cloud.svg', metrics: [{ v: '83%', l: 'Faster TTFB' }, { v: 'Mumbai', l: 'Data centre' }, { v: '₹0', l: 'Downtime' }], desc: 'Chandigarh law firm: migrated from Singapore shared hosting to AWS Mumbai + Cloudflare CDN. Time to first byte dropped from 1.1s to 0.18s. Zero downtime migration with DNS cutover at 3am.' },
  { tag: 'Cost Optimisation', result: '32% reduction in monthly cloud bill', image: '/images/service-cloud.svg', metrics: [{ v: '32%', l: 'Cost reduction' }, { v: '2wk', l: 'Audit timeline' }, { v: 'Same', l: 'Performance' }], desc: 'SaaS startup on AWS: rightsized EC2 instances, converted on-demand to reserved instances, eliminated idle resources. Monthly bill dropped from ₹85,000 to ₹58,000 with no performance change.' },
];

export const CONFIG = {
  eyebrow: 'Cloud Integration · RC Tech Solutions · Mohali',
  h1: 'Cloud Infrastructure Built for Indian Performance and Indian Compliance',
  intro: 'We set up, migrate, and optimise cloud infrastructure on AWS Mumbai and GCP Mumbai — so your application is fast for Indian users, your data stays in India, and your bill is predictable.',
  parentLabel: 'Services', parentPath: '/',
  stats: [{ value: 20, suffix: '+', label: 'Cloud setups completed' }, { value: 99, suffix: '.9%', label: 'Uptime delivered' }, { value: 25, suffix: '%', label: 'Avg cost reduction' }],
  guarantees: [
    { title: 'Indian data residency by default', desc: 'All infrastructure deployed on AWS ap-south-1 (Mumbai) or equivalent Indian region — your data stays in India.' },
    { title: 'Zero-downtime migrations', desc: 'All migrations planned with a detailed runbook and rollback plan — your application stays live throughout.' },
    { title: 'Full access handover', desc: 'Admin access to every account, resource, and configuration. Nothing locked behind our agency account.' },
    { title: 'Cost monitoring setup', desc: 'AWS Cost Explorer or GCP billing alerts configured before handover — no surprise cloud bills.' },
  ],
  faqs: [
    { q: 'Which cloud do you recommend for Indian businesses?', a: 'AWS Mumbai (ap-south-1) for most use cases — broadest service availability and deepest ecosystem. GCP Mumbai for ML/AI workloads. Azure India for Microsoft-stack businesses.' },
    { q: 'How much does cloud cost vs shared hosting?', a: 'A properly sized AWS setup for a small business runs ₹1,500–4,000/month vs ₹200–500/month for shared hosting. The reliability, performance, and security difference is substantial.' },
    { q: 'Can you reduce our existing AWS bill?', a: 'Yes — cloud cost optimisation is a standalone service. We typically find 20–35% savings through rightsizing, reserved instances, and idle resource elimination. We audit before quoting.' },
    { q: 'Do you provide ongoing cloud management?', a: 'Yes — monthly DevOps retainers covering monitoring, security updates, scaling adjustments, and incident response.' },
  ],
  relatedLinks: [
    { href: '/services/devops-and-cloud', label: 'DevOps & Cloud' },
    { href: '/services/ai-powered', label: 'AI-Powered Solutions' },
    { href: '/services/web-development', label: 'Web Development' },
  ],
};

export default function CloudPage() {
  return (
    <ServicePageLayout config={CONFIG}>

      <section className="mb-12">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Problems we fix</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Four cloud problems we solve for Indian businesses.</h2>
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
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>What we set up</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Eight cloud capabilities. India-first architecture. Real pricing.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.title} className="group bg-[var(--rc-paper)] hover:bg-white transition-colors p-5 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <Icon size={18} style={{ color: 'var(--rc-circuit)' }} />
                  <span className="rc-mono text-[0.7rem] font-semibold text-[var(--rc-ink)]">{svc.price}</span>
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
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Two cloud engagements. Both measured.</h2>
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
