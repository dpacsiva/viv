import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Other Works — Coming Soon",
  description: "Other works by lyricist Vivek will be available here soon.",
  alternates: { canonical: "/other-works" },
};

function FilmIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <rect x="7" y="9" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M14 9v24M28 9v24M7 16h7M28 16h7M7 26h7M28 26h7" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function OtherWorksPage() {
  return (
    <div className="profile-page min-h-screen">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-0 sm:px-6 sm:py-12 lg:px-8">
        <SEOJsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Other works" }])} />

        <main>
          <section className="relative -mx-4 mt-3 overflow-hidden border-y-0 border-border bg-ivory shadow-none sm:mx-0 sm:mt-8 sm:rounded-[1.5rem] sm:border sm:shadow-[0_14px_40px_rgb(125_83_41_/0.1)]">
            <div className="flex min-h-[68svh] items-center justify-center px-6 py-16 sm:min-h-[34rem] sm:px-10 lg:px-16">
              <div className="max-w-xl text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-bronze/30 bg-paper/70 text-bronze shadow-sm">
                  <FilmIcon />
                </div>
                <SectionLabel className="mt-8 justify-center">Other works</SectionLabel>
                <h1 className="mt-4 font-sans text-4xl font-semibold leading-tight text-ink sm:text-6xl">Coming soon</h1>
                <p className="mt-5 font-sans text-base leading-relaxed text-slate sm:text-lg">
                  We are preparing this part of Vivek&apos;s archive. Other works and related creative projects will be available here soon.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
