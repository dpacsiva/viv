"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { LyricsArchiveIcon, type LyricsArchiveIconName } from "./LyricsArchiveIcon";
import { LyricsLanguageToggle } from "./LyricsLanguageToggle";
import { MasterMovieCard } from "./MasterMovieCard";
import { MasterSongRow } from "./MasterSongRow";
import { includesQuery, movieHasQuery, sortByLatest } from "@/data/lyricsCatalog";
import type { LyricsLanguage, LyricsMasterMovie, LyricsMasterSong } from "@/types/lyricsMaster";

export function LyricsHomeClient({
  movies,
  songs,
  initialLanguage,
  initialView,
}: {
  movies: LyricsMasterMovie[];
  songs: LyricsMasterSong[];
  initialLanguage: LyricsLanguage;
  initialView: "movies" | "songs";
}) {
  const [language, setLanguage] = useState<LyricsLanguage>(initialLanguage);
  const [query, setQuery] = useState("");
  const filmMovies = useMemo(() => movies.filter((movie) => movie.kind === "film"), [movies]);
  const latestMovies = useMemo(() => sortByLatest(filmMovies), [filmMovies]);
  const matchingMovies = useMemo(
    () => latestMovies.filter((movie) => movieHasQuery(movie, query)),
    [latestMovies, query]
  );
  const matchingSongs = useMemo(
    () => sortByLatest(songs).filter((song) => includesQuery(song, query)),
    [songs, query]
  );
  const isSongsView = initialView === "songs";
  const displayedMovies = query ? matchingMovies : latestMovies.slice(0, 12);
  const stats: Array<{ value: string; label: string; icon: LyricsArchiveIconName }> = [
    { value: String(filmMovies.length), label: "film entries", icon: "film" },
    { value: String(songs.length), label: "English rows", icon: "list" },
    { value: String(new Set(songs.map((song) => song.year)).size), label: "years covered", icon: "book" },
    { value: "2", label: "languages", icon: "globe" },
  ];

  return (
    <div className="profile-page -mx-4 min-h-screen px-4 pb-20 pt-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <section className="mx-auto max-w-6xl pt-7 sm:pt-12">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-bronze">
              <span className="h-px w-8 bg-bronze" />
              The master song archive
            </div>
            <h1 className="mt-5 max-w-3xl font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-ink sm:text-6xl">
              Find the song. Follow the story.
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-7 text-slate sm:text-lg">
              A clear path through Vivek&apos;s film work: choose a language, find a movie and browse its song records.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <LyricsLanguageToggle value={language} onChange={setLanguage} />
              <span className="font-sans text-xs text-slate">English and Tamil titles stay connected to the same master row.</span>
            </div>
          </div>

          <div className="relative hidden min-h-56 overflow-hidden rounded-[2rem] border border-bronze/15 bg-white/45 p-7 lg:block">
            <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full border border-bronze/15" />
            <div className="absolute -bottom-24 -left-14 h-52 w-52 rounded-full border border-bronze/10" />
            <LyricsArchiveIcon name="music" size={42} className="relative text-bronze/75" />
            <p className="relative mt-8 max-w-xs font-sans text-sm leading-6 text-slate">
              Songs, films and special releases from 2015 to 2026, kept close to the source spreadsheet.
            </p>
            <div className="relative mt-7 flex gap-2">
              <span className="h-1.5 w-16 rounded-full bg-bronze/55" />
              <span className="h-1.5 w-9 rounded-full bg-bronze/20" />
              <span className="h-1.5 w-4 rounded-full bg-bronze/20" />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map(({ value, label, icon }) => (
            <div key={label} className="rounded-2xl border border-bronze/12 bg-white/55 px-4 py-4 sm:px-5">
              <LyricsArchiveIcon name={icon} size={18} className="text-bronze" />
              <p className="mt-3 font-sans text-xl font-semibold text-ink">{value}</p>
              <p className="mt-0.5 font-sans text-xs text-slate">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl sm:mt-16">
        <div className="rounded-[1.6rem] border border-bronze/15 bg-white/60 p-4 shadow-[0_18px_50px_rgb(125_83_41_/0.06)] sm:p-6">
          <label className="flex items-center gap-3 rounded-xl border border-bronze/20 bg-ivory/80 px-4 py-3 focus-within:border-bronze">
            <LyricsArchiveIcon name="search" size={20} className="shrink-0 text-slate" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder={isSongsView ? "Search a song, film, composer or note" : "Search a film, year or composer"}
              aria-label="Search the lyrics archive"
              className="w-full bg-transparent font-sans text-sm text-ink placeholder:text-slate/70 focus:outline-none sm:text-base"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} className="font-sans text-xs text-bronze hover:underline">
                Clear
              </button>
            )}
          </label>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-bronze/12 pb-4">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Lyrics archive views">
              <Link
                href={`/lyrics${language === "tamil" ? "?lang=tamil" : ""}`}
                className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${
                  !isSongsView ? "bg-bronze text-white" : "text-slate hover:bg-paper hover:text-bronze"
                }`}
              >
                Browse by movie
              </Link>
              <Link
                href={`/lyrics?view=songs${language === "tamil" ? "&lang=tamil" : ""}`}
                className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${
                  isSongsView ? "bg-bronze text-white" : "text-slate hover:bg-paper hover:text-bronze"
                }`}
              >
                All songs
              </Link>
            </div>
            <Link href="/lyrics/movies" className="flex items-center gap-1 font-sans text-sm font-medium text-bronze hover:underline">
              Open movie index <LyricsArchiveIcon name="arrow" size={15} />
            </Link>
          </div>

          {!isSongsView ? (
            <div className="pt-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Start here</p>
                  <h2 className="mt-2 font-sans text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
                    {query ? `${matchingMovies.length} matching films` : "Recent film work"}
                  </h2>
                </div>
                {!query && <span className="font-sans text-xs text-slate">Showing 12 of {filmMovies.length}</span>}
              </div>
              {displayedMovies.length > 0 ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {displayedMovies.map((movie) => <MasterMovieCard key={movie.id} movie={movie} language={language} />)}
                </div>
              ) : (
                <p className="mt-6 rounded-xl border border-dashed border-bronze/25 p-6 font-sans text-sm text-slate">No films match this search.</p>
              )}
              {!query && (
                <Link href={`/lyrics/movies${language === "tamil" ? "?lang=tamil" : ""}`} className="mt-7 inline-flex items-center gap-2 rounded-full border border-bronze/30 px-5 py-2.5 font-sans text-sm font-medium text-bronze transition-colors hover:bg-bronze hover:text-white">
                  See all films <LyricsArchiveIcon name="arrow" size={16} />
                </Link>
              )}
            </div>
          ) : (
            <div className="pt-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Song index</p>
                  <h2 className="mt-2 font-sans text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
                    {query ? `${matchingSongs.length} matching rows` : `${songs.length} songs in the English tab`}
                  </h2>
                </div>
                <span className="hidden font-sans text-xs text-slate sm:block">Newest first</span>
              </div>
              <ol className="mt-5">
                {matchingSongs.map((song, index) => <MasterSongRow key={song.id} song={song} language={language} index={index} />)}
              </ol>
              {matchingSongs.length === 0 && <p className="mt-6 rounded-xl border border-dashed border-bronze/25 p-6 font-sans text-sm text-slate">No song rows match this search.</p>}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
