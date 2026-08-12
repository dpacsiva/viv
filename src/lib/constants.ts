export const SITE_NAME = "Vivek — The Official World of Words";
export const SITE_SHORT_NAME = "Vivek";
export const SITE_URL = "https://www.vivekarchive.in";
export const SITE_DESCRIPTION =
  "The official home of Tamil lyricist Vivek's words and works — lyrics, transliteration, meanings, writing stories, filmography, awards and the journey behind the words.";

export const NAV_LINKS = [
  { label: "Works", href: "/lyrics" },
  { label: "Journey", href: "/journey" },
  { label: "Words", href: "/words" },
  { label: "Journal", href: "/journal" },
  { label: "Collaborations", href: "/collaborations" },
] as const;

export const MORE_LINKS = [
  { label: "Films", href: "/films" },
  { label: "Themes", href: "/themes" },
  { label: "Writing Process", href: "/writing-process" },
  { label: "Handwritten Archive", href: "/handwritten-archive" },
  { label: "Awards", href: "/awards" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Works", href: "/lyrics" },
      { label: "Lyrics", href: "/lyrics" },
      { label: "Films", href: "/films" },
      { label: "Journey", href: "/journey" },
      { label: "Words", href: "/words" },
    ],
  },
  {
    title: "Read",
    links: [
      { label: "Journal", href: "/journal" },
      { label: "Collaborations", href: "/collaborations" },
      { label: "Awards", href: "/awards" },
      { label: "Writing Process", href: "/writing-process" },
      { label: "Handwritten Archive", href: "/handwritten-archive" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Vivek", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
      { label: "Search", href: "/search" },
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
  "love",
  "tamil-pride",
  "motivation",
  "nature",
  "friendship",
  "mass-and-fire",
  "mother",
  "hope",
] as const;
