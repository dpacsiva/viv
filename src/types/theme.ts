import type { ID, SeoMeta, Slug } from "./common";

export interface Theme {
  id: ID;
  slug: Slug;
  name: string;
  tamilName?: string;
  description: string;
  watercolorVariant: string;
  /** Optional real illustration (WebP) in /public/images/themes — falls back to the generated SVG art when absent. */
  image?: string;
  lyricIds: string[];
  seo: SeoMeta;
}
