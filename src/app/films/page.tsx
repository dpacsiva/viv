import type { Metadata } from "next";
import { fetchFilmsList } from "@/features/films/filmsApi";
import { FilmsArchiveClient, type FilmsFilterOptions } from "@/components/films/FilmsArchiveClient";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Filmography — Every Film Vivek Has Written For",
  description:
    "Browse the complete filmography of lyricist Vivek across Tamil cinema — poster, list and timeline views, filterable by year, actor, director and composer.",
  alternates: { canonical: "/films" },
};

function unique(values: (string | undefined)[]): string[] {
  return Array.from(new Set(values.filter((v): v is string => Boolean(v)))).sort();
}

export default async function FilmsPage() {
  const allFilms = await fetchFilmsList({ pageSize: 100 });

  const filterOptions: FilmsFilterOptions = {
    years: unique(allFilms.items.map((f) => String(f.year))).map((y) => ({ label: y, value: y })),
    actors: unique(allFilms.items.flatMap((f) => f.actors)).map((a) => ({ label: a, value: a })),
    directors: unique(allFilms.items.map((f) => f.director)).map((d) => ({ label: d, value: d })),
    composers: unique(allFilms.items.flatMap((f) => f.composer)).map((c) => ({ label: c, value: c })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Films" }]),
          collectionPageSchema("Filmography", "The complete filmography of lyricist Vivek.", "/films"),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Films" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        Filmography
      </EditorialHeading>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">
        Every film Vivek has written lyrics for, from his 2011 debut to his most recent release — browse by poster,
        list or career timeline.
      </p>

      <div className="mt-8">
        <FilmsArchiveClient initialData={allFilms} filterOptions={filterOptions} />
      </div>
    </div>
  );
}
