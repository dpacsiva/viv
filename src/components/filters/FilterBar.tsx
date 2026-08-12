export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterGroup {
  key: string;
  label: string;
  options: FilterOption[];
  value: string;
}

export function FilterBar({
  groups,
  onChange,
  className = "",
}: {
  groups: FilterGroup[];
  onChange: (key: string, value: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`} role="group" aria-label="Filter results">
      {groups.map((group) => (
        <label key={group.key} className="flex flex-col gap-1">
          <span className="sr-only">{group.label}</span>
          <select
            value={group.value}
            onChange={(e) => onChange(group.key, e.target.value)}
            className="rounded-full border border-border bg-white px-4 py-2 font-sans text-sm text-ink transition-colors hover:border-bronze focus:border-bronze"
          >
            <option value="">{group.label}</option>
            {group.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}
