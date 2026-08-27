"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { PageLoadingSkeleton } from "@/components/states/PageLoadingSkeleton";

const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeKey = `${pathname}?${searchParams.toString()}`;
  const reducedMotion = useReducedMotion();
  const [isNavigating, setIsNavigating] = useState(false);
  const hasMounted = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot
  );
  const shouldAnimate = hasMounted && !reducedMotion;

  useEffect(() => {
    const documentElement = document.documentElement;
    const previousScrollBehavior = documentElement.style.scrollBehavior;
    documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    documentElement.style.scrollBehavior = previousScrollBehavior;

    const frame = window.requestAnimationFrame(() => setIsNavigating(false));
    return () => window.cancelAnimationFrame(frame);
  }, [routeKey]);

  useEffect(() => {
    const handleNavigationStart = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);

      if (
        destination.origin !== current.origin ||
        (destination.pathname === current.pathname && destination.search === current.search)
      ) {
        return;
      }

      setIsNavigating(true);
    };

    document.addEventListener("click", handleNavigationStart, true);
    return () => document.removeEventListener("click", handleNavigationStart, true);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isNavigating ? (
        <motion.div
          key="route-loading"
          className="min-h-full"
          initial={shouldAnimate ? { opacity: 0, filter: "blur(4px)" } : false}
          animate={shouldAnimate ? { opacity: 1, filter: "blur(0px)" } : undefined}
          exit={shouldAnimate ? { opacity: 0, filter: "blur(3px)" } : undefined}
          transition={shouldAnimate ? { duration: 0.24, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
        >
          <PageLoadingSkeleton />
        </motion.div>
      ) : (
        <motion.div
          key={routeKey}
          className="min-h-full"
          initial={shouldAnimate ? { opacity: 0, filter: "blur(4px)", scale: 0.99 } : false}
          animate={shouldAnimate ? { opacity: 1, filter: "blur(0px)", scale: 1 } : undefined}
          exit={shouldAnimate ? { opacity: 0, filter: "blur(3px)", scale: 0.995 } : undefined}
          transition={shouldAnimate ? { duration: 0.42, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
