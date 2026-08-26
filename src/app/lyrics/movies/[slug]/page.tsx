import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MovieSongsClient } from "@/components/lyrics/MovieSongsClient";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { findMasterMovie, movieName, songsForMovie, LYRICS_MASTER_MOVIES } from "@/data/lyricsCatalog";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonLd";
import type { LyricsLanguage } from "@/types/lyricsMaster";

export async function generateStaticParams() {
  return LYRICS_MASTER_MOVIES.map((movie) => ({ slug: movie.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const movie = findMasterMovie(slug);
  if (!movie) return { title: "Work Not Found" };
  return {
    title: `${movie.name} Songs — Lyrics Archive`,
    description: `Browse the songs recorded for ${movie.name} in Vivek's lyrics archive.`,
    alternates: { canonical: `/lyrics/movies/${movie.slug}` },
  };
}

function readParam(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function LyricsMoviePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string | string[] }>;
}) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const movie = findMasterMovie(slug);
  if (!movie) notFound();
  const initialLanguage: LyricsLanguage = readParam(query.lang) === "tamil" ? "tamil" : "english";
  const songs = songsForMovie(movie.id);

  return (
    <>
      <SEOJsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Lyrics", href: "/lyrics" },
            { label: "Movies", href: "/lyrics/movies" },
            { label: movieName(movie, initialLanguage) },
          ]),
          collectionPageSchema(movie.name, `Songs recorded for ${movie.name}.`, `/lyrics/movies/${movie.slug}`),
        ]}
      />
      <MovieSongsClient movie={movie} songs={songs} initialLanguage={initialLanguage} />
    </>
  );
}
