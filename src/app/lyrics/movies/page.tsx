import type { Metadata } from "next";
import { MovieArchiveClient } from "@/components/lyrics/MovieArchiveClient";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { LYRICS_MASTER_MOVIES } from "@/data/lyricsCatalog";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonLd";
import type { LyricsLanguage } from "@/types/lyricsMaster";

export const metadata: Metadata = {
  title: "Movie Index — Lyrics Archive",
  description: "Browse Vivek's film songs by movie, year and composer.",
  alternates: { canonical: "/lyrics/movies" },
};

function readParam(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function LyricsMoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] }>;
}) {
  const params = await searchParams;
  const initialLanguage: LyricsLanguage = readParam(params.lang) === "tamil" ? "tamil" : "english";

  return (
    <>
      <SEOJsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Lyrics", href: "/lyrics" }, { label: "Movies" }]),
          collectionPageSchema("Movie Index", "Every movie and special collection in the lyrics archive.", "/lyrics/movies"),
        ]}
      />
      <MovieArchiveClient movies={[...LYRICS_MASTER_MOVIES]} initialLanguage={initialLanguage} />
    </>
  );
}
