// app/components/LatestBlogs.jsx
import { fetchWPPosts } from "../lib/wordpress";
import Link from "next/link";
import Image from "next/image";
import CircuitTrace from "./CircuitTrace";

const stripHtmlTags = (html = "") => html.replace(/<[^>]+>/g, "");
const formatDate = (dateValue) => {
  try {
    if (!dateValue) return "Unpublished";
    const parsed = new Date(dateValue);
    if (!isNaN(parsed)) {
      return parsed.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    }
    return "Unpublished";
  } catch {
    return "Unpublished";
  }
};
const computeReadingTime = (html) => {
  const words = stripHtmlTags(html).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};

export default async function LatestBlogs() {
  const blogs = await fetchWPPosts({ perPage: 3 });

  if (!blogs.length) return null;

  return (
    <section className="py-20 sm:py-24 border-t border-[var(--rc-wire)]" style={{ background: "var(--rc-paper)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
          <div>
            <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>From the journal</span>
            <h2 className="rc-display text-3xl sm:text-4xl font-semibold text-[var(--rc-ink)] mt-2">
              Recent issues.
            </h2>
          </div>
          <Link
            href="/blogs"
            className="rc-mono text-xs uppercase tracking-wider text-[var(--rc-ink)] hover:text-[var(--rc-circuit)] transition-colors pb-1 border-b border-[var(--rc-ink)] hover:border-[var(--rc-circuit)]"
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
          {blogs.map((blog, i) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="group block bg-[var(--rc-paper)] hover:bg-white transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                {blog.blogImageUrl && (
                  <Image
                    src={blog.blogImageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <span className="absolute top-3 left-3 rc-mono text-[0.6rem] px-2 py-1 bg-[var(--rc-ink)] text-[var(--rc-paper)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-5">
                <h3 className="rc-display text-base font-semibold mb-2 text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors line-clamp-2 leading-snug">
                  {blog.title}
                </h3>
                <p className="rc-body text-sm text-[rgba(42,45,53,0.8)] line-clamp-2 leading-relaxed">
                  {stripHtmlTags(blog.content).slice(0, 120)}...
                </p>
                <div className="mt-3 rc-mono text-[0.6rem] text-[rgba(42,45,53,0.5)] flex gap-1.5">
                  <span>{blog.author || "RC Tech Team"}</span>
                  <span>·</span>
                  <span>{formatDate(blog.date)}</span>
                  <span>·</span>
                  <span>{computeReadingTime(blog.content)} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <CircuitTrace variant="horizontal" className="mt-16 opacity-50" />
    </section>
  );
}
