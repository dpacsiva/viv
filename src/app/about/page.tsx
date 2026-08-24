import type { Metadata } from "next";
import Link from "next/link";
import { PortraitArt } from "@/components/media/PortraitArt";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "About Vivek",
  description:
    "About Vivek — Tamil lyricist, poet and dreamer. From engineering and law to fifteen years of writing for Tamil cinema.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd data={[breadcrumbSchema([{ label: "Home", href: "/" }, { label: "About" }]), personSchema()]} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-[280px_1fr]">
        <PortraitArt className="aspect-[4/5] w-full" />
        <div>
          <SectionLabel>About Vivek</SectionLabel>
          <EditorialHeading as="h1" size="lg" className="mt-2">
            A poet who found
            <br />
            his place in cinema.
          </EditorialHeading>
          <p className="mt-4 font-sans text-base leading-relaxed text-slate">
            Vivek writes in the space between poetry and cinema — verses built for the screen that still read like
            they were meant only for a notebook. Trained first as an engineer, then as a lawyer, he came to film
            writing by way of a chance meeting rather than a plan, and has spent the fifteen years since building an
            archive of lyrics that Tamil audiences carry with them long after the credits roll.
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed text-slate">
            His writing spans tender love duets, mother-themed tributes, stadium-shaking mass anthems and quiet
            nature verses — but every line, he says, is built the same way: cut down until only the necessary word
            remains.
          </p>
          <Link href="/profile" className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-bronze hover:underline">
            Explore the Full Journey
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <section className="mt-14 border-t border-border pt-10">
        <SectionLabel>In His Own Words</SectionLabel>
        <blockquote className="mt-4 font-serif text-2xl italic leading-relaxed text-ink sm:text-3xl">
          “I don&rsquo;t just write for the moment. I write for the memory. If a line stays in your heart, my song
          has done its job.”
        </blockquote>
        <p className="mt-3 font-serif text-xl italic text-bronze">— Vivek</p>
      </section>
    </div>
  );
}
