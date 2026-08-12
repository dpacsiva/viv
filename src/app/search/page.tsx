import type { Metadata } from "next";
import { SearchPageClient } from "@/components/search/SearchPageClient";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Vivek's words and works for lyrics, films, words, themes and journal articles.",
  robots: { index: false, follow: true },
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        Search Vivek&rsquo;s Words
      </EditorialHeading>
      <div className="mt-8">
        <SearchPageClient initialQuery={q || ""} />
      </div>
    </div>
  );
}
