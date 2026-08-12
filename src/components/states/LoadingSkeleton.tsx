export function LoadingSkeleton({
  count = 6,
  variant = "card",
  className = "",
}: {
  count?: number;
  variant?: "card" | "row" | "text";
  className?: string;
}) {
  return (
    <div
      className={`grid gap-6 ${variant === "card" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : ""} ${className}`}
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">Loading content…</span>
      {Array.from({ length: count }).map((_, i) =>
        variant === "row" ? (
          <div key={i} className="skeleton-shimmer h-24 w-full rounded-lg" />
        ) : variant === "text" ? (
          <div key={i} className="skeleton-shimmer h-4 w-full rounded" />
        ) : (
          <div key={i} className="flex flex-col gap-3">
            <div className="skeleton-shimmer aspect-[4/3] w-full rounded-lg" />
            <div className="skeleton-shimmer h-4 w-3/4 rounded" />
            <div className="skeleton-shimmer h-3 w-1/2 rounded" />
          </div>
        )
      )}
    </div>
  );
}
