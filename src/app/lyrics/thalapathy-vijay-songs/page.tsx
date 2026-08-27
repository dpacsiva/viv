import type { Metadata } from "next";
import { MovieArchiveClient } from "@/components/lyrics/MovieArchiveClient";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { LYRICS_MASTER_MOVIES } from "@/data/lyricsCatalog";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonLd";
import type { LyricsLanguage } from "@/types/lyricsMaster";

const THALAPATHY_MOVIE_SLUGS = [
  "2017-mersal",
  "2018-sarkar",
  "2019-bigil",
  "2022-beast",
  "2022-varisu",
  "2024-the-greatest-of-all-time",
  "2026-jana-nayagan",
] as const;

const THALAPATHY_MOVIES = THALAPATHY_MOVIE_SLUGS.flatMap((slug) => {
  const movie = LYRICS_MASTER_MOVIES.find((item) => item.slug === slug);
  return movie ? [movie] : [];
});

export const metadata: Metadata = {
  title: "Thalapathy Vijay Songs — Lyrics Archive",
  description: "Browse Vivek's songs written for Thalapathy Vijay's films, by movie and year.",
  alternates: { canonical: "/lyrics/thalapathy-vijay-songs" },
};

function readParam(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ThalapathyVijaySongsPage({
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
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Lyrics", href: "/lyrics" },
            { label: "Thalapathy Vijay Songs" },
          ]),
          collectionPageSchema(
            "Thalapathy Vijay Songs",
            "Vivek's songs written for Thalapathy Vijay's films, arranged by movie and year.",
            "/lyrics/thalapathy-vijay-songs"
          ),
        ]}
      />
      <MovieArchiveClient
        movies={[...THALAPATHY_MOVIES]}
        initialLanguage={initialLanguage}
        eyebrow="Thalapathy Vijay · Film songs"
        title="Thalapathy Vijay songs"
        description="Explore Vivek's songs for Thalapathy Vijay, arranged film by film so each movie leads naturally to its song list."
      />
    </>
  );
}
