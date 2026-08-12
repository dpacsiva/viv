/**
 * Centralised, typed route builders for every backend-style endpoint.
 * Swapping the mock adapter for a real backend later only requires
 * changing NEXT_PUBLIC_API_BASE_URL — every path here stays the same.
 */
export const apiRoutes = {
  lyrics: {
    list: () => "/lyrics",
    detail: (slug: string) => `/lyrics/${slug}`,
  },
  films: {
    list: () => "/films",
    detail: (slug: string) => `/films/${slug}`,
  },
  themes: {
    list: () => "/themes",
    detail: (slug: string) => `/themes/${slug}`,
  },
  words: {
    list: () => "/words",
    detail: (slug: string) => `/words/${slug}`,
  },
  collaborators: {
    list: () => "/collaborators",
    detail: (slug: string) => `/collaborators/${slug}`,
  },
  journal: {
    list: () => "/journal",
    detail: (slug: string) => `/journal/${slug}`,
  },
  awards: {
    list: () => "/awards",
  },
  journey: {
    list: () => "/journey",
  },
  search: {
    query: () => "/search",
    suggestions: () => "/search/suggestions",
  },
  archive: {
    home: () => "/archive/home",
  },
  contact: {
    submit: () => "/contact",
  },
} as const;
