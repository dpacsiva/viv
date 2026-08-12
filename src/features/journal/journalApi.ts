import { axiosClient } from "@/services/axiosClient";
import { apiRoutes } from "@/services/apiRoutes";
import type { JournalArticle, Paginated, QueryParams } from "@/types";

export async function fetchJournalList(
  params: QueryParams,
  signal?: AbortSignal
): Promise<Paginated<JournalArticle>> {
  const { data } = await axiosClient.get<Paginated<JournalArticle>>(apiRoutes.journal.list(), { params, signal });
  return data;
}

export async function fetchJournalBySlug(slug: string, signal?: AbortSignal): Promise<JournalArticle> {
  const { data } = await axiosClient.get<JournalArticle>(apiRoutes.journal.detail(slug), { signal });
  return data;
}
