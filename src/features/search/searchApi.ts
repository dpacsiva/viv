import { axiosClient } from "@/services/axiosClient";
import { apiRoutes } from "@/services/apiRoutes";
import type { SearchResponse } from "@/types";

export async function fetchSearchResults(query: string, signal?: AbortSignal): Promise<SearchResponse> {
  const { data } = await axiosClient.get<SearchResponse>(apiRoutes.search.query(), { params: { q: query }, signal });
  return data;
}
