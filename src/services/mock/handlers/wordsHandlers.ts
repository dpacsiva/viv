import type MockAdapter from "axios-mock-adapter";
import { mockWords } from "@/data";
import { fuzzyIncludes, paginate } from "../queryUtils";

export interface WordsQueryParams {
  q?: string;
  theme?: string;
  page?: number;
  pageSize?: number;
}

export function registerWordsHandlers(mock: MockAdapter) {
  mock.onGet(/\/words$/).reply((config) => {
    const params: WordsQueryParams = config.params || {};
    let result = [...mockWords];
    if (params.q) {
      result = result.filter(
        (w) => fuzzyIncludes(w.tamil, params.q!) || fuzzyIncludes(w.transliteration, params.q!) || fuzzyIncludes(w.meaning, params.q!)
      );
    }
    if (params.theme) result = result.filter((w) => w.relatedThemes.includes(params.theme!));
    return [200, paginate(result, Number(params.page) || 1, Number(params.pageSize) || 30)];
  });

  mock.onGet(/\/words\/[^/]+$/).reply((config) => {
    const slug = config.url?.split("/").pop();
    const word = mockWords.find((w) => w.slug === slug);
    if (!word) return [404, { message: `Word '${slug}' was not found in the archive.` }];
    return [200, word];
  });
}
