import type { Metadata } from "next";
import { fetchJournalList } from "@/features/journal/journalApi";
import { JournalListClient } from "@/components/journal/JournalListClient";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Journal — Behind the Song, Writing Process & Interviews",
  description:
    "The Vivek Journal — essays and interviews on writing process, Tamil, cinema and the stories behind the songs.",
  alternates: { canonical: "/journal" },
};

export default async function JournalPage() {
  const initialData = await fetchJournalList({ pageSize: 24, sort: "latest" });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Journal" }]),
          collectionPageSchema("Journal", "Essays and interviews from Vivek.", "/journal"),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        The Journal
      </EditorialHeading>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">
        A magazine of essays, interviews and behind-the-song notes — the thinking behind the writing.
      </p>

      <div className="mt-10">
        <JournalListClient initialData={initialData} />
      </div>
    </div>
  );
}
