'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  RiRobotLine, RiCpuLine, RiEyeLine, RiBarChartLine,
  RiMessageLine, RiSearchLine, RiBox3Line, RiShieldLine,
} from 'react-icons/ri';
import ServicePageLayout from '../../components/ServicePageLayout';

const SERVICES = [
  { icon: RiMessageLine, title: 'AI Chatbot Development', price: '₹30,000+', desc: 'Custom chatbots trained on your business data — for lead capture, customer support, and internal knowledge management. Deployed on your website or WhatsApp Business API.' },
  { icon: RiCpuLine, title: 'Machine Learning Integration', price: '₹80,000+', desc: 'ML models integrated into your existing web or mobile application — recommendations, predictions, anomaly detection, and classification on your actual data.' },
  { icon: RiEyeLine, title: 'Computer Vision Solutions', price: '₹1,00,000+', desc: 'Image recognition, object detection, and document OCR — for inventory management, quality control, and automated data extraction from invoices and forms.' },
  { icon: RiBarChartLine, title: 'Predictive Analytics', price: '₹60,000+', desc: 'Churn prediction, demand forecasting, and pricing optimisation models built on your historical data using Python, Pandas, and scikit-learn.' },
  { icon: RiSearchLine, title: 'Natural Language Processing', price: '₹50,000+', desc: 'Text classification, sentiment analysis, and entity extraction for support ticket routing, content moderation, and competitive intelligence.' },
  { icon: RiBox3Line, title: 'AI Workflow Automation', price: '₹40,000+', desc: 'Automating repetitive document processing, data entry, and reporting workflows using AI — reducing manual effort without replacing your team.' },
  { icon: RiRobotLine, title: 'LLM Integration (GPT/Claude)', price: '₹50,000+', desc: 'Integrating OpenAI GPT-4, Anthropic Claude, or Gemini into your products — RAG pipelines, document Q&A, and custom AI features built on foundation models.' },
  { icon: RiShieldLine, title: 'AI Consulting', price: '₹20,000', desc: 'A focused engagement to identify where AI will actually create business value — not a generic AI strategy deck. We look at your data, your workflows, your team.' },
];

const PROBLEMS = [
  { p: 'You want to "do AI" but don\'t know where to start', fix: 'We run a focused discovery session to identify which specific, measurable business problem AI can solve for you. Proof of concept on your data in 48 hours before any full build.' },
  { p: 'Your customer support team is overwhelmed with repetitive queries', fix: 'A WhatsApp or website chatbot trained on your FAQs, product catalogue, and policies can handle 60–70% of tier-1 support queries automatically, with human handoff for the rest.' },
  { p: 'You\'re manually processing documents, invoices, or forms', fix: 'Document OCR + NLP pipelines extract structured data from PDFs, images, and scanned documents automatically — no manual data entry.' },
  { p: 'You have lots of data but no insight from it', fix: 'We build predictive models on your historical data — churn prediction, demand forecasting, pricing recommendations — using Python and scikit-learn, deployed as APIs your team can use.' },
];

const CASE_STUDIES = [
  { tag: 'WhatsApp Chatbot', result: '65% support queries automated', image: '/images/service-ai.svg', metrics: [{ v: '65%', l: 'Queries handled' }, { v: '24/7', l: 'Availability' }, { v: '3wk', l: 'Build time' }], desc: 'D2C brand: WhatsApp Business API chatbot trained on product catalogue, FAQs, and return policy. Handles order status, product questions, and returns initiation. Human handoff for complex queries.' },
  { tag: 'Document Automation', result: '8 hours/week saved on invoice processing', image: '/images/service-ai.svg', metrics: [{ v: '8hr', l: 'Saved per week' }, { v: '97%', l: 'Extraction accuracy' }, { v: '6wk', l: 'Build time' }], desc: 'B2B services firm: OCR + NLP pipeline extracts vendor name, amount, line items, and GST from PDF invoices automatically. Structured data goes directly to their accounting software.' },
];

const TECH = ['Python', 'LangChain', 'OpenAI API', 'Anthropic API', 'TensorFlow', 'scikit-learn', 'Firebase ML', 'FastAPI', 'Next.js', 'WhatsApp Business API'];

export const CONFIG = {
  eyebrow: 'AI-Powered Solutions · RC Tech Solutions · Mohali',
  h1: 'AI That Solves a Specific Business Problem — Not AI for Its Own Sake',
  intro: 'We build AI features and automations that solve a defined business problem with a measurable outcome. Not "AI strategy" documents — working integrations deployed in your product, with a proof of concept in 48 hours.',
  parentLabel: 'Services', parentPath: '/',
  stats: [{ value: 10, suffix: '+', label: 'AI integrations shipped' }, { value: 60, suffix: '%', label: 'Avg task automation' }, { value: 48, suffix: 'h', label: 'Proof of concept' }],
  guarantees: [
    { title: 'Proof of concept in 48 hours', desc: 'Before committing to a full build, we deliver a working proof of concept on your actual data so you can evaluate output before spending ₹1 lakh.' },
    { title: 'No black-box AI', desc: 'Every model comes with an explanation of what it does, how it makes decisions, and what its failure modes are.' },
    { title: 'Data stays in India', desc: 'Where required, we deploy on Indian cloud infrastructure (AWS Mumbai, GCP Mumbai) so your data never leaves Indian soil.' },
    { title: 'Full handover documentation', desc: 'Complete technical docs so your team can maintain, retrain, and extend the model without being locked into us.' },
  ],
  faqs: [
    { q: 'Do I need a lot of data to use AI?', a: 'It depends. Chatbots and LLM-powered Q&A systems need very little of your own data. ML prediction models typically need at least 10,000 labelled records. We\'ll tell you honestly whether you have enough.' },
    { q: 'How much does an AI integration cost?', a: 'A custom chatbot starts at ₹30,000–₹60,000. ML model development is typically ₹80,000–₹3,00,000 depending on data complexity. We quote a fixed price after the discovery call.' },
    { q: 'Can you automate our WhatsApp customer support?', a: 'Yes — we build WhatsApp chatbots using the WhatsApp Business API, trained on your FAQs and product documentation, with human handoff for complex queries.' },
    { q: 'Will the AI replace our team?', a: 'The right question is: which specific repetitive tasks can AI handle faster and more accurately, so your team can focus on higher-value work? We identify those tasks and automate them.' },
  ],
  relatedLinks: [
    { href: '/services/web-development', label: 'Web Development' },
    { href: '/services/cloud-integration', label: 'Cloud Integration' },
    { href: '/services/devops-and-cloud', label: 'DevOps & Cloud' },
  ],
};

export default function AIPage() {
  return (
    <ServicePageLayout config={CONFIG}>

      <section className="mb-12">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Problems we solve</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Four AI problems Indian businesses actually have.</h2>
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
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>What we build</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Eight AI capabilities. All production-grade. All with real pricing.</h2>
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
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Two AI projects. Both delivered. Both working.</h2>
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

      <section className="mb-0 rc-blueprint-card p-6">
        <span className="rc-eyebrow text-[rgba(42,45,53,0.4)] block mb-3">Tech stack</span>
        <div className="flex flex-wrap gap-2">
          {TECH.map(t => (
            <span key={t} className="rc-mono text-[0.7rem] border border-[var(--rc-wire)] px-3 py-1.5 text-[var(--rc-ink-soft)]">{t}</span>
          ))}
        </div>
      </section>

    </ServicePageLayout>
  );
}
