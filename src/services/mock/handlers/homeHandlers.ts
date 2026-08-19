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
    latestItems: [],
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
