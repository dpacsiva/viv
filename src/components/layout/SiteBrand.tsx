type SiteBrandProps = {
  className?: string;
};

export function SiteBrand({ className = "" }: SiteBrandProps) {
  return (
    <span
      aria-label="Lyricist Vivek"
      className={`inline-flex min-w-[6.5rem] flex-col items-start leading-none ${className}`}
    >
      <span className="font-brand-script text-[1.55rem] font-medium tracking-[-0.04em] text-bronze-dark sm:text-[1.8rem]">
        Lyricist
      </span>
      <span className="mt-1 font-sans text-[1.05rem] font-semibold tracking-[0.24em] text-ink sm:text-[1.2rem]">
        Vivek
      </span>
    </span>
  );
}
