"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const STATS = [
  { id: "songs-written", value: 265, label: "Songs Written", icon: "feather" },
  { id: "films", value: 132, label: "Films", icon: "film" },
  { id: "music-videos", value: 5, label: "Music Videos", icon: "camera" },
] as const;

type CounterIconName = (typeof STATS)[number]["icon"];

function CounterIcon({ name }: { name: CounterIconName }) {
  const commonProps = {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.45,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "feather":
      return (
        <svg {...commonProps}>
          <path d="M39 8C25 6 11 13 8 26c-1.4 5.5 1.1 10.6 1.1 10.6s5.1 2.5 10.6 1.1C32.7 34.7 40.2 21.9 39 8Z" />
          <path d="M7 42 24 25M15 34l-.4-6M22 27l6 .4M29 20l-.2 6" />
        </svg>
      );
    case "film":
      return (
        <svg {...commonProps}>
          <circle cx="23" cy="24" r="14" />
          <circle cx="23" cy="24" r="3" />
          <circle cx="23" cy="14.5" r="3.4" />
          <circle cx="14.8" cy="28.8" r="3.4" />
          <circle cx="31.2" cy="28.8" r="3.4" />
          <path d="M34.5 35.5c3.5 1.3 5.6 3.4 6.5 6" />
        </svg>
      );
    case "camera":
      return (
        <svg {...commonProps}>
          <path d="M8 17.5h8l3.5-4h5l3.5 4h4a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-12a3 3 0 0 1 3-3Z" />
          <circle cx="23.5" cy="26.5" r="6" />
          <circle cx="23.5" cy="26.5" r="1.4" />
          <path d="M32.5 22h.01" strokeWidth="3" />
        </svg>
      );
  }
}

function CounterOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 28" fill="none" aria-hidden="true" className={className}>
      <path d="M2 14h48M90 14h48" stroke="currentColor" strokeOpacity=".45" />
      <path d="M50 14c6 0 7-5 10-5s4 5 10 5 7-5 10-5 4 5 10 5" stroke="currentColor" strokeOpacity=".65" />
      <path d="M70 22c-2.8-4.5-2.8-8.5 0-12 2.8 3.5 2.8 7.5 0 12ZM70 10c-3.8-3.7-7.1-4.5-10-2.4 2.5 3.5 5.8 4.3 10 2.4ZM70 10c3.8-3.7 7.1-4.5 10-2.4-2.5 3.5-5.8 4.3-10 2.4Z" stroke="currentColor" strokeOpacity=".8" />
    </svg>
  );
}

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

  return <>{(active && reducedMotion ? value : count).toLocaleString("en-IN")}</>;
}

export function ArchiveStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [pageReady, setPageReady] = useState(
    () => typeof document !== "undefined" && document.documentElement.dataset.initialLoaderComplete === "true"
  );
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const isActive = pageReady && isInView;

  useEffect(() => {
    const handleLoaderComplete = () => setPageReady(true);
    window.addEventListener("initial-loader-complete", handleLoaderComplete);
    return () => window.removeEventListener("initial-loader-complete", handleLoaderComplete);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="archive-highlights"
      aria-label="Archive highlights"
      className="home-counter-section relative scroll-mt-20 overflow-hidden border-y border-bronze/20 text-bronze"
      initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
      animate={reducedMotion || isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="pointer-events-none absolute inset-y-3 left-3 right-3 rounded-[1.25rem] border border-bronze/30 sm:inset-y-5 sm:left-10 sm:right-10" />
      <div className="pointer-events-none absolute inset-y-5 left-5 right-5 rounded-[1rem] border border-bronze/15 sm:inset-y-7 sm:left-14 sm:right-14" />
      <CounterOrnament className="pointer-events-none absolute left-1/2 top-2 h-7 w-32 -translate-x-1/2 text-bronze sm:top-4" />
      <CounterOrnament className="pointer-events-none absolute bottom-2 left-1/2 h-7 w-32 -translate-x-1/2 rotate-180 text-bronze sm:bottom-4" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 divide-y divide-bronze/20 px-9 py-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-16 sm:py-12">
        {STATS.map((stat, index) => (
          <div key={stat.id} className="flex items-center justify-center gap-4 px-4 py-6 text-center sm:gap-5 sm:py-2">
            <span className="shrink-0 text-bronze/85">
              <CounterIcon name={stat.icon} />
            </span>
            <div>
              <p className="font-sans text-5xl font-medium leading-none tracking-[-0.06em] text-bronze sm:text-6xl">
                <span className="tabular-nums">
                  <CountUp value={stat.value} delay={index * 140} active={isActive} />
                </span>
                <sup className="ml-1 text-2xl align-super sm:text-3xl">+</sup>
              </p>
              <p className="mt-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-bronze/80 sm:text-xs">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
