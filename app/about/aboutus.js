"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function useCounter(target, duration = 1200) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return [count, ref];
}

const STATS = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 3, suffix: "+", label: "Years in business" },
  { value: 92, suffix: "%", label: "Client retention" },
  { value: 99, suffix: "%", label: "Satisfaction rate" },
];

const TEAM = [
  {
    name: "Rahul Chauhan",
    role: "Founder & CEO",
    bio: "Rahul is a full-stack developer and digital strategist based in Mohali, Punjab. He started RC Tech Solutions in 2021 after noticing that most Indian startups were being quoted inflated prices by large agencies for basic web infrastructure. His philosophy is straightforward: build it properly, make it fast, and make it rank. He personally oversees every project's technical architecture and SEO strategy — for clients in India and, increasingly, for founders in the USA, UK, and Canada hiring the team remotely.",
    image: "/rahul.jpeg",
    linkedin: "https://www.linkedin.com/in/er-rahul-chauhan/",
    instagram: "https://www.instagram.com/rc_tech_solutions/",
  },
];

const TIMELINE = [
  { year: "2021", event: "RC Tech Solutions founded in Mohali, Punjab, with a focus on Next.js web development for startups." },
  { year: "2022", event: "Expanded into SEO and digital marketing, helping 10+ local businesses rank on the first page of Google." },
  { year: "2023", event: "Launched e-commerce development practice; first Shopify and WooCommerce projects delivered for D2C brands." },
  { year: "2024", event: "Added cloud integration, DevOps, and AI-powered solutions to the service portfolio. Crossed 40 projects." },
  { year: "2025", event: "Crossed 50 projects delivered. Launched RC Tech blog to share real technical knowledge with founders and developers." },
];

