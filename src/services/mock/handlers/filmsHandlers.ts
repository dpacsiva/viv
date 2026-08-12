import type MockAdapter from "axios-mock-adapter";
import { mockFilms } from "@/data";
import type { Film } from "@/types";
import { fuzzyIncludes, paginate, sortByOption } from "../queryUtils";

export interface FilmsQueryParams {
  q?: string;
  year?: string;
  actor?: string;
  director?: string;
  composer?: string;
  careerPeriod?: string;
  sort?: "latest" | "oldest" | "alphabetical" | "popular";
  page?: number;
  pageSize?: number;
}

export function filterFilms(params: FilmsQueryParams): Film[] {
  let result = [...mockFilms];
  if (params.q) {
    result = result.filter((f) => fuzzyIncludes(f.name, params.q!) || fuzzyIncludes(f.tamilName, params.q!));
  }
  if (params.year) result = result.filter((f) => String(f.year) === params.year);
  if (params.actor) result = result.filter((f) => f.actors.includes(params.actor!));
  if (params.director) result = result.filter((f) => f.director === params.director);
  if (params.composer) result = result.filter((f) => f.composer.includes(params.composer!));
  if (params.careerPeriod) result = result.filter((f) => f.careerPeriod === params.careerPeriod);

  result = sortByOption(result, params.sort, { date: "year", title: "name", popularity: "year" });
  return result;
}

export function registerFilmsHandlers(mock: MockAdapter) {
  mock.onGet(/\/films$/).reply((config) => {
    const params: FilmsQueryParams = config.params || {};
    const filtered = filterFilms(params);
    return [200, paginate(filtered, Number(params.page) || 1, Number(params.pageSize) || 12)];
  });

  mock.onGet(/\/films\/[^/]+$/).reply((config) => {
    const slug = config.url?.split("/").pop();
    const film = mockFilms.find((f) => f.slug === slug);
    if (!film) return [404, { message: `Film '${slug}' was not found in the archive.` }];
    return [200, film];
  });
}
