import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { fetchFilmsList } from "@/features/films/filmsApi";
import { fetchThemesList } from "@/features/themes/themesApi";
import { LYRICS_MASTER_MOVIES } from "@/data/lyricsCatalog";

const STATIC_ROUTES = [
  "",
  "/lyrics",
  "/lyrics/movies",
  "/lyrics/thalapathy-vijay-songs",
  "/other-works",
  "/profile",
  "/themes",
  "/awards",
  "/gallery",
  "/quotes",
];

export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  if (id === 0) {
    return STATIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1 : 0.7,
    }));
  }

  if (id === 1) {
    return LYRICS_MASTER_MOVIES.map((movie) => ({
      url: `${SITE_URL}/lyrics/movies/${movie.slug}`,
      lastModified: `${movie.year}-12-31`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  }

  if (id === 2) {
    const { items } = await fetchFilmsList({ pageSize: 100 });
    return items.map((film) => ({
      url: `${SITE_URL}/films/${film.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  }

  const { items } = await fetchThemesList();
  return items.map((theme) => ({
    url: `${SITE_URL}/themes/${theme.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
}
