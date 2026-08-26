export type LyricsLanguage = "english" | "tamil";

export type LyricsMasterKind = "film" | "music-video" | "special-collection";

export interface LyricsMasterLanguageRow {
  film?: string;
  song?: string;
  composer?: string;
  artist?: string;
  note?: string;
  sourceRow: number;
}

export interface LyricsMasterSong {
  id: string;
  slug: string;
  year: number;
  sequence?: number;
  kind: Exclude<LyricsMasterKind, "special-collection">;
  movieId?: string;
  english: LyricsMasterLanguageRow;
  tamil?: LyricsMasterLanguageRow;
}

export interface LyricsMasterMovie {
  id: string;
  slug: string;
  year: number;
  name: string;
  tamilName?: string;
  kind: Exclude<LyricsMasterKind, "music-video">;
  listedSongCount: number;
  cataloguedSongCount: number;
  composer?: string;
  note?: string;
  songIds: string[];
  sourceRow: number;
}

export interface LyricsMasterSource {
  spreadsheetId: string;
  importedAt: string;
  tabs: {
    name: string;
    gid: string;
    file: string;
  }[];
}
