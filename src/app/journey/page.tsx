import type { Metadata } from "next";
import Link from "next/link";
import { fetchJourneyList } from "@/features/journey/journeyApi";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/jsonLd";
import type { JourneyCategory } from "@/types";

export const metadata: Metadata = {
  title: "Journey — From Engineering Classrooms to Tamil Cinema",
  description:
    "The career journey of lyricist Vivek — early poetry, education, engineering, law, entry into cinema, breakthrough songs, awards and current work.",
  alternates: { canonical: "/journey" },
};

const CATEGORY_LABELS: Record<JourneyCategory, string> = {
  "early-poetry": "Early Poetry",
  education: "Education",
  engineering: "Engineering",
  law: "Law",
  "entry-to-cinema": "Entry into Cinema",
  "first-film": "First Film",
  breakthrough: "Breakthrough",
  collaboration: "Collaboration",
  "important-film": "Important Film",
  award: "Award",
  "current-work": "Current Work",
};

export default async function JourneyPage() {
  const { items } = await fetchJourneyList();

  return (
    <div className="bg-paper/40">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <SEOJsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Journey" }])} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journey" }]} />
        <EditorialHeading as="h1" size="lg" className="mt-4">
          The Journey
        </EditorialHeading>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">
          From an engineering classroom to a law degree to a debut film credit — the path that led to fifteen years
          of writing for Tamil cinema.
        </p>

        <ol className="mt-12 flex flex-col border-l border-border">
          {items.map((milestone) => (
            <li key={milestone.id} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-bronze bg-ivory" aria-hidden="true" />
              <SectionLabel>
                {milestone.year} · {CATEGORY_LABELS[milestone.category]}
              </SectionLabel>
              <h2 className="mt-2 font-serif text-2xl text-ink">{milestone.title}</h2>
              <p className="mt-2 max-w-xl font-sans text-base leading-relaxed text-slate">{milestone.description}</p>
              <div className="mt-3 flex gap-4">
                {milestone.relatedFilmSlug && (
                  <Link href={`/films/${milestone.relatedFilmSlug}`} className="font-sans text-sm font-medium text-bronze hover:underline">
                    View Film →
                  </Link>
                )}
                {milestone.relatedLyricSlug && (
                  <Link href={`/lyrics/${milestone.relatedLyricSlug}`} className="font-sans text-sm font-medium text-bronze hover:underline">
                    Read Lyric →
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
