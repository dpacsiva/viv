import type { JourneyMilestone } from "@/types";

export const mockJourney: JourneyMilestone[] = [
  {
    id: "jm1",
    year: "1998",
    category: "early-poetry",
    title: "First verses, written in the margins",
    description:
      "Long before cinema, poems filled the margins of school notebooks — mostly about the coast near home, rarely shown to anyone.",
  },
  {
    id: "jm2",
    year: "2001",
    category: "education",
    title: "College years and a growing notebook",
    description:
      "A parallel life took shape alongside formal studies: a steadily growing personal notebook of verse, untouched by any ambition toward film.",
  },
  {
    id: "jm3",
    year: "2004",
    category: "engineering",
    title: "An engineering degree, and a different kind of structure",
    description:
      "Studying engineering taught an unexpected lesson that would later shape lyric-writing: that elegant structure and economy of means often matter more than ornamentation.",
  },
  {
    id: "jm4",
    year: "2008",
    category: "law",
    title: "A law degree and a discipline of language",
    description:
      "A few years in legal studies sharpened an eye for precise language — a habit of cutting every unnecessary word that would later define a lyric-writing style built on restraint.",
  },
  {
    id: "jm5",
    year: "2010",
    category: "entry-to-cinema",
    title: "A chance meeting, a demo tape of verses",
    description:
      "A mutual friend passed along a notebook of poems to director Bharath Raaja, who was casting about for a lyricist willing to write about ordinary, unglamorous lives.",
  },
  {
    id: "jm6",
    year: "2011",
    category: "first-film",
    title: "Kadal Meengal — the first film credit",
    description:
      "A debut built on coastal imagery and restraint, earning a Best Debut Lyricist honour and a first songwriting partnership with composer Ilan Vasan.",
    relatedFilmSlug: "kadal-meengal",
    relatedLyricSlug: "kadal-ninaivugal",
  },
  {
    id: "jm7",
    year: "2011",
    category: "collaboration",
    title: "A first partnership: Ilan Vasan",
    description:
      "The debut film also marked the start of a long-running creative partnership with composer Ilan Vasan, one that continues across four films.",
    relatedFilmSlug: "kadal-meengal",
  },
  {
    id: "jm8",
    year: "2015",
    category: "breakthrough",
    title: "Vetrikodi Kattu changes everything",
    description:
      "A one-night draft written after watching a district wrestling final became 'Vetrikodi Kattu', the anthem that turned a working lyricist into a household name.",
    relatedFilmSlug: "vetrikodi-kattu",
    relatedLyricSlug: "vetrikodi-kattu",
  },
  {
    id: "jm9",
    year: "2016",
    category: "award",
    title: "First major recognition",
    description: "State Film Honours for Best Lyricist, awarded for the 'Vetrikodi Kattu' anthem.",
    relatedFilmSlug: "vetrikodi-kattu",
  },
  {
    id: "jm10",
    year: "2017",
    category: "important-film",
    title: "Mannin Maindhan and 'Enga Amma'",
    description:
      "A title track that doubled as tribute to both mother and motherland, followed by 'Enga Amma' — still among the most-requested songs in the archive.",
    relatedFilmSlug: "mannin-maindhan",
    relatedLyricSlug: "enga-amma",
  },
  {
    id: "jm11",
    year: "2020",
    category: "important-film",
    title: "Uyir Meengal — a return to the coast",
    description:
      "A decade after his debut, a deliberate creative return to the same coastal village, its imagery matured but unmistakably continuous with the first song ever written for cinema.",
    relatedFilmSlug: "uyir-meengal",
  },
  {
    id: "jm12",
    year: "2023",
    category: "current-work",
    title: "Vaanavil Kanavu and 'Naalai Namadhe'",
    description:
      "The most recent release, closing with an anthem widely read as a summary of an entire career — belief in tomorrow, written the same plain way it always has been.",
    relatedFilmSlug: "vaanavil-kanavu",
    relatedLyricSlug: "naalai-namadhe",
  },
];
