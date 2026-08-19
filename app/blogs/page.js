// app/blogs/page.js
// Blog listing — WordPress is now the single source of truth.
// Paginated: ?page=2, ?page=3, etc. — PAGE_SIZE items per page.

import { fetchWPPostsPage, fetchWPCategories } from "../lib/wordpress";
import Image from "next/image";
import Link from "next/link";
import CircuitTrace from "../components/CircuitTrace";
import Pagination from "./Pagination";
import CategoryFilter from "./CategoryFilter";

export const revalidate = 300; // 5 min — falls back to this if the WP webhook doesn't fire

const PAGE_SIZE = 9; // 1 featured + 8 grid on page 1, 9 grid items per page after that

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  // Layout's title template already appends "| RC Tech Solutions" — don't
  // add it here too, or it doubles up.
  title: "The Journal — Web Development, SEO & Growth Notes",
  description:
    "Field notes on web development, Next.js, SEO strategy, and digital growth from RC Tech Solutions. Written by the people actually shipping the work.",
  keywords: ["web development blog India", "SEO tips 2025", "Next.js tutorials", "RC Tech Solutions blog"],
  authors: [{ name: "Rahul Chauhan", url: "https://www.rctechsolutions.com/about" }],
  alternates: { canonical: "https://www.rctechsolutions.com/blogs" },
  openGraph: {
    title: "The Journal | RC Tech Solutions",
    description: "Field notes on web development, SEO, and digital growth — written by the people actually shipping the work.",
    url: "https://www.rctechsolutions.com/blogs",
    siteName: "RC Tech Solutions",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.rctechsolutions.com/og/blogs-cover.jpg", width: 1200, height: 630 }],
  },
};

const stripHtml = (html = "") => html.replace(/<[^>]+>/g, "");
// Prefer the WP-computed reading_time field (cheap, always present on listing
// calls) — only fall back to computing from content if it's missing (e.g.
// the functions.php snippet hasn't been added to WordPress yet).
const readingTime = (blog) => {
  if (blog?.readingTime) return `${blog.readingTime} min read`;
  const words = stripHtml(blog?.content || "").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};
const getImg = (b) => b.blogImageUrl || b.imageUrl || b.image || b.coverImage || null;

const formatDate = (val) => {
  try {
    if (!val) return "";
    const d = new Date(val);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  } catch { return ""; }
};

export default async function BlogsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const requestedPage = parseInt(resolvedSearchParams?.page, 10) || 1;
  const activeCategorySlug = resolvedSearchParams?.category || null;

  // Categories are cheap (1hr cache) and needed either way for the filter pills.
  const allCategories = await fetchWPCategories();
  const activeCategory = activeCategorySlug
    ? allCategories.find((c) => c.slug === activeCategorySlug)
    : null;

  // Fetch ONLY the page being shown — not all posts. This is the fix for the
  // slow /blogs load: previously every visit fetched 60 full posts (with
  // embedded media/author/terms) and sliced them in JS. Now we ask WordPress
  // for exactly PAGE_SIZE posts for the requested page/category and read the
  // true totals straight from the X-WP-Total response headers.
  const { posts: pageBlogsRaw, total, totalPages: wpTotalPages } = await fetchWPPostsPage({
    perPage: PAGE_SIZE,
    page: requestedPage,
    category: activeCategory?.id || null,
  });

  const totalPages = Math.max(1, wpTotalPages);
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);

  // Page 1: 1 featured + up to 8 grid items, all from the same single fetch.
  let featuredBlog = null;
  let pageBlogs = pageBlogsRaw;
  if (currentPage === 1 && !activeCategory) {
    featuredBlog = pageBlogsRaw[0];
    pageBlogs = pageBlogsRaw.slice(1);
  }

  const blogHref = (b) => `/blogs/${b.slug}`;
  const categoryHref = (slug) => (slug ? `/blogs?category=${slug}` : "/blogs");

  return (
    <>
      <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>

        {/* Hero */}
        <section className="border-b border-[var(--rc-wire)] rc-grid-bg">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="rc-via rc-via-pulse" />
              <span className="rc-eyebrow" style={{ color: "var(--rc-trace)" }}>Updated weekly · {total} issue{total === 1 ? "" : "s"}</span>
            </div>
            <h1 className="rc-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[0.98] text-[var(--rc-ink)] max-w-2xl">
              The journal.
            </h1>
            <p className="rc-body mt-5 text-[var(--rc-ink-soft)] max-w-lg text-base sm:text-lg leading-relaxed">
              Notes on what's actually working in web development, SEO, and growth —
              written by the people shipping the work.
            </p>

            <CategoryFilter categories={allCategories} activeSlug={activeCategorySlug} />
          </div>
        </section>

        <main className="mx-auto max-w-5xl px-4 py-12 sm:py-14">

          {/* Featured — only on page 1 */}
          {featuredBlog && (
            <Link href={blogHref(featuredBlog)} className="group block rc-blueprint-card mb-12">
              <div className="grid md:grid-cols-2 gap-0">
                {getImg(featuredBlog) && (
                  <div className="relative h-64 md:h-full min-h-[260px] overflow-hidden">
                    <Image src={getImg(featuredBlog)} alt={featuredBlog.title} fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw" priority />
                  </div>
                )}
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <span className="rc-eyebrow mb-3" style={{ color: "var(--rc-circuit)" }}>Latest issue</span>
                  {featuredBlog.category && (
                    <span className="rc-mono text-[0.65rem] uppercase tracking-wider w-fit px-2.5 py-1 border border-[var(--rc-wire)] text-[var(--rc-ink-soft)] mb-3">
                      {featuredBlog.category}
                    </span>
                  )}
                  <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] leading-tight group-hover:text-[var(--rc-circuit)] transition-colors">
                    {featuredBlog.title}
                  </h2>
                  {featuredBlog.metaDescription && (
                    <p className="rc-body mt-3 text-sm text-[var(--rc-ink-soft)] leading-relaxed line-clamp-3">
                      {featuredBlog.metaDescription}
                    </p>
                  )}
                  <div className="mt-5 flex flex-wrap items-center gap-3 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.7)]">
                    <span>{featuredBlog.author || "RC Tech Team"}</span>
                    <span style={{ color: "var(--rc-wire)" }}>/</span>
                    <span>{formatDate(featuredBlog.date)}</span>
                    <span style={{ color: "var(--rc-wire)" }}>/</span>
                    <span>{readingTime(featuredBlog)}</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          <CircuitTrace variant="horizontal" className="mb-10 opacity-60" />

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
            {pageBlogs.map((blog, i) => (
              <Link key={blog.id} href={blogHref(blog)}
                className="group flex flex-col bg-[var(--rc-paper)] hover:bg-white transition-colors">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  {getImg(blog) ? (
                    <Image src={getImg(blog)} alt={blog.title} fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center rc-grid-bg" style={{ background: "var(--rc-paper-deep)" }}>
                      <span className="rc-mono text-xs text-[rgba(42,45,53,0.4)]">No. {String(i + 1).padStart(2, "0")}</span>
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
            ))}
          </div>

          {pageBlogsRaw.length === 0 && (
            <p className="rc-body text-center text-[var(--rc-ink-soft)] py-20">
              {activeCategory ? `No issues in "${activeCategory.name}" yet.` : "No issues published yet."}
            </p>
          )}

          {totalPages > 1 && (
            <Pagination page={currentPage} totalPages={totalPages} category={activeCategorySlug} />
          )}
        </main>
      </div>
    </>
  );
}
