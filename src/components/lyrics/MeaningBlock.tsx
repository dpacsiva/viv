import type { LyricLine } from "@/types";

export function MeaningBlock({ line }: { line: LyricLine }) {
  if (!line.translation) return null;
  return <p className="font-sans text-base text-ink/75 sm:text-lg">{line.translation}</p>;
}
