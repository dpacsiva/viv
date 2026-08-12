import type { Metadata } from "next";
import { fetchHomeArchiveData } from "@/features/archive/archiveApi";
import { fetchThemesList } from "@/features/themes/themesApi";
import { THEME_SLUGS, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { Hero } from "@/components/home/Hero";
import { ArchiveStats } from "@/components/home/ArchiveStats";
import { ExploreThemes } from "@/components/home/ExploreThemes";
import { AboutVivek } from "@/components/home/AboutVivek";
import { FeaturedLyricSection } from "@/components/home/FeaturedLyricSection";
import { LatestFromArchive } from "@/components/home/LatestFromArchive";
import { ClosingQuote } from "@/components/home/ClosingQuote";

export const metadata: Metadata = {
  title: `${SITE_NAME}`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [home, themesResponse] = await Promise.all([fetchHomeArchiveData(), fetchThemesList()]);

  const orderedThemes = THEME_SLUGS.map((slug) => themesResponse.items.find((t) => t.slug === slug)).filter(
    (t): t is NonNullable<typeof t> => Boolean(t)
  );

  return (
    <>
      <Hero />
      <ArchiveStats stats={home.stats} />
      <ExploreThemes themes={orderedThemes} />
      <AboutVivek />
      <FeaturedLyricSection lyric={home.featuredLyric} />
      <LatestFromArchive items={home.latestItems} />
      <ClosingQuote quote={home.closingQuote.quote} />
    </>
  );
}
