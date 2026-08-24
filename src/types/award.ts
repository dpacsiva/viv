import type { ID, Slug } from "./common";

export interface Award {
  id: ID;
  slug: Slug;
  name: string;
  organisation: string;
  year: string;
  category: string;
  won: boolean;
  work?: string;
  filmSlug?: string;
  lyricSlug?: string;
  citation?: string;
}
