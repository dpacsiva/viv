import type MockAdapter from "axios-mock-adapter";
import { mockCollaborators } from "@/data";

export function registerCollaboratorsHandlers(mock: MockAdapter) {
  mock.onGet(/\/collaborators$/).reply(() => [
    200,
    { items: mockCollaborators, total: mockCollaborators.length, page: 1, pageSize: mockCollaborators.length, hasMore: false },
  ]);

  mock.onGet(/\/collaborators\/[^/]+$/).reply((config) => {
    const slug = config.url?.split("/").pop();
    const collaborator = mockCollaborators.find((c) => c.slug === slug);
    if (!collaborator) return [404, { message: `Collaborator '${slug}' was not found in the archive.` }];
    return [200, collaborator];
  });
}
