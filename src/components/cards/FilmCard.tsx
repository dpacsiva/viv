import Link from "next/link";
import type { Film } from "@/types";

export function FilmCard({ film, view = "poster" }: { film: Film; view?: "poster" | "list" }) {
  if (view === "list") {
    return (
      <Link
        href={`/films/${film.slug}`}
        className="group flex items-center justify-between gap-4 border-b border-border py-4 transition-colors hover:bg-paper/60"
      >
        <div>
          <p className="font-serif text-lg text-ink transition-colors group-hover:text-bronze">{film.name}</p>
          <p className="font-sans text-xs text-slate">
            {film.year} · dir. {film.director} · {film.lyricIds.length} lyrics by Vivek
          </p>
        </div>
        <span aria-hidden="true" className="font-sans text-sm text-bronze">
          →
        </span>
      </Link>
    );
  }

  return (
    <Link href={`/films/${film.slug}`} className="group flex flex-col gap-3">
      <div
        className="flex aspect-[2/3] flex-col items-center justify-center gap-3 rounded-lg border border-border p-6 text-center shadow-sm transition-transform group-hover:-translate-y-1"
        style={{ backgroundColor: `${film.accentColor}1a` }}
      >
        <span className="font-serif text-4xl" style={{ color: film.accentColor }}>
          {film.name.charAt(0)}
        </span>
        <span className="font-serif text-lg text-ink">{film.name}</span>
        <span className="font-sans text-xs uppercase tracking-widest text-slate">{film.year}</span>
      </div>
      <div>
        <p className="font-sans text-xs text-slate">
          {film.lyricIds.length} {film.lyricIds.length === 1 ? "lyric" : "lyrics"} by Vivek
        </p>
      </div>
    </Link>
  );
}