const VALUES = [
  {
    title: "Engineering quality",
    desc: "Every line of code we ship is reviewed, tested, and optimised for performance. We don't cut corners because our clients' rankings and revenue depend on it.",
    icon: "⚙",
  },
  {
    title: "Radical transparency",
    desc: "You get access to every tool, report, and communication channel we use. No black boxes, no mystery retainers, no inflated timelines.",
    icon: "◎",
  },
  {
    title: "Long-term thinking",
    desc: "We turn down projects that aren't a good fit. We'd rather build a 3-year partnership than take a quick win that doesn't serve you.",
    icon: "◈",
  },
  {
    title: "Genuine ownership",
    desc: "Every team member acts like an owner — proactively flagging problems, suggesting improvements, and staying accountable without being chased.",
    icon: "◉",
  },
];

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>

      {/* ── Hero ── */}
      <section className="border-b border-[var(--rc-wire)] rc-grid-bg">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:py-24">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="rc-via rc-via-pulse" />
            <span className="rc-eyebrow" style={{ color: "var(--rc-trace)" }}>Mohali, India · Est. 2021 · Serving Clients Worldwide</span>
          </div>
          <h1 className="rc-display text-4xl sm:text-5xl font-semibold text-[var(--rc-ink)] leading-tight max-w-2xl">
            We build the internet infrastructure that makes businesses grow.
          </h1>
          <p className="rc-body mt-6 text-lg text-[var(--rc-ink-soft)] max-w-2xl leading-relaxed">
            RC Tech Solutions is a web development and digital marketing agency based in Mohali, Punjab, India.
            We build fast, SEO-engineered websites and run performance marketing campaigns for founders, startups,
            and growing businesses — across India and for international clients in the USA, UK, Canada and Australia —
            who want to compete seriously online without the overhead of a large agency.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rc-mono text-xs uppercase tracking-wider px-6 py-3 bg-[var(--rc-ink)] text-[var(--rc-paper)] hover:bg-[var(--rc-circuit)] transition-colors">
              Start a project
            </Link>
            <Link href="/blogs" className="rc-mono text-xs uppercase tracking-wider px-6 py-3 border border-[var(--rc-ink)] text-[var(--rc-ink)] hover:bg-[var(--rc-ink)] hover:text-[var(--rc-paper)] transition-colors">
              Read the journal
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-[var(--rc-wire)] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ value, suffix, label }) => {
              const [count, ref] = useCounter(value);
              return (
                <div key={label} ref={ref} className="text-center">
                  <dt className="rc-display text-4xl font-bold text-[var(--rc-ink)]">
                    {count}{suffix}
                  </dt>
                  <dd className="rc-mono text-xs text-[rgba(42,45,53,0.7)] mt-1.5 uppercase tracking-wide">{label}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      {/* ── The story ── */}
      <section className="border-b border-[var(--rc-wire)]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
            <div>
              <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Our story</span>
              <h2 className="rc-display text-3xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">
                Built to fix what was broken in the agency market — local and global.
              </h2>
              <div className="rc-body text-[var(--rc-ink-soft)] space-y-4 leading-relaxed text-base">
                <p>
                  RC Tech Solutions started in 2021 when our founder Rahul Chauhan noticed a consistent problem:
                  Indian startups and small businesses were being charged ₹3–5 lakhs for websites that took months
                  to deliver, loaded slowly, and weren't built for search engines. The agencies doing this work were
                  using outdated technology stacks and treating SEO as an afterthought.
                </p>
                <p>
                  We started with a simple promise: build every website on modern infrastructure (Next.js, React),
                  optimise it for Core Web Vitals from day one, and ship it in weeks, not months. That approach
                  resonated immediately. Our first 10 clients came entirely from word of mouth.
                </p>
                <p>
                  By 2023, we had expanded into SEO, performance marketing, and e-commerce development — not because
                  it was the trendy thing to do, but because our clients kept asking us to solve the next problem
                  in their growth journey. We only add services when we can deliver them at the same quality bar
                  we hold for web development.
                </p>
                <p>
                  Today, RC Tech Solutions works with founders, D2C brands, service businesses, and enterprises
                  across Mohali, Chandigarh, Punjab, and the rest of India — plus a growing number of clients in
                  the USA, UK, Canada, and Australia who hire us remotely for the same fixed-price, fixed-timeline
                  process. Every project is personally overseen by Rahul, and every deliverable is tested against
                  the same quality checklist we developed in year one, wherever the client is based.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              <span className="rc-eyebrow text-[rgba(42,45,53,0.5)] block mb-5">Timeline</span>
              {TIMELINE.map((t, i) => (
                <div key={t.year} className="flex gap-4 pb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: i === TIMELINE.length - 1 ? "var(--rc-circuit)" : "var(--rc-trace)" }} />
                    {i < TIMELINE.length - 1 && <div className="w-px flex-1 mt-1" style={{ background: "var(--rc-wire)" }} />}
                  </div>
                  <div className="pb-2">
                    <p className="rc-mono text-xs font-medium" style={{ color: "var(--rc-circuit)" }}>{t.year}</p>
                    <p className="rc-body text-sm text-[var(--rc-ink-soft)] mt-1 leading-relaxed">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-b border-[var(--rc-wire)] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>What we stand for</span>
          <h2 className="rc-display text-3xl font-semibold text-[var(--rc-ink)] mt-2 mb-10">
            The values that drive every decision we make.
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white p-7">
                <span className="text-2xl mb-3 block text-[var(--rc-circuit)]">{v.icon}</span>
                <h3 className="rc-body text-base font-semibold text-[var(--rc-ink)] mb-2">{v.title}</h3>
                <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="border-b border-[var(--rc-wire)]">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>The team</span>
          <h2 className="rc-display text-3xl font-semibold text-[var(--rc-ink)] mt-2 mb-10">
            Real people, real accountability.
          </h2>
          {TEAM.map((member) => (
            <div key={member.name} className="rc-blueprint-card p-7 sm:p-9">
              <div className="grid sm:grid-cols-[160px_1fr] gap-7 items-start">
                <div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div>
                  <h3 className="rc-display text-2xl font-semibold text-[var(--rc-ink)]">{member.name}</h3>
                  <p className="rc-mono text-xs mt-1 mb-4" style={{ color: "var(--rc-circuit)" }}>{member.role}</p>
                  <p className="rc-body text-base text-[var(--rc-ink-soft)] leading-relaxed">{member.bio}</p>
                  <div className="mt-5 flex gap-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                      className="rc-mono text-xs uppercase tracking-wider text-[var(--rc-ink-soft)] hover:text-[var(--rc-circuit)] transition-colors border-b border-[var(--rc-wire)] pb-0.5">
                      LinkedIn →
                    </a>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer"
                      className="rc-mono text-xs uppercase tracking-wider text-[var(--rc-ink-soft)] hover:text-[var(--rc-circuit)] transition-colors border-b border-[var(--rc-wire)] pb-0.5">
                      Instagram →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Location + Contact ── */}
      <section className="border-b border-[var(--rc-wire)] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Where we are</span>
              <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-4">
                Headquartered in Mohali, India — working with clients worldwide.
              </h2>
              <address className="rc-body not-italic text-[var(--rc-ink-soft)] leading-relaxed text-sm space-y-1">
                <p>RC Tech Solutions</p>
                <p>3126, Sector 82, JLPL Industrial Area</p>
                <p>Mohali, Punjab 140306</p>
                <p>India</p>
              </address>
              <div className="mt-5 space-y-1.5 rc-mono text-xs text-[var(--rc-ink-soft)]">
                <p>📞 <a href="tel:+917009646377" className="hover:text-[var(--rc-circuit)] transition-colors">+91 70096-46377</a></p>
                <p>✉ <a href="mailto:business@rctechsolutions.com" className="hover:text-[var(--rc-circuit)] transition-colors">business@rctechsolutions.com</a></p>
                <p>🕐 Monday – Friday, 9:00 AM – 6:00 PM IST</p>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Work with us</span>
                <p className="rc-body mt-2 text-[var(--rc-ink-soft)] leading-relaxed text-sm">
                  We take on 3–4 new projects per month to ensure each one gets full attention.
                  If you have a web, SEO, or growth project in mind, reach out early — we'll tell you
                  honestly whether we're the right fit.
                </p>
              </div>
              <Link href="/contact" className="mt-6 rc-mono text-xs uppercase tracking-wider px-6 py-3.5 bg-[var(--rc-ink)] text-[var(--rc-paper)] hover:bg-[var(--rc-circuit)] transition-colors inline-block w-fit">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
