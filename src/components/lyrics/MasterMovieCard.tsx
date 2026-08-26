import Image from "next/image";
import Link from "next/link";
import { LyricsArchiveIcon } from "./LyricsArchiveIcon";
import { filmArtwork } from "@/data/lyricsFilmArtwork";
import { movieCountLabel, movieName } from "@/data/lyricsCatalog";
import type { LyricsLanguage, LyricsMasterMovie } from "@/types/lyricsMaster";

export function MasterMovieCard({
  movie,
  language,
  priority = false,
}: {
  movie: LyricsMasterMovie;
  language: LyricsLanguage;
  priority?: boolean;
}) {
  const isSpecial = movie.kind !== "film";
  const artwork = filmArtwork(movie);
  return (
    <Link
      href={`/lyrics/movies/${movie.slug}`}
      className="group relative grid min-h-44 grid-cols-[1.12fr_0.88fr] overflow-hidden rounded-[1.2rem] border border-bronze/18 bg-white/65 p-2 shadow-[0_12px_32px_rgb(125_83_41_/0.06)] transition duration-300 hover:-translate-y-1 hover:border-bronze/45 hover:bg-white hover:shadow-[0_18px_38px_rgb(125_83_41_/0.12)] sm:rounded-[1.35rem] sm:p-2.5"
    >
      <div className="relative min-h-40 overflow-hidden rounded-[0.9rem] bg-paper sm:min-h-44">
        {artwork ? (
          <Image
            src={artwork.src}
            alt={artwork.alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 52vw, (max-width: 1280px) 28vw, 320px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full min-h-40 flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_35%_25%,rgb(255_255_255_/_0.75),transparent_35%),linear-gradient(135deg,rgb(233_223_208),rgb(213_194_164))] text-bronze sm:min-h-44">
            <LyricsArchiveIcon name={isSpecial ? "music" : "film"} size={28} />
            <span className="font-sans text-3xl font-semibold text-bronze/80">{movie.name.charAt(0)}</span>
          </div>
        )}
        <span className="absolute left-2 top-2 rounded-full bg-ivory/90 px-2.5 py-1 font-sans text-[0.65rem] font-semibold tracking-[0.14em] text-bronze shadow-sm">
          {movie.year}
        </span>
      </div>
      <div className="relative flex min-w-0 flex-col justify-between px-3 py-2 sm:px-4 sm:py-3">
        <div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze/20 bg-paper text-bronze">
            <LyricsArchiveIcon name={isSpecial ? "music" : "film"} size={17} />
          </span>
          <h3 className="mt-5 font-sans text-lg font-semibold leading-tight text-ink sm:text-xl">{movieName(movie, language)}</h3>
        </div>
        {language === "tamil" && movie.tamilName && movie.tamilName !== movie.name && (
          <p className="mt-1 font-sans text-xs text-slate">{movie.name}</p>
        )}
        <div className="mt-4 flex flex-col items-start gap-2 font-sans text-xs text-slate">
          <span className="flex items-center gap-1.5"><LyricsArchiveIcon name="music" size={13} className="text-bronze" /> {movieCountLabel(movie)}</span>
          <span className="flex items-center gap-1 text-bronze opacity-70 transition-opacity group-hover:opacity-100">
            Open <LyricsArchiveIcon name="arrow" size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
