import type MockAdapter from "axios-mock-adapter";
import { mockThemes } from "@/data";

export function registerThemesHandlers(mock: MockAdapter) {
  mock.onGet(/\/themes$/).reply(() => [200, { items: mockThemes, total: mockThemes.length, page: 1, pageSize: mockThemes.length, hasMore: false }]);

  mock.onGet(/\/themes\/[^/]+$/).reply((config) => {
    const slug = config.url?.split("/").pop();
    const theme = mockThemes.find((t) => t.slug === slug);
    if (!theme) return [404, { message: `Theme '${slug}' was not found in the archive.` }];
    return [200, theme];
  });
}
