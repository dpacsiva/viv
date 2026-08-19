import type { Metadata } from "next";
import { fetchThemesList } from "@/features/themes/themesApi";
import { THEME_SLUGS, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { Hero } from "@/components/home/Hero";
import { ExploreThemes } from "@/components/home/ExploreThemes";

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
      <ExploreThemes themes={orderedThemes} />
    </>
  );
}
