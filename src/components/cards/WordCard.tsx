import Link from "next/link";
import type { TamilWord } from "@/types";

export function WordCard({ word }: { word: TamilWord }) {
  return (
    <Link
      href={`/words/${word.slug}`}
      className="group flex flex-col gap-2 rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
    >
      <span lang="ta" className="font-serif text-3xl text-ink transition-colors group-hover:text-bronze">
        {word.tamil}
      </span>
      <span className="font-sans text-sm text-slate">{word.transliteration}</span>
      <span className="font-sans text-sm text-ink/80">{word.meaning}</span>
      <span className="mt-2 font-sans text-xs text-bronze">
        {word.occurrences.length} {word.occurrences.length === 1 ? "song" : "songs"}
      </span>
    </Link>
  );
}
