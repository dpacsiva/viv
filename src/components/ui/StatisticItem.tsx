import type { ArchiveStat } from "@/types";

const ICONS: Record<ArchiveStat["icon"], React.ReactNode> = {
  quill: (
    <path d="M8 24 L22 10 L26 14 L12 28 Z M20 12 L24 16" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  ),
  book: (
    <path
      d="M6 8 C 10 6, 14 6, 16 8 C 18 6, 22 6, 26 8 L26 24 C 22 22, 18 22, 16 24 C 14 22, 10 22, 6 24 Z M16 8 L16 24"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  leaf: (
    <path
      d="M16 6 C 24 10, 24 20, 16 27 C 8 20, 8 10, 16 6 Z M16 9 L16 26"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
    />
  ),
  heart: (
    <path
      d="M16 27 C 4 18, 6 9, 13 9 C 15 9, 16 11, 16 12 C 16 11, 17 9, 19 9 C 26 9, 28 18, 16 27 Z"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      strokeLinejoin="round"
    />
  ),
};

export function StatisticItem({ stat }: { stat: ArchiveStat }) {
  return (
    <div className="flex items-center gap-4 py-6">
      <svg width="32" height="32" viewBox="0 0 32 32" className="shrink-0 text-bronze" aria-hidden="true">
        {ICONS[stat.icon]}
      </svg>
      <div>
        <p className="font-serif text-2xl text-ink sm:text-3xl">{stat.value}</p>
        <p className="font-sans text-sm font-semibold uppercase tracking-wide text-ink">{stat.label}</p>
        <p className="font-sans text-xs text-slate">{stat.description}</p>
      </div>
    </div>
  );
}
