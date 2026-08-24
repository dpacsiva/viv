import type { Metadata } from "next";
import Image from "next/image";
import { fetchAwardsList } from "@/features/awards/awardsApi";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/jsonLd";
import type { Award } from "@/types";

export const metadata: Metadata = {
  title: "Awards & Honours",
  description: "Awards and recognitions recorded for Tamil lyricist Vivek across his creative journey.",
  alternates: { canonical: "/awards" },
};

function AwardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 4h10v5.5a5 5 0 0 1-10 0z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
      <path d="M7 6H4.5v2a3.5 3.5 0 0 0 3.5 3.5M17 6h2.5v2a3.5 3.5 0 0 1-3.5 3.5M12 14.5V19M8.5 21h7M9.5 19h5" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function sortYearValue(year: string) {
  const presentedYear = year.match(/presented\s+(\d{4})/i)?.[1];
  const firstYear = year.match(/\d{4}/)?.[0];
  return Number(presentedYear ?? firstYear ?? 0);
}

function AwardCard({ award }: { award: Award }) {
  return (
    <li className="relative pb-5 pl-7 last:pb-0">
      <span className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper bg-ivory text-bronze shadow-[0_3px_10px_rgb(125_83_41_/0.14)] ring-1 ring-bronze/20">
        <AwardIcon />
      </span>
      <article className="rounded-xl border border-border bg-ivory/85 p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-bronze">
              {award.organisation}
            </p>
            <h3 className="mt-2 font-sans text-lg font-semibold leading-tight text-ink sm:text-xl">{award.name}</h3>
            <p className="mt-1 font-sans text-sm text-slate">{award.category}</p>
          </div>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.1em] ${
              award.won ? "bg-bronze text-white" : "border border-border text-slate"
            }`}
          >
            {award.won ? "Recognised" : "Nominated"}
          </span>
        </div>

        {award.work && (
          <p className="mt-4 border-t border-border/80 pt-3 font-sans text-sm leading-relaxed text-ink/80">
            <span className="font-semibold text-ink">Work:</span> {award.work}
          </p>
        )}
        {award.citation && <p className="mt-3 font-sans text-xs leading-relaxed text-slate">{award.citation}</p>}
      </article>
    </li>
  );
}

export default async function AwardsPage() {
  const { items } = await fetchAwardsList();
  const years = Array.from(new Set(items.map((award) => award.year))).sort(
    (left, right) => sortYearValue(right) - sortYearValue(left),
  );
  const awardBodies = new Set(items.map((award) => award.organisation)).size;
  const nominations = items.filter((award) => !award.won).length;

  return (
    <div className="profile-page min-h-screen">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-0 sm:px-6 sm:py-12 lg:px-8">
        <SEOJsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Awards" }])} />

        <main>
          <section className="relative -mx-4 mt-0 overflow-hidden border-y-0 border-border bg-ivory shadow-none sm:mx-0 sm:mt-6 sm:rounded-[1.5rem] sm:border sm:shadow-[0_14px_40px_rgb(125_83_41_/0.1)]">
            <div className="relative grid min-h-[27rem] grid-cols-[1.08fr_0.92fr] sm:min-h-[30rem] sm:grid-cols-[0.86fr_1.14fr]">
              <div className="relative z-10 order-1 p-5 pr-2 sm:p-10 lg:p-14">
                <SectionLabel className="text-[0.6rem] tracking-[0.12em] sm:text-xs sm:tracking-[0.2em]">
                  Profile / Awards
                </SectionLabel>
                <h1 className="mt-4 max-w-md font-sans text-4xl font-semibold leading-[0.98] text-ink sm:mt-5 sm:text-6xl lg:text-7xl">
                  Recognition
                  <br />
                  for the words
                </h1>
                <div className="mt-6 flex max-w-[8rem] items-center gap-3 text-bronze/80 sm:mt-7 sm:max-w-xs" aria-hidden="true">
                  <span className="h-px flex-1 bg-bronze/35" />
                  <span className="font-sans text-lg">✦</span>
                  <span className="h-px flex-1 bg-bronze/35" />
                </div>
                <p className="mt-5 max-w-md font-sans text-[0.82rem] leading-relaxed text-slate sm:mt-7 sm:text-lg">
                  A record of honours and recognition gathered across Vivek&apos;s work in Tamil cinema and lyric writing.
                </p>
              </div>

              <div className="absolute inset-y-0 right-0 z-0 w-[52%] sm:w-[62%]">
                <Image
                  src="/images/lyricist-vivek-images/awards-hero.webp"
                  alt="Watercolor still life of a trophy, laurel branch, fountain pen, manuscript and film strip"
                  fill
                  preload
                  sizes="(max-width: 639px) 100vw, (max-width: 1024px) 62vw, 700px"
                  className="object-cover object-center sm:object-[70%_50%]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/25 to-transparent" />
              </div>
            </div>
          </section>

          <dl className="relative z-10 mx-3 -mt-8 grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-ivory/95 px-2 py-5 shadow-[0_10px_28px_rgb(125_83_41_/0.12)] backdrop-blur sm:mx-8 sm:px-5 sm:py-6">
            <div className="flex flex-col items-center gap-2 px-2 text-center sm:flex-row sm:gap-4 sm:px-5 sm:text-left">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze/10 text-bronze sm:h-11 sm:w-11">
                <AwardIcon />
              </span>
              <div>
                <dt className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-bronze sm:text-xs">
                  Recognitions
                </dt>
                <dd className="mt-1 font-sans text-lg font-semibold leading-tight text-ink sm:text-2xl">{items.length}</dd>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 px-2 text-center sm:flex-row sm:gap-4 sm:px-5 sm:text-left">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze/10 text-bronze sm:h-11 sm:w-11">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M5 20a7 7 0 0 1 14 0M4 11h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <dt className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-bronze sm:text-xs">
                  Award bodies
                </dt>
                <dd className="mt-1 font-sans text-lg font-semibold leading-tight text-ink sm:text-2xl">{awardBodies}</dd>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 px-2 text-center sm:flex-row sm:gap-4 sm:px-5 sm:text-left">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze/10 text-bronze sm:h-11 sm:w-11">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m12 3 1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <dt className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-bronze sm:text-xs">
                  Nominations
                </dt>
                <dd className="mt-1 font-sans text-lg font-semibold leading-tight text-ink sm:text-2xl">{nominations}</dd>
              </div>
            </div>
          </dl>

          <section className="mt-10 border-t border-border pt-8 lg:mt-12" aria-labelledby="recognition-ledger">
            <SectionLabel>Recognition ledger</SectionLabel>
            <h2 id="recognition-ledger" className="mt-2 max-w-2xl font-sans text-2xl font-semibold leading-tight text-ink sm:text-4xl">
              Honours that mark a growing body of work
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-slate sm:text-base">
              The entries below follow the awards and recognitions recorded in the archive, with nominations clearly distinguished from honours.
            </p>
          </section>

          <div className="mt-10 flex flex-col gap-12 sm:mt-12 sm:gap-14">
            {years.map((year) => (
              <section key={year} aria-labelledby={`award-year-${year.replace(/[^a-zA-Z0-9]/g, "-")}`}>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[12rem_1fr] lg:gap-12">
                  <div className="lg:pt-2">
                    <SectionLabel>Recognition year</SectionLabel>
                    <h2 id={`award-year-${year.replace(/[^a-zA-Z0-9]/g, "-")}`} className="mt-2 font-sans text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                      {year}
                    </h2>
                  </div>

                  <ul className="relative ml-7 border-l border-bronze/45 pt-1">
                    {items
                      .filter((award) => award.year === year)
                      .map((award) => (
                        <AwardCard key={award.id} award={award} />
                      ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
