import type {
  Annotation,
  AwardRef,
  ID,
  ImportantWord,
  LyricLine,
  SeoMeta,
  Slug,
} from "./common";

export interface LyricFilmRef {
  id: ID;
  slug: Slug;
  name: string;
  year: number;
}

export interface Lyric {
  id: ID;
  slug: Slug;
  title: string;
  tamilTitle?: string;
  film: LyricFilmRef;
  lyricist: string;
  composer: string[];
  singers: string[];
  director?: string;
  actors?: string[];
  language: string;
  theme: string[];
  mood: string[];
  excerpt: string;
  tamilLyrics: LyricLine[];
  transliteration?: LyricLine[];
  translation?: LyricLine[];
  context?: string;
  behindTheSong?: string;
  filmSituation?: string;
  wordChoiceNotes?: string;
  literaryDevices?: string[];
  culturalReferences?: string[];
  writingNotes?: string;
  annotations?: Annotation[];
  importantWords?: ImportantWord[];
  awards?: AwardRef[];
  relatedLyrics?: string[];
  officialReferences?: { label: string; url: string }[];
  views: number;
  publishedAt: string;
  seo: SeoMeta;
}
