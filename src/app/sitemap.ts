import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { fetchLyricsList } from "@/features/lyrics/lyricsApi";
import { fetchFilmsList } from "@/features/films/filmsApi";
import { fetchThemesList } from "@/features/themes/themesApi";

const STATIC_ROUTES = [
  "",
  "/lyrics",
  "/films",
  "/journey",
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
    const { items } = await fetchLyricsList({ pageSize: 100 });
    return items.map((lyric) => ({
      url: `${SITE_URL}/lyrics/${lyric.slug}`,
      lastModified: lyric.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));
  }

  if (id === 2) {
    const { items } = await fetchFilmsList({ pageSize: 100 });
    return items.map((film) => ({
      url: `${SITE_URL}/films/${film.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
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
