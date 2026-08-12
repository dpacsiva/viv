import type { AwardRef, ID, SeoMeta, Slug } from "./common";

export interface FilmRef {
  id: ID;
  slug: Slug;
  name: string;
  tamilName?: string;
  year: number;
}

export type CareerPeriod = "early-years" | "breakthrough" | "peak-mass-era" | "recent-work";

export interface Film {
  id: ID;
  slug: Slug;
  name: string;
  tamilName?: string;
  year: number;
  director: string;
  composer: string[];
  actors: string[];
  producer?: string;
  overview: string;
  vivekContribution: string;
  posterVariant: string;
  accentColor: string;
  careerPeriod: CareerPeriod;
  lyricIds: string[];
  awards?: AwardRef[];
  gallery?: { variant: string; caption: string }[];
  relatedJournalSlugs?: string[];
  seo: SeoMeta;
}
