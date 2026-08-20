"use client";
// app/components/blog/CommentSection.js

import { useEffect, useState } from "react";
import RecaptchaField, { useRecaptcha } from "../Recaptcha";

const stripHtml = (html = "") => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days} days ago`;
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function CommentSection({ postId, commentsEnabled = true }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ author_name: "", author_email: "", content: "" });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', message }
  const { ref: recaptchaRef, token: captchaToken, onChange: onCaptchaChange, reset: resetCaptcha } = useRecaptcha();

  useEffect(() => {
    if (!postId) return;
    fetch(`/api/blogs/comments?postId=${postId}`)
      .then((r) => r.json())
      .then((data) => setComments(data.comments || []))
      .catch(() => setComments([]))
      .finally(() => setLoading(false));
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(null);

    if (!captchaToken) {
      setFeedback({ type: "error", message: "Please check the reCAPTCHA box to verify you're human." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/blogs/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, ...form, captchaToken }),
      });
      const data = await res.json();

      if (!res.ok || data.error) {
        setFeedback({ type: "error", message: data.error || "Couldn't post your comment." });
        resetCaptcha();
        return;
      }

      if (data.status === "approve" || data.status === "approved") {
        setComments((prev) => [
          ...prev,
          { id: data.comment.id, author: data.comment.author, content: data.comment.content, date: data.comment.date, parent: 0 },
        ]);
        setFeedback({ type: "success", message: "Comment posted!" });
      } else {
        setFeedback({ type: "success", message: "Thanks! Your comment is awaiting moderation and will appear once approved." });
      }
      setForm({ author_name: "", author_email: "", content: "" });
      resetCaptcha();
    } catch {
      setFeedback({ type: "error", message: "Network error. Please try again." });
      resetCaptcha();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-14 pt-10 border-t border-[var(--rc-wire)]" aria-label="Comments">
      <h2 className="rc-eyebrow text-[var(--rc-circuit)] mb-6">
        {loading ? "Comments" : `${comments.length} Comment${comments.length === 1 ? "" : "s"}`}
      </h2>

      {!loading && comments.length > 0 && (
        <ul className="space-y-6 mb-10">
          {comments.map((c) => (
            <li key={c.id} className={c.parent ? "ml-8 sm:ml-12" : ""}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 overflow-hidden"
                  style={{ background: "var(--rc-paper-deep)", color: "var(--rc-trace)" }}>
                  {c.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.avatar} alt={c.author} className="w-full h-full object-cover" />
                  ) : (
                    c.author.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="rc-body text-sm font-medium text-[var(--rc-ink)]">{c.author}</span>
                    <span className="rc-mono text-[0.65rem] text-[rgba(42,45,53,0.45)]">{timeAgo(c.date)}</span>
                  </div>
                  <p className="rc-body text-sm text-[var(--rc-ink-soft)] mt-1 leading-relaxed">{stripHtml(c.content)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {!loading && comments.length === 0 && (
        <p className="rc-body text-sm text-[var(--rc-ink-soft)] mb-10">Be the first to comment on this issue.</p>
      )}

      {commentsEnabled ? (
        <form onSubmit={handleSubmit} className="rc-blueprint-card p-6 space-y-3.5">
          <p className="rc-eyebrow text-[rgba(42,45,53,0.5)] mb-1">Leave a comment</p>
          <div className="grid sm:grid-cols-2 gap-3.5">
            <input
              type="text" required placeholder="Your name *"
              value={form.author_name}
              onChange={(e) => setForm({ ...form, author_name: e.target.value })}
              className="w-full border border-[var(--rc-wire)] px-4 py-3 rc-body text-sm text-[var(--rc-ink)] bg-white placeholder-rc-ink-soft/30 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors"
            />
            <input
              type="email" required placeholder="Email * (not published)"
              value={form.author_email}
              onChange={(e) => setForm({ ...form, author_email: e.target.value })}
              className="w-full border border-[var(--rc-wire)] px-4 py-3 rc-body text-sm text-[var(--rc-ink)] bg-white placeholder-rc-ink-soft/30 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors"
            />
          </div>
          <textarea
            required rows={4} placeholder="Share your thoughts..."
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full border border-[var(--rc-wire)] px-4 py-3 rc-body text-sm text-[var(--rc-ink)] bg-white placeholder-rc-ink-soft/30 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors resize-none"
          />
          <RecaptchaField recaptchaRef={recaptchaRef} onChange={onCaptchaChange} className="justify-start" />
          {feedback && (
            <p className={`rc-mono text-xs ${feedback.type === "error" ? "text-red-600" : "text-[var(--rc-trace)]"}`}>
              {feedback.message}
            </p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="rc-mono text-xs uppercase tracking-wider px-6 py-3 bg-[var(--rc-ink)] text-white hover:bg-[var(--rc-circuit)] transition-colors disabled:opacity-50"
          >
            {submitting ? "Posting…" : "Post comment"}
          </button>
        </form>
      ) : (
        <p className="rc-body text-sm text-[var(--rc-ink-soft)]">Comments are closed on this issue.</p>
      )}
    </section>
  );
}
