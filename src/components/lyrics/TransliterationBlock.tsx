import type { LyricLine } from "@/types";

export function TransliterationBlock({ line }: { line: LyricLine }) {
  if (!line.transliteration) return null;
  return <p className="font-sans text-base italic text-slate sm:text-lg">{line.transliteration}</p>;
}
