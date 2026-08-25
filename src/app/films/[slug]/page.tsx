import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchFilmBySlug, fetchFilmsList } from "@/features/films/filmsApi";
import { fetchLyricsList } from "@/features/lyrics/lyricsApi";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { MetadataList } from "@/components/ui/MetadataList";
import { EditorialArt } from "@/components/media/EditorialArt";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, filmSchema } from "@/lib/jsonLd";

export async function generateStaticParams() {
  const { items } = await fetchFilmsList({ pageSize: 100 });
  return items.map((film) => ({ slug: film.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const film = await fetchFilmBySlug(slug);
    return {
      title: film.seo.title,
      description: film.seo.description,
      keywords: film.seo.keywords,
      alternates: { canonical: `/films/${film.slug}` },
    };
  } catch {
    return { title: "Film Not Found" };
  }
}

export default async function FilmDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let film;
  try {
    film = await fetchFilmBySlug(slug);
  } catch {
    notFound();
  }

  const allLyrics = await fetchLyricsList({ pageSize: 100 });
  const filmLyrics = allLyrics.items.filter((l) => l.film.slug === film.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8" style={{ ["--film-accent" as string]: film.accentColor }}>
      <SEOJsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Other works", href: "/other-works" },
            { label: film.name },
          ]),
          filmSchema(film),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Other works", href: "/other-works" }, { label: film.name }]} />

      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-[200px_1fr]">
        <EditorialArt
          variant={film.posterVariant}
          monogram={film.name.charAt(0)}
          alt={`${film.name} poster`}
          className="aspect-[2/3] w-full max-w-[200px]"
          rounded="lg"
        />
        <div>
          <SectionLabel>
            <span style={{ color: film.accentColor }}>{film.year}</span>
          </SectionLabel>
          <EditorialHeading as="h1" size="lg" className="mt-2">
            {film.name}
          </EditorialHeading>
          {film.tamilName && (
            <p lang="ta" className="mt-1 font-serif text-xl text-slate">
              {film.tamilName}
            </p>
          )}
          <MetadataList
            className="mt-6"
            entries={[
              { label: "Director", value: film.director },
              { label: "Composer", value: film.composer.join(", ") },
              { label: "Actors", value: film.actors.join(", ") },
              { label: "Lyrics by Vivek", value: String(filmLyrics.length) },
            ]}
          />
        </div>
      </div>

      <section className="mt-12 flex flex-col gap-8 border-t border-border pt-10">
        <div>
          <SectionLabel>Film Overview</SectionLabel>
          <p className="mt-3 font-sans text-base leading-relaxed text-ink/85">{film.overview}</p>
        </div>
        <div>
          <SectionLabel>Vivek&rsquo;s Contribution</SectionLabel>
          <p className="mt-3 font-sans text-base leading-relaxed text-ink/85">{film.vivekContribution}</p>
        </div>
      </section>

      <section className="mt-12 border-t border-border pt-10">
        <SectionLabel>Lyrics Written by Vivek</SectionLabel>
        <div className="mt-4 flex flex-col gap-6">
          {filmLyrics.map((lyric) => (
            <div key={lyric.id} className="rounded-lg border border-border bg-white p-5">
              <h3 className="font-serif text-xl text-ink">
                <Link href={`/lyrics/${lyric.slug}`} className="hover:text-bronze">
                  {lyric.title}
                </Link>
                {lyric.tamilTitle && (
                  <span lang="ta" className="ml-2 font-serif text-lg text-slate">
                    {lyric.tamilTitle}
                  </span>
                )}
              </h3>
              <p lang="ta" className="mt-2 font-serif text-base text-ink/80">
                {lyric.excerpt}
              </p>
              {lyric.context && <p className="mt-2 font-sans text-sm text-slate">{lyric.context}</p>}
              {lyric.writingNotes && (
                <p className="mt-2 font-sans text-sm text-slate">
                  <span className="font-semibold text-ink">Writing notes: </span>
                  {lyric.writingNotes}
                </p>
              )}
              <Link
                href={`/lyrics/${lyric.slug}`}
                className="mt-3 inline-block font-sans text-sm font-medium text-bronze hover:underline"
              >
                Read Lyrics →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {film.awards && film.awards.length > 0 && (
        <section className="mt-12 border-t border-border pt-10">
          <SectionLabel>Awards</SectionLabel>
          <ul className="mt-4 flex flex-col gap-1 font-sans text-sm text-ink/85">
            {film.awards.map((a) => (
              <li key={a.id}>
                {a.name} ({a.year}) — {a.category} {a.won ? "· Won" : "· Nominated"}
              </li>
            ))}
          </ul>
        </section>
      )}

      {film.gallery && film.gallery.length > 0 && (
        <section className="mt-12 border-t border-border pt-10">
          <SectionLabel>Gallery</SectionLabel>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {film.gallery.map((g) => (
              <figure key={g.caption}>
                <EditorialArt variant={g.variant} alt={g.caption} className="aspect-square w-full" />
                <figcaption className="mt-2 font-sans text-xs text-slate">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
