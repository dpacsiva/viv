import { axiosClient } from "@/services/axiosClient";
import { apiRoutes } from "@/services/apiRoutes";
import type { Lyric, Paginated, QueryParams } from "@/types";

export async function fetchLyricsList(
  params: QueryParams,
  signal?: AbortSignal
): Promise<Paginated<Lyric>> {
  const { data } = await axiosClient.get<Paginated<Lyric>>(apiRoutes.lyrics.list(), { params, signal });
  return data;
}

export async function fetchLyricBySlug(slug: string, signal?: AbortSignal): Promise<Lyric> {
  const { data } = await axiosClient.get<Lyric>(apiRoutes.lyrics.detail(slug), { signal });
  return data;
}
