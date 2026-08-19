import type { Metadata } from "next";
import { mockQuotes } from "@/data";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Quotes by Vivek",
  description: "A small collection of thoughts and lines from Tamil lyricist Vivek.",
  alternates: { canonical: "/quotes" },
};

export default function QuotesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Quotes" }]),
          collectionPageSchema("Quotes", "Thoughts and lines from Tamil lyricist Vivek.", "/quotes"),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Quotes" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        Quotes
      </EditorialHeading>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">
        A few thoughts on words, memory and the discipline behind a lyric.
      </p>

      <div className="mt-12 flex flex-col gap-8">
        {mockQuotes.map((quote) => (
          <blockquote key={quote.id} className="border-t border-border pt-8 first:border-t-0 first:pt-0">
            <SectionLabel>{quote.context || "In his own words"}</SectionLabel>
            <p className="mt-3 font-serif text-2xl italic leading-relaxed text-ink sm:text-3xl">“{quote.quote}”</p>
            <cite className="mt-4 block font-serif text-lg not-italic text-bronze">— {quote.attribution}</cite>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
