import type MockAdapter from "axios-mock-adapter";
import { mockJournal } from "@/data";
import { fuzzyIncludes, paginate, sortByOption } from "../queryUtils";

export interface JournalQueryParams {
  q?: string;
  category?: string;
  sort?: "latest" | "oldest" | "alphabetical" | "popular";
  page?: number;
  pageSize?: number;
}

export function registerJournalHandlers(mock: MockAdapter) {
  mock.onGet(/\/journal$/).reply((config) => {
    const params: JournalQueryParams = config.params || {};
    let result = [...mockJournal];
    if (params.q) {
      result = result.filter((a) => fuzzyIncludes(a.title, params.q!) || fuzzyIncludes(a.excerpt, params.q!));
    }
    if (params.category) result = result.filter((a) => a.category === params.category);
    result = sortByOption(result, params.sort, { date: "publishedAt", title: "title" });
    return [200, paginate(result, Number(params.page) || 1, Number(params.pageSize) || 12)];
  });

  mock.onGet(/\/journal\/[^/]+$/).reply((config) => {
    const slug = config.url?.split("/").pop();
    const article = mockJournal.find((a) => a.slug === slug);
    if (!article) return [404, { message: `Journal article '${slug}' was not found in the archive.` }];
    return [200, article];
  });
}
