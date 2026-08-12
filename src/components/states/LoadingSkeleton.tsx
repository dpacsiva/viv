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
          <div key={i} className="h-24 w-full animate-pulse rounded-lg bg-paper" />
        ) : variant === "text" ? (
          <div key={i} className="h-4 w-full animate-pulse rounded bg-paper" />
        ) : (
          <div key={i} className="flex flex-col gap-3">
            <div className="aspect-[4/3] w-full animate-pulse rounded-lg bg-paper" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-paper" />
            <div className="h-3 w-1/2 animate-pulse rounded bg-paper" />
          </div>
        )
      )}
    </div>
  );
}
