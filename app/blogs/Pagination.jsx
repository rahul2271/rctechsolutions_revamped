// app/blogs/Pagination.jsx
import Link from "next/link";

function pageHref(page, category) {
  const params = new URLSearchParams();
  if (page > 1) params.set("page", page);
  if (category) params.set("category", category);
  const qs = params.toString();
  return qs ? `/blogs?${qs}` : "/blogs";
}

// Builds a compact page list with ellipses, e.g. 1 … 4 5 [6] 7 8 … 14
function getPageList(current, total) {
  const pages = new Set([1, total, current, current - 1, current + 1]);
  return [...pages]
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);
}

export default function Pagination({ page, totalPages, category = null }) {
  if (totalPages <= 1) return null;

  const pageList = getPageList(page, totalPages);

  return (
    <nav aria-label="Blog pagination" className="mt-14 flex items-center justify-center gap-2 flex-wrap">
      <Link
        href={pageHref(page - 1, category)}
        aria-disabled={page <= 1}
        className={`rc-mono text-[0.65rem] uppercase tracking-wider px-4 py-2.5 border border-[var(--rc-wire)] transition-colors ${
          page <= 1
            ? "pointer-events-none opacity-30"
            : "text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)]"
        }`}
      >
        ← Prev
      </Link>

      <div className="flex items-center gap-1">
        {pageList.map((p, i) => {
          const prev = pageList[i - 1];
          const showEllipsis = prev !== undefined && p - prev > 1;
          return (
            <span key={p} className="flex items-center gap-1">
              {showEllipsis && (
                <span className="rc-mono text-xs text-[rgba(42,45,53,0.35)] px-1">…</span>
              )}
              <Link
                href={pageHref(p, category)}
                aria-current={p === page ? "page" : undefined}
                className={`rc-mono text-xs w-9 h-9 flex items-center justify-center border transition-colors ${
                  p === page
                    ? "border-[var(--rc-circuit)] bg-[var(--rc-circuit)] text-[var(--rc-ink)]"
                    : "border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)]"
                }`}
              >
                {p}
              </Link>
            </span>
          );
        })}
      </div>

      <Link
        href={pageHref(page + 1, category)}
        aria-disabled={page >= totalPages}
        className={`rc-mono text-[0.65rem] uppercase tracking-wider px-4 py-2.5 border border-[var(--rc-wire)] transition-colors ${
          page >= totalPages
            ? "pointer-events-none opacity-30"
            : "text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)]"
        }`}
      >
        Next →
      </Link>
    </nav>
  );
}
