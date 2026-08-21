type SiteBrandProps = {
  className?: string;
};

export function SiteBrand({ className = "" }: SiteBrandProps) {
  return (
    <span className={`inline-flex flex-col items-center gap-1 leading-none ${className}`}>
      <span className="font-brand-script text-[0.9em] font-bold">Lyricist</span>
      <span className="font-brand-sans text-[1.2em] font-semibold">Vivek</span>
    </span>
  );
}
