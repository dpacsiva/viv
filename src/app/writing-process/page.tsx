import type { Metadata } from "next";
import { fetchJournalList } from "@/features/journal/journalApi";
import { JournalCard } from "@/components/cards/JournalCard";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Writing Process — How Vivek Writes a Song",
  description:
    "An inside look at lyricist Vivek's writing process — longhand drafts, research trips and the discipline behind every song.",
  alternates: { canonical: "/writing-process" },
};

export default async function WritingProcessPage() {
  const { items } = await fetchJournalList({ category: "Writing Process", sort: "latest" });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Writing Process" }])} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Writing Process" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        The Writing Process
      </EditorialHeading>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">
        Vivek writes every first draft longhand, usually after a research trip to wherever a song is set. These are
        the stories of how individual lines came to be.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((article) => (
          <JournalCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
