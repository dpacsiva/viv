import type { ElementType } from "react";

interface EditorialHeadingProps {
  children: React.ReactNode;
  as?: ElementType;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  accentLine?: boolean;
}

const SIZE_CLASSES: Record<NonNullable<EditorialHeadingProps["size"]>, string> = {
  sm: "text-xl sm:text-2xl",
  md: "text-2xl sm:text-3xl",
  lg: "text-3xl sm:text-4xl md:text-5xl",
  xl: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
};

export function EditorialHeading({
  children,
  as: Tag = "h2",
  size = "md",
  className = "",
  accentLine = false,
}: EditorialHeadingProps) {
  return (
    <div>
      <Tag className={`font-serif font-medium leading-[1.1] text-ink ${SIZE_CLASSES[size]} ${className}`}>
        {children}
      </Tag>
      {accentLine && <span className="mt-4 block h-px w-16 bg-bronze" aria-hidden="true" />}
    </div>
  );
}
