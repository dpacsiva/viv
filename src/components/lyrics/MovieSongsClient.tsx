"use client";

import { useMemo, useState } from "react";
import { LyricsArchiveIcon } from "./LyricsArchiveIcon";
import { LyricsLanguageToggle } from "./LyricsLanguageToggle";
import { MasterSongRow } from "./MasterSongRow";
import { movieCountLabel, movieName } from "@/data/lyricsCatalog";
import type { LyricsLanguage, LyricsMasterMovie, LyricsMasterSong } from "@/types/lyricsMaster";

export function MovieSongsClient({
  movie,
  songs,
  initialLanguage,
}: {
  movie: LyricsMasterMovie;
  songs: LyricsMasterSong[];
  initialLanguage: LyricsLanguage;
}) {
  const [language, setLanguage] = useState<LyricsLanguage>(initialLanguage);
  const [query, setQuery] = useState("");
  const visibleSongs = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    if (!needle) return songs;
    return songs.filter((song) => [song.english.song, song.english.film, song.tamil?.song, song.tamil?.film, song.english.note]
      .some((field) => String(field || "").toLocaleLowerCase().includes(needle)));
  }, [songs, query]);

  return (
    <div className="lyrics-archive-page min-h-screen px-4 pb-20 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl pt-7 sm:pt-12">
        <div className="flex flex-col gap-7 border-b border-bronze/15 pb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-bronze">
              <span className="h-px w-8 bg-bronze" />
              {movie.kind === "film" ? "Film songs" : "Special releases"}
            </div>
            <h1 className="mt-5 font-sans text-5xl font-semibold tracking-[-0.045em] text-ink sm:text-7xl">{movieName(movie, language)}</h1>
            {language === "tamil" && movie.tamilName && movie.tamilName !== movie.name && <p className="mt-2 font-sans text-base text-slate">{movie.name}</p>}
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-sm text-slate">
              <span>{movie.year}</span><span aria-hidden="true">·</span><span>{movieCountLabel(movie)}</span>
              {movie.composer && <><span aria-hidden="true">·</span><span>{movie.composer}</span></>}
            </p>
          </div>
          <LyricsLanguageToggle value={language} onChange={setLanguage} />
        </div>

        {movie.note && <p className="mt-7 rounded-xl border border-bronze/15 bg-white/55 px-4 py-3 font-sans text-sm italic leading-6 text-bronze">{movie.note}</p>}
        {movie.listedSongCount !== movie.cataloguedSongCount && (
          <p className="mt-3 rounded-xl border border-bronze/10 bg-bronze/5 px-4 py-3 font-sans text-xs leading-5 text-slate">
            The movie list records {movie.listedSongCount} songs; the English song tab contains {movie.cataloguedSongCount} explicit catalogue row{movie.cataloguedSongCount === 1 ? "" : "s"}. Both values are retained from the master sheet.
          </p>
        )}

        <div className="mt-10 rounded-[1.5rem] border border-bronze/15 bg-white/55 p-4 sm:p-6">
          <div className="flex flex-col gap-4 border-b border-bronze/12 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Song list</p>
              <h2 className="mt-2 font-sans text-2xl font-semibold tracking-[-0.03em] text-ink">Songs recorded for this work</h2>
            </div>
            <label className="flex items-center gap-2 rounded-full border border-bronze/20 bg-ivory/80 px-3 py-2">
              <LyricsArchiveIcon name="search" size={16} className="text-slate" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Filter songs" aria-label="Filter songs in this work" className="w-28 bg-transparent font-sans text-xs text-ink placeholder:text-slate/70 focus:outline-none sm:w-40" />
            </label>
          </div>
          {visibleSongs.length > 0 ? (
            <ol className="mt-2">
              {visibleSongs.map((song, index) => <MasterSongRow key={song.id} song={song} language={language} index={index} />)}
            </ol>
          ) : (
            <div className="px-3 py-10 text-center">
              <LyricsArchiveIcon name="search" size={26} className="mx-auto text-bronze/70" />
              <p className="mt-4 font-sans text-sm text-slate">No song rows match this filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
