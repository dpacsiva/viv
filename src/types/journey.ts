export type JourneyCategory =
  | "birth"
  | "education"
  | "influence"
  | "poetry"
  | "cinema"
  | "current-work";

export type JourneySection = "early-life" | "literary-roots" | "cinema-journey";

export interface JourneyMilestone {
  id: string;
  year: string;
  section: JourneySection;
  category: JourneyCategory;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  source?: string;
  quote?: {
    text: string;
    attribution: string;
  };
}
