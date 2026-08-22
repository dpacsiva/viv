"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const STATS = [
  { id: "songs-written", value: 260, label: "Songs Written" },
  { id: "films", value: 130, label: "Films" },
  { id: "music-videos", value: 5, label: "Music Videos" },
] as const;

function CountUp({ value, delay, active }: { value: number; delay: number; active: boolean }) {
  const [count, setCount] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!active) return;

    if (reducedMotion) {
      return;
    }

    let animationFrame = 0;
    const startedAt = window.setTimeout(() => {
      const startTime = performance.now();
      const duration = 1100;

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - (1 - progress) ** 3;
        setCount(Math.round(value * easedProgress));

        if (progress < 1) animationFrame = window.requestAnimationFrame(tick);
      };

      animationFrame = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(startedAt);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [active, delay, reducedMotion, value]);

  return <>{(reducedMotion ? value : count).toLocaleString("en-IN")}</>;
}

export function ArchiveStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={sectionRef}
      aria-label="Archive highlights"
      className="border-y border-white/10 bg-ink text-ivory"
      initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
      animate={reducedMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/10 px-6 py-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 sm:py-10">
        {STATS.map((stat, index) => (
          <div key={stat.id} className="flex flex-col items-center justify-center px-4 py-5 text-center sm:py-2">
            <p className="font-serif text-4xl leading-none tracking-tight text-[#d4a16a] sm:text-5xl">
              <span className="tabular-nums">
                <CountUp value={stat.value} delay={index * 140} active={isInView} />
              </span>
              <sup className="ml-1 text-2xl align-super sm:text-3xl">+</sup>
            </p>
            <p className="mt-3 font-sans text-[0.65rem] font-medium uppercase tracking-[0.28em] text-ivory/65 sm:text-xs">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
