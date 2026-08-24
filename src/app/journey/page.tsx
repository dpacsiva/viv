import type { Metadata } from "next";
import Image from "next/image";
import { fetchJourneyList } from "@/features/journey/journeyApi";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/jsonLd";
import type { JourneyCategory, JourneyMilestone, JourneySection } from "@/types";

export const metadata: Metadata = {
  title: "Profile / Journey — Lyricist Vivek",
  description:
    "The life and creative journey of Tamil lyricist Vivek Velmurugan — from school, poetry and literary influences to cinema.",
  alternates: { canonical: "/journey" },
};

const CATEGORY_LABELS: Record<JourneyCategory, string> = {
  birth: "Beginning",
  education: "Education",
  influence: "Influence",
  poetry: "Poetry",
  cinema: "Cinema",
  "current-work": "Current work",
};

const JOURNEY_SECTIONS: Array<{
  key: JourneySection;
  label: string;
  title: string;
  description: string;
}> = [
  {
    key: "early-life",
    label: "Chapter one",
    title: "The places and people that shaped him",
    description:
      "Before the film credits came school, study and the relationships that gave Vivek his first sense of language, memory and belonging.",
  },
  {
    key: "literary-roots",
    label: "Chapter two",
    title: "Finding a voice in poetry",
    description:
      "Songs, books, a mother's encouragement and the example of Vairamuthu gradually turned an interest in words into a literary life.",
  },
  {
    key: "cinema-journey",
    label: "Chapter three",
    title: "From the first song to a wider stage",
    description:
      "The cinema timeline begins in 2015 and follows the songs, films and public work recorded through 2026.",
  },
];

function JourneyEntry({ milestone }: { milestone: JourneyMilestone }) {
  return (
    <li className="relative pb-10 pl-7 last:pb-0 sm:pl-10">
      <span
        className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-bronze bg-ivory"
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-bronze">{milestone.year}</span>
        <span className="font-sans text-xs text-slate" aria-hidden="true">
          ·
        </span>
        <span className="font-sans text-xs uppercase tracking-[0.12em] text-slate">
          {CATEGORY_LABELS[milestone.category]}
        </span>
      </div>
      <h3 className="mt-2 font-serif text-2xl leading-tight text-ink">{milestone.title}</h3>
      <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-slate">{milestone.description}</p>

      {milestone.quote && (
        <figure className="mt-5 max-w-xl border-l-2 border-bronze/60 pl-4">
          <blockquote className="font-serif text-lg italic leading-relaxed text-ink">“{milestone.quote.text}”</blockquote>
          <figcaption className="mt-2 font-sans text-xs text-slate">{milestone.quote.attribution}</figcaption>
        </figure>
      )}

      {milestone.source && <p className="mt-4 font-sans text-xs text-slate">Source: {milestone.source}</p>}
    </li>
  );
}

export default async function JourneyPage() {
  const { items } = await fetchJourneyList();

  return (
    <div className="bg-paper/40">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <SEOJsonLd
          data={[
            breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Profile / Journey" }]),
            personSchema(),
          ]}
        />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Profile / Journey" }]} />

        <section className="mt-6 overflow-hidden rounded-xl border border-border bg-ivory shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
            <div className="relative aspect-[4/5] w-full sm:aspect-auto sm:min-h-full">
              <Image
                src="/images/lyricist-vivek-images/lyricist-vivek-profile.webp"
                alt="Watercolor portrait of lyricist Vivek beside a bicycle"
                fill
                preload
                sizes="(max-width: 639px) 100vw, 220px"
                className="object-cover object-center"
              />
            </div>
            <div className="p-6 sm:p-10">
              <SectionLabel>Profile / Journey</SectionLabel>
              <EditorialHeading as="h1" size="lg" className="mt-2" accentLine>
                A life written in stages
              </EditorialHeading>
              <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate">
                Vivek Velmurugan&apos;s journey moves through school, civil-engineering studies, Tamil poetry and cinema.
                This timeline follows the personal influences and creative work recorded in the Life Timeline.
              </p>

              <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-3">
                <div>
                  <dt className="font-sans text-xs uppercase tracking-[0.16em] text-bronze">Born</dt>
                  <dd className="mt-1 font-serif text-lg text-ink">16 April 1985</dd>
                </div>
                <div>
                  <dt className="font-sans text-xs uppercase tracking-[0.16em] text-bronze">Education</dt>
                  <dd className="mt-1 font-serif text-lg text-ink">B.E. Civil Engineering</dd>
                </div>
                <div>
                  <dt className="font-sans text-xs uppercase tracking-[0.16em] text-bronze">First film song</dt>
                  <dd className="mt-1 font-serif text-lg text-ink">2015</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-border pt-10" aria-label="Journey chapters">
          <SectionLabel>His journey</SectionLabel>
          <EditorialHeading as="h2" size="md" className="mt-2" accentLine>
            Before the spotlight, there was the word
          </EditorialHeading>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-slate">
            Read the story as a series of connected chapters: the people and places of early life, the literary roots
            that gave the writing its direction, and the cinema work that brought those words to a wider audience.
          </p>

          <div className="mt-12 flex flex-col gap-16">
            {JOURNEY_SECTIONS.map((section) => {
              const sectionItems = items.filter((item) => item.section === section.key);

              return (
                <section key={section.key} aria-labelledby={`${section.key}-heading`}>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr] lg:gap-12">
                    <div>
                      <SectionLabel>{section.label}</SectionLabel>
                      <h2 id={`${section.key}-heading`} className="mt-2 font-serif text-2xl leading-tight text-ink">
                        {section.title}
                      </h2>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-slate">{section.description}</p>
                    </div>

                    <ol className="flex flex-col border-l border-border">
                      {sectionItems.map((milestone) => (
                        <JourneyEntry key={milestone.id} milestone={milestone} />
                      ))}
                    </ol>
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
