"use client";
// app/components/blog/ShareButtons.js

import { useState } from "react";
import {
  RiWhatsappLine,
  RiTwitterXLine,
  RiLinkedinBoxLine,
  RiFacebookCircleLine,
  RiLinkM,
  RiCheckLine,
} from "react-icons/ri";

export default function ShareButtons({ url, title }) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "WhatsApp",
      icon: RiWhatsappLine,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      label: "X",
      icon: RiTwitterXLine,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      label: "LinkedIn",
      icon: RiLinkedinBoxLine,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Facebook",
      icon: RiFacebookCircleLine,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — no-op, the buttons above still work
    }
  };

  return (
    <div className="flex items-center gap-2">
      {links.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${label}`}
          className="w-8 h-8 flex items-center justify-center border border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)] transition-colors"
        >
          <Icon size={15} />
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link"
        className="w-8 h-8 flex items-center justify-center border border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)] transition-colors"
      >
        {copied ? <RiCheckLine size={15} style={{ color: "var(--rc-trace)" }} /> : <RiLinkM size={15} />}
      </button>
    </div>
  );
}
