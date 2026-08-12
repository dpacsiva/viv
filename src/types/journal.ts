import type { ID, SeoMeta, Slug } from "./common";

export type JournalCategory =
  | "Behind the Song"
  | "Writing Process"
  | "Tamil"
  | "Cinema"
  | "Interviews"
  | "Personal Thoughts";

export interface PullQuote {
  quote: string;
  attribution?: string;
}

export interface JournalArticle {
  id: ID;
  slug: Slug;
  category: JournalCategory;
  title: string;
  subtitle: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  heroImageVariant: string;
  excerpt: string;
  body: string[];
  pullQuotes?: PullQuote[];
  relatedLyricSlugs?: string[];
  relatedFilmSlugs?: string[];
  relatedWordSlugs?: string[];
  relatedJournalSlugs?: string[];
  seo: SeoMeta;
}
