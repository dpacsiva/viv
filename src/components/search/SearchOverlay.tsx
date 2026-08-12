"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { searchActions } from "@/features/search/searchSlice";
import { selectSearchQuery, selectSearchResponse, selectSearchStatus } from "@/features/search/searchSelectors";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dispatch = useAppDispatch();
  const query = useAppSelector(selectSearchQuery);
  const response = useAppSelector(selectSearchResponse);
  const status = useAppSelector(selectSearchStatus);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const id = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(id);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-ivory/98 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Search the archive"
        >
          <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 overflow-y-auto px-4 py-8 sm:px-6 sm:py-16">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 text-bronze">
                <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => dispatch(searchActions.searchRequest(e.target.value))}
                placeholder="Search lyrics, films, words, themes…"
                aria-label="Search the archive"
                className="w-full bg-transparent font-serif text-xl text-ink placeholder:text-slate/60 focus:outline-none sm:text-2xl"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="rounded-full p-2 text-ink transition-colors hover:bg-paper hover:text-bronze"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {status === "loading" && <p className="font-sans text-sm text-slate">Searching the archive…</p>}

            {response && response.total === 0 && (
              <div>
                <p className="font-sans text-sm text-slate">No results for “{response.query}”.</p>
                {response.suggestions.length > 0 && (
                  <p className="mt-2 font-sans text-sm text-slate">
                    Did you mean:{" "}
                    {response.suggestions.map((s, i) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => dispatch(searchActions.searchRequest(s))}
                        className="text-bronze underline underline-offset-2"
                      >
                        {s}
                        {i < response.suggestions.length - 1 ? ", " : ""}
                      </button>
                    ))}
                  </p>
                )}
              </div>
            )}

            {response &&
              response.groups.map((group) => (
                <div key={group.kind}>
                  <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-bronze">
                    {group.label}
                  </h2>
                  <ul className="mt-3 flex flex-col gap-1">
                    {group.items.map((item) => (
                      <li key={`${item.kind}-${item.id}`}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block rounded-md px-3 py-3 -mx-3 transition-colors hover:bg-paper"
                        >
                          <span className="block font-serif text-lg text-ink">{item.title}</span>
                          {item.subtitle && <span className="block font-sans text-sm text-slate">{item.subtitle}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            {!query && (
              <p className="font-sans text-sm text-slate">
                Try “Vetrikodi”, “Amma”, “Ilan Vasan” or a Tamil word like தமிழன்.
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
