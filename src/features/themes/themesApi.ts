import { axiosClient } from "@/services/axiosClient";
import { apiRoutes } from "@/services/apiRoutes";
import type { Paginated, QueryParams, Theme } from "@/types";

export async function fetchThemesList(_params?: QueryParams, signal?: AbortSignal): Promise<Paginated<Theme>> {
  const { data } = await axiosClient.get<Paginated<Theme>>(apiRoutes.themes.list(), { signal });
  return data;
}

export async function fetchThemeBySlug(slug: string, signal?: AbortSignal): Promise<Theme> {
  const { data } = await axiosClient.get<Theme>(apiRoutes.themes.detail(slug), { signal });
  return data;
}
