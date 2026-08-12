import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./constants";
import type { Film, JournalArticle, Lyric } from "@/types";
import type { JsonLdObject } from "@/components/seo/SEOJsonLd";
import type { BreadcrumbItem } from "@/components/ui/Breadcrumbs";

export function personSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vivek",
    jobTitle: "Lyricist",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    knowsLanguage: "ta",
  };
}

export function websiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };
}

export function collectionPageSchema(name: string, description: string, url: string): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${SITE_URL}${url}`,
  };
}

export function lyricSchema(lyric: Lyric): JsonLdObject[] {
  const musicComposition: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "MusicComposition",
    name: lyric.title,
    alternativeHeadline: lyric.tamilTitle,
    lyricist: { "@type": "Person", name: lyric.lyricist },
    composer: lyric.composer.map((c) => ({ "@type": "Person", name: c })),
    inLanguage: "ta",
    datePublished: lyric.publishedAt,
    about: lyric.theme.join(", "),
    lyrics: {
      "@type": "CreativeWork",
      text: lyric.tamilLyrics.map((l) => l.tamil).join("\n"),
    },
    includedInDataCatalog: SITE_NAME,
    url: `${SITE_URL}/lyrics/${lyric.slug}`,
  };

  const musicRecording: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: lyric.title,
    byArtist: lyric.singers.map((s) => ({ "@type": "Person", name: s })),
    inAlbum: {
      "@type": "MusicAlbum",
      name: lyric.film.name,
    },
    recordingOf: { "@type": "MusicComposition", name: lyric.title },
    datePublished: String(lyric.film.year),
  };

  return [musicComposition, musicRecording];
}

export function filmSchema(film: Film): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: film.name,
    alternateName: film.tamilName,
    datePublished: String(film.year),
    director: { "@type": "Person", name: film.director },
    musicBy: film.composer.map((c) => ({ "@type": "Person", name: c })),
    actor: film.actors.map((a) => ({ "@type": "Person", name: a })),
    description: film.overview,
    url: `${SITE_URL}/films/${film.slug}`,
  };
}

export function articleSchema(article: JournalArticle): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: article.author },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    articleSection: article.category,
    url: `${SITE_URL}/journal/${article.slug}`,
  };
}

export function faqSchema(entries: { question: string; answer: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };
}
