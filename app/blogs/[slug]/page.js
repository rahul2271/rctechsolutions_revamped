// app/blogs/[slug]/page.js
// WordPress is now the single source of truth for blog content.
import { fetchWPPostBySlug, fetchAllWPSlugs, fetchWPPosts } from "../../lib/wordpress";
import { readingTimeLabel, countWords } from "../../lib/readingTime";
import Image from "next/image";
import BlogImage from "../../components/BlogImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { parse } from "node-html-parser";
import ReadingProgressBar from "../../components/ReadingProgressBar";
import ViewCounter from "../../components/blog/ViewCounter";
import ShareButtons from "../../components/blog/ShareButtons";
import CommentSection from "../../components/blog/CommentSection";

export const revalidate = 120; // falls back to this if the WP webhook doesn't fire

const getImageSource = (blog) => blog.blogImageUrl || blog.imageUrl || blog.image || blog.coverImage || null;
const getImageAlt = (blog) => blog.blogImageAlt || blog.title;

export async function generateStaticParams() {
  return await fetchAllWPSlugs();
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug);

  const blog = await fetchWPPostBySlug(decodedSlug);

  if (!blog) {
    return {
      title: "Issue not found", // layout template adds "| RC Tech Solutions"
      description: "This journal entry could not be found.",
      robots: { index: false, follow: false },
    };
  }

  // FIX: this used to be `${blog.title} | RC Tech Solutions` — but the root
  // layout already applies a `"%s | RC Tech Solutions"` title template to
  // every page. Passing a title that already contains the suffix means
  // Next.js appends the template ON TOP of it, producing
  // "...Right Partner | RC Tech Solutions | RC Tech Solutions" — exactly
  // the doubled title you saw live on the Dubai post. Just pass the raw
  // post title and let the layout's template add the suffix once.
  const pageTitle = blog.title;
  const pageDesc = blog.metaDescription || blog.title;
  const canonical = `https://www.rctechsolutions.com/blogs/${blog.slug}`;
  const ogImage = getImageSource(blog) || "https://www.rctechsolutions.com/og/blogs-cover.jpg";

  return {
    metadataBase: new URL("https://www.rctechsolutions.com"),
    title: pageTitle,
    description: pageDesc,
    keywords: blog.keywords || [],
    authors: [{ name: blog.author || "Rahul Chauhan", url: "https://www.rctechsolutions.com/about" }],
    alternates: { canonical },
    openGraph: {
      title: blog.title,
      description: pageDesc,
      images: [{ url: ogImage, width: 1200, height: 630, alt: blog.title }],
      url: canonical,
      type: "article",
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt || blog.createdAt,
      section: blog.category || "Technology",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: pageDesc,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

async function fetchRelatedPosts(categoryId, currentSlug) {
  try {
    if (!categoryId) return [];
    const posts = await fetchWPPosts({ perPage: 4, category: categoryId });
    return posts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  } catch {
    return [];
  }
}

export default async function BlogPage({ params }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug);

  const blog = await fetchWPPostBySlug(decodedSlug);

  if (!blog) notFound();

  const relatedPosts = await fetchRelatedPosts(blog.categoryId, blog.slug);

  let toc = [];
  let contentChunks = [];
  if (blog.content) {
    const root = parse(blog.content);
    const headings = root.querySelectorAll("h2, h3");
    toc = headings.map((h, i) => {
      const id = `heading-${i}`;
      h.setAttribute("id", id);
      return { id, text: h.textContent, level: h.tagName };
    });

    const topLevelNodes = root.childNodes.filter(
      (n) => n.nodeType === 1 || (n.nodeType === 3 && n.textContent.trim())
    );
    contentChunks = [topLevelNodes.map((n) => n.toString()).join("")].filter(Boolean);
  }

  const formattedDate = blog.date
    ? new Date(blog.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : null;
  const rt = readingTimeLabel(blog.content || "");
  const wc = countWords(blog.content || "");
  const canonicalUrl = `https://www.rctechsolutions.com/blogs/${blog.slug}`;
  const blogImage = getImageSource(blog);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": canonicalUrl,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      headline: blog.title,
      description: blog.metaDescription || blog.title,
      image: { "@type": "ImageObject", url: blogImage || "https://www.rctechsolutions.com/og/blogs-cover.jpg", width: 1200, height: 630 },
      author: {
        "@type": "Person",
        name: blog.author || "Rahul Chauhan",
        url: "https://www.rctechsolutions.com/about",
        jobTitle: "Founder & Web Developer",
        worksFor: { "@type": "Organization", name: "RC Tech Solutions", url: "https://www.rctechsolutions.com" },
      },
      publisher: {
        "@type": "Organization",
        name: "RC Tech Solutions",
        url: "https://www.rctechsolutions.com",
        logo: { "@type": "ImageObject", url: "https://www.rctechsolutions.com/rclogo.png", width: 400, height: 400 },
      },
      datePublished: blog.createdAt || blog.date,
      dateModified: blog.updatedAt || blog.createdAt || blog.date,
      wordCount: wc,
      articleSection: blog.category || "Technology",
      keywords: blog.keywords?.join(", ") || blog.category || "",
      inLanguage: "en-IN",
      url: canonicalUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rctechsolutions.com" },
        { "@type": "ListItem", position: 2, name: "Journal", item: "https://www.rctechsolutions.com/blogs" },
        { "@type": "ListItem", position: 3, name: blog.title, item: canonicalUrl },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgressBar />

      <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>
        {/* Breadcrumb */}
        <nav className="border-b border-[var(--rc-wire)]" aria-label="Breadcrumb">
          <div className="mx-auto max-w-3xl px-4 py-3 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.6)] flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-[var(--rc-circuit)] transition-colors">Journal</Link>
            <span>/</span>
            <span className="line-clamp-1 max-w-[240px] text-[var(--rc-ink-soft)]">{blog.title}</span>
          </div>
        </nav>

        <main className="mx-auto max-w-6xl px-4 lg:px-6 py-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(260px,1fr)]">

            {/* Article */}
            <article className="min-w-0">
              {/* Masthead */}
              <header className="max-w-3xl mb-8">
                {blog.category && (
                  <span className="rc-eyebrow inline-block mb-4" style={{ color: "var(--rc-circuit)" }}>
                    {blog.category}
                  </span>
                )}
                <h1 className="rc-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[var(--rc-ink)] leading-[1.08]">
                  {blog.title}
                </h1>

                {blog.metaDescription && (
                  <p className="rc-body mt-4 text-lg text-[var(--rc-ink-soft)] leading-relaxed">
                    {blog.metaDescription}
                  </p>
                )}

                <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 pt-5 border-t border-[var(--rc-wire)]">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium overflow-hidden flex-shrink-0" style={{ background: "var(--rc-paper-deep)", color: "var(--rc-trace)" }}>
                        {blog.authorAvatar ? (
                          <Image src={blog.authorAvatar} alt={blog.author || "Author"} width={32} height={32} className="w-full h-full object-cover" />
                        ) : (
                          (blog.author || "RC").charAt(0).toUpperCase()
                        )}
                      </div>
                      <span className="rc-body text-sm font-medium text-[var(--rc-ink)]">{blog.author || "Rahul Chauhan"}</span>
                    </div>
                    <span className="rc-mono text-xs text-[rgba(42,45,53,0.5)]">
                      {formattedDate && `${formattedDate} · `}{rt}
                    </span>
                    <ViewCounter slug={blog.slug} />
                  </div>
                  <ShareButtons url={canonicalUrl} title={blog.title} />
                </div>
              </header>

              {/* Cover image */}
              {blogImage && (
                <div className="relative w-full mb-10 overflow-hidden rc-blueprint-card" style={{ aspectRatio: "16/9" }}>
                  <BlogImage src={blogImage} alt={getImageAlt(blog)} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 70vw" />
                </div>
              )}

              {/* Body */}
              <div
                className="prose prose-lg max-w-none prose-img:rounded-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-a:text-[var(--rc-circuit)] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-p:text-[1.0625rem] prose-p:leading-[1.85] prose-p:text-[var(--rc-ink-soft)] prose-blockquote:border-l-[var(--rc-circuit)]"
                style={{ fontFamily: "var(--font-plex-sans), var(--rc-font-body)" }}
              >
                {contentChunks.length > 0 ? (
                  contentChunks.map((chunk, i) => (
                    <div key={i} dangerouslySetInnerHTML={{ __html: chunk }} />
                  ))
                ) : (
                  <p className="text-[rgba(42,45,53,0.6)] italic">This entry doesn't have any content yet.</p>
                )}
              </div>

              {blog.keywords && blog.keywords.length > 0 && (
                <div className="mt-10 pt-6 border-t border-[var(--rc-wire)]">
                  <p className="rc-eyebrow text-[rgba(42,45,53,0.5)] mb-3">Tagged</p>
                  <div className="flex flex-wrap gap-2">
                    {blog.keywords.map((kw, i) => (
                      <span key={i} className="rc-mono text-[0.65rem] uppercase tracking-wide border border-[var(--rc-wire)] px-2.5 py-1 text-[var(--rc-ink-soft)]">{kw}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <section className="mt-14" aria-label="Related posts">
                  <h2 className="rc-eyebrow text-[var(--rc-circuit)] mb-5">More from the journal</h2>
                  <div className="grid sm:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
                    {relatedPosts.map((rp) => (
                      <Link key={rp.id} href={`/blogs/${rp.slug}`} className="group flex flex-col bg-[var(--rc-paper)] hover:bg-white transition-colors">
                        {getImageSource(rp) && (
                          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                            <BlogImage src={getImageSource(rp)} alt={getImageAlt(rp)} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
                          </div>
                        )}
                        <div className="p-4">
                          <h3 className="rc-display text-sm font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors line-clamp-2 leading-snug">{rp.title}</h3>
                          <p className="rc-mono text-[0.6rem] mt-1.5 text-[rgba(42,45,53,0.5)]">{rp.readingTime ? `${rp.readingTime} min read` : readingTimeLabel(rp.content)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA */}
              <div className="mt-14 rc-blueprint-card p-8 sm:p-10 text-center" style={{ background: "var(--rc-ink)" }}>
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Next step</span>
                <h2 className="rc-display text-xl sm:text-2xl font-semibold mt-2 mb-3 text-[var(--rc-paper)]">
                  Need a website that actually ranks?
                </h2>
                <p className="rc-body text-sm text-[rgba(246,242,233,0.6)] mb-6 max-w-md mx-auto">
                  We build fast, SEO-engineered websites for founders across India. Let's scope your project.
                </p>
                <Link href="/contact" className="inline-flex items-center rc-mono text-xs uppercase tracking-wider px-6 py-3.5 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors">
                  Get a free strategy call →
                </Link>
              </div>

              <CommentSection postId={blog.wpId} commentsEnabled={blog.commentsEnabled} />
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                {toc.length > 0 && (
                  <div className="rc-blueprint-card p-5">
                    <p className="rc-eyebrow text-[rgba(42,45,53,0.5)] mb-3">On this page</p>
                    <nav aria-label="Table of contents" className="space-y-0.5 text-sm">
                      {toc.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={"block truncate py-1.5 rc-body text-[var(--rc-ink-soft)] hover:text-[var(--rc-circuit)] transition-colors " + (item.level === "H3" ? "ml-3 text-xs" : "")}
                        >
                          {item.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                <div className="rc-blueprint-card p-5" style={{ background: "var(--rc-ink)" }}>
                  <p className="rc-eyebrow mb-2" style={{ color: "var(--rc-circuit)" }}>Work with RC Tech</p>
                  <h2 className="rc-display text-sm font-semibold text-[var(--rc-paper)] leading-snug">
                    Turn ideas into sharp, revenue-focused web experiences.
                  </h2>
                  <p className="rc-body mt-2 text-xs text-[rgba(246,242,233,0.5)] leading-relaxed">
                    Next.js websites, SEO-built launches, and conversion-focused funnels.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <Link href="/contact" className="rc-mono text-[0.65rem] uppercase tracking-wider text-center px-4 py-3 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors">
                      Book a strategy call
                    </Link>
                    <Link href="/blogs" className="rc-mono text-[0.65rem] uppercase tracking-wider text-center px-4 py-3 border border-[rgba(246,242,233,0.2)] text-[rgba(246,242,233,0.7)] hover:text-[var(--rc-paper)] transition-colors">
                      ← More issues
                    </Link>
                  </div>
                </div>

                <div className="rc-blueprint-card p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 overflow-hidden" style={{ background: "var(--rc-paper-deep)", color: "var(--rc-trace)" }}>
                      {blog.authorAvatar ? (
                        <Image src={blog.authorAvatar} alt={blog.author || "Author"} width={36} height={36} className="w-full h-full object-cover" />
                      ) : (
                        (blog.author || "RC").charAt(0).toUpperCase()
                      )}
                    </div>
                    <div>
                      <p className="rc-body text-sm font-medium text-[var(--rc-ink)]">{blog.author || "Rahul Chauhan"}</p>
                      <p className="rc-mono text-[0.6rem] text-[rgba(42,45,53,0.5)]">
                        {blog.authorSlug === "rahul" || (blog.author || "").includes("Rahul") ? "Founder, RC Tech Solutions" : "RC Tech Solutions"}
                      </p>
                    </div>
                  </div>
                  <p className="rc-body text-xs text-[rgba(42,45,53,0.7)] leading-relaxed">
                    {blog.authorBio || "Building brands and websites for startups across India."}
                  </p>
                </div>
              </div>
            </aside>

          </div>
        </main>
      </div>
    </>
  );
}
