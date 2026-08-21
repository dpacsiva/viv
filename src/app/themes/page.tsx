import type { Metadata } from "next";
import { fetchThemesList } from "@/features/themes/themesApi";
import { THEME_SLUGS } from "@/lib/constants";
import { ThemeCard } from "@/components/cards/ThemeCard";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Themes — Browse Vivek's Lyrics by Theme",
  description:
    "Explore lyricist Vivek's songs grouped by theme, including Thalapathy Vijay songs, love, motivation, celebration and more.",
  alternates: { canonical: "/themes" },
};

export default async function ThemesPage() {
  const { items } = await fetchThemesList();
  const orderedThemes = THEME_SLUGS.map((slug) => items.find((theme) => theme.slug === slug)).filter(
    (theme): theme is NonNullable<typeof theme> => Boolean(theme)
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Themes" }]),
          collectionPageSchema("Themes", "Browse lyricist Vivek's songs grouped by theme.", "/themes"),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Themes" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        Explore by Theme
      </EditorialHeading>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">
        Every song carries a feeling. Browse Vivek&rsquo;s work through the recurring themes in his writing.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {orderedThemes.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} />
        ))}
      </div>
    </div>
  );
}
