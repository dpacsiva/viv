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
      sizes="(max-width: 639px) 128px, 168px"
      className={`h-12 w-auto object-contain sm:h-16 ${className}`}
    />
  );
}
