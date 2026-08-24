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
  title: "Profile — Lyricist Vivek",
  description:
    "The life and creative journey of Tamil lyricist Vivek Velmurugan — from school, poetry and literary influences to cinema.",
  alternates: { canonical: "/profile" },
};

const CATEGORY_LABELS: Record<JourneyCategory, string> = {
  birth: "Beginning",
  education: "Education",
  influence: "Influence",
  poetry: "Poetry",
  cinema: "Cinema",
  "current-work": "Current work",
};

type JourneyIconName = "calendar" | "book" | "users" | "pen" | "film" | "spark";

const CATEGORY_ICONS: Record<JourneyCategory, JourneyIconName> = {
  birth: "calendar",
  education: "book",
  influence: "users",
  poetry: "pen",
  cinema: "film",
  "current-work": "spark",
};

const PROFILE_FACTS: Array<{ label: string; value: string; icon: JourneyIconName }> = [
  { label: "Born", value: "16 April 1985", icon: "calendar" },
  { label: "Education", value: "B.E. Civil Engineering", icon: "book" },
  { label: "First film song", value: "2015", icon: "film" },
];

function JourneyIcon({ name }: { name: JourneyIconName }) {
  const commonProps = {
    width: 15,
    height: 15,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "calendar":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="4.5" width="17" height="16" rx="2" />
          <path d="M7.5 2.75v3.5M16.5 2.75v3.5M3.5 9h17" />
        </svg>
      );
    case "book":
      return (
        <svg {...commonProps}>
          <path d="M4 5.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v15a2 2 0 0 0-2-1.5H6a2 2 0 0 0-2 2z" />
          <path d="M20 5.5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v15a2 2 0 0 1 2-1.5h4a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "users":
      return (
        <svg {...commonProps}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16.5 5.5a3 3 0 0 1 0 5.8M17 14.5a4.5 4.5 0 0 1 3.5 4" />
        </svg>
      );
    case "pen":
      return (
        <svg {...commonProps}>
          <path d="m4 20 1.5-5.5L15.75 4.25a2.12 2.12 0 0 1 3 0l1 1a2.12 2.12 0 0 1 0 3L9.5 18.5z" />
          <path d="m14 6 4 4M4 20l5.5-1.5" />
        </svg>
      );
    case "film":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="5" width="17" height="14" rx="2" />
          <path d="M8 5v14M16 5v14M3.5 9.5h4.5M16 9.5h4.5M3.5 14.5h4.5M16 14.5h4.5" />
        </svg>
      );
    case "spark":
      return (
        <svg {...commonProps}>
          <path d="m12 3 1.35 5.65L19 10l-5.65 1.35L12 17l-1.35-5.65L5 10l5.65-1.35zM19 16l.65 2.35L22 19l-2.35.65L19 22l-.65-2.35L16 19l2.35-.65z" />
        </svg>
      );
  }
}

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
        className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-bronze bg-ivory text-bronze shadow-sm"
        aria-hidden="true"
      >
        <JourneyIcon name={CATEGORY_ICONS[milestone.category]} />
      </span>
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

export default async function ProfilePage() {
  const { items } = await fetchJourneyList();

  return (
    <div className="bg-paper/40">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <SEOJsonLd
          data={[
            breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Profile" }]),
            personSchema(),
          ]}
        />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Profile" }]} />

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
              <SectionLabel>Profile</SectionLabel>
              <EditorialHeading as="h1" size="lg" className="mt-2" accentLine>
                A life written in stages
              </EditorialHeading>
              <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate">
                Vivek Velmurugan&apos;s journey moves through school, civil-engineering studies, Tamil poetry and cinema.
                This timeline follows the personal influences and creative work recorded in the Life Timeline.
              </p>

              <dl className="mt-8 grid grid-cols-1 gap-3 border-t border-border pt-6 sm:grid-cols-3">
                {PROFILE_FACTS.map((fact) => (
                  <div key={fact.label} className="rounded-lg border border-border bg-paper/50 p-3">
                    <dt className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.14em] text-bronze">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bronze/10">
                        <JourneyIcon name={fact.icon} />
                      </span>
                      {fact.label}
                    </dt>
                    <dd className="mt-2 font-serif text-lg leading-tight text-ink">{fact.value}</dd>
                  </div>
                ))}
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
