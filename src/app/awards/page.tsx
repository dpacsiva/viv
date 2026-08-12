import type { Metadata } from "next";
import Link from "next/link";
import { fetchAwardsList } from "@/features/awards/awardsApi";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Awards & Honours",
  description: "Awards and honours received by lyricist Vivek across a decade of Tamil cinema.",
  alternates: { canonical: "/awards" },
};

export default async function AwardsPage() {
  const { items } = await fetchAwardsList();
  const years = Array.from(new Set(items.map((a) => a.year))).sort((a, b) => b - a);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Awards" }])} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Awards" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        Awards &amp; Honours
      </EditorialHeading>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">
        A journey of recognition across a decade of Tamil cinema — from a debut honour in 2012 to a career-summarising
        award in 2023.
      </p>

      <div className="mt-10 flex flex-col gap-10">
        {years.map((year) => (
          <div key={year}>
            <SectionLabel>{year}</SectionLabel>
            <ul className="mt-4 flex flex-col gap-4">
              {items
                .filter((a) => a.year === year)
                .map((award) => (
                  <li key={award.id} className="rounded-lg border border-border bg-white p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-xl text-ink">{award.name}</p>
                        <p className="font-sans text-sm text-slate">
                          {award.organisation} · {award.category}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-3 py-1 font-sans text-xs font-medium ${
                          award.won ? "bg-bronze text-white" : "border border-border text-slate"
                        }`}
                      >
                        {award.won ? "Won" : "Nominated"}
                      </span>
                    </div>
                    {award.citation && <p className="mt-2 font-sans text-sm text-ink/80">{award.citation}</p>}
                    <div className="mt-3 flex gap-4">
                      {award.filmSlug && (
                        <Link href={`/films/${award.filmSlug}`} className="font-sans text-sm font-medium text-bronze hover:underline">
                          View Film →
                        </Link>
                      )}
                      {award.lyricSlug && (
                        <Link href={`/lyrics/${award.lyricSlug}`} className="font-sans text-sm font-medium text-bronze hover:underline">
                          Read Lyric →
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
