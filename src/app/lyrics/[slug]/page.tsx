import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchLyricBySlug, fetchLyricsList } from "@/features/lyrics/lyricsApi";
import { fetchThemesList } from "@/features/themes/themesApi";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { MetadataList } from "@/components/ui/MetadataList";
import { ShareButton } from "@/components/ui/ShareButton";
import { ReadingModeToggle } from "@/components/lyrics/ReadingModeToggle";
import { LyricReadingSection } from "@/components/lyrics/LyricReadingSection";
import { RelatedContent } from "@/components/content/RelatedContent";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, lyricSchema } from "@/lib/jsonLd";
import { SITE_URL } from "@/lib/constants";

export async function generateStaticParams() {
  const { items } = await fetchLyricsList({ pageSize: 100 });
  return items.map((lyric) => ({ slug: lyric.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const lyric = await fetchLyricBySlug(slug);
    return {
      title: lyric.seo.title,
      description: lyric.seo.description,
      keywords: lyric.seo.keywords,
      alternates: { canonical: `/lyrics/${lyric.slug}` },
      openGraph: {
        title: lyric.seo.title,
        description: lyric.seo.description,
        type: "article",
        url: `${SITE_URL}/lyrics/${lyric.slug}`,
      },
    };
  } catch {
    return { title: "Lyric Not Found" };
  }
}

export default async function LyricDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let lyric;
  try {
    lyric = await fetchLyricBySlug(slug);
  } catch {
    notFound();
  }

  const [allLyrics, themes] = await Promise.all([
    fetchLyricsList({ pageSize: 100 }),
    fetchThemesList(),
  ]);

  const relatedLyrics = (lyric.relatedLyrics || [])
    .map((relSlug) => allLyrics.items.find((l) => l.slug === relSlug))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  const themeItems = lyric.theme
    .map((slug) => themes.items.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Lyrics", href: "/lyrics" },
            { label: lyric.title },
          ]),
          ...lyricSchema(lyric),
        ]}
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Lyrics", href: "/lyrics" }, { label: lyric.title }]}
      />

      <header className="mt-4">
        <SectionLabel>
          {lyric.film.name} · {lyric.film.year}
        </SectionLabel>
        <EditorialHeading as="h1" size="xl" className="mt-3">
          {lyric.title}
        </EditorialHeading>
        {lyric.tamilTitle && (
          <p lang="ta" className="mt-2 font-serif text-2xl text-slate">
            {lyric.tamilTitle}
          </p>
        )}
        {lyric.context && <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">{lyric.context}</p>}

        <MetadataList
          className="mt-8"
          entries={[
            { label: "Lyricist", value: lyric.lyricist },
            { label: "Composer", value: lyric.composer.join(", ") },
            { label: "Singers", value: lyric.singers.join(", ") },
            { label: "Director", value: lyric.director || "" },
            { label: "Actors", value: (lyric.actors || []).join(", ") },
            { label: "Theme", value: lyric.theme.map((t) => t.replace(/-/g, " ")).join(", ") },
            { label: "Mood", value: lyric.mood.join(", ") },
            { label: "Language", value: lyric.language },
          ]}
        />

        <div className="mt-6">
          <ShareButton title={lyric.title} text={lyric.excerpt} url={`${SITE_URL}/lyrics/${lyric.slug}`} />
        </div>
      </header>

      <section className="mt-12 border-t border-border pt-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SectionLabel as="span">Read the Lyric</SectionLabel>
          <ReadingModeToggle />
        </div>
        <div className="mt-8">
          <LyricReadingSection lines={lyric.tamilLyrics} />
        </div>
      </section>

      <section className="mt-14 flex flex-col gap-10 border-t border-border pt-10">
        {lyric.behindTheSong && (
          <div>
            <SectionLabel>Story Behind the Song</SectionLabel>
            <p className="mt-3 font-sans text-base leading-relaxed text-ink/85">{lyric.behindTheSong}</p>
          </div>
        )}
        {lyric.filmSituation && (
          <div>
            <SectionLabel>Film Situation</SectionLabel>
            <p className="mt-3 font-sans text-base leading-relaxed text-ink/85">{lyric.filmSituation}</p>
          </div>
        )}
        {lyric.wordChoiceNotes && (
          <div>
            <SectionLabel>Why These Words Were Chosen</SectionLabel>
            <p className="mt-3 font-sans text-base leading-relaxed text-ink/85">{lyric.wordChoiceNotes}</p>
          </div>
        )}
        {lyric.importantWords && lyric.importantWords.length > 0 && (
          <div>
            <SectionLabel>Important Tamil Words</SectionLabel>
            <ul className="mt-3 flex flex-col gap-3">
              {lyric.importantWords.map((w) => (
                <li key={w.wordSlug}>
                  <span className="font-serif text-lg text-bronze" lang="ta">
                    {w.tamil}
                  </span>
                  <span className="ml-2 font-sans text-sm text-slate">— {w.meaning}</span>
                  {w.reason && <p className="mt-1 font-sans text-sm text-slate">{w.reason}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
        {lyric.writingNotes && (
          <div>
            <SectionLabel>Writing Notes</SectionLabel>
            <p className="mt-3 font-sans text-base leading-relaxed text-ink/85">{lyric.writingNotes}</p>
          </div>
        )}
        {lyric.literaryDevices && lyric.literaryDevices.length > 0 && (
          <div>
            <SectionLabel>Literary Devices</SectionLabel>
            <ul className="mt-3 list-inside list-disc font-sans text-sm text-ink/85">
              {lyric.literaryDevices.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        )}
        {lyric.culturalReferences && lyric.culturalReferences.length > 0 && (
          <div>
            <SectionLabel>Cultural References</SectionLabel>
            <ul className="mt-3 list-inside list-disc font-sans text-sm text-ink/85">
              {lyric.culturalReferences.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        )}
        {lyric.awards && lyric.awards.length > 0 && (
          <div>
            <SectionLabel>Awards</SectionLabel>
            <ul className="mt-3 flex flex-col gap-1 font-sans text-sm text-ink/85">
              {lyric.awards.map((a) => (
                <li key={a.id}>
                  {a.name} ({a.year}) — {a.category} {a.won ? "· Won" : "· Nominated"}
                </li>
              ))}
            </ul>
          </div>
        )}
        {lyric.officialReferences && lyric.officialReferences.length > 0 && (
          <div>
            <SectionLabel>Official References</SectionLabel>
            <ul className="mt-3 flex flex-col gap-1">
              {lyric.officialReferences.map((ref) => (
                <li key={ref.label}>
                  <Link href={ref.url} className="font-sans text-sm text-bronze hover:underline">
                    {ref.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <div className="mt-14 flex flex-col gap-10 border-t border-border pt-10">
        <RelatedContent
          label="Related Lyrics"
          items={relatedLyrics.map((l) => ({ title: l.title, subtitle: l.film.name, href: `/lyrics/${l.slug}` }))}
        />
        <RelatedContent
          label="Related Film"
          items={[{ title: lyric.film.name, subtitle: String(lyric.film.year), href: `/films/${lyric.film.slug}` }]}
        />
        <RelatedContent
          label="Related Themes"
          items={themeItems.map((t) => ({ title: t.name, href: `/themes/${t.slug}` }))}
        />
      </div>
    </div>
  );
}
