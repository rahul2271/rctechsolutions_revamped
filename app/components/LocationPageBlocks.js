// app/components/LocationPageBlocks.js
//
// WHY THIS EXISTS:
// The Aug 2026 SEO/content pass added four new proof-heavy landing pages
// (Mohali, Chandigarh, Panchkula, and a global/outsourcing page). Competitor
// research showed the pages that actually rank and convert in this niche
// share a specific content shape: a direct "quick answer" box near the top
// (for AI Overview / answer-engine extraction), a transparent pricing table,
// an honest agency-vs-freelancer comparison, and a "mistakes to avoid"
// section that builds trust precisely because it isn't pure self-promotion.
// Rather than copy-pasting that shape into four separate page.js files
// (and letting them drift out of sync), the blocks live here once.

export function QuickAnswerBox({ children }) {
  return (
    <div className="rc-blueprint-card p-5 sm:p-6 mb-10" style={{ background: "var(--rc-paper-deep)" }}>
      <span className="rc-mono text-[0.65rem] uppercase tracking-wider" style={{ color: "var(--rc-circuit)" }}>
        Quick answer
      </span>
      <p className="rc-body text-sm sm:text-base text-[var(--rc-ink)] leading-relaxed mt-2">
        {children}
      </p>
    </div>
  );
}

export function PricingTable({ rows, note }) {
  return (
    <section className="mt-14">
      <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Transparent pricing</span>
      <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-4">
        What it actually costs
      </h2>
      <div className="border border-[var(--rc-wire)] overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[var(--rc-wire)]" style={{ background: "var(--rc-paper-deep)" }}>
              <th className="rc-mono text-[0.65rem] uppercase tracking-wider text-[rgba(42,45,53,0.6)] px-4 py-3">Project type</th>
              <th className="rc-mono text-[0.65rem] uppercase tracking-wider text-[rgba(42,45,53,0.6)] px-4 py-3">Typical range</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-[var(--rc-wire)] last:border-0">
                <td className="rc-body text-sm text-[var(--rc-ink)] px-4 py-3">{r.type}</td>
                <td className="rc-body text-sm font-medium text-[var(--rc-ink)] px-4 py-3">{r.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p className="rc-body text-xs text-[rgba(42,45,53,0.6)] mt-3 leading-relaxed">{note}</p>
      )}
    </section>
  );
}

export function ComparisonTable({ title = "Agency vs. freelancer vs. template builder", columns, rows }) {
  return (
    <section className="mt-14">
      <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>How to compare</span>
      <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-4">{title}</h2>
      <div className="overflow-x-auto border border-[var(--rc-wire)]">
        <table className="w-full text-left min-w-[560px]">
          <thead>
            <tr className="border-b border-[var(--rc-wire)]" style={{ background: "var(--rc-paper-deep)" }}>
              {columns.map((c, i) => (
                <th key={i} className="rc-mono text-[0.6rem] sm:text-[0.65rem] uppercase tracking-wider text-[rgba(42,45,53,0.6)] px-4 py-3">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-[var(--rc-wire)] last:border-0">
                {r.map((cell, j) => (
                  <td key={j} className={`rc-body text-xs sm:text-sm px-4 py-3 ${j === r.length - 1 ? "text-[var(--rc-ink)] font-medium" : "text-[rgba(42,45,53,0.75)]"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function MistakesList({ title = "Mistakes to avoid when hiring", items }) {
  return (
    <section className="mt-14">
      <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Before you sign anything</span>
      <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">{title}</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4 items-start border-b border-[var(--rc-wire)] pb-4 last:border-0">
            <span className="rc-mono text-xs font-medium flex-shrink-0 mt-0.5" style={{ color: "var(--rc-circuit)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AreasServed({ title = "Areas we cover", areas }) {
  return (
    <div className="rc-blueprint-card p-5 mt-5">
      <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>{title}</span>
      <div className="flex flex-wrap gap-2 mt-3">
        {areas.map((a, i) => (
          <span key={i} className="rc-mono text-[0.65rem] px-2.5 py-1 border border-[var(--rc-wire)] text-[var(--rc-ink-soft)]">
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProofStats({ stats }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)] mb-10">
      {stats.map((s, i) => (
        <div key={i} className="bg-[var(--rc-paper)] p-4 text-center">
          <p className="rc-display text-xl sm:text-2xl font-bold text-[var(--rc-ink)]">{s.value}</p>
          <p className="rc-mono text-[0.6rem] uppercase tracking-wider text-[rgba(42,45,53,0.5)] mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
