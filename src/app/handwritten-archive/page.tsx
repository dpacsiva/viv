import type { Metadata } from "next";
import Link from "next/link";
import { fetchFilmsList } from "@/features/films/filmsApi";
import { EditorialArt } from "@/components/media/EditorialArt";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmptyState } from "@/components/states/EmptyState";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Handwritten Archive — Original Drafts & Notebooks",
  description:
    "Browse original handwritten drafts from lyricist Vivek's personal notebooks, before ink became a finished song.",
  alternates: { canonical: "/handwritten-archive" },
};

export default async function HandwrittenArchivePage() {
  const { items: films } = await fetchFilmsList({ pageSize: 100 });
  const drafts = films.flatMap((film) =>
    (film.gallery || []).map((g) => ({ ...g, filmName: film.name, filmSlug: film.slug }))
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Handwritten Archive" }])} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Handwritten Archive" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        The Handwritten Archive
      </EditorialHeading>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">
        Drafts before the ink dried — original pages from Vivek&rsquo;s personal notebooks, kept exactly as they were
        first written.
      </p>

      {drafts.length === 0 ? (
        <div className="mt-10">
          <EmptyState title="No drafts catalogued yet" description="Check back soon for more handwritten pages." />
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {drafts.map((draft) => (
            <Link key={draft.caption} href={`/films/${draft.filmSlug}`} className="group flex flex-col gap-2">
              <EditorialArt
                variant={draft.variant}
                alt={draft.caption}
                className="aspect-[3/4] w-full transition-transform group-hover:-translate-y-1"
                rounded="md"
              />
              <p className="font-sans text-sm text-ink">{draft.caption}</p>
              <p className="font-sans text-xs text-slate">{draft.filmName}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
