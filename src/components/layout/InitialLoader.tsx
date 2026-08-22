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
      dismissTimer = window.setTimeout(() => setReady(true), remaining);
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink text-ivory"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: reducedMotion ? 0.18 : 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-[min(18rem,75vw)] text-center">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-bronze">Lyricist Vivek</p>
            <div className="mt-6 h-px overflow-hidden bg-ivory/15">
              <motion.div
                className="h-full origin-left bg-bronze"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <p className="mt-4 font-sans text-[0.65rem] uppercase tracking-[0.28em] text-ivory/50">Opening the archive</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
