"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

/**
 * Keeps route changes feeling connected while leaving the shared header and
 * footer mounted. The neutral crossfade works equally well for forward and
 * backward navigation, without making the page appear to move the wrong way.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const hasMounted = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot
  );
  const shouldAnimate = hasMounted && !reducedMotion;

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        className="min-h-full"
        initial={shouldAnimate ? { opacity: 0, scale: 0.985 } : false}
        animate={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
        exit={shouldAnimate ? { opacity: 0 } : undefined}
        transition={
          !shouldAnimate
            ? { duration: 0 }
            : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
        }
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
