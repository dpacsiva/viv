import Link from "next/link";
import type { Lyric } from "@/types";

export function LyricCard({ lyric, index = 0 }: { lyric: Lyric; index?: number }) {
  return (
    <article className="group flex flex-col gap-3 border-b border-border py-6 first:pt-0 sm:flex-row sm:gap-6">
      <div className="font-serif text-2xl text-bronze/50 sm:w-10 sm:shrink-0 sm:text-right">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif text-xl text-ink sm:text-2xl">
            <Link href={`/lyrics/${lyric.slug}`} className="transition-colors group-hover:text-bronze">
              {lyric.title}
            </Link>
          </h3>
          {lyric.tamilTitle && (
            <span lang="ta" className="font-serif text-lg text-slate">
              {lyric.tamilTitle}
            </span>
          )}
        </div>
        <p className="mt-1 font-sans text-sm text-slate">
          {lyric.film.name} ({lyric.film.year}) · {lyric.composer.join(", ")}
          {lyric.singers.length > 0 && <> · {lyric.singers.join(", ")}</>}
        </p>
        <p lang="ta" className="mt-3 line-clamp-2 font-serif text-base text-ink/80">
          {lyric.excerpt}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {lyric.theme.slice(0, 3).map((theme) => (
            <Link
              key={theme}
              href={`/themes/${theme}`}
              className="rounded-full border border-border px-3 py-1 font-sans text-xs text-slate transition-colors hover:border-bronze hover:text-bronze"
            >
              {theme.replace(/-/g, " ")}
            </Link>
          ))}
          <Link
            href={`/lyrics/${lyric.slug}`}
            className="ml-auto font-sans text-sm font-medium text-bronze underline-offset-4 hover:underline"
          >
            Read Lyrics →
          </Link>
        </div>
      </div>
    </article>
  );
}
