"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const MIN_DISPLAY_TIME = 1350;
const MAX_WAIT_TIME = 2400;
const WRITING_DURATION = 1.2;

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
            <svg viewBox="0 0 320 80" className="mx-auto h-20 w-full overflow-visible text-bronze" aria-hidden="true">
              <defs>
                <clipPath id="initial-loader-word-clip" clipPathUnits="userSpaceOnUse">
                  <motion.rect
                    x="0"
                    y="0"
                    height="80"
                    initial={{ width: reducedMotion ? 281 : 44 }}
                    animate={reducedMotion ? undefined : { width: [44, 52, 64, 64, 78, 91, 91, 105, 119, 119, 134, 148, 148, 163, 177, 177, 193, 209, 209, 226, 242, 259, 281, 281] }}
                    transition={{ duration: WRITING_DURATION, ease: "easeInOut" }}
                  />
                </clipPath>
              </defs>
              <text
                x="34"
                y="58"
                fill="currentColor"
                clipPath="url(#initial-loader-word-clip)"
                style={{ fontFamily: "var(--font-dancing-script), cursive", fontSize: "2.9rem", fontWeight: 500 }}
              >
                Lyricist Vivek
              </text>
              <motion.g
                initial={{ x: 32, y: 0, opacity: reducedMotion ? 0.8 : 1 }}
                animate={reducedMotion ? undefined : {
                  x: [32, 40, 52, 52, 66, 79, 79, 93, 107, 107, 122, 136, 136, 151, 165, 165, 181, 197, 197, 214, 230, 247, 269, 269],
                  y: [0, -7, 5, -5, 7, -8, 4, -6, 6, -5, 7, -8, 4, -6, 7, -5, 5, -7, 4, -6, 5, -4, 0, 0],
                  rotate: [-18, -26, 13, -20, 15, -24, 12, -22, 14, -20, 13, -23, 12, -21, 14, -20, 12, -22, 11, -18, 10, -14, 0, 0],
                }}
                style={{ transformOrigin: "2px 53px" }}
                transition={{ duration: WRITING_DURATION, ease: "easeInOut" }}
              >
                <path d="M2 53 10 31 38 7l8 8-24 29-20 9Z" fill="var(--color-bronze)" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
                <path d="m10 31 14 13M38 7l8 8M2 53l7-2-5-5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
                <path d="M2 53 0 59l6-3" fill="var(--color-bronze)" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.1" />
              </motion.g>
            </svg>
            <p className="mt-3 font-sans text-[0.65rem] uppercase tracking-[0.28em] text-slate">Opening the archive</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
