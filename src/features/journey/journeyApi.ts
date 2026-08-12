import { axiosClient } from "@/services/axiosClient";
import { apiRoutes } from "@/services/apiRoutes";
import type { JourneyMilestone, Paginated, QueryParams } from "@/types";

export async function fetchJourneyList(
  _params?: QueryParams,
  signal?: AbortSignal
): Promise<Paginated<JourneyMilestone>> {
  const { data } = await axiosClient.get<Paginated<JourneyMilestone>>(apiRoutes.journey.list(), { signal });
  return data;
}
