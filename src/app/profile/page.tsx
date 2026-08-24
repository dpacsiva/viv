import type { Metadata } from "next";
import Image from "next/image";
import { fetchJourneyList } from "@/features/journey/journeyApi";
import { SectionLabel } from "@/components/ui/SectionLabel";
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
    width: 18,
    height: 18,
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
          <path d="M7.5 2.75v3.5M16.5 2.75v3.5M3.5 9h17M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" />
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
  imageSrc: string;
  imageAlt: string;
}> = [
  {
    key: "early-life",
    label: "Chapter one",
    title: "The places and people that shaped him",
    description:
      "Before the film credits came school, study and the relationships that gave Vivek his first sense of language, memory and belonging.",
    imageSrc: "/images/lyricist-vivek-images/journey-early-life.webp",
    imageAlt: "Watercolor of a school building beneath a leafy tree",
  },
  {
    key: "literary-roots",
    label: "Chapter two",
    title: "Finding a voice in poetry",
    description:
      "Songs, books, a mother's encouragement and the example of Vairamuthu gradually turned an interest in words into a literary life.",
    imageSrc: "/images/lyricist-vivek-images/journey-literary-roots.webp",
    imageAlt: "Watercolor of books, an open notebook, a plant and tea",
  },
  {
    key: "cinema-journey",
    label: "Chapter three",
    title: "From the first song to a wider stage",
    description:
      "The cinema timeline begins in 2015 and follows the songs, films and public work recorded through 2026.",
    imageSrc: "/images/lyricist-vivek-images/journey-cinema.webp",
    imageAlt: "Watercolor of film reel, microphone, music and screenplay",
  },
];

function JourneyEntry({ milestone }: { milestone: JourneyMilestone }) {
  return (
    <li className="relative pb-10 pl-10 last:pb-0 sm:pl-16">
      <span className="absolute -left-7 top-0 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-paper bg-ivory text-bronze shadow-[0_3px_12px_rgb(125_83_41_/0.16)] ring-1 ring-bronze/25">
        {milestone.imageSrc ? (
          <Image
            src={milestone.imageSrc}
            alt={milestone.imageAlt ?? ""}
            fill
            sizes="56px"
            className="object-cover"
          />
        ) : (
          <span aria-hidden="true">
            <JourneyIcon name={CATEGORY_ICONS[milestone.category]} />
          </span>
        )}
      </span>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-bronze">
          {milestone.year}
        </span>
        <span className="font-sans text-xs text-slate" aria-hidden="true">
          ·
        </span>
        <span className="font-sans text-[0.68rem] uppercase tracking-[0.14em] text-slate">
          {CATEGORY_LABELS[milestone.category]}
        </span>
      </div>
      <h3 className="mt-2 font-sans text-xl leading-tight text-ink sm:text-2xl">{milestone.title}</h3>
      <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-slate sm:text-base">{milestone.description}</p>

      {milestone.quote && (
        <figure className="mt-5 max-w-xl border-l-2 border-bronze/60 pl-4">
          <blockquote className="font-sans text-lg italic leading-relaxed text-ink">“{milestone.quote.text}”</blockquote>
          <figcaption className="mt-2 font-sans text-xs text-slate">{milestone.quote.attribution}</figcaption>
        </figure>
      )}

      {milestone.source && <p className="mt-4 font-sans text-xs text-slate">Source: {milestone.source}</p>}
    </li>
  );
}

function Ornament() {
  return (
    <div className="mt-7 flex max-w-xs items-center gap-3 text-bronze/80" aria-hidden="true">
      <span className="h-px flex-1 bg-bronze/35" />
      <span className="font-sans text-lg">❧</span>
      <span className="h-px flex-1 bg-bronze/35" />
    </div>
  );
}

