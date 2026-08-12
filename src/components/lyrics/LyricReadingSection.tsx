"use client";

import { useAppSelector } from "@/hooks/redux";
import type { LyricLine } from "@/types";
import { TamilLyricBlock } from "./TamilLyricBlock";
import { TransliterationBlock } from "./TransliterationBlock";
import { MeaningBlock } from "./MeaningBlock";
import { AnnotationDrawer } from "./AnnotationDrawer";

export function LyricReadingSection({ lines }: { lines: LyricLine[] }) {
  const mode = useAppSelector((state) => state.ui.lyricReadingMode);

  return (
    <div className="flex flex-col gap-8 sm:gap-10" lang="ta">
      {lines.map((line) => (
        <div key={line.id} className="border-l-2 border-border pl-5 sm:pl-6">
          <TamilLyricBlock line={line} />
          {(mode === "transliteration" || mode === "annotated") && <TransliterationBlock line={line} />}
          {(mode === "meaning" || mode === "annotated") && <MeaningBlock line={line} />}
          {mode === "annotated" && <AnnotationDrawer line={line} />}
        </div>
      ))}
    </div>
  );
}
