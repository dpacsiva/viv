"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { LyricLine } from "@/types";

export function AnnotationDrawer({ line }: { line: LyricLine }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  if (!line.annotation) return null;

  return (
    <div className="mt-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-bronze"
      >
        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-bronze text-[10px]">i</span>
        {open ? "Hide note" : "Word note"}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-2 rounded-md bg-paper px-4 py-3 font-sans text-sm text-slate">{line.annotation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
