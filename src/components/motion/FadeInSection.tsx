"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Adds a subtle focus reveal without moving the page vertically. The content
 * remains visible in the server-rendered HTML even before motion hydrates.
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
      initial={reducedMotion ? undefined : { scale: 0.99, filter: "blur(3px)" }}
      whileInView={reducedMotion ? undefined : { scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
