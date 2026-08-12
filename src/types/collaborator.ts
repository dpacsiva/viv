import type { ID, SeoMeta, Slug } from "./common";

export type CollaboratorRole = "composer" | "singer" | "director" | "actor";

export interface Collaborator {
  id: ID;
  slug: Slug;
  name: string;
  tamilName?: string;
  role: CollaboratorRole;
  bio: string;
  portraitVariant: string;
  filmIds: string[];
  lyricIds: string[];
  notableWorks: string[];
  seo: SeoMeta;
}
