import Link from "next/link";
import { EditorialArt } from "@/components/media/EditorialArt";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeInSection } from "@/components/motion/FadeInSection";
import type { LatestArchiveItem } from "@/types";

export function LatestFromArchive({ items }: { items: LatestArchiveItem[] }) {
  return (
    <FadeInSection as="section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionLabel>Latest from Vivek</SectionLabel>
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.id} className="group flex flex-col gap-3">
            <Link href={item.href} className="block overflow-hidden rounded-lg">
              <EditorialArt
                variant={item.thumbnailVariant}
                className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
                rounded="none"
                alt={item.title}
              />
            </Link>
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-bronze">{item.category}</p>
              <h3 className="mt-1 font-serif text-lg text-ink">
                <Link href={item.href} className="transition-colors hover:text-bronze">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-1 font-sans text-sm text-slate">{item.description}</p>
              <Link
                href={item.href}
                className="mt-2 inline-block font-sans text-sm font-medium text-bronze underline-offset-4 hover:underline"
              >
                {item.ctaLabel} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </FadeInSection>
  );
}
