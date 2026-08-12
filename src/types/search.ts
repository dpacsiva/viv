export type SearchResultKind = "lyric" | "film" | "word" | "theme" | "collaborator" | "journal";

export interface SearchResultItem {
  kind: SearchResultKind;
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt?: string;
  href: string;
}

export interface SearchResultGroup {
  kind: SearchResultKind;
  label: string;
  items: SearchResultItem[];
}

export interface SearchResponse {
  query: string;
  groups: SearchResultGroup[];
  total: number;
  suggestions: string[];
}
