import type { Metadata } from "next";
import { fetchFilmsList } from "@/features/films/filmsApi";
import { fetchCollaboratorsList } from "@/features/collaborations/collaborationsApi";
import { EditorialArt } from "@/components/media/EditorialArt";
import { PortraitArt } from "@/components/media/PortraitArt";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Gallery — Vivek Through the Years",
  description: "A visual gallery of moments, sets and collaborators from lyricist Vivek's fifteen-year career.",
  alternates: { canonical: "/gallery" },
};

export default async function GalleryPage() {
  const [{ items: films }, { items: collaborators }] = await Promise.all([
    fetchFilmsList({ pageSize: 100 }),
    fetchCollaboratorsList(),
  ]);

  const setPhotos = films.flatMap((film) => (film.gallery || []).map((g) => ({ ...g, subtitle: film.name })));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Gallery" }])} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        Gallery
      </EditorialHeading>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">
        Moments from sets, studios and stages — a visual companion to fifteen years of writing.
      </p>

      <div className="mt-10 columns-2 gap-4 sm:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
        <PortraitArt className="aspect-[4/5] w-full" alt="Editorial portrait of Vivek" />
        {setPhotos.map((photo) => (
          <figure key={photo.caption}>
            <EditorialArt variant={photo.variant} alt={photo.caption} className="aspect-[4/3] w-full" rounded="md" />
            <figcaption className="mt-1 font-sans text-xs text-slate">
              {photo.caption} — {photo.subtitle}
            </figcaption>
          </figure>
        ))}
        {collaborators.map((collaborator) => (
          <figure key={collaborator.id}>
            <EditorialArt
              variant={collaborator.portraitVariant}
              monogram={collaborator.name.charAt(0)}
              alt={`With ${collaborator.name}`}
              className="aspect-square w-full"
              rounded="md"
            />
            <figcaption className="mt-1 font-sans text-xs text-slate">With {collaborator.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
