import type MockAdapter from "axios-mock-adapter";
import { mockLyrics, mockFilms, mockWords, mockThemes, mockCollaborators, mockJournal } from "@/data";
import type { SearchResponse, SearchResultGroup } from "@/types";
import { fuzzyIncludes } from "../queryUtils";

const ALL_SEARCHABLE_TERMS = [
  ...mockLyrics.flatMap((l) => [l.title, l.tamilTitle, l.film.name]),
  ...mockFilms.map((f) => f.name),
  ...mockWords.flatMap((w) => [w.tamil, w.transliteration]),
  ...mockThemes.map((t) => t.name),
  ...mockCollaborators.map((c) => c.name),
].filter((v): v is string => Boolean(v));

export function buildSearchResponse(query: string): SearchResponse {
  const q = query.trim();
  if (!q) return { query, groups: [], total: 0, suggestions: [] };

  const lyricMatches = mockLyrics.filter(
    (l) =>
      fuzzyIncludes(l.title, q) ||
      fuzzyIncludes(l.tamilTitle, q) ||
      fuzzyIncludes(l.excerpt, q) ||
      fuzzyIncludes(l.film.name, q) ||
      l.composer.some((c) => fuzzyIncludes(c, q)) ||
      l.singers.some((s) => fuzzyIncludes(s, q))
  );
  const filmMatches = mockFilms.filter((f) => fuzzyIncludes(f.name, q) || fuzzyIncludes(f.director, q));
  const wordMatches = mockWords.filter((w) => fuzzyIncludes(w.tamil, q) || fuzzyIncludes(w.transliteration, q) || fuzzyIncludes(w.meaning, q));
  const themeMatches = mockThemes.filter((t) => fuzzyIncludes(t.name, q) || fuzzyIncludes(t.tamilName, q));
  const collaboratorMatches = mockCollaborators.filter((c) => fuzzyIncludes(c.name, q));
  const journalMatches = mockJournal.filter((a) => fuzzyIncludes(a.title, q) || fuzzyIncludes(a.excerpt, q));

  const groups: SearchResultGroup[] = [
    {
      kind: "lyric" as const,
      label: "Lyrics",
      items: lyricMatches.map((l) => ({
        kind: "lyric" as const,
        id: l.id,
        slug: l.slug,
        title: l.title,
        subtitle: `${l.film.name} (${l.film.year})`,
        excerpt: l.excerpt,
        href: `/lyrics/${l.slug}`,
      })),
    },
    {
      kind: "film" as const,
      label: "Films",
      items: filmMatches.map((f) => ({
        kind: "film" as const,
        id: f.id,
        slug: f.slug,
        title: f.name,
        subtitle: `${f.year} · dir. ${f.director}`,
        href: `/films/${f.slug}`,
      })),
    },
    {
      kind: "word" as const,
      label: "Words",
      items: wordMatches.map((w) => ({
        kind: "word" as const,
        id: w.id,
        slug: w.slug,
        title: `${w.tamil} (${w.transliteration})`,
        subtitle: w.meaning,
        href: `/words/${w.slug}`,
      })),
    },
    {
      kind: "theme" as const,
      label: "Themes",
      items: themeMatches.map((t) => ({
        kind: "theme" as const,
        id: t.id,
        slug: t.slug,
        title: t.name,
        subtitle: t.tamilName,
        href: `/themes/${t.slug}`,
      })),
    },
    {
      kind: "collaborator" as const,
      label: "Collaborators",
      items: collaboratorMatches.map((c) => ({
        kind: "collaborator" as const,
        id: c.id,
        slug: c.slug,
        title: c.name,
        subtitle: c.role,
        href: `/collaborations/${c.slug}`,
      })),
    },
    {
      kind: "journal" as const,
      label: "Journal",
      items: journalMatches.map((a) => ({
        kind: "journal" as const,
        id: a.id,
        slug: a.slug,
        title: a.title,
        subtitle: a.category,
        excerpt: a.excerpt,
        href: `/journal/${a.slug}`,
      })),
    },
  ].filter((group) => group.items.length > 0);

  const total = groups.reduce((sum, g) => sum + g.items.length, 0);

  const suggestions =
    total > 0
      ? []
      : ALL_SEARCHABLE_TERMS.filter((term) => {
          const distanceOk = term.toLowerCase().startsWith(q.toLowerCase()[0] || "");
          return distanceOk;
        }).slice(0, 5);

  return { query, groups, total, suggestions };
}

export function registerSearchHandlers(mock: MockAdapter) {
  mock.onGet(/\/search$/).reply((config) => {
    const q = config.params?.q || "";
    return [200, buildSearchResponse(q)];
  });
}
