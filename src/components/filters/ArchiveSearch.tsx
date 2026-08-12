"use client";

import { useState } from "react";

export function ArchiveSearch({
  value,
  onChange,
  placeholder = "Search in Tamil, English or Tanglish…",
  suggestions = [],
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  suggestions?: string[];
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center gap-3 rounded-full border border-border bg-white px-5 py-3 focus-within:border-bronze">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0 text-slate">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder={placeholder}
          aria-label="Search lyrics"
          lang="und"
          className="w-full bg-transparent font-sans text-sm text-ink placeholder:text-slate/70 focus:outline-none sm:text-base"
        />
      </div>
      {focused && value && suggestions.length > 0 && (
        <ul className="absolute z-10 mt-2 w-full rounded-lg border border-border bg-white p-2 shadow-lg">
          {suggestions.map((s) => (
            <li key={s}>
              <button
                type="button"
                onMouseDown={() => onChange(s)}
                className="block w-full rounded-md px-3 py-2 text-left font-sans text-sm text-ink hover:bg-paper"
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
