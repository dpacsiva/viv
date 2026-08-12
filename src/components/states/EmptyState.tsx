export function EmptyState({
  title = "Nothing here yet",
  description = "Try adjusting your filters or search terms.",
  action,
}: {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-border bg-paper/50 px-6 py-16 text-center">
      <p className="font-serif text-xl text-ink">{title}</p>
      <p className="max-w-sm font-sans text-sm text-slate">{description}</p>
      {action}
    </div>
  );
}
