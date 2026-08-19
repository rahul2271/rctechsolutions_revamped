"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Lock, BookOpen, Shield, Gift, Users, Timer, Zap } from "lucide-react";
import Link from "next/link";
import CircuitTrace from "../components/CircuitTrace";

const TOC = [
  { ch: "00", title: "Preface — Why I Wrote This eBook", highlights: ["The problem with random tutorials", "How to learn with outcomes in mind"] },
  { ch: "01", title: "Why Start Web Development as a Student?", highlights: ["The advantage of starting early", "How web dev can change your career path"] },
  { ch: "02", title: "Understanding the Web Development Landscape", highlights: ["Frontend, Backend, and Full-Stack explained", "Career paths & opportunities in India"] },
  { ch: "03", title: "Setting Up Your Foundations", highlights: ["Essential tools: VS Code, Node.js, Git", "HTML, CSS, JavaScript — the core trio"] },
  { ch: "04", title: "Building Your First Website", highlights: ["Step-by-step beginner project", "Free hosting options that actually work"] },
  { ch: "05", title: "Leveling Up — Beyond the Basics", highlights: ["Frameworks & libraries worth learning", "Version control with Git & GitHub"] },
  { ch: "06", title: "Creating a Strong Developer Portfolio", highlights: ["What to include (and what to skip)", "Projects that get noticed by clients"] },
  { ch: "07", title: "Landing Your First Client or Internship", highlights: ["Where to find real opportunities in India", "Pitching yourself confidently"] },
  { ch: "08", title: "Earning While Learning", highlights: ["Freelance platforms & networking tips", "Building a personal brand online"] },
  { ch: "09", title: "Real-World Projects That Impress", highlights: ["Ideas you can start today", "Student case studies from Indian devs"] },
  { ch: "10", title: "The Business Side of Development", highlights: ["Pricing your services without underselling", "Contracts & client management basics"] },
  { ch: "11", title: "Planning Your Future — What's Next?", highlights: ["From freelancer to full-time", "Scaling to an agency or startup"] },
  { ch: "12", title: "Next Steps & Secret Community Access", highlights: ["30-day action plan", "Exclusive community invite + tool discounts"] },
];

const FEATURES = [
  { icon: <BookOpen size={16} />, label: "120+ pages", sub: "Student-focused content" },
  { icon: <Zap size={16} />, label: "Step-by-step", sub: "Career roadmap" },
  { icon: <Shield size={16} />, label: "Freelancing", sub: "Job-ready skills" },
  { icon: <Gift size={16} />, label: "Templates", sub: "Checklists & resources" },
];

const TESTIMONIALS = [
  { name: "Anjali S.", city: "Delhi", text: "Got my first freelance gig using the portfolio tips. Best ₹99 I've spent." },
  { name: "Rohit M.", city: "Pune", text: "Finally understood Git & GitHub properly. The roadmap is incredibly clear." },
  { name: "Meera K.", city: "Bengaluru", text: "Templates saved me hours. The business side chapter alone is worth 10x the price." },
  { name: "Ayaan R.", city: "Mumbai", text: "Landed an internship 3 weeks after reading Chapter 7. It actually works." },
  { name: "Sanya T.", city: "Kolkata", text: "No fluff. Just clear, actionable steps. Exactly what students in India need." },
  { name: "Dev P.", city: "Hyderabad", text: "The freelancing section changed how I price my projects. Doubled my rate." },
];

const INITIAL_FEED = [
  { id: 1, name: "Anjali", city: "Delhi", text: "Best ₹99 I spent! Super clear & practical.", time: "2m ago" },
  { id: 2, name: "Rohit", city: "Pune", text: "Got my first freelance gig using the portfolio tips.", time: "5m ago" },
  { id: 3, name: "Meera", city: "Bengaluru", text: "Templates saved me hours. Loving it!", time: "9m ago" },
];

