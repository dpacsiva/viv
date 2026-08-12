export type JourneyCategory =
  | "early-poetry"
  | "education"
  | "engineering"
  | "law"
  | "entry-to-cinema"
  | "first-film"
  | "breakthrough"
  | "collaboration"
  | "important-film"
  | "award"
  | "current-work";

export interface JourneyMilestone {
  id: string;
  year: string;
  category: JourneyCategory;
  title: string;
  description: string;
  relatedFilmSlug?: string;
  relatedLyricSlug?: string;
}
