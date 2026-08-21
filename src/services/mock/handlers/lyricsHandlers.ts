import type MockAdapter from "axios-mock-adapter";
import { mockLyrics, mockThemes } from "@/data";
import type { Lyric } from "@/types";
import { fuzzyIncludes, paginate, sortByOption } from "../queryUtils";

export interface LyricsQueryParams {
  q?: string;
  theme?: string;
  film?: string;
  year?: string;
  composer?: string;
  singer?: string;
  actor?: string;
  director?: string;
  award?: string;
  sort?: "latest" | "oldest" | "alphabetical" | "popular";
  page?: number;
  pageSize?: number;
}

export function filterLyrics(params: LyricsQueryParams): Lyric[] {
  let result = [...mockLyrics];

  if (params.q) {
    const q = params.q;
    result = result.filter(
      (lyric) =>
        fuzzyIncludes(lyric.title, q) ||
        fuzzyIncludes(lyric.tamilTitle, q) ||
        fuzzyIncludes(lyric.film.name, q) ||
        fuzzyIncludes(lyric.excerpt, q) ||
        lyric.tamilLyrics.some(
          (line) => fuzzyIncludes(line.tamil, q) || fuzzyIncludes(line.transliteration, q) || fuzzyIncludes(line.translation, q)
        )
    );
  }
  if (params.theme) {
    const theme = mockThemes.find((item) => item.slug === params.theme);
    result = result.filter((lyric) => theme?.lyricIds.includes(lyric.id) || lyric.theme.includes(params.theme!));
  }
  if (params.film) result = result.filter((l) => l.film.slug === params.film);
  if (params.year) result = result.filter((l) => String(l.film.year) === params.year);
  if (params.composer) result = result.filter((l) => l.composer.some((c) => c === params.composer));
  if (params.singer) result = result.filter((l) => l.singers.some((s) => s === params.singer));
  if (params.actor) result = result.filter((l) => (l.actors || []).some((a) => a === params.actor));
  if (params.director) result = result.filter((l) => l.director === params.director);
  if (params.award) result = result.filter((l) => (l.awards || []).length > 0);

  result = sortByOption(result, params.sort, { date: "publishedAt", title: "title", popularity: "views" });

  return result;
}

export function registerLyricsHandlers(mock: MockAdapter) {
  mock.onGet(/\/lyrics$/).reply((config) => {
    const params: LyricsQueryParams = config.params || {};
    const filtered = filterLyrics(params);
    return [200, paginate(filtered, Number(params.page) || 1, Number(params.pageSize) || 12)];
  });

  mock.onGet(/\/lyrics\/[^/]+$/).reply((config) => {
    const slug = config.url?.split("/").pop();
    const lyric = mockLyrics.find((l) => l.slug === slug);
    if (!lyric) return [404, { message: `Lyric '${slug}' was not found in the archive.` }];
    return [200, lyric];
  });
}
