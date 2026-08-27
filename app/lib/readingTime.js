// app/lib/readingTime.js
// Single source of truth for "X min read" across the site.
//
// Previously this math was copy-pasted in 4 different files
// (LatestBlogs.js, blogs/page.js, blogs/[slug]/page.js x2), each doing a
// naive `words / 200`. Three of those four call sites received an EMPTY
// content string (listing queries intentionally omit the full post body
// for performance), so word count was always 0 and every single post on
// the site showed "1 min read" — identical, static, and wrong. That's
// fixed by (a) centralising the algorithm here and (b) making sure every
// call site actually has real content to measure (see wordpress.js).
//
// The algorithm itself is also upgraded from a flat word-count/200:
//  - 238 wpm is the commonly-cited average adult *silent* reading speed
//    (Brysbaert, 2019 meta-analysis of 190 studies), vs. the old 200.
//  - Images add reading/viewing time on top of the text, using the same
//    diminishing-return model Medium's read-time algorithm popularised:
//    ~12s for the first image, decreasing by 1s each subsequent image
//    down to a 3s floor (skimming vs. studying every image in a long post).
//  - Code blocks (<pre>) are read slower than prose; a flat ~10s/block
//    is added.

const WORDS_PER_MINUTE = 238;

function imageTimeSeconds(imageCount) {
  let seconds = 0;
  for (let i = 0; i < imageCount; i++) {
    seconds += Math.max(12 - i, 3);
  }
  return seconds;
}

/**
 * Estimate reading time in whole minutes (minimum 1) from a raw HTML string.
 * Safe to call with '', null, or undefined.
 */
export function estimateReadingTime(html) {
  if (!html) return 1;

  // Strip script/style blocks entirely (their text isn't "read"), then tags.
  const text = String(html)
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const imageCount = (String(html).match(/<img\b/gi) || []).length;
  const codeBlockCount = (String(html).match(/<pre\b/gi) || []).length;

  const minutes =
    wordCount / WORDS_PER_MINUTE +
    imageTimeSeconds(imageCount) / 60 +
    (codeBlockCount * 10) / 60;

  return Math.max(1, Math.ceil(minutes));
}

/** Convenience wrapper returning the display string, e.g. "6 min read". */
export function readingTimeLabel(html) {
  return `${estimateReadingTime(html)} min read`;
}

/** Plain word count (used separately for the BlogPosting wordCount schema field). */
export function countWords(html) {
  if (!html) return 0;
  return String(html)
    .replace(/<[^>]+>/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}
