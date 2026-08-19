'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  RiGitBranchLine, RiBox3Line, RiRepeatLine,
  RiAlertLine, RiTimeLine, RiShieldKeyholeLine,
  RiCodeBoxLine, RiDashboardLine,
} from 'react-icons/ri';
import ServicePageLayout from '../../components/ServicePageLayout';

const SERVICES = [
  { icon: RiGitBranchLine, title: 'CI/CD Pipeline Setup', price: '₹25,000+', desc: 'GitHub Actions, GitLab CI, or CircleCI pipelines that automatically build, test, and deploy your code — eliminating manual deployments and human error.' },
  { icon: RiBox3Line, title: 'Docker & Containerisation', price: '₹20,000+', desc: 'Containerising your application for consistent environments across development, staging, and production — no more "works on my machine" failures.' },
  { icon: RiRepeatLine, title: 'Kubernetes Orchestration', price: '₹50,000+', desc: 'EKS, GKE, or self-managed Kubernetes for applications needing auto-scaling, rolling deployments, and high availability.' },
  { icon: RiAlertLine, title: 'Monitoring & Alerting', price: '₹20,000+', desc: 'Prometheus, Grafana, and PagerDuty setup — real-time visibility into application performance and automated alerts when things break.' },
  { icon: RiTimeLine, title: 'Infrastructure as Code', price: '₹30,000+', desc: 'Terraform and AWS CloudFormation to define your entire infrastructure in version-controlled code — reproducible, auditable, and reversible.' },
  { icon: RiShieldKeyholeLine, title: 'DevSecOps', price: '₹25,000+', desc: 'Automated vulnerability scanning, secrets detection in code, and security hardening integrated into your CI/CD pipeline.' },
  { icon: RiCodeBoxLine, title: 'Environment Management', price: '₹15,000+', desc: 'Development, staging, and production environment parity — preventing the class of bugs that only appear in production.' },
  { icon: RiDashboardLine, title: 'Log Management', price: '₹18,000+', desc: 'Centralised log aggregation with ELK Stack or AWS CloudWatch for searchable, structured application logs and error tracking.' },
];

const PROBLEMS = [
  { p: 'Your team deploys manually and things break in production', fix: 'A proper CI/CD pipeline with automated testing means every deployment is identical and tested before it goes live. One-command rollback if anything goes wrong.' },
  { p: 'Staging and production behave differently', fix: 'Docker containerisation ensures identical environments from a developer\'s laptop to the production server. "Works on my machine" becomes impossible.' },
  { p: 'You don\'t know your application is down until users complain', fix: 'Prometheus + Grafana monitoring with PagerDuty alerts means you know about problems before users do — usually before they cause any impact.' },
  { p: 'Deployments take hours and require your best developer\'s attention', fix: 'A properly configured CI/CD pipeline deploys in minutes, automatically, triggered by a git push. Your senior developer focuses on building, not babysitting deployments.' },
];

const CASE_STUDIES = [
  { tag: 'CI/CD Pipeline', result: 'Deployment time: 4 hours → 8 minutes', image: '/images/service-cloud.svg', metrics: [{ v: '8min', l: 'Deploy time' }, { v: '5x', l: 'Faster releases' }, { v: '0', l: 'Rollback incidents' }], desc: 'SaaS startup: replaced manual SSH deployments with GitHub Actions pipeline — automated tests, Docker build, and Vercel/AWS deployment. Team now ships 3–5 times per day vs twice per week.' },
  { tag: 'Monitoring Setup', result: '99.9% uptime — was 97.2%', image: '/images/service-cloud.svg', metrics: [{ v: '99.9%', l: 'Uptime' }, { v: '<2min', l: 'Alert to fix' }, { v: '80%', l: 'Fewer incidents' }], desc: 'E-commerce platform: Prometheus + Grafana dashboards + PagerDuty alerts. Team now detects and resolves issues in under 2 minutes. Monthly unplanned downtime dropped from 21 hours to under 1 hour.' },
];

