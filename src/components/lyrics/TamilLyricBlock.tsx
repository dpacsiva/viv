import type { LyricLine } from "@/types";

export function TamilLyricBlock({ line }: { line: LyricLine }) {
  return (
    <p lang="ta" className="font-serif text-2xl leading-relaxed text-ink sm:text-3xl">
      {line.tamil}
    </p>
  );
}
