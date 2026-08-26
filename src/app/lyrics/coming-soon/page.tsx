import type { Metadata } from "next";
import Link from "next/link";
import { LyricsArchiveIcon } from "@/components/lyrics/LyricsArchiveIcon";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Lyrics Collections — Coming Soon",
  description: "The themed lyrics collections in Vivek's archive are being prepared and will be available soon.",
  alternates: { canonical: "/lyrics/coming-soon" },
};

export default function LyricsComingSoonPage() {
  return (
    <div className="lyrics-archive-page min-h-screen px-4 pb-16 pt-4 sm:px-6 sm:pt-12 lg:px-8">
      <SEOJsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Lyrics", href: "/lyrics" }, { label: "Coming soon" }])} />

      <div className="mx-auto max-w-5xl pt-6 sm:pt-10">
        <section className="relative overflow-hidden rounded-[1.75rem] border border-bronze/25 bg-white/65 px-6 py-14 text-center shadow-[0_18px_48px_rgb(125_83_41_/0.08)] sm:px-14 sm:py-20">
          <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full border border-bronze/10" aria-hidden="true" />
          <div className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full border border-bronze/10" aria-hidden="true" />

          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-bronze/25 bg-paper text-bronze shadow-sm">
              <LyricsArchiveIcon name="feather" size={30} />
            </span>
            <p className="mt-7 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-bronze">Lyrics collections</p>
            <h1 className="mt-4 font-sans text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-6xl">
              Coming soon
            </h1>
            <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-3 text-bronze/65" aria-hidden="true">
              <span className="h-px flex-1 bg-bronze/30" />
              <LyricsArchiveIcon name="music" size={20} />
              <span className="h-px flex-1 bg-bronze/30" />
            </div>
            <p className="mx-auto mt-7 max-w-xl font-sans text-base leading-7 text-slate sm:text-lg">
              The themed collections are being carefully prepared. Soon you can explore Vivek&apos;s songs by feeling, story and subject, all in one place.
            </p>
            <Link
              href="/lyrics"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-bronze/35 px-5 py-2.5 font-sans text-sm font-medium text-bronze transition-colors hover:bg-bronze hover:text-white"
            >
              Back to lyrics archive
              <LyricsArchiveIcon name="arrow" size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
