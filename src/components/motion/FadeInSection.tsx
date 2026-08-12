"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Framer Motion's `initial` prop is baked into the server-rendered HTML
 * (this is a client component, but Next still renders its first pass on the
 * server). Animating `opacity` there means the page ships invisible until JS
 * hydrates and the IntersectionObserver fires — fine on a fast desktop, but
 * on a slow mobile connection/CPU (or a hydration hiccup) this can leave the
 * whole page looking blank. So this only ever animates position, never
 * opacity — content is always visible even if JS never runs; the motion is
 * a bonus, not a requirement.
 */
export function FadeInSection({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}) {
  const reducedMotion = useReducedMotion();
  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      className={className}
      initial={reducedMotion ? undefined : { y: 20 }}
      whileInView={reducedMotion ? undefined : { y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
