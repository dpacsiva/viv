import type { Metadata } from "next";
import { fetchLyricsList } from "@/features/lyrics/lyricsApi";
import { fetchThemesList } from "@/features/themes/themesApi";
import { fetchFilmsList } from "@/features/films/filmsApi";
import { LyricsArchiveClient, type LyricsFilterOptions } from "@/components/lyrics/LyricsArchiveClient";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "The Lyrics — Every Song Written by Vivek",
  description:
    "Browse every Tamil lyric written by Vivek. Search by song, film, composer, singer, actor, director, theme or year, with transliteration and English meaning.",
  alternates: { canonical: "/lyrics" },
  keywords: ["Vivek lyrics", "Tamil song lyrics", "Vivek lyricist works", "Tamil lyrics with meaning"],
};

function unique(values: (string | undefined)[]): string[] {
  return Array.from(new Set(values.filter((v): v is string => Boolean(v)))).sort();
}

export default async function LyricsArchivePage() {
  const [initialData, allLyrics, themes, films] = await Promise.all([
    fetchLyricsList({ sort: "latest", page: 1, pageSize: 12 }),
    fetchLyricsList({ pageSize: 100 }),
    fetchThemesList(),
    fetchFilmsList({ pageSize: 100 }),
  ]);

  const filterOptions: LyricsFilterOptions = {
    themes: themes.items.map((t) => ({ label: t.name, value: t.slug })),
    films: films.items.map((f) => ({ label: `${f.name} (${f.year})`, value: f.slug })),
    years: unique(allLyrics.items.map((l) => String(l.film.year))).map((y) => ({ label: y, value: y })),
    composers: unique(allLyrics.items.flatMap((l) => l.composer)).map((c) => ({ label: c, value: c })),
    singers: unique(allLyrics.items.flatMap((l) => l.singers)).map((s) => ({ label: s, value: s })),
    actors: unique(allLyrics.items.flatMap((l) => l.actors || [])).map((a) => ({ label: a, value: a })),
    directors: unique(allLyrics.items.map((l) => l.director)).map((d) => ({ label: d, value: d })),
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Lyrics" }]),
          collectionPageSchema(
            "The Lyrics",
            "Every Tamil lyric written by lyricist Vivek.",
            "/lyrics"
          ),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Lyrics" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        The Lyrics
      </EditorialHeading>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">
        Every song lyric Vivek has written, gathered in one place — searchable in Tamil, English or Tanglish, and
        filterable by film, composer, singer, actor, director, theme, year and award. Read the words in their
        original Tamil, alongside transliteration and English meaning.
      </p>

      <div className="mt-8">
        <LyricsArchiveClient initialData={initialData} filterOptions={filterOptions} />
      </div>
    </div>
  );
}
