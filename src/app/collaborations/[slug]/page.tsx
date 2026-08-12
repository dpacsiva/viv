import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCollaboratorBySlug, fetchCollaboratorsList } from "@/features/collaborations/collaborationsApi";
import { fetchLyricsList } from "@/features/lyrics/lyricsApi";
import { fetchFilmsList } from "@/features/films/filmsApi";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialArt } from "@/components/media/EditorialArt";
import { RelatedContent } from "@/components/content/RelatedContent";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/jsonLd";

export async function generateStaticParams() {
  const { items } = await fetchCollaboratorsList();
  return items.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const collaborator = await fetchCollaboratorBySlug(slug);
    return {
      title: collaborator.seo.title,
      description: collaborator.seo.description,
      keywords: collaborator.seo.keywords,
      alternates: { canonical: `/collaborations/${collaborator.slug}` },
    };
  } catch {
    return { title: "Collaborator Not Found" };
  }
}

export default async function CollaboratorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let collaborator;
  try {
    collaborator = await fetchCollaboratorBySlug(slug);
  } catch {
    notFound();
  }

  const [allLyrics, allFilms] = await Promise.all([fetchLyricsList({ pageSize: 100 }), fetchFilmsList({ pageSize: 100 })]);
  const lyrics = allLyrics.items.filter((l) => collaborator.lyricIds.includes(l.id));
  const films = allFilms.items.filter((f) => collaborator.filmIds.includes(f.id));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Collaborations", href: "/collaborations" },
          { label: collaborator.name },
        ])}
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Collaborations", href: "/collaborations" }, { label: collaborator.name }]}
      />

      <div className="mt-6 grid grid-cols-1 items-center gap-8 sm:grid-cols-[180px_1fr]">
        <EditorialArt
          variant={collaborator.portraitVariant}
          monogram={collaborator.name.charAt(0)}
          alt={collaborator.name}
          className="aspect-square w-full max-w-[180px]"
          rounded="full"
        />
        <div>
          <SectionLabel>{collaborator.role}</SectionLabel>
          <EditorialHeading as="h1" size="lg" className="mt-2">
            {collaborator.name}
          </EditorialHeading>
          {collaborator.tamilName && (
            <p lang="ta" className="mt-1 font-serif text-xl text-slate">
              {collaborator.tamilName}
            </p>
          )}
          <p className="mt-3 max-w-xl font-sans text-base leading-relaxed text-slate">{collaborator.bio}</p>
        </div>
      </div>

      <section className="mt-12 border-t border-border pt-8">
        <SectionLabel>Notable Works</SectionLabel>
        <ul className="mt-3 list-inside list-disc font-sans text-sm text-ink/85">
          {collaborator.notableWorks.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </section>

      <div className="mt-12 flex flex-col gap-10 border-t border-border pt-8">
        <RelatedContent label="Films" items={films.map((f) => ({ title: f.name, subtitle: String(f.year), href: `/films/${f.slug}` }))} />
        <RelatedContent
          label="Lyrics"
          items={lyrics.map((l) => ({ title: l.title, subtitle: l.film.name, href: `/lyrics/${l.slug}` }))}
        />
      </div>
    </div>
  );
}
