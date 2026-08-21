"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Quote } from "@/types";

export function QuoteCarousel({ quotes }: { quotes: Quote[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (quotes.length < 2 || isPaused || reducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % quotes.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused, quotes.length, reducedMotion]);

  if (quotes.length === 0) return null;

  const activeQuote = quotes[activeIndex] || quotes[0];

  return (
    <motion.section
      aria-label="Selected lyrics"
      className="bg-ink text-ivory"
      initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="grid h-[520px] grid-cols-[1.25fr_0.75fr] sm:h-[560px] lg:grid-cols-2">
        <div className="relative flex h-full flex-col justify-center overflow-hidden px-4 py-8 sm:px-8 sm:py-12 lg:px-16 xl:px-24">
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

          <div className="relative z-10 mt-6 flex flex-wrap items-center gap-1.5 sm:mt-10 sm:gap-2" aria-label="Choose a quote">
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
        </div>

        <div className="relative h-full overflow-hidden">
          <Image
            src="/images/cover/cover.webp"
            alt="Vivek writing at his desk"
            fill
            priority={false}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[72%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/20 via-transparent to-transparent" aria-hidden="true" />
        </div>
      </div>
    </motion.section>
  );
}
