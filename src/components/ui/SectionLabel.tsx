interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span";
}

export function SectionLabel({ children, className = "", as = "p" }: SectionLabelProps) {
  const Tag = as;
  return (
    <Tag className={`flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bronze ${className}`}>
      {children}
    </Tag>
  );
}
