import Link from "next/link";
import { LyricsArchiveIcon } from "./LyricsArchiveIcon";
import { movieCountLabel, movieName } from "@/data/lyricsCatalog";
import type { LyricsLanguage, LyricsMasterMovie } from "@/types/lyricsMaster";

export function MasterMovieCard({ movie, language }: { movie: LyricsMasterMovie; language: LyricsLanguage }) {
  const isSpecial = movie.kind !== "film";
  return (
    <Link
      href={`/lyrics/movies/${movie.slug}`}
      className="group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-[1.35rem] border border-bronze/15 bg-white/65 p-5 shadow-[0_12px_32px_rgb(125_83_41_/0.06)] transition duration-300 hover:-translate-y-1 hover:border-bronze/45 hover:bg-white hover:shadow-[0_18px_38px_rgb(125_83_41_/0.12)] sm:p-6"
    >
      <div className="absolute -right-7 -top-7 h-24 w-24 rounded-full bg-bronze/6 transition-transform duration-300 group-hover:scale-125" />
      <div className="relative flex items-start justify-between gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bronze/20 bg-paper text-bronze">
          <LyricsArchiveIcon name={isSpecial ? "music" : "film"} size={19} />
        </span>
        <span className="font-sans text-xs font-semibold tracking-[0.18em] text-bronze">{movie.year}</span>
      </div>
      <div className="relative mt-8">
        <h3 className="font-sans text-lg font-semibold tracking-[-0.02em] text-ink sm:text-xl">{movieName(movie, language)}</h3>
        {language === "tamil" && movie.tamilName && movie.tamilName !== movie.name && (
          <p className="mt-1 font-sans text-sm text-slate">{movie.name}</p>
        )}
        <div className="mt-3 flex items-center justify-between gap-3 font-sans text-xs text-slate">
          <span>{movieCountLabel(movie)}</span>
          <span className="flex items-center gap-1 text-bronze opacity-70 transition-opacity group-hover:opacity-100">
            Open <LyricsArchiveIcon name="arrow" size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