const PROCESS = [
  { n: '01', t: 'Audit your current setup (week 1)', d: 'We document how deployments currently work, what breaks, and how long it takes. We identify the highest-impact improvements first.' },
  { n: '02', t: 'CI/CD pipeline build (weeks 1–2)', d: 'GitHub Actions or GitLab CI pipeline with automated tests, Docker build, and deployment to your target environment. Staging deployment first, then production.' },
  { n: '03', t: 'Monitoring and alerting (week 2–3)', d: 'Prometheus metrics, Grafana dashboards, and PagerDuty or Slack alerts. You define what "something is wrong" means — we make sure you\'re notified immediately.' },
  { n: '04', t: 'Documentation and team handover (week 3–4)', d: 'Step-by-step runbook for every process. Your team can operate everything independently from day one — no ongoing dependency on us required.' },
];

export const CONFIG = {
  eyebrow: 'DevOps & Cloud · RC Tech Solutions · Mohali',
  h1: 'DevOps Pipelines That Ship Code Faster and Break Less',
  intro: 'We set up CI/CD pipelines, containerised deployments, and monitoring infrastructure that let your development team ship multiple times per day with confidence — not once per week with fear.',
  parentLabel: 'Services', parentPath: '/',
  stats: [{ value: 15, suffix: '+', label: 'Pipelines built' }, { value: 5, suffix: 'x', label: 'Faster deployment cycles' }, { value: 80, suffix: '%', label: 'Fewer production incidents' }],
  guarantees: [
    { title: 'Documented runbook included', desc: 'Every pipeline and infrastructure setup comes with a step-by-step runbook so your team can operate it independently from day one.' },
    { title: 'Staging environment always included', desc: 'We set up a staging environment that mirrors production — test changes safely before they go live.' },
    { title: 'One-command rollback on every deploy', desc: 'Every pipeline includes a one-command rollback to the previous version. No manual scrambling when something goes wrong.' },
    { title: 'On-call support for first 2 weeks', desc: 'Available for 14 days after handover to answer questions and fix anything that surfaces in your team\'s first weeks.' },
  ],
  faqs: [
    { q: 'We\'re a small team — do we really need DevOps?', a: 'If you\'re deploying more than once a month and things sometimes break in production, yes. A basic CI/CD pipeline costs ₹20,000–40,000 to set up and saves that in developer time within the first month.' },
    { q: 'GitHub Actions or another CI tool?', a: 'We default to GitHub Actions for its tight GitHub integration and zero additional cost. For teams on GitLab, we use GitLab CI. For enterprise requirements, Jenkins, CircleCI, or AWS CodePipeline.' },
    { q: 'What\'s the difference between Cloud Integration and DevOps?', a: 'Cloud Integration is about setting up the infrastructure (servers, databases, networking). DevOps is about the processes and tooling that get your code to that infrastructure reliably and automatically. You typically need both.' },
    { q: 'Can you fix an existing messy pipeline?', a: 'Yes — pipeline audits and refactors are common. We review your current setup, document what exists, and propose improvements with a migration plan that doesn\'t disrupt active development.' },
  ],
  relatedLinks: [
    { href: '/services/cloud-integration', label: 'Cloud Integration' },
    { href: '/services/ai-powered', label: 'AI-Powered Solutions' },
    { href: '/services/web-development', label: 'Web Development' },
  ],
};

export default function DevOpsPage() {
  return (
    <ServicePageLayout config={CONFIG}>

      <section className="mb-12">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Problems we fix</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Four DevOps problems that slow Indian tech teams down.</h2>
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
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Eight DevOps capabilities. Real pricing on every one.</h2>
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

      <section className="mb-12">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Real results</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Two DevOps projects. Both measured.</h2>
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

      <section className="mb-0">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>How we work</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Four steps from audit to fully automated deployments.</h2>
        <div className="divide-y divide-[var(--rc-wire)] border-y border-[var(--rc-wire)]">
          {PROCESS.map((p) => (
            <div key={p.n} className="flex gap-5 py-5">
              <span className="rc-mono text-[0.7rem] font-medium flex-shrink-0 pt-0.5" style={{ color: 'var(--rc-circuit)' }}>{p.n}</span>
              <div>
                <p className="rc-body text-sm font-semibold text-[var(--rc-ink)] mb-1">{p.t}</p>
                <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </ServicePageLayout>
  );
}
