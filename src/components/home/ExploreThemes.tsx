import { ThemeCard } from "@/components/cards/ThemeCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeInSection } from "@/components/motion/FadeInSection";
import type { Theme } from "@/types";

export function ExploreThemes({ themes }: { themes: Theme[] }) {
  return (
    <FadeInSection as="section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <SectionLabel>Explore Lyrics</SectionLabel>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {themes.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} />
        ))}
      </div>
    </FadeInSection>
  );
}
