"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { uiActions, type LyricReadingMode } from "@/features/ui/uiSlice";

const MODES: { value: LyricReadingMode; label: string }[] = [
  { value: "tamil", label: "Tamil" },
  { value: "transliteration", label: "Tamil + Transliteration" },
  { value: "meaning", label: "Tamil + English Meaning" },
  { value: "annotated", label: "Annotated" },
];

export function ReadingModeToggle() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.ui.lyricReadingMode);

  return (
    <div role="group" aria-label="Lyric reading mode" className="flex flex-wrap gap-2">
      {MODES.map((m) => (
        <button
          key={m.value}
          type="button"
          aria-pressed={mode === m.value}
          onClick={() => dispatch(uiActions.setLyricReadingMode(m.value))}
          className={`rounded-full border px-4 py-1.5 font-sans text-xs font-medium transition-colors sm:text-sm ${
            mode === m.value
              ? "border-bronze bg-bronze text-white"
              : "border-border text-slate hover:border-bronze hover:text-bronze"
          }`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
