"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Quote } from "@/types";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={direction === "left" ? "rotate-180" : undefined}
      aria-hidden="true"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function QuoteCarousel({ quotes }: { quotes: Quote[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.12 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (quotes.length < 2 || isPaused || reducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % quotes.length);
    }, 8000);

    return () => window.clearInterval(interval);
  }, [isPaused, quotes.length, reducedMotion]);

  if (quotes.length === 0) return null;

  const activeQuote = quotes[activeIndex] || quotes[0];

  return (
    <motion.section
      ref={sectionRef}
      aria-label="Selected lyrics"
      className="relative bg-ink text-ivory"
      initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
      animate={reducedMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="grid h-[520px] grid-cols-[1.25fr_0.75fr] sm:h-[560px] lg:grid-cols-2">
        <div className="relative flex h-full flex-col justify-center overflow-hidden px-12 py-8 sm:px-16 sm:py-12 lg:px-20 xl:px-24">
          <span aria-hidden="true" className="absolute left-4 top-5 font-serif text-5xl leading-none text-bronze/70 sm:left-8 sm:top-8 sm:text-7xl lg:left-16">
            “
          </span>

          <div className="relative z-10 max-w-2xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeQuote.id}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote lang={activeQuote.language || "ta"} className="font-serif text-[1.05rem] italic leading-[1.35] text-ivory sm:text-2xl lg:text-[1.9rem] lg:leading-[1.35]">
                  {activeQuote.quote}
                </blockquote>
                <footer className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-[0.48rem] uppercase tracking-[0.12em] text-bronze sm:mt-8 sm:gap-x-3 sm:text-sm sm:tracking-[0.22em]">
                  <cite className="not-italic">{activeQuote.attribution}</cite>
                  {activeQuote.context && (
                    <>
                      <span aria-hidden="true" className="text-ivory/35">·</span>
                      <span className="text-ivory/55">{activeQuote.context}</span>
                    </>
                  )}
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          <nav className="absolute bottom-6 left-12 right-12 z-10 flex flex-col items-center gap-3 sm:bottom-8 sm:left-16 sm:right-16 lg:left-20 xl:left-24" aria-label="Quote navigation">
            {quotes.length > 1 && (
              <div className="flex items-center gap-5">
                <button
                  type="button"
                  aria-label="Previous quote"
                  onClick={() => setActiveIndex((current) => (current - 1 + quotes.length) % quotes.length)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-ivory/35 bg-ink/45 text-ivory/80 backdrop-blur-sm transition-colors hover:border-bronze hover:bg-bronze hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze sm:h-9 sm:w-9"
                >
                  <ArrowIcon direction="left" />
                </button>
                <button
                  type="button"
                  aria-label="Next quote"
                  onClick={() => setActiveIndex((current) => (current + 1) % quotes.length)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-ivory/35 bg-ink/45 text-ivory/80 backdrop-blur-sm transition-colors hover:border-bronze hover:bg-bronze hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze sm:h-9 sm:w-9"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2" aria-label="Choose a quote">
              {quotes.map((quote, index) => (
                <button
                  key={quote.id}
                  type="button"
                  aria-label={`Show quote ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1 rounded-full transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze ${
                    index === activeIndex ? "w-6 bg-bronze sm:w-8" : "w-1.5 bg-ivory/30 hover:bg-ivory/60 sm:w-2"
                  }`}
                />
              ))}
            </div>
          </nav>
        </div>

        <div className="relative h-full overflow-hidden">
          <Image
            src="/images/cover/cover-of-carousel.webp"
            alt="Vivek writing at his desk"
            fill
            priority={false}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[72%_center] grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/20 via-transparent to-transparent" aria-hidden="true" />
        </div>
      </div>
    </motion.section>
  );
}
