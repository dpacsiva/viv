import { axiosClient } from "@/services/axiosClient";
import { apiRoutes } from "@/services/apiRoutes";
import type { HomeArchiveData } from "@/types";

export async function fetchHomeArchiveData(signal?: AbortSignal): Promise<HomeArchiveData> {
  const { data } = await axiosClient.get<HomeArchiveData>(apiRoutes.archive.home(), { signal });
  return data;
}
