"use client";

import { useState } from "react";

export function ShareButton({ title, text, url, className = "" }: { title: string; text?: string; url: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const shareData = { title, text, url };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // user cancelled or share failed — fall through to clipboard copy
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-sans text-sm text-ink transition-colors hover:border-bronze hover:text-bronze ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="12.5" cy="3.5" r="2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="3.5" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="12.5" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5.3 7 L10.7 4 M5.3 9 L10.7 12" stroke="currentColor" strokeWidth="1.3" />
      </svg>
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
