import { axiosClient } from "@/services/axiosClient";
import { apiRoutes } from "@/services/apiRoutes";
import type { Award, Paginated, QueryParams } from "@/types";

export async function fetchAwardsList(_params?: QueryParams, signal?: AbortSignal): Promise<Paginated<Award>> {
  const { data } = await axiosClient.get<Paginated<Award>>(apiRoutes.awards.list(), { signal });
  return data;
}
