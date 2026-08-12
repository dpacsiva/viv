import type { Metadata } from "next";
import { fetchWordsList } from "@/features/words/wordsApi";
import { WordsExplorerClient } from "@/components/words/WordsExplorerClient";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Word Explorer — Tamil Words in Vivek's Lyrics",
  description:
    "Search Tamil words used in lyricist Vivek's songs — meaning, origin, grammar, cultural context and the songs each word appears in.",
  alternates: { canonical: "/words" },
};

export default async function WordsPage() {
  const initialData = await fetchWordsList({ pageSize: 30 });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Words" }]),
          collectionPageSchema("Word Explorer", "Tamil words used across lyricist Vivek's songs.", "/words"),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Words" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        Word Explorer
      </EditorialHeading>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">
        Search any Tamil word from Vivek&rsquo;s lyrics to see its meaning, origin, grammar, cultural and literary
        context, and every song it appears in.
      </p>

      <div className="mt-8">
        <WordsExplorerClient initialData={initialData} />
      </div>
    </div>
  );
}
