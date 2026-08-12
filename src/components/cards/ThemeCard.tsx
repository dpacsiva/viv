import Image from "next/image";
import Link from "next/link";
import { EditorialArt } from "@/components/media/EditorialArt";
import type { Theme } from "@/types";

export function ThemeCard({ theme }: { theme: Theme }) {
  if (theme.image) {
    return (
      <Link
        href={`/themes/${theme.slug}`}
        className="group block aspect-square w-full overflow-hidden rounded-2xl shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
      >
        <Image
          src={theme.image}
          alt={`${theme.name} theme illustration`}
          width={640}
          height={640}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 25vw, 45vw"
        />
      </Link>
    );
  }

  return (
    <Link
      href={`/themes/${theme.slug}`}
      className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-white p-4 text-center transition-shadow hover:shadow-md"
    >
      <EditorialArt
        variant={theme.watercolorVariant}
        className="aspect-square w-full"
        rounded="lg"
        alt={`${theme.name} theme illustration`}
      />
      <span className="font-serif text-lg text-ink transition-colors group-hover:text-bronze">{theme.name}</span>
    </Link>
  );
}
