export interface MetadataEntry {
  label: string;
  value: string;
  lang?: string;
}

export function MetadataList({ entries, className = "" }: { entries: MetadataEntry[]; className?: string }) {
  const visible = entries.filter((e) => e.value);
  if (visible.length === 0) return null;

  return (
    <dl className={`grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 ${className}`}>
      {visible.map((entry) => (
        <div key={entry.label}>
          <dt className="font-sans text-xs uppercase tracking-[0.15em] text-slate">{entry.label}</dt>
          <dd className="mt-1 font-sans text-sm text-ink" lang={entry.lang}>
            {entry.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
