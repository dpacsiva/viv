export function ErrorState({
  message = "Something went wrong while reaching the archive.",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-3 rounded-lg border border-border bg-white px-6 py-16 text-center"
    >
      <p className="font-serif text-xl text-ink">We hit a snag.</p>
      <p className="max-w-sm font-sans text-sm text-slate">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 rounded-full border border-bronze px-5 py-2 font-sans text-sm font-medium text-bronze transition-colors hover:bg-bronze hover:text-white"
        >
          Try again
        </button>
      )}
    </div>
  );
}