export default async function ProfilePage() {
  const { items } = await fetchJourneyList();

  return (
    <div className="profile-page min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <SEOJsonLd
          data={[
            breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Profile" }]),
            personSchema(),
          ]}
        />
        <main>
          <section className="relative -mx-4 mt-6 overflow-hidden border-y-0 border-border bg-ivory shadow-none sm:mx-0 sm:rounded-[1.5rem] sm:border sm:shadow-[0_14px_40px_rgb(125_83_41_/0.1)]">
            <div className="relative grid min-h-[27rem] grid-cols-[1.05fr_0.95fr] sm:min-h-[30rem] sm:grid-cols-[0.86fr_1.14fr]">
              <div className="relative z-10 order-1 p-5 pr-2 sm:p-10 lg:p-14">
                <SectionLabel className="text-[0.6rem] tracking-[0.12em] sm:text-xs sm:tracking-[0.2em]">Profile / Journey</SectionLabel>
                <h1 className="mt-4 max-w-md font-sans text-4xl leading-[0.98] text-ink sm:mt-5 sm:text-6xl lg:text-7xl">
                  A life
                  <br />
                  written in stages
                </h1>
                <Ornament />
                <p className="mt-5 max-w-md font-sans text-[0.82rem] leading-relaxed text-slate sm:mt-7 sm:text-lg">
                  Vivek Velmurugan&apos;s journey moves through school, civil-engineering studies, Tamil poetry and cinema.
                  This timeline follows the personal influences and creative work recorded in the Life Timeline.
                </p>
              </div>

              <div className="absolute inset-y-0 right-0 z-0 order-2 w-[52%] sm:w-[62%]">
                <Image
                  src="/images/lyricist-vivek-images/lyricist-vivek-profile.webp"
                  alt="Watercolor portrait of lyricist Vivek beside a bicycle"
                  fill
                  preload
                  sizes="(max-width: 639px) 100vw, (max-width: 1024px) 62vw, 700px"
                  className="object-cover object-center sm:object-[58%_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/25 to-transparent" />
              </div>
            </div>
          </section>

          <dl className="relative z-10 mx-3 -mt-8 grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-ivory/95 px-2 py-5 shadow-[0_10px_28px_rgb(125_83_41_/0.12)] backdrop-blur sm:mx-8 sm:px-5 sm:py-6">
            {PROFILE_FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col items-center gap-2 px-2 text-center sm:flex-row sm:gap-4 sm:px-5 sm:text-left">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze/10 text-bronze sm:h-11 sm:w-11">
                  <JourneyIcon name={fact.icon} />
                </span>
                <div>
                  <dt className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-bronze sm:text-xs">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-sans text-sm leading-tight text-ink sm:text-lg">{fact.value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <section className="relative mt-12 overflow-hidden rounded-[1.25rem] border border-border bg-[#f6efe3] shadow-sm" aria-labelledby="journey-introduction">
            <div className="grid min-h-[18rem] grid-cols-1 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="relative z-10 p-7 pl-16 sm:p-10 sm:pl-20">
                <span className="absolute left-5 top-2 font-sans text-8xl leading-none text-bronze/25 sm:left-8" aria-hidden="true">
                  “
                </span>
                <SectionLabel>His journey</SectionLabel>
                <h2 id="journey-introduction" className="mt-3 max-w-xl font-sans text-3xl leading-tight text-ink sm:text-4xl">
                  Before the spotlight, there was the word
                </h2>
                <div className="mt-5 h-px w-14 bg-bronze/60" aria-hidden="true" />
                <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-slate sm:text-base">
                  Read the story as a series of connected chapters: the people and places of early life, the literary roots
                  that gave the writing its direction, and the cinema work that brought those words to a wider audience.
                </p>
              </div>
              <div className="relative min-h-[15rem] lg:min-h-0">
                <Image
                  src="/images/lyricist-vivek-images/journey-introduction.webp"
                  alt="Watercolor still life of an ink bottle, feather, books and manuscript"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover object-[70%_50%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#f6efe3] via-[#f6efe3]/15 to-transparent lg:bg-gradient-to-r lg:from-[#f6efe3] lg:via-[#f6efe3]/20 lg:to-transparent" />
              </div>
            </div>
          </section>

          <div className="relative mt-12">
            <div className="flex flex-col gap-14">
              {JOURNEY_SECTIONS.map((section) => {
                const sectionItems = items.filter((item) => item.section === section.key);

                return (
                  <section key={section.key} aria-labelledby={`${section.key}-heading`}>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[15rem_1fr] lg:gap-12">
                    <aside className="relative min-h-[20rem] overflow-hidden rounded-2xl border border-border bg-beige shadow-sm">
                      <Image
                        src={section.imageSrc}
                        alt={section.imageAlt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 240px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/70 to-paper/10" />
                      <div className="relative z-10 flex min-h-[20rem] flex-col justify-end p-6">
                        <SectionLabel>{section.label}</SectionLabel>
                        <h2 id={`${section.key}-heading`} className="mt-3 font-sans text-2xl leading-tight text-ink">
                          {section.title}
                        </h2>
                        <p className="mt-3 font-sans text-sm leading-relaxed text-slate">{section.description}</p>
                      </div>
                    </aside>

                    <ol className="relative -mt-8 ml-7 flex flex-col border-l border-bronze/45 pb-1 pl-0 pt-8 lg:ml-4 lg:mt-0 lg:border-l lg:pt-1">
                      {sectionItems.map((milestone) => (
                        <JourneyEntry key={milestone.id} milestone={milestone} />
                      ))}
                    </ol>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
