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
  /** Optional scale for artwork that includes built-in whitespace around its subject. */
  imageZoom?: number;
  lyricIds: string[];
  seo: SeoMeta;
}
