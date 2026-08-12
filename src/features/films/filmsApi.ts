import { axiosClient } from "@/services/axiosClient";
import { apiRoutes } from "@/services/apiRoutes";
import type { Film, Paginated, QueryParams } from "@/types";

export async function fetchFilmsList(params: QueryParams, signal?: AbortSignal): Promise<Paginated<Film>> {
  const { data } = await axiosClient.get<Paginated<Film>>(apiRoutes.films.list(), { params, signal });
  return data;
}

export async function fetchFilmBySlug(slug: string, signal?: AbortSignal): Promise<Film> {
  const { data } = await axiosClient.get<Film>(apiRoutes.films.detail(slug), { signal });
  return data;
}
