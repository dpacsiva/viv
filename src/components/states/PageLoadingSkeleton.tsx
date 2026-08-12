import { LoadingSkeleton } from "@/components/states/LoadingSkeleton";

export function PageLoadingSkeleton() {
  return (
    <div
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      <span className="sr-only">Loading page…</span>

      <div className="skeleton-shimmer h-3 w-24 rounded-full" aria-hidden="true" />
      <div className="skeleton-shimmer mt-5 h-12 w-3/4 max-w-xl rounded-lg" aria-hidden="true" />
      <div className="skeleton-shimmer mt-4 h-4 w-full max-w-2xl rounded" aria-hidden="true" />
      <div className="skeleton-shimmer mt-2 h-4 w-5/6 max-w-xl rounded" aria-hidden="true" />

      <div className="mt-10">
        <LoadingSkeleton count={6} />
      </div>
    </div>
  );
}
