export type ID = string;
export type Slug = string;

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface ImageAsset {
  /** Semantic key used to render a CSS/SVG editorial illustration instead of a hotlinked photo. */
  variant: string;
  alt: string;
}

export interface LyricLine {
  id: string;
  tamil: string;
  transliteration?: string;
  translation?: string;
  annotation?: string;
}

export interface Annotation {
  lineId: string;
  word: string;
  meaning: string;
  note?: string;
}

export interface ImportantWord {
  wordSlug: string;
  tamil: string;
  meaning: string;
  reason?: string;
}

export interface AwardRef {
  id: ID;
  name: string;
  year: number;
  category: string;
  won: boolean;
}

/** Generic paginated list envelope returned by every list-style API call. */
export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export type SortOption = "latest" | "oldest" | "alphabetical" | "popular";

/** Broad, serialisable query-param shape shared by every list-style API call and Redux slice. */
export type QueryParams = Record<string, string | number | undefined>;

export type RequestStatus = "idle" | "loading" | "succeeded" | "failed";

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}
