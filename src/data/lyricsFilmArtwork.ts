import type { LyricsMasterMovie } from "@/types/lyricsMaster";

export interface LyricsFilmArtwork {
  src: string;
  alt: string;
  sourcePage: string;
  sourceLabel: string;
}

// Poster artwork is intentionally kept outside the spreadsheet snapshot so the
// master catalogue remains an exact, read-only copy of the source tabs.
export const LYRICS_FILM_ARTWORK: Record<string, LyricsFilmArtwork> = {
  "2026-karuppu": {
    src: "/images/lyrics/films/karuppu.webp",
    alt: "Karuppu film poster featuring Suriya in a dramatic red-toned portrait",
    sourcePage: "https://www.filmibeat.com/tamil/movies/karuppu/photos.html",
    sourceLabel: "Filmibeat",
  },
  "2026-jana-nayagan": {
    src: "/images/lyrics/films/jana.webp",
    alt: "Jana Nayagan film poster featuring Vijay against a crowd",
    sourcePage: "https://www.imdb.com/title/tt33379543/mediaviewer/rm658730241/",
    sourceLabel: "IMDb",
  },
  "2026-peddi": {
    src: "/images/lyrics/films/peddi.webp",
    alt: "Peddi film poster featuring a rugged portrait surrounded by a crowd",
    sourcePage: "https://www.ragalahari.com/movies/info/97023/ram-charan-janhvi-kapoor-buchi-babu-sana-rc16-cast-crew.aspx",
    sourceLabel: "Ragalahari",
  },
  "2025-nilavuku-en-mel-ennadi-kobam": {
    src: "/images/lyrics/films/nilavuku.webp",
    alt: "Nilavuku En Mel Ennadi Kobam film poster with a colourful ensemble",
    sourcePage: "https://www.acmodasi.in/amdb/movie/1222049-nilavuku-en-mel-ennadi-kobam-2025/images",
    sourceLabel: "ACMODASI",
  },
  "2025-retro": {
    src: "/images/lyrics/films/retro.webp",
    alt: "Retro film poster featuring the leads in a warm vintage composition",
    sourcePage: "https://www.imdb.com/title/tt31945132/mediaviewer/rm2611774210/",
    sourceLabel: "IMDb",
  },
  "2025-maaman": {
    src: "/images/lyrics/films/maaman.webp",
    alt: "Maaman film poster showing a colourful family celebration",
    sourcePage: "https://www.district.in/movies/maaman-movie-tickets-in-chennai-MV188262",
    sourceLabel: "District",
  },
  "2025-3bhk": {
    src: "/images/lyrics/films/3bhk.webp",
    alt: "3BHK film poster featuring a family against a teal background",
    sourcePage: "https://www.rottentomatoes.com/m/3bhk",
    sourceLabel: "Rotten Tomatoes",
  },
  "2025-thanal": {
    src: "/images/lyrics/films/thanal.webp",
    alt: "Thanal film poster with a moody portrait and underground tunnel scene",
    sourcePage: "https://www.imdb.com/title/tt11923962/mediaviewer/rm4133336322/",
    sourceLabel: "IMDb",
  },
  "2025-dude": {
    src: "/images/lyrics/films/dude.webp",
    alt: "Dude film poster featuring Pradeep Ranganathan in a vivid orange composition",
    sourcePage: "https://www.imdb.com/title/tt36388163/",
    sourceLabel: "IMDb",
  },
  "2025-mark": {
    src: "/images/lyrics/films/mark.webp",
    alt: "Mark film poster with a warm, smoky action composition",
    sourcePage: "https://www.imdb.com/title/tt28961625/",
    sourceLabel: "IMDb",
  },
};

export function filmArtwork(movie: LyricsMasterMovie): LyricsFilmArtwork | undefined {
  return LYRICS_FILM_ARTWORK[movie.slug];
}