function initials(name) {
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

export default function EbookClient() {
  const [basePrice] = useState(9900);
  const [gstAmount] = useState(9900 * 0.18);
  const [finalPrice, setFinalPrice] = useState(9900 + 9900 * 0.18);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [countdown, setCountdown] = useState(600);
  const [activeUsers, setActiveUsers] = useState(42);
  const [feed, setFeed] = useState(INITIAL_FEED);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setCountdown(p => p > 0 ? p - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveUsers(u => Math.min(120, Math.max(18, u + Math.floor(Math.random() * 5) - 2)));
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const formatTime = s => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const applyDiscount = () => {
    if (discountCode.trim().toUpperCase() === "FLIPLTCEFC") {
      setFinalPrice(0);
      setDiscountApplied(true);
    } else {
      alert("Invalid coupon code.");
    }
  };

  const handlePayment = async () => {
    if (!name || !email) { alert("Please fill in your name and email."); return; }
    if (finalPrice === 0) {
      setLoading(true);
      const res = await fetch("/api/sendEbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId: "FREE_COUPON", email, name }),
      });
      setLoading(false);
      if (res.ok) setSuccess(true);
      else alert("Failed to send. Please try again.");
      return;
    }
    const options = {
      key: "rzp_live_SbgJVnRmjgGGLW",
      amount: Math.round(finalPrice),
      currency: "INR",
      name: "RC Tech Solutions",
      description: "Student Developer eBook — Learn to Code, Earn from Code",
      handler: async (response) => {
        setLoading(true);
        await fetch("/api/sendEbook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentId: response.razorpay_payment_id, email, name }),
        });
        setLoading(false);
        setSuccess(true);
      },
      prefill: { name, email },
      theme: { color: "#FF5A1F" },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const openCheckout = () => {
    setCheckoutOpen(true);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
  };

  return (
    <>
      <script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>

        {/* Live reader badge */}
        <div className="fixed top-20 right-4 z-40 hidden md:flex items-center gap-2.5 px-4 py-2 border border-[var(--rc-wire)] bg-white shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full rc-via-pulse" style={{ background: "var(--rc-trace)" }} />
          <span className="rc-mono text-[0.7rem] text-[var(--rc-ink)]">{activeUsers} reading now</span>
          <span className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.4)]">· 4.9★ (200+ reviews)</span>
        </div>

        {/* ── HERO ── */}
        <section className="border-b border-[var(--rc-wire)] rc-grid-bg">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
            <nav className="flex items-center gap-1.5 rc-mono text-[0.7rem] text-[rgba(42,45,53,0.45)] mb-8">
              <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
              <span>/</span>
              <span>eBook</span>
            </nav>

            <div className="grid md:grid-cols-[260px_1fr] gap-10 items-start">
              {/* Cover image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative">
                <div className="rc-blueprint-card overflow-hidden">
                  <img src="/images/ebook-cover.svg" alt="Learn to Code, Earn from Code — Student Developer eBook"
                    className="w-full h-auto" />
                </div>
                <div className="absolute -top-2 -right-2 rc-via" style={{ background: "var(--rc-circuit)" }} />
                <div className="absolute -bottom-2 -left-2 rc-via" style={{ background: "var(--rc-trace)" }} />
              </motion.div>

              {/* Hero copy */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="rc-via rc-via-pulse" />
                  <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Student Developer Series · RC Tech Solutions</span>
                </div>

                <h1 className="rc-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--rc-ink)] leading-tight">
                  Learn to Code,<br />
                  <span style={{ color: "var(--rc-circuit)" }}>Earn from Code.</span>
                </h1>

                <p className="rc-body mt-4 text-base text-[var(--rc-ink-soft)] leading-relaxed max-w-lg">
                  A 120-page practical guide for Indian students — from writing your first line of HTML
                  to landing your first freelance client. Written by a Mohali founder who did exactly this.
                </p>

                {/* Stars */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.5)]">4.9/5 · 200+ verified reviews</span>
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {FEATURES.map((f) => (
                    <div key={f.label} className="flex items-start gap-2.5 p-3 border border-[var(--rc-wire)] bg-white">
                      <span style={{ color: "var(--rc-circuit)" }} className="mt-0.5 flex-shrink-0">{f.icon}</span>
                      <div>
                        <p className="rc-body text-xs font-semibold text-[var(--rc-ink)]">{f.label}</p>
                        <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.5)]">{f.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex flex-wrap items-center gap-5 mt-7">
                  <div>
                    <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.4)] line-through">₹999</p>
                    <p className="rc-display text-3xl font-bold text-[var(--rc-ink)]">₹99 <span className="text-base font-normal text-[rgba(42,45,53,0.5)]">+ GST</span></p>
                    <p className="rc-mono text-[0.7rem] text-[var(--rc-trace)] mt-0.5">One-time · Instant email delivery</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    onClick={openCheckout}
                    className="rc-mono text-xs uppercase tracking-wider px-7 py-3.5 text-[var(--rc-ink)] font-medium"
                    style={{ background: "var(--rc-circuit)" }}>
                    Get instant access →
                  </motion.button>
                </div>

                {/* Countdown + trust */}
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <span className="flex items-center gap-1.5 rc-mono text-[0.7rem] text-[rgba(42,45,53,0.5)]">
                    <Timer size={13} />
                    Student offer ends in <span className="font-semibold text-[var(--rc-circuit)]">{formatTime(countdown)}</span>
                  </span>
                  <span className="flex items-center gap-1.5 rc-mono text-[0.7rem] text-[rgba(42,45,53,0.5)]">
                    <Lock size={13} />
                    Secure checkout via Razorpay
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CircuitTrace variant="horizontal" className="opacity-40" />

        {/* ── WHAT YOU'LL GET ── */}
        <section className="py-16 sm:py-20 border-b border-[var(--rc-wire)] bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-10">
              <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Inside the eBook</span>
              <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mt-2">
                12 chapters. 120+ pages. Zero fluff.
              </h2>
              <p className="rc-body text-sm text-[var(--rc-ink-soft)] mt-2 max-w-lg leading-relaxed">
                Every chapter is written specifically for Indian students — the platforms, the prices,
                the opportunities, and the roadblocks are all India-specific.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
              {TOC.map((ch) => (
                <div key={ch.ch} className="bg-white p-5 flex gap-4">
                  <span className="rc-mono text-[0.7rem] font-medium pt-0.5 flex-shrink-0" style={{ color: "var(--rc-circuit)" }}>
                    Ch.{ch.ch}
                  </span>
                  <div>
                    <p className="rc-body text-sm font-semibold text-[var(--rc-ink)] leading-snug mb-1.5">{ch.title}</p>
                    <ul className="space-y-0.5">
                      {ch.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-1.5 rc-mono text-[0.7rem] text-[rgba(42,45,53,0.55)]">
                          <span style={{ color: "var(--rc-trace)" }} className="flex-shrink-0 mt-px">—</span>{h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <img src="/images/ebook-preview-1.svg" alt="eBook preview — career roadmap chapter"
                className="w-full h-auto border border-[var(--rc-wire)]" />
              <img src="/images/ebook-preview-2.svg" alt="eBook preview — freelance strategies chapter"
                className="w-full h-auto border border-[var(--rc-wire)]" />
            </div>
          </div>
        </section>

        {/* ── VALUE COMPARISON ── */}
        <section className="py-16 border-b border-[var(--rc-wire)]" style={{ background: "var(--rc-ink)" }}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Put it in perspective</span>
            <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-paper)] mt-2 mb-8">
              ₹99. Less than your weekend coffee.
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[rgba(246,242,233,0.08)] border border-[rgba(246,242,233,0.08)]">
              {[
                { item: "Cup of coffee", price: "₹120", note: "Gone in 5 min" },
                { item: "One OTT month", price: "₹199", note: "Passive watching" },
                { item: "Mobile data pack", price: "₹99", note: "Gone in a month" },
                { item: "This eBook", price: "₹99", note: "Lifetime value", highlight: true },
              ].map(({ item, price, note, highlight }) => (
                <div key={item} className="p-6"
                  style={{ background: highlight ? "var(--rc-circuit)" : "transparent" }}>
                  <p className="rc-display text-2xl font-bold" style={{ color: highlight ? "var(--rc-ink)" : "var(--rc-paper)" }}>{price}</p>
                  <p className="rc-body text-sm font-semibold mt-1" style={{ color: highlight ? "var(--rc-ink)" : "var(--rc-paper)" }}>{item}</p>
                  <p className="rc-mono text-[0.7rem] mt-0.5" style={{ color: highlight ? "rgba(11,14,20,0.6)" : "rgba(246,242,233,0.4)" }}>{note}</p>
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={openCheckout}
              className="rc-mono text-xs uppercase tracking-wider px-8 py-4 text-[var(--rc-ink)] font-medium mt-8 inline-block"
              style={{ background: "var(--rc-circuit)" }}>
              Get it for ₹99 + GST →
            </motion.button>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 sm:py-20 border-b border-[var(--rc-wire)] bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Reader outcomes</span>
            <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mt-2 mb-8">
              What students say after reading it.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="bg-white p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed flex-1 italic mt-2">
                    "{t.text}"
                  </blockquote>
                  <div className="mt-4 pt-4 border-t border-[var(--rc-wire)] flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 rc-mono text-[0.7rem] font-semibold"
                      style={{ background: "var(--rc-paper-deep)", color: "var(--rc-circuit)" }}>
                      {initials(t.name)}
                    </div>
                    <div>
                      <p className="rc-body text-xs font-semibold text-[var(--rc-ink)]">{t.name}</p>
                      <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.45)]">{t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Live feed */}
            <div className="mt-6 border border-[var(--rc-wire)] p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full rc-via-pulse" style={{ background: "var(--rc-trace)" }} />
                <span className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.45)]">Live activity · {activeUsers} reading right now</span>
              </div>
              <div className="space-y-2 max-h-32 overflow-hidden">
                {feed.map((item) => (
                  <div key={item.id} className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 rc-mono text-[0.65rem] font-semibold"
                      style={{ background: "var(--rc-paper-deep)", color: "var(--rc-circuit)" }}>
                      {initials(item.name)}
                    </div>
                    <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed">
                      <span className="font-semibold text-[var(--rc-ink)]">{item.name}</span>
                      <span className="text-[rgba(42,45,53,0.4)]"> · {item.city} · {item.time} — </span>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CHECKOUT ── */}
        <section ref={formRef} id="checkout" className="py-16 sm:py-20 border-b border-[var(--rc-wire)] scroll-mt-20"
          style={{ background: "var(--rc-paper-deep)" }}>
          <div className="mx-auto max-w-xl px-4">
            {success ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="rc-blueprint-card p-10 text-center bg-white">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(45,95,76,0.1)" }}>
                  <span className="text-2xl" style={{ color: "var(--rc-trace)" }}>✓</span>
                </div>
                <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mb-2">You're in!</h2>
                <p className="rc-body text-sm text-[var(--rc-ink-soft)] mb-5 leading-relaxed">
                  Check your inbox — the eBook is on its way. Welcome to the RC Tech student community.
                </p>
                <Link href="/webinars"
                  className="rc-mono text-xs uppercase tracking-wider px-6 py-3 inline-block"
                  style={{ background: "var(--rc-circuit)", color: "var(--rc-ink)" }}>
                  Explore free webinars →
                </Link>
              </motion.div>
            ) : (
              <div className="rc-blueprint-card p-7 sm:p-9 bg-white">
                <div className="flex items-center gap-2 mb-5">
                  <span className="rc-via rc-via-pulse" />
                  <span className="rc-eyebrow" style={{ color: "var(--rc-trace)" }}>
                    {finalPrice === 0 ? "Free access with coupon" : "One-time payment · ₹99 + GST"}
                  </span>
                </div>
                <h2 className="rc-display text-xl font-semibold text-[var(--rc-ink)] mb-6">
                  Complete your access
                </h2>

                <div className="space-y-3 mb-5">
                  {[
                    { label: "Full name", val: name, set: setName, type: "text", ph: "Your full name" },
                    { label: "Email address", val: email, set: setEmail, type: "email", ph: "you@email.com" },
                  ].map(({ label, val, set, type, ph }) => (
                    <div key={label}>
                      <label className="rc-mono text-[0.7rem] uppercase tracking-wide text-[rgba(42,45,53,0.5)] block mb-1.5">
                        {label}
                      </label>
                      <input type={type} value={val} onChange={e => set(e.target.value)}
                        placeholder={ph}
                        className="w-full border border-[var(--rc-wire)] px-4 py-3 rc-body text-sm text-[var(--rc-ink)] bg-white placeholder-rc-ink-soft/30 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors" />
                    </div>
                  ))}
                </div>

                {/* Discount */}
                <div className="flex gap-2 mb-5">
                  <input type="text" value={discountCode} onChange={e => setDiscountCode(e.target.value)}
                    placeholder="Coupon code (optional)"
                    className="flex-1 border border-[var(--rc-wire)] px-4 py-2.5 rc-body text-sm text-[var(--rc-ink)] bg-white focus:outline-none focus:border-[var(--rc-circuit)] transition-colors" />
                  <button onClick={applyDiscount}
                    className="rc-mono text-[0.7rem] uppercase tracking-wider px-4 py-2.5 border border-[var(--rc-ink)] text-[var(--rc-ink)] hover:bg-[var(--rc-ink)] hover:text-[var(--rc-paper)] transition-colors">
                    Apply
                  </button>
                </div>
                {discountApplied && (
                  <p className="rc-mono text-[0.7rem] mb-3" style={{ color: "var(--rc-trace)" }}>
                    ✓ Coupon applied — this eBook is free for you
                  </p>
                )}

                {/* Price breakdown */}
                <div className="border border-[var(--rc-wire)] p-4 mb-5 space-y-1.5">
                  <div className="flex justify-between rc-body text-sm text-[var(--rc-ink-soft)]">
                    <span>Base price</span>
                    <span>{discountApplied ? "₹0.00" : "₹99.00"}</span>
                  </div>
                  <div className="flex justify-between rc-body text-sm text-[var(--rc-ink-soft)]">
                    <span>GST (18%)</span>
                    <span>{discountApplied ? "₹0.00" : "₹17.82"}</span>
                  </div>
                  <div className="flex justify-between rc-body text-sm font-semibold text-[var(--rc-ink)] pt-2 border-t border-[var(--rc-wire)]">
                    <span>Total</span>
                    <span>{discountApplied ? "Free" : "₹116.82"}</span>
                  </div>
                </div>

                <button onClick={handlePayment} disabled={loading}
                  className="w-full rc-mono text-xs uppercase tracking-wider py-4 text-[var(--rc-ink)] font-medium transition-opacity disabled:opacity-50"
                  style={{ background: "var(--rc-circuit)" }}>
                  {loading ? "Processing…" : finalPrice === 0 ? "Get for free →" : "Pay ₹116.82 & get instant access →"}
                </button>

                <p className="flex items-center justify-center gap-1.5 rc-mono text-[0.7rem] text-[rgba(42,45,53,0.4)] mt-3">
                  <Lock size={11} />
                  Secure payment via Razorpay · Instant email delivery
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── ABOUT THE AUTHOR ── */}
        <section className="py-16 border-b border-[var(--rc-wire)] bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid md:grid-cols-[200px_1fr] gap-10 items-start">
              <img src="/images/founder-rahul.svg" alt="Rahul Chauhan — Author"
                className="w-full h-auto border border-[var(--rc-wire)]" />
              <div>
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>About the author</span>
                <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-3">
                  Rahul Chauhan
                </h2>
                <p className="rc-mono text-[0.7rem] mb-4" style={{ color: "var(--rc-trace)" }}>
                  Founder & CEO, RC Tech Solutions · Mohali, Punjab
                </p>
                <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed mb-3">
                  Rahul started writing code as a student in Punjab with no formal CS degree and no
                  connections in tech. Within two years he was earning full-time from freelance
                  web development. In 2021 he founded RC Tech Solutions, which now ships 50+ projects
                  per year for clients across India.
                </p>
                <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed">
                  This eBook is the guide he wishes he'd had when he was starting out — every chapter
                  is based on real experience, real clients, and real mistakes made and corrected
                  on the road from student to founder.
                </p>
                <a href="https://www.linkedin.com/in/er-rahul-chauhan/" target="_blank" rel="noopener noreferrer"
                  className="rc-mono text-[0.7rem] text-[var(--rc-circuit)] hover:underline mt-4 block">
                  linkedin.com/in/er-rahul-chauhan →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-16 sm:py-20 text-center" style={{ background: "var(--rc-ink)" }}>
          <div className="mx-auto max-w-2xl px-4">
            <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>One-time. Lifetime value.</span>
            <h2 className="rc-display text-3xl sm:text-4xl font-semibold text-[var(--rc-paper)] mt-2 mb-4">
              Start your journey for ₹99.
            </h2>
            <p className="rc-body text-sm text-[rgba(246,242,233,0.5)] mb-8 leading-relaxed">
              120+ pages. 12 chapters. Instant delivery. No subscription, no upsell.
              Just the guide that will genuinely move your career forward.
            </p>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={openCheckout}
              className="rc-mono text-xs uppercase tracking-wider px-10 py-4 text-[var(--rc-ink)] font-medium"
              style={{ background: "var(--rc-circuit)" }}>
              Get the eBook for ₹99 + GST →
            </motion.button>
            <p className="rc-mono text-[0.7rem] text-[rgba(246,242,233,0.25)] mt-4 flex items-center justify-center gap-1.5">
              <Lock size={11} />
              Razorpay secure checkout · Instant email delivery
            </p>
          </div>
        </section>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--rc-wire)] bg-white/95 backdrop-blur px-4 py-3 flex items-center justify-between gap-4"
          style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.08)" }}>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--rc-circuit)", animation: "rc-pulse 2.4s ease-in-out infinite" }} />
            <span className="rc-body text-sm font-semibold text-[var(--rc-ink)] hidden sm:block">
              {activeUsers}+ students reading · ₹99 + GST · Instant delivery
            </span>
            <span className="rc-body text-sm font-semibold text-[var(--rc-ink)] sm:hidden">
              ₹99 + GST · Instant delivery
            </span>
          </div>
          <button onClick={openCheckout}
            className="rc-mono text-[0.7rem] uppercase tracking-wider px-5 py-2.5 text-[var(--rc-ink)] font-medium flex-shrink-0"
            style={{ background: "var(--rc-circuit)" }}>
            Buy now
          </button>
        </div>

        {/* Spacer for sticky bar */}
        <div className="h-16" />
      </div>
    </>
  );
}
