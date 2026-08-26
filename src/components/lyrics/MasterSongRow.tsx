import { LyricsArchiveIcon } from "./LyricsArchiveIcon";
import { hasNativeSongTitle, songArtist, songComposer, songContext, songNote, songTitle } from "@/data/lyricsCatalog";
import type { LyricsLanguage, LyricsMasterSong } from "@/types/lyricsMaster";

export function MasterSongRow({
  song,
  language,
  index,
}: {
  song: LyricsMasterSong;
  language: LyricsLanguage;
  index: number;
}) {
  const nativeTitle = hasNativeSongTitle(song, language);
  const title = songTitle(song, language);
  const composer = songComposer(song, language);
  const artist = songArtist(song, language);
  const note = songNote(song, language);

  return (
    <li>
      <div className="group flex items-start gap-4 border-b border-bronze/12 py-5 sm:gap-5 sm:px-3">
        <span className="mt-1 w-7 shrink-0 font-sans text-xs font-semibold tracking-[0.16em] text-bronze/65">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-bronze/20 bg-paper text-bronze sm:h-10 sm:w-10">
          <LyricsArchiveIcon name={song.kind === "music-video" ? "music" : "film"} size={17} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-sans text-base font-semibold text-ink transition-colors group-hover:text-bronze sm:text-lg">{title}</span>
            {!nativeTitle && <span className="font-sans text-[0.68rem] uppercase tracking-[0.12em] text-slate">English title</span>}
          </span>
          <span className="mt-1 block font-sans text-xs text-slate sm:text-sm">{songContext(song, language)}</span>
          <span className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-sans text-xs text-slate/85">
            {composer && <span>Composer: {composer}</span>}
            {artist && song.kind === "music-video" && <span>Artist: {artist}</span>}
          </span>
          {note && <span className="mt-2 block font-sans text-xs italic leading-relaxed text-bronze/90">{note}</span>}
        </span>
      </div>
    </li>
  );
}
