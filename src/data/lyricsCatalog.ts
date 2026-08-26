import {
  LYRICS_MASTER_MOVIES,
  LYRICS_MASTER_SONGS,
  LYRICS_MASTER_SOURCE,
} from "./lyricsMaster";
import type {
  LyricsLanguage,
  LyricsMasterLanguageRow,
  LyricsMasterMovie,
  LyricsMasterSong,
} from "@/types/lyricsMaster";

export { LYRICS_MASTER_MOVIES, LYRICS_MASTER_SONGS, LYRICS_MASTER_SOURCE };

export const LYRICS_FILMS = LYRICS_MASTER_MOVIES.filter((movie) => movie.kind === "film");
export const LYRICS_SPECIAL_COLLECTIONS = LYRICS_MASTER_MOVIES.filter(
  (movie) => movie.kind === "special-collection"
);

export function findMasterMovie(slug: string): LyricsMasterMovie | undefined {
  return LYRICS_MASTER_MOVIES.find((movie) => movie.slug === slug);
}

export function findMasterSong(slug: string): LyricsMasterSong | undefined {
  return LYRICS_MASTER_SONGS.find((song) => song.slug === slug);
}

export function songsForMovie(movieId: string): LyricsMasterSong[] {
  return LYRICS_MASTER_SONGS.filter((song) => song.movieId === movieId);
}

export function languageRow(song: LyricsMasterSong, language: LyricsLanguage): LyricsMasterLanguageRow {
  return language === "tamil" && song.tamil ? song.tamil : song.english;
}

export function songTitle(song: LyricsMasterSong, language: LyricsLanguage): string {
  const row = languageRow(song, language);
  if (song.kind === "music-video") {
    return row.film || song.english.film || "Music video details pending";
  }
  return row.song || song.english.song || row.film || song.english.film || "Song details pending";
}

export function hasNativeSongTitle(song: LyricsMasterSong, language: LyricsLanguage): boolean {
  return Boolean(languageRow(song, language).song);
}

export function movieName(movie: LyricsMasterMovie, language: LyricsLanguage): string {
  return language === "tamil" && movie.tamilName ? movie.tamilName : movie.name;
}

export function songMovie(song: LyricsMasterSong): LyricsMasterMovie | undefined {
  return song.movieId ? LYRICS_MASTER_MOVIES.find((movie) => movie.id === song.movieId) : undefined;
}

export function songContext(song: LyricsMasterSong, language: LyricsLanguage): string {
  const movie = songMovie(song);
  if (song.kind === "music-video") return "Music video / special release";
  if (movie) return `${movieName(movie, language)} · ${song.year}`;
  return `${song.english.film || "Film details pending"} · ${song.year}`;
}

export function songComposer(song: LyricsMasterSong, language: LyricsLanguage): string | undefined {
  return languageRow(song, language).composer || song.english.composer;
}

export function songNote(song: LyricsMasterSong, language: LyricsLanguage): string | undefined {
  return languageRow(song, language).note || song.english.note;
}

export function songArtist(song: LyricsMasterSong, language: LyricsLanguage): string | undefined {
  return languageRow(song, language).artist || song.english.artist;
}

export function sortByLatest<T extends { year: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.year - a.year);
}

export function includesQuery(song: LyricsMasterSong, query: string): boolean {
  const needle = query.trim().toLocaleLowerCase();
  if (!needle) return true;
  const fields = [
    song.year,
    song.english.film,
    song.english.song,
    song.english.composer,
    song.english.artist,
    song.english.note,
    song.tamil?.film,
    song.tamil?.song,
    song.tamil?.composer,
    song.tamil?.note,
  ];
  return fields.some((field) => String(field || "").toLocaleLowerCase().includes(needle));
}

export function movieHasQuery(movie: LyricsMasterMovie, query: string): boolean {
  const needle = query.trim().toLocaleLowerCase();
  if (!needle) return true;
  return [movie.name, movie.tamilName, movie.year, movie.composer, movie.note]
    .map((field) => String(field || "").toLocaleLowerCase())
    .some((field) => field.includes(needle));
}

export function movieCountLabel(movie: LyricsMasterMovie): string {
  if (movie.listedSongCount === movie.cataloguedSongCount) {
    return `${movie.listedSongCount} ${movie.listedSongCount === 1 ? "song" : "songs"}`;
  }
  return `${movie.listedSongCount} listed · ${movie.cataloguedSongCount} catalogue rows`;
}

export function yearsInCatalog(): number[] {
  return Array.from(new Set(LYRICS_MASTER_SONGS.map((song) => song.year))).sort((a, b) => b - a);
}
