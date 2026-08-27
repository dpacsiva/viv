"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { LyricsArchiveIcon, type LyricsArchiveIconName } from "./LyricsArchiveIcon";
import { LyricsLanguageToggle } from "./LyricsLanguageToggle";
import { MasterMovieCard } from "./MasterMovieCard";
import { MasterSongRow } from "./MasterSongRow";
import { ThemeCard } from "@/components/cards/ThemeCard";
import { includesQuery, movieHasQuery, sortByLatest } from "@/data/lyricsCatalog";
import type { Theme } from "@/types";
import type { LyricsLanguage, LyricsMasterMovie, LyricsMasterSong } from "@/types/lyricsMaster";

export function LyricsHomeClient({
  movies,
  songs,
  themes,
  initialLanguage,
  initialView,
}: {
  movies: LyricsMasterMovie[];
  songs: LyricsMasterSong[];
  themes: Theme[];
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
  const displayedMovies = query ? matchingMovies : latestMovies.slice(0, 6);
  const stats: Array<{ value: string; label: string; icon: LyricsArchiveIconName }> = [
    { value: String(filmMovies.length), label: "Films", icon: "film" },
    { value: String(songs.length), label: "Song rows", icon: "music" },
    { value: String(new Set(songs.map((song) => song.year)).size), label: "Years covered", icon: "feather" },
    { value: "2", label: "Languages", icon: "star" },
  ];

  return (
    <div className="lyrics-archive-page min-h-screen overflow-hidden px-4 pb-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl pt-8 sm:pt-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-bronze">
              <span className="h-px w-8 bg-bronze" />
              The lyrics archive
            </div>
            <h1 className="mt-5 max-w-xl font-sans text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-ink sm:text-7xl">
              Find the song.<br />Follow the story.
            </h1>
            <div className="mt-6 flex items-center gap-4">
              <span className="h-px w-28 bg-bronze/25" />
              <LyricsArchiveIcon name="feather" size={28} className="text-bronze/75" />
            </div>
            <p className="mt-6 max-w-xl font-sans text-base leading-7 text-slate sm:text-lg">
              Explore the words of Vivek that give life to the films. Browse by movie or move into the complete archive, with English and Tamil titles kept together.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <LyricsLanguageToggle value={language} onChange={setLanguage} />
              <span className="font-sans text-xs text-slate">Choose how the archive reads.</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] border border-bronze/25 bg-white/60 p-4 shadow-[0_16px_45px_rgb(125_83_41_/0.07)] sm:p-6">
            <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-bronze/15" />
            <div className="absolute -bottom-20 -right-2 h-48 w-48 rounded-full border border-bronze/10" />
            <div className="relative flex items-center justify-between gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-bronze/20 bg-paper text-bronze">
                <LyricsArchiveIcon name="feather" size={28} />
              </span>
              <div className="text-right">
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bronze">Explore Lyrics</p>
                <p className="mt-1 font-sans text-sm text-slate">Browse by feeling and story.</p>
              </div>
            </div>
            <div className="relative mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
              {themes.map((theme) => (
                <ThemeCard key={theme.id} theme={theme} href="/lyrics/coming-soon" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map(({ value, label, icon }) => (
            <div key={label} className="flex items-center gap-3 rounded-[1.15rem] border border-bronze/20 bg-white/60 px-4 py-4 shadow-[0_8px_24px_rgb(125_83_41_/0.04)] sm:gap-4 sm:px-6 sm:py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-bronze/20 bg-ivory text-bronze sm:h-12 sm:w-12">
                <LyricsArchiveIcon name={icon} size={21} />
              </span>
              <span>
                <span className="block font-sans text-2xl font-semibold text-ink sm:text-3xl">
                  {value}<sup className="ml-0.5 text-lg align-super sm:text-xl">+</sup>
                </span>
                <span className="mt-0.5 block font-sans text-xs text-slate sm:text-sm">{label}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl sm:mt-10">
        <div className="flex items-center gap-3 rounded-xl border border-bronze/25 bg-white/55 px-5 py-3.5 shadow-[0_8px_25px_rgb(125_83_41_/0.04)] focus-within:border-bronze">
          <LyricsArchiveIcon name="search" size={21} className="shrink-0 text-slate" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Search by movie or song title..."
            aria-label="Search by movie or song title"
            className="w-full bg-transparent font-sans text-sm text-ink placeholder:text-slate/70 focus:outline-none sm:text-base"
          />
          {query && <button type="button" onClick={() => setQuery("")} className="font-sans text-xs text-bronze hover:underline">Clear</button>}
        </div>

        <div className="mt-5 flex justify-center border-b border-bronze/15 pb-5">
          <div className="inline-flex rounded-full border border-bronze/35 bg-white/55 p-0.5" role="tablist" aria-label="Lyrics archive views">
            <Link
              href={`/lyrics${language === "tamil" ? "?lang=tamil" : ""}`}
              aria-current={!isSongsView ? "page" : undefined}
              className={`min-w-36 rounded-full px-6 py-2 font-sans text-sm font-medium transition-colors sm:min-w-48 ${!isSongsView ? "bg-bronze text-white shadow-sm" : "text-slate hover:text-bronze"}`}
            >
              Browse by movie
            </Link>
            <Link
              href={`/lyrics?view=songs${language === "tamil" ? "&lang=tamil" : ""}`}
              aria-current={isSongsView ? "page" : undefined}
              className={`min-w-36 rounded-full px-6 py-2 font-sans text-sm font-medium transition-colors sm:min-w-48 ${isSongsView ? "bg-bronze text-white shadow-sm" : "text-slate hover:text-bronze"}`}
            >
              All songs
            </Link>
          </div>
        </div>

        {!isSongsView ? (
          <div className="pt-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-sans text-3xl font-semibold text-ink sm:text-4xl">{query ? `${matchingMovies.length} matching films` : "Recent film work"}</h2>
                  <span className="hidden h-px w-16 bg-bronze/35 sm:block" />
                </div>
                <p className="mt-2 font-sans text-sm text-slate">Choose a film to follow its songs.</p>
              </div>
              {!query && <span className="font-sans text-xs text-slate">Showing 6 of {filmMovies.length}</span>}
            </div>
            {displayedMovies.length > 0 ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {displayedMovies.map((movie, index) => <MasterMovieCard key={movie.id} movie={movie} language={language} priority={index < 6} />)}
              </div>
            ) : (
              <p className="mt-6 rounded-xl border border-dashed border-bronze/25 bg-white/45 p-6 font-sans text-sm text-slate">No films match this search.</p>
            )}
            {!query && <Link href={`/lyrics/movies${language === "tamil" ? "?lang=tamil" : ""}`} className="mt-7 inline-flex items-center gap-2 rounded-full border border-bronze/30 px-5 py-2.5 font-sans text-sm font-medium text-bronze transition-colors hover:bg-bronze hover:text-white">See all films <LyricsArchiveIcon name="arrow" size={16} /></Link>}
          </div>
        ) : (
          <div className="pt-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-sans text-3xl font-semibold text-ink sm:text-4xl">{query ? `${matchingSongs.length} matching rows` : "All songs"}</h2>
                  <span className="hidden h-px w-16 bg-bronze/35 sm:block" />
                </div>
                <p className="mt-2 font-sans text-sm text-slate">The complete English master tab, with Tamil rows connected where available.</p>
              </div>
              <span className="hidden font-sans text-xs text-slate sm:block">Newest first</span>
            </div>
            <ol className="mt-4 rounded-[1.2rem] border border-bronze/15 bg-white/40 px-3 sm:px-5">
              {matchingSongs.map((song, index) => <MasterSongRow key={song.id} song={song} language={language} index={index} />)}
            </ol>
            {matchingSongs.length === 0 && <p className="mt-6 rounded-xl border border-dashed border-bronze/25 bg-white/45 p-6 font-sans text-sm text-slate">No song rows match this search.</p>}
          </div>
        )}
      </section>

      <section className="mx-auto mt-16 max-w-7xl border-t border-bronze/15 pt-9 sm:mt-20">
        <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto_1fr]">
          <div className="font-sans text-lg leading-7 text-slate sm:text-xl">
            <span className="mr-2 text-3xl text-bronze/40">“</span>
            Any pain that I see around me is close to my heart.<br />
            Even if I am able to lift that pain by one percent,<br />
            I would be happy.
            <span className="ml-3 text-bronze">— Vivek</span>
          </div>
          <LyricsArchiveIcon name="feather" size={42} className="text-bronze/60" />
          <p className="max-w-xs font-sans text-lg leading-7 text-slate sm:justify-self-end sm:text-right sm:text-xl">Writing memories.<br />One lyric at a time.</p>
        </div>
      </section>
    </div>
  );
}
