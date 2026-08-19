export const SITE_NAME = "Lyricist Vivek";
export const SITE_SHORT_NAME = "Lyricist Vivek";
export const SITE_URL = "https://www.vivekarchive.in";
export const SITE_DESCRIPTION =
  "The official archive of Tamil lyricist Vivek — explore his lyrics, film works, journey, awards and quotes.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Profile / Journey", href: "/journey" },
  { label: "Lyrics", href: "/lyrics" },
  { label: "Other works", href: "/films" },
  { label: "Awards", href: "/awards" },
  { label: "Quotes", href: "/quotes" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Profile / Journey", href: "/journey" },
      { label: "Lyrics", href: "/lyrics" },
      { label: "Other works", href: "/films" },
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
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Facebook", href: "https://facebook.com" },
] as const;

export const THEME_SLUGS = [
  "thalapathy-vijay-songs",
  "love",
  "tamil-pride",
  "motivation",
  "nature",
  "friendship",
  "mass-and-fire",
  "mother",
  "hope",
  "longing",
  "celebration",
] as const;
