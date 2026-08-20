'use client';

// SmoothProvider — safe version:
// 1. Custom magnetic cursor (desktop pointer devices only)
// 2. Global scroll progress bar
// 3. NO aggressive DOM mutation for scroll reveals — those are handled per-component
//    via Framer Motion whileInView, which is already in place on section cards.
//    The previous approach of adding opacity:0 globally was causing invisible text.

import { useEffect, useRef } from 'react';

function lerp(a, b, t) { return a + (b - a) * t; }

export default function SmoothProvider({ children }) {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    // ── Custom cursor (desktop pointer devices only) ──────────────────────
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    let cx = 0, cy = 0, mx = 0, my = 0, raf, visible = false;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      // Dot snaps immediately
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      if (!visible) {
        visible = true;
        cursor.style.opacity = '1';
        dot.style.opacity = '1';
        cx = mx; cy = my;
      }
    };

    const tick = () => {
      cx = lerp(cx, mx, 0.1);
      cy = lerp(cy, my, 0.1);
      cursor.style.transform = `translate(${cx - 18}px, ${cy - 18}px)`;
      raf = requestAnimationFrame(tick);
    };

    const bindHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('rc-cursor-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('rc-cursor-hover'));
      });
    };
    bindHover();

    // Re-bind on new interactive elements (dynamic content)
    const mo = new MutationObserver(bindHover);
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, []);

  useEffect(() => {
    // ── Scroll progress bar ───────────────────────────────────────────────
    const bar = document.getElementById('rc-scroll-bar');
    if (!bar) return;
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? `${(window.scrollY / total) * 100}%` : '0%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="rc-scroll-bar"
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0, height: '2px', width: '0%',
          background: 'linear-gradient(90deg, var(--rc-circuit), var(--rc-signal))',
          zIndex: 9999, pointerEvents: 'none',
          transition: 'width 0.08s linear',
        }}
      />

      {/* Custom cursor ring */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 9998, pointerEvents: 'none',
          width: 36, height: 36, borderRadius: '50%', opacity: 0,
          border: '1.5px solid var(--rc-circuit)',
          transition: 'width 0.2s, height 0.2s, opacity 0.3s, border-color 0.2s',
          mixBlendMode: 'multiply',
        }}
      />
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none',
          width: 6, height: 6, borderRadius: '50%', opacity: 0,
          background: 'var(--rc-circuit)',
          transition: 'opacity 0.3s',
        }}
      />

      {children}
    </>
  );
}
