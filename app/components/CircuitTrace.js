"use client";

// Signature brand element: an animated PCB-style trace line with glowing
// via-nodes. Draws itself on scroll-into-view using stroke-dashoffset,
// echoing "the engineering behind the brand" -- this is the one unique,
// memorable visual device tying hero -> sections -> footer together.
// Used sparingly: as a section divider, never as decoration on every element.

import { useEffect, useRef, useState } from "react";

export default function CircuitTrace({
  variant = "horizontal", // "horizontal" | "branching"
  className = "",
  color = "var(--rc-circuit)",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (variant === "branching") {
    return (
      <svg
        ref={ref}
        viewBox="0 0 1200 80"
        className={`w-full h-auto ${className}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 40 H440 M440 40 L480 10 H720 M720 10 L760 40 H1200"
          fill="none"
          stroke="var(--rc-wire)"
          strokeWidth="1"
        />
        <path
          d="M0 40 H440 M440 40 L480 10 H720 M720 10 L760 40 H1200"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="1400"
          strokeDashoffset={visible ? 0 : 1400}
          style={{ transition: "stroke-dashoffset 2.2s cubic-bezier(0.65, 0, 0.35, 1)" }}
        />
        {[0, 440, 480, 720, 760, 1199].map((cx, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cx === 480 || cx === 720 ? 10 : 40}
            r={visible ? 3.5 : 0}
            fill={i % 2 === 0 ? color : "var(--rc-signal)"}
            style={{ transition: `r 0.3s ease ${0.3 + i * 0.25}s` }}
          />
        ))}
      </svg>
    );
  }

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 24"
      className={`w-full h-auto ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="12" x2="1200" y2="12" stroke="var(--rc-wire)" strokeWidth="1" />
      <line
        x1="0"
        y1="12"
        x2="1200"
        y2="12"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="1200"
        strokeDashoffset={visible ? 0 : 1200}
        style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.65, 0, 0.35, 1)" }}
      />
      {[0, 300, 600, 900, 1199].map((cx, i) => (
        <circle
          key={i}
          cx={cx}
          cy={12}
          r={visible ? 3 : 0}
          fill={i % 2 === 0 ? color : "var(--rc-trace)"}
          style={{ transition: `r 0.3s ease ${0.2 + i * 0.15}s` }}
        />
      ))}
    </svg>
  );
}
