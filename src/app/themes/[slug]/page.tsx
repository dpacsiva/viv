import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchThemeBySlug, fetchThemesList } from "@/features/themes/themesApi";
import { fetchLyricsList } from "@/features/lyrics/lyricsApi";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { EditorialArt } from "@/components/media/EditorialArt";
import { LyricCard } from "@/components/cards/LyricCard";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonLd";

export async function generateStaticParams() {
  const { items } = await fetchThemesList();
  return items.map((theme) => ({ slug: theme.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const theme = await fetchThemeBySlug(slug);
    return {
      title: theme.seo.title,
      description: theme.seo.description,
      keywords: theme.seo.keywords,
      alternates: { canonical: `/themes/${theme.slug}` },
    };
  } catch {
    return { title: "Theme Not Found" };
  }
}

export default async function ThemeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let theme;
  try {
    theme = await fetchThemeBySlug(slug);
  } catch {
    notFound();
  }

  const allLyrics = await fetchLyricsList({ pageSize: 100 });
  const themeLyrics = allLyrics.items.filter((l) => l.theme.includes(theme.slug));

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Themes", href: "/themes" },
            { label: theme.name },
          ]),
          collectionPageSchema(theme.name, theme.description, `/themes/${theme.slug}`),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Themes", href: "/themes" }, { label: theme.name }]} />

      <div className="mt-6 grid grid-cols-1 items-center gap-8 sm:grid-cols-[160px_1fr]">
        <EditorialArt variant={theme.watercolorVariant} alt={`${theme.name} illustration`} className="aspect-square w-full max-w-[160px]" rounded="lg" />
        <div>
          <EditorialHeading as="h1" size="lg">
            {theme.name}
          </EditorialHeading>
          {theme.tamilName && (
            <p lang="ta" className="mt-1 font-serif text-xl text-slate">
              {theme.tamilName}
            </p>
          )}
          <p className="mt-3 max-w-xl font-sans text-base leading-relaxed text-slate">{theme.description}</p>
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-8">
        {themeLyrics.length > 0 ? (
          <>
            <p className="font-sans text-sm text-slate">
              {themeLyrics.length} {themeLyrics.length === 1 ? "lyric" : "lyrics"}
            </p>
            <div className="mt-4">
              {themeLyrics.map((lyric, i) => (
                <LyricCard key={lyric.id} lyric={lyric} index={i} />
              ))}
            </div>
          </>
        ) : (
          <p className="max-w-2xl font-sans text-base leading-relaxed text-slate">
            This collection is being prepared for the archive. The first verified songs will appear here soon.
          </p>
        )}
      </div>
    </div>
  );
}
