import type { Metadata } from "next";
import Link from "next/link";
import { fetchJourneyList } from "@/features/journey/journeyApi";
import { PortraitArt } from "@/components/media/PortraitArt";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/jsonLd";
import type { JourneyCategory } from "@/types";

export const metadata: Metadata = {
  title: "Profile / Journey — Lyricist Vivek",
  description:
    "The profile and career journey of Tamil lyricist Vivek — from early poetry and education to cinema, songs and awards.",
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
        <SEOJsonLd
          data={[
            breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Profile / Journey" }]),
            personSchema(),
          ]}
        />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Profile / Journey" }]} />

        <section className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-[220px_1fr] sm:items-start">
          <PortraitArt className="aspect-[4/5] w-full" />
          <div>
            <SectionLabel>Profile / Journey</SectionLabel>
            <EditorialHeading as="h1" size="lg" className="mt-2">
              Lyricist Vivek
            </EditorialHeading>
            <p className="mt-4 font-sans text-base leading-relaxed text-slate">
              Vivek writes in the space between poetry and cinema — verses built for the screen that still read like
              they were meant only for a notebook. Trained first as an engineer, then as a lawyer, he came to film
              writing by way of a chance meeting rather than a plan.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-slate">
              His writing spans tender love songs, mother-themed tributes, mass anthems and quiet nature verses. The
              journey below follows the milestones that shaped that body of work.
            </p>
          </div>
        </section>

        <section className="mt-16 border-t border-border pt-10">
          <SectionLabel>Career Journey</SectionLabel>

          <ol className="mt-8 flex flex-col border-l border-border">
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
        </section>
      </div>
    </div>
  );
}
