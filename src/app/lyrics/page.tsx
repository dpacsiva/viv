import type { Metadata } from "next";
import { LyricsHomeClient } from "@/components/lyrics/LyricsHomeClient";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { LYRICS_MASTER_MOVIES, LYRICS_MASTER_SONGS } from "@/data/lyricsCatalog";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonLd";
import type { LyricsLanguage } from "@/types/lyricsMaster";

export const metadata: Metadata = {
  title: "Lyrics Archive — Songs Written by Vivek",
  description:
    "Browse Vivek's bilingual master song archive by movie, song, year, composer and special release.",
  alternates: { canonical: "/lyrics" },
  keywords: ["Vivek lyrics", "Tamil song lyrics", "Vivek lyricist songs", "Tamil film songs"],
};

function readParam(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function LyricsArchivePage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string | string[]; lang?: string | string[] }>;
}) {
  const params = await searchParams;
  const initialLanguage: LyricsLanguage = readParam(params.lang) === "tamil" ? "tamil" : "english";
  const initialView = readParam(params.view) === "songs" ? "songs" : "movies";

  return (
    <>
      <SEOJsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Lyrics" }]),
          collectionPageSchema(
            "The Lyrics Archive",
            "A bilingual master archive of songs and film work written by lyricist Vivek.",
            "/lyrics"
          ),
        ]}
      />
      <LyricsHomeClient
        movies={[...LYRICS_MASTER_MOVIES]}
        songs={[...LYRICS_MASTER_SONGS]}
        initialLanguage={initialLanguage}
        initialView={initialView}
      />
    </>
  );
}
