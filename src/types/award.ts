import type { ID, Slug } from "./common";

export interface Award {
  id: ID;
  slug: Slug;
  name: string;
  organisation: string;
  year: number;
  category: string;
  won: boolean;
  filmSlug?: string;
  lyricSlug?: string;
  citation?: string;
}
