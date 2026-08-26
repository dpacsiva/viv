"use client";

import type { LyricsLanguage } from "@/types/lyricsMaster";

export function LyricsLanguageToggle({
  value,
  onChange,
  compact = false,
}: {
  value: LyricsLanguage;
  onChange: (value: LyricsLanguage) => void;
  compact?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-bronze/25 bg-white/70 p-1 ${compact ? "text-xs" : "text-sm"}`}
      role="group"
      aria-label="Choose archive language"
    >
      {(["english", "tamil"] as const).map((language) => {
        const selected = value === language;
        return (
          <button
            key={language}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(language)}
            className={`rounded-full px-3 py-1.5 font-sans font-medium transition-colors ${
              selected ? "bg-bronze text-white shadow-sm" : "text-slate hover:text-bronze"
            }`}
          >
            {language === "english" ? "English" : "தமிழ்"}
          </button>
        );
      })}
    </div>
  );
}
