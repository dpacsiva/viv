"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const MIN_DISPLAY_TIME = 850;
const MAX_WAIT_TIME = 2400;

export function InitialLoader() {
  const [ready, setReady] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const startedAt = performance.now();
    let dismissalScheduled = false;
    let dismissTimer = 0;
    let fallbackTimer = 0;

    const dismiss = () => {
      if (dismissalScheduled) return;
      dismissalScheduled = true;
      const remaining = Math.max(0, MIN_DISPLAY_TIME - (performance.now() - startedAt));
      dismissTimer = window.setTimeout(() => {
        document.documentElement.dataset.initialLoaderComplete = "true";
        window.dispatchEvent(new Event("initial-loader-complete"));
        setReady(true);
      }, remaining);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
    }

    fallbackTimer = window.setTimeout(dismiss, MAX_WAIT_TIME);

    return () => {
      window.removeEventListener("load", dismiss);
      window.clearTimeout(dismissTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          key="initial-loader"
          role="status"
          aria-label="Loading Lyricist Vivek archive"
          className="initial-loader fixed inset-0 z-[100] flex items-center justify-center text-ink"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: reducedMotion ? 0.18 : 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-[min(20rem,78vw)] text-center">
            <div className="relative mx-auto h-16 w-16" aria-hidden="true">
              <motion.span
                className="absolute inset-0 rounded-full border border-bronze/20 border-t-bronze"
                animate={reducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 1.35, ease: "linear", repeat: Infinity }}
              />
              <span className="absolute inset-2 rounded-full border border-bronze/15" />
              <motion.span
                className="absolute inset-0 flex items-center justify-center font-sans text-xl text-bronze"
                animate={reducedMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [0.9, 1, 0.9] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
              >
                ✦
              </motion.span>
            </div>
            <p className="mt-7 font-sans text-xs font-semibold uppercase tracking-[0.32em] text-bronze-dark">Lyricist Archive</p>
            <p className="mt-2 font-sans text-2xl font-semibold tracking-[-0.04em] text-ink">Vivek</p>
            <div className="relative mt-7 h-1 overflow-hidden rounded-full bg-bronze/10">
              <motion.div
                className="absolute inset-y-0 left-0 w-2/5 rounded-full bg-bronze"
                animate={reducedMotion ? undefined : { x: ["-125%", "280%"] }}
                transition={{ duration: 1.35, ease: "easeInOut", repeat: Infinity }}
              />
            </div>
            <p className="mt-4 font-sans text-[0.65rem] uppercase tracking-[0.28em] text-slate">Opening the archive</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
