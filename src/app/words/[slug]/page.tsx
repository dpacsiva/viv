import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchWordBySlug, fetchWordsList } from "@/features/words/wordsApi";
import { fetchThemesList } from "@/features/themes/themesApi";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { RelatedContent } from "@/components/content/RelatedContent";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/jsonLd";

export async function generateStaticParams() {
  const { items } = await fetchWordsList({ pageSize: 100 });
  return items.map((word) => ({ slug: word.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const word = await fetchWordBySlug(slug);
    return {
      title: word.seo.title,
      description: word.seo.description,
      keywords: word.seo.keywords,
      alternates: { canonical: `/words/${word.slug}` },
    };
  } catch {
    return { title: "Word Not Found" };
  }
}

export default async function WordDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let word;
  try {
    word = await fetchWordBySlug(slug);
  } catch {
    notFound();
  }

  const [allWords, themes] = await Promise.all([fetchWordsList({ pageSize: 100 }), fetchThemesList()]);
  const relatedWords = word.relatedWordSlugs
    .map((s) => allWords.items.find((w) => w.slug === s))
    .filter((w): w is NonNullable<typeof w> => Boolean(w));
  const relatedThemes = word.relatedThemes
    .map((s) => themes.items.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Words", href: "/words" },
          { label: word.transliteration },
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Words", href: "/words" }, { label: word.transliteration }]} />

      <header className="mt-6">
        <span lang="ta" className="block font-serif text-6xl text-ink sm:text-7xl">
          {word.tamil}
        </span>
        <EditorialHeading as="h1" size="md" className="mt-3 !text-slate">
          {word.transliteration}
        </EditorialHeading>
        <p className="mt-1 font-sans text-sm text-slate">Pronounced: {word.pronunciation}</p>
        <p className="mt-4 max-w-xl font-sans text-lg text-ink">{word.meaning}</p>
      </header>

      <section className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-2">
        <div>
          <SectionLabel>Word Origin</SectionLabel>
          <p className="mt-2 font-sans text-sm leading-relaxed text-ink/85">{word.origin}</p>
        </div>
        <div>
          <SectionLabel>Grammar</SectionLabel>
          <p className="mt-2 font-sans text-sm leading-relaxed text-ink/85">{word.grammar}</p>
        </div>
        <div>
          <SectionLabel>Cultural Context</SectionLabel>
          <p className="mt-2 font-sans text-sm leading-relaxed text-ink/85">{word.culturalContext}</p>
        </div>
        <div>
          <SectionLabel>Literary Context</SectionLabel>
          <p className="mt-2 font-sans text-sm leading-relaxed text-ink/85">{word.literaryContext}</p>
        </div>
      </section>

      <section className="mt-12 border-t border-border pt-10">
        <SectionLabel>Why Vivek Used This Word</SectionLabel>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/85">{word.whyVivekUsedIt}</p>
      </section>

      <section className="mt-12 border-t border-border pt-10">
        <SectionLabel>
          Songs Containing This Word ({word.occurrences.reduce((sum, o) => sum + o.count, 0)} occurrences)
        </SectionLabel>
        <ul className="mt-4 flex flex-col gap-3">
          {word.occurrences.map((occ) => (
            <li key={occ.lyricId} className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3">
              <Link href={`/lyrics/${occ.lyricSlug}`} className="font-serif text-lg text-ink hover:text-bronze">
                {occ.songTitle}
              </Link>
              <span className="font-sans text-xs text-slate">
                {occ.count} {occ.count === 1 ? "occurrence" : "occurrences"}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 flex flex-col gap-8 border-t border-border pt-10">
        <RelatedContent
          label="Related Words"
          items={relatedWords.map((w) => ({ title: `${w.tamil} (${w.transliteration})`, subtitle: w.meaning, href: `/words/${w.slug}` }))}
        />
        <RelatedContent
          label="Related Themes"
          items={relatedThemes.map((t) => ({ title: t.name, href: `/themes/${t.slug}` }))}
        />
      </div>
    </div>
  );
}
