import type { Metadata } from "next";
import { fetchThemesList } from "@/features/themes/themesApi";
import { THEME_SLUGS, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { Hero } from "@/components/home/Hero";
import { ArchiveStats } from "@/components/home/ArchiveStats";
import { ExploreThemes } from "@/components/home/ExploreThemes";
import { QuoteCarousel } from "@/components/home/QuoteCarousel";
import { mockQuotes } from "@/data";

export const metadata: Metadata = {
  title: `${SITE_NAME}`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const themesResponse = await fetchThemesList();

  const orderedThemes = THEME_SLUGS.map((slug) => themesResponse.items.find((t) => t.slug === slug)).filter(
    (t): t is NonNullable<typeof t> => Boolean(t)
  );

  return (
    <>
      <Hero />
      <ArchiveStats />
      <ExploreThemes themes={orderedThemes} />
      <QuoteCarousel quotes={mockQuotes} />
    </>
  );
}
