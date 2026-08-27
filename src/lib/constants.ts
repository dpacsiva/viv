export const SITE_NAME = "Lyricist Vivek";
export const SITE_SHORT_NAME = "Lyricist Vivek";
export const SITE_URL = "https://www.vivekarchive.in";
export const SITE_DESCRIPTION =
  "The official archive of Tamil lyricist Vivek — explore his lyrics, film works, journey, awards and quotes.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Lyrics", href: "/lyrics" },
  { label: "Other works", href: "/other-works" },
  { label: "Awards", href: "/awards" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Profile", href: "/profile" },
      { label: "Lyrics", href: "/lyrics" },
      { label: "Other works", href: "/other-works" },
      { label: "Awards", href: "/awards" },
      { label: "Quotes", href: "/quotes" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/lyricist_vivek/", icon: "instagram" },
  { label: "X / Twitter", href: "https://x.com/Lyricist_Vivek", icon: "x" },
] as const;

export const THEME_SLUGS = [
  "thalapathy-vijay-songs",
  "love",
  "motivation",
  "celebration",
  "popular",
  "others",
] as const;

export function exploreLyricsHref(slug: string): string {
  return slug === "thalapathy-vijay-songs" ? "/lyrics/thalapathy-vijay-songs" : "/lyrics/coming-soon";
}
