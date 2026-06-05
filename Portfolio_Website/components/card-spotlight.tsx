"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

/**
 * Effect 2 — card spotlight.
 *
 * Drop this in as the first child of any `position: relative` card/cell and it
 * lights that card from wherever the cursor points within it — like shining a
 * small light on a specific entry in a notebook. Subtler than the page glow,
 * and it tracks the cursor precisely (no spring): a direct light source, not a
 * drifting lantern.
 *
 * It attaches its listeners to its own `parentElement`, so the host card can
 * stay a server component — no `"use client"` needed on the card itself.
 *
 * Same composited-paint exception as CursorGlow: `background` is written via
 * `useMotionTemplate` straight to inline style, bypassing React reconciliation.
 */
export function CardSpotlight({ radius = 220 }: { radius?: number }) {
  const prefersReduced = useReducedMotion();

  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (prefersReduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const card = ref.current?.parentElement;
    if (!card) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };
    const onEnter = () => setActive(true);
    const onLeave = () => setActive(false);

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [prefersReduced, x, y]);

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${x}px ${y}px, var(--card-glow), transparent 80%)`;

  if (prefersReduced) return null;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300 ease-out"
      style={{ background, opacity: active ? 1 : 0 }}
    />
  );
}
