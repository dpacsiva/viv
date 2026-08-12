import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Lyric } from "@/types";

export function FeaturedLyric({ lyric }: { lyric: Lyric }) {
  return (
    <div className="rounded-2xl border border-border bg-paper/60 p-8 sm:p-12">
      <SectionLabel>Featured Lyric</SectionLabel>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <blockquote lang="ta" className="max-w-2xl font-serif text-3xl leading-snug text-ink sm:text-4xl">
          <span aria-hidden="true" className="mr-1 text-bronze">
            “
          </span>
          {lyric.tamilLyrics[0]?.tamil}
          {lyric.tamilLyrics[1] && (
            <>
              <br />
              {lyric.tamilLyrics[1].tamil}
            </>
          )}
          <span aria-hidden="true">…</span>
          <footer className="mt-4 font-sans text-base not-italic text-slate">— {lyric.film.name}</footer>
        </blockquote>
        <Link
          href={`/lyrics/${lyric.slug}`}
          className="shrink-0 font-sans text-sm font-semibold text-bronze underline-offset-4 hover:underline"
        >
          Read the Lyric →
        </Link>
      </div>
    </div>
  );
}
