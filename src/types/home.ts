import type { Lyric } from "./lyric";

export interface ArchiveStat {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: "quill" | "book" | "leaf" | "heart";
}

export interface LatestArchiveItem {
  id: string;
  category: string;
  title: string;
  description: string;
  thumbnailVariant: string;
  href: string;
  /** e.g. "Read Story", "Read Article", "Explore Manuscripts" — rendered with a trailing arrow. */
  ctaLabel: string;
}

export interface HomeArchiveData {
  stats: ArchiveStat[];
  featuredLyric: Lyric;
  latestItems: LatestArchiveItem[];
  closingQuote: {
    quote: string;
    signatureVariant: string;
  };
}
