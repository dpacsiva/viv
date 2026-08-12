import { FeaturedLyric } from "@/components/lyrics/FeaturedLyric";
import { FadeInSection } from "@/components/motion/FadeInSection";
import type { Lyric } from "@/types";

export function FeaturedLyricSection({ lyric }: { lyric: Lyric }) {
  return (
    <FadeInSection as="section" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <FeaturedLyric lyric={lyric} />
    </FadeInSection>
  );
}
