import { axiosClient } from "@/services/axiosClient";
import { apiRoutes } from "@/services/apiRoutes";
import type { Collaborator, Paginated, QueryParams } from "@/types";

export async function fetchCollaboratorsList(
  _params?: QueryParams,
  signal?: AbortSignal
): Promise<Paginated<Collaborator>> {
  const { data } = await axiosClient.get<Paginated<Collaborator>>(apiRoutes.collaborators.list(), { signal });
  return data;
}

export async function fetchCollaboratorBySlug(slug: string, signal?: AbortSignal): Promise<Collaborator> {
  const { data } = await axiosClient.get<Collaborator>(apiRoutes.collaborators.detail(slug), { signal });
  return data;
}
