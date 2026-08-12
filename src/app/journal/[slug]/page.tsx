import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchJournalBySlug, fetchJournalList } from "@/features/journal/journalApi";
import { fetchLyricsList } from "@/features/lyrics/lyricsApi";
import { fetchFilmsList } from "@/features/films/filmsApi";
import { fetchWordsList } from "@/features/words/wordsApi";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { EditorialArt } from "@/components/media/EditorialArt";
import { ShareButton } from "@/components/ui/ShareButton";
import { RelatedContent } from "@/components/content/RelatedContent";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, articleSchema } from "@/lib/jsonLd";
import { SITE_URL } from "@/lib/constants";

export async function generateStaticParams() {
  const { items } = await fetchJournalList({ pageSize: 100 });
  return items.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await fetchJournalBySlug(slug);
    return {
      title: article.seo.title,
      description: article.seo.description,
      keywords: article.seo.keywords,
      alternates: { canonical: `/journal/${article.slug}` },
      openGraph: { type: "article", title: article.seo.title, description: article.seo.description },
    };
  } catch {
    return { title: "Article Not Found" };
  }
}

export default async function JournalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let article;
  try {
    article = await fetchJournalBySlug(slug);
  } catch {
    notFound();
  }

  const [allLyrics, allFilms, allWords, allJournal] = await Promise.all([
    fetchLyricsList({ pageSize: 100 }),
    fetchFilmsList({ pageSize: 100 }),
    fetchWordsList({ pageSize: 100 }),
    fetchJournalList({ pageSize: 100 }),
  ]);

  const relatedLyrics = allLyrics.items.filter((l) => (article.relatedLyricSlugs || []).includes(l.slug));
  const relatedFilms = allFilms.items.filter((f) => (article.relatedFilmSlugs || []).includes(f.slug));
  const relatedWords = allWords.items.filter((w) => (article.relatedWordSlugs || []).includes(w.slug));
  const relatedJournal = allJournal.items.filter((a) => (article.relatedJournalSlugs || []).includes(a.slug));

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Journal", href: "/journal" },
            { label: article.title },
          ]),
          articleSchema(article),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/journal" }, { label: article.title }]} />

      <header className="mt-6">
        <SectionLabel>{article.category}</SectionLabel>
        <EditorialHeading as="h1" size="xl" className="mt-3">
          {article.title}
        </EditorialHeading>
        <p className="mt-3 max-w-xl font-sans text-lg text-slate">{article.subtitle}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-sm text-slate">
          <span>{article.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{article.readingTimeMinutes} min read</span>
        </div>
      </header>

      <EditorialArt variant={article.heroImageVariant} alt={article.title} className="mt-8 aspect-[16/9] w-full" rounded="lg" />

      <div className="prose-none mt-10 flex flex-col gap-6">
        {article.body.map((paragraph, i) => (
          <p key={i} className="font-sans text-lg leading-relaxed text-ink/90">
            {paragraph}
          </p>
        ))}
      </div>

      {article.pullQuotes && article.pullQuotes.length > 0 && (
        <div className="my-10 border-y border-border py-8">
          {article.pullQuotes.map((pq, i) => (
            <blockquote key={i} className="font-serif text-2xl italic leading-snug text-bronze">
              “{pq.quote}”
              {pq.attribution && <footer className="mt-2 font-sans text-sm not-italic text-slate">— {pq.attribution}</footer>}
            </blockquote>
          ))}
        </div>
      )}

      <ShareButton title={article.title} text={article.excerpt} url={`${SITE_URL}/journal/${article.slug}`} className="mt-4" />

      <div className="mt-14 flex flex-col gap-10 border-t border-border pt-10">
        <RelatedContent label="Related Lyrics" items={relatedLyrics.map((l) => ({ title: l.title, subtitle: l.film.name, href: `/lyrics/${l.slug}` }))} />
        <RelatedContent label="Related Films" items={relatedFilms.map((f) => ({ title: f.name, subtitle: String(f.year), href: `/films/${f.slug}` }))} />
        <RelatedContent label="Related Words" items={relatedWords.map((w) => ({ title: `${w.tamil} (${w.transliteration})`, href: `/words/${w.slug}` }))} />
        <RelatedContent label="Related Journal Entries" items={relatedJournal.map((a) => ({ title: a.title, subtitle: a.category, href: `/journal/${a.slug}` }))} />
      </div>
    </article>
  );
}
