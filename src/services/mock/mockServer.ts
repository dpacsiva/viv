import type { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import { registerLyricsHandlers } from "./handlers/lyricsHandlers";
import { registerFilmsHandlers } from "./handlers/filmsHandlers";
import { registerThemesHandlers } from "./handlers/themesHandlers";
import { registerWordsHandlers } from "./handlers/wordsHandlers";
import { registerCollaboratorsHandlers } from "./handlers/collaboratorsHandlers";
import { registerJournalHandlers } from "./handlers/journalHandlers";
import { registerAwardsHandlers } from "./handlers/awardsHandlers";
import { registerJourneyHandlers } from "./handlers/journeyHandlers";
import { registerSearchHandlers } from "./handlers/searchHandlers";
import { registerHomeHandlers } from "./handlers/homeHandlers";
import { registerContactHandlers } from "./handlers/contactHandlers";

let registered = false;

/**
 * Attaches an in-memory mock backend to the shared axios instance so every
 * feature API file can make real axios requests during frontend-only
 * development. Delete this call in axiosClient.ts once a real backend is
 * live behind NEXT_PUBLIC_API_BASE_URL — no other file needs to change.
 */
export function registerMockHandlers(client: AxiosInstance) {
  if (registered) return;
  registered = true;

  const mock = new MockAdapter(client, { delayResponse: 350 });

  registerLyricsHandlers(mock);
  registerFilmsHandlers(mock);
  registerThemesHandlers(mock);
  registerWordsHandlers(mock);
  registerCollaboratorsHandlers(mock);
  registerJournalHandlers(mock);
  registerAwardsHandlers(mock);
  registerJourneyHandlers(mock);
  registerSearchHandlers(mock);
  registerHomeHandlers(mock);
  registerContactHandlers(mock);
}
