import Image from "next/image";

type SiteBrandProps = {
  className?: string;
};

export function SiteBrand({ className = "" }: SiteBrandProps) {
  return (
    <Image
      src="/images/branding/lyricist-vivek-logo.webp"
      alt="Lyricist Vivek"
      width={220}
      height={87}
      priority
      sizes="(max-width: 639px) 112px, 150px"
      className={`h-10 w-auto object-contain sm:h-14 ${className}`}
    />
  );
}
