import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { fetchLyricsList } from "@/features/lyrics/lyricsApi";
import { fetchFilmsList } from "@/features/films/filmsApi";
import { fetchWordsList } from "@/features/words/wordsApi";
import { fetchJournalList } from "@/features/journal/journalApi";
import { fetchThemesList } from "@/features/themes/themesApi";
import { fetchCollaboratorsList } from "@/features/collaborations/collaborationsApi";

const STATIC_ROUTES = [
  "",
  "/lyrics",
  "/films",
  "/journey",
  "/themes",
  "/words",
  "/collaborations",
  "/writing-process",
  "/handwritten-archive",
  "/journal",
  "/awards",
  "/gallery",
  "/about",
  "/contact",
];

export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
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

  if (id === 3) {
    const { items } = await fetchWordsList({ pageSize: 100 });
    return items.map((word) => ({
      url: `${SITE_URL}/words/${word.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  }

  if (id === 4) {
    const { items } = await fetchJournalList({ pageSize: 100 });
    return items.map((article) => ({
      url: `${SITE_URL}/journal/${article.slug}`,
      lastModified: article.updatedAt || article.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  }

  const [themes, collaborators] = await Promise.all([fetchThemesList(), fetchCollaboratorsList()]);
  return [
    ...themes.items.map((theme) => ({
      url: `${SITE_URL}/themes/${theme.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...collaborators.items.map((collaborator) => ({
      url: `${SITE_URL}/collaborations/${collaborator.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
