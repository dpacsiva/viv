import type { ID, SeoMeta, Slug } from "./common";

export interface WordOccurrence {
  lyricId: string;
  lyricSlug: string;
  songTitle: string;
  count: number;
}

export interface TamilWord {
  id: ID;
  slug: Slug;
  tamil: string;
  transliteration: string;
  pronunciation: string;
  meaning: string;
  origin: string;
  grammar: string;
  culturalContext: string;
  literaryContext: string;
  relatedWordSlugs: string[];
  occurrences: WordOccurrence[];
  relatedThemes: string[];
  whyVivekUsedIt: string;
  seo: SeoMeta;
}
