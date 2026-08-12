import { axiosClient } from "@/services/axiosClient";
import { apiRoutes } from "@/services/apiRoutes";
import type { Paginated, QueryParams, TamilWord } from "@/types";

export async function fetchWordsList(params: QueryParams, signal?: AbortSignal): Promise<Paginated<TamilWord>> {
  const { data } = await axiosClient.get<Paginated<TamilWord>>(apiRoutes.words.list(), { params, signal });
  return data;
}

export async function fetchWordBySlug(slug: string, signal?: AbortSignal): Promise<TamilWord> {
  const { data } = await axiosClient.get<TamilWord>(apiRoutes.words.detail(slug), { signal });
  return data;
}
