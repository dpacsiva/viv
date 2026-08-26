"use client";

import { useMemo, useState } from "react";
import { LyricsArchiveIcon } from "./LyricsArchiveIcon";
import { LyricsLanguageToggle } from "./LyricsLanguageToggle";
import { MasterMovieCard } from "./MasterMovieCard";
import { movieHasQuery, sortByLatest, yearsInCatalog } from "@/data/lyricsCatalog";
import type { LyricsLanguage, LyricsMasterMovie } from "@/types/lyricsMaster";

export function MovieArchiveClient({
  movies,
  initialLanguage,
}: {
  movies: LyricsMasterMovie[];
  initialLanguage: LyricsLanguage;
}) {
  const [language, setLanguage] = useState<LyricsLanguage>(initialLanguage);
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const filteredMovies = useMemo(
    () => sortByLatest(movies).filter((movie) => movieHasQuery(movie, query) && (!year || String(movie.year) === year)),
    [movies, query, year]
  );
  const years = yearsInCatalog();

  return (
    <div className="lyrics-archive-page min-h-screen px-4 pb-20 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl pt-7 sm:pt-12">
        <div className="flex flex-col gap-5 border-b border-bronze/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="hidden items-center gap-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-bronze sm:flex">
              <span className="h-px w-8 bg-bronze" />
              The movie index
            </div>
            <h1 className="mt-0 font-sans text-5xl font-semibold tracking-[-0.045em] text-ink sm:mt-5 sm:text-7xl">Browse by movie</h1>
            <p className="mt-4 max-w-2xl font-sans text-base leading-7 text-slate">
              Choose a film to see its songs in sequence. The listed count and the imported song rows are shown separately wherever the two spreadsheet tabs differ.
            </p>
          </div>
          <LyricsLanguageToggle value={language} onChange={setLanguage} />
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="flex items-center gap-3 rounded-xl border border-bronze/20 bg-white/65 px-4 py-3 focus-within:border-bronze">
            <LyricsArchiveIcon name="search" size={19} className="shrink-0 text-slate" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Search film, year, composer or note"
              aria-label="Search films"
              className="w-full bg-transparent font-sans text-sm text-ink placeholder:text-slate/70 focus:outline-none sm:text-base"
            />
          </label>
          <label className="flex items-center gap-3 rounded-xl border border-bronze/20 bg-white/65 px-4 py-3 font-sans text-sm text-slate">
            <span className="whitespace-nowrap">Year</span>
            <select value={year} onChange={(event) => setYear(event.target.value)} className="w-full bg-transparent text-ink focus:outline-none sm:w-28">
              <option value="">All years</option>
              {years.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 font-sans text-sm text-slate">
          <span>{filteredMovies.length} work entries</span>
          {(query || year) && (
            <button type="button" onClick={() => { setQuery(""); setYear(""); }} className="text-bronze hover:underline">Clear filters</button>
          )}
        </div>

        {filteredMovies.length > 0 ? (
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredMovies.map((movie) => <MasterMovieCard key={movie.id} movie={movie} language={language} />)}
          </div>
        ) : (
          <div className="mt-8 rounded-[1.4rem] border border-dashed border-bronze/25 bg-white/45 p-8 text-center">
            <LyricsArchiveIcon name="search" size={26} className="mx-auto text-bronze/70" />
            <p className="mt-4 font-sans text-base text-ink">No work entries match these filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
