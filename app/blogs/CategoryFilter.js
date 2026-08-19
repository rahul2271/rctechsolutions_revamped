// app/blogs/CategoryFilter.js
// Renders one pill per WordPress category. Fully dynamic — create a new
// category in WordPress (Posts → Categories) and it shows up here on the
// next revalidation with zero code changes. No "hardcoded category list"
// to maintain in Next.js.

import Link from "next/link";

export default function CategoryFilter({ categories = [], activeSlug = null }) {
  // Skip WP's noise: default "Uncategorized" bucket and empty categories
  // clutter the filter bar without adding value for readers.
  const visible = categories.filter(
    (c) => c.count > 0 && c.slug !== "uncategorized"
  );

  if (visible.length === 0) return null;

  return (
    <nav aria-label="Filter by category" className="mt-7 flex flex-wrap gap-2">
      <Link
        href="/blogs"
        className={`rc-mono text-[0.65rem] uppercase tracking-wider px-3.5 py-2 border transition-colors ${
          !activeSlug
            ? "border-[var(--rc-circuit)] bg-[var(--rc-circuit)] text-[var(--rc-ink)]"
            : "border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)]"
        }`}
      >
        All
      </Link>
      {visible.map((cat) => (
        <Link
          key={cat.id}
          href={`/blogs?category=${cat.slug}`}
          className={`rc-mono text-[0.65rem] uppercase tracking-wider px-3.5 py-2 border transition-colors ${
            activeSlug === cat.slug
              ? "border-[var(--rc-circuit)] bg-[var(--rc-circuit)] text-[var(--rc-ink)]"
              : "border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)]"
          }`}
        >
          {cat.name} <span className="opacity-50">({cat.count})</span>
        </Link>
      ))}
    </nav>
  );
}
