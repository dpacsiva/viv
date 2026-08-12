import type MockAdapter from "axios-mock-adapter";
import { mockLyrics } from "@/data";
import type { HomeArchiveData } from "@/types";

export function buildHomeArchiveData(): HomeArchiveData {
  const featuredLyric = mockLyrics.find((l) => l.slug === "naalai-namadhe") || mockLyrics[0];

  return {
    stats: [
      { id: "st1", value: "100+", label: "Films", description: "Across Tamil cinema", icon: "quill" },
      { id: "st2", value: "1000+", label: "Lyrics", description: "Written with love", icon: "book" },
      { id: "st3", value: "15+", label: "Years", description: "Of writing journey", icon: "leaf" },
      { id: "st4", value: "Millions", label: "Hearts", description: "Connected forever", icon: "heart" },
    ],
    featuredLyric,
    latestItems: [
      {
        id: "la1",
        category: "Writing Process",
        title: "The Making of ‘Vetrikodi Kattu’",
        description: "Behind the lines of a mass anthem that changed a career.",
        thumbnailVariant: "notebook-arena",
        href: "/journal/the-making-of-vetrikodi-kattu",
        ctaLabel: "Read Story",
      },
      {
        id: "la2",
        category: "Journal",
        title: "Why I Write About Tamil",
        description: "A note from Vivek on language as both subject and instrument.",
        thumbnailVariant: "notebook-script",
        href: "/journal/why-i-write-about-tamil",
        ctaLabel: "Read Article",
      },
      {
        id: "la3",
        category: "Awards",
        title: "Honoured for Words That Matter",
        description: "A journey of recognition across a decade of Tamil cinema.",
        thumbnailVariant: "trophy",
        href: "/awards",
        ctaLabel: "Read Story",
      },
      {
        id: "la4",
        category: "Handwritten Archive",
        title: "Drafts Before the Ink Dried",
        description: "Browse original handwritten pages from Vivek's personal notebooks.",
        thumbnailVariant: "handwritten-page",
        href: "/handwritten-archive",
        ctaLabel: "Explore Manuscripts",
      },
    ],
    closingQuote: {
      quote:
        "I don't just write for the moment. I write for the memory. If a line stays in your heart, my song has done its job.",
      signatureVariant: "signature-1",
    },
  };
}

export function registerHomeHandlers(mock: MockAdapter) {
  mock.onGet(/\/archive\/home$/).reply(() => [200, buildHomeArchiveData()]);
}
