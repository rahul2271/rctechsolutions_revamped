// app/blogs/BlogCard.jsx
// One grid tile. Used both for the server-rendered first page (so first
// paint/SEO is unaffected) and for posts appended client-side as the user
// scrolls — same markup either way, so there's no visual "seam" where
// infinite-scroll posts start.

import Link from "next/link";
import BlogImage from "../components/BlogImage";
import { readingTime, getImg, getImgAlt, formatDate } from "./blogUtils";

export default function BlogCard({ blog, index = 0 }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex flex-col bg-[var(--rc-paper)] hover:bg-white transition-colors"
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {getImg(blog) ? (
          <BlogImage
            src={getImg(blog)}
            alt={getImgAlt(blog)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center rc-grid-bg"
            style={{ background: "var(--rc-paper-deep)" }}
          >
            <span className="rc-mono text-xs text-[rgba(42,45,53,0.4)]">
              No. {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-2">
          {blog.category && (
            <span className="rc-mono text-[0.6rem] uppercase tracking-wider text-[var(--rc-trace)]">
              {blog.category}
            </span>
          )}
        </div>
        <h2 className="rc-display text-base font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors line-clamp-2 leading-snug">
          {blog.title}
        </h2>
        {blog.metaDescription && (
          <p className="rc-body mt-2 text-xs text-[rgba(42,45,53,0.8)] line-clamp-2 flex-1 leading-relaxed">
            {blog.metaDescription}
          </p>
        )}
        <div className="mt-4 flex items-center gap-2 rc-mono text-[0.6rem] text-[rgba(42,45,53,0.5)]">
          <span>{formatDate(blog.date)}</span>
          <span>·</span>
          <span>{readingTime(blog)}</span>
        </div>
      </div>
    </Link>
  );
}
