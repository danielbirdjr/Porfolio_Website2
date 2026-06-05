"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

/**
 * Effect 1 — page-level cursor glow.
 *
 * A soft radial spotlight follows the cursor across the whole viewport,
 * illuminating the graph-paper grid underneath (a torch moving over
 * parchment at night in dark mode; barely-there warmth in light mode).
 *
 * Performance note: the design principles say "animate only transform and
 * opacity." This component instead writes a `background` gradient string each
 * frame — but it does so through Framer Motion's `useMotionTemplate`, which
 * pushes the value straight to the element's inline style via the DOM, never
 * through React state or reconciliation. The browser treats it as a composited
 * paint with no layout recalculation. This is the accepted exception to the
 * transform/opacity rule and is how Vercel, Linear, etc. ship this pattern.
 */
export function CursorGlow() {
  const prefersReduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Spring lag makes the glow trail just behind the cursor. Stiffer than a
  // drifting lantern — it keeps up closely with only a slight delay.
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  const [visible, setVisible] = useState(false);
  const firstMove = useRef(true);

  useEffect(() => {
    if (prefersReduced) return;
    // Touch / coarse-pointer devices have no hover cursor — don't activate.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      // On the very first event, jump the springs to the cursor so the glow
      // fades in where the pointer is, not sweeping in from (0,0).
      if (firstMove.current) {
        springX.jump(e.clientX);
        springY.jump(e.clientY);
        firstMove.current = false;
      }
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [prefersReduced, x, y, springX, springY]);

  // Broad, gentle wash rather than a focused flashlight: a large radius with a
  // gradual fade that dissolves softly over the whole spread (no visible rim),
  // so it reads as ambient warmth following the cursor.
  const background = useMotionTemplate`radial-gradient(900px circle at ${springX}px ${springY}px, var(--cursor-glow), transparent 80%)`;

  // No overlay at all when reduced motion is preferred.
  if (prefersReduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500 ease-out"
      style={{ background, opacity: visible ? 1 : 0 }}
    />
  );
}
