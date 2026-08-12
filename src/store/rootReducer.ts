import { combineReducers } from "@reduxjs/toolkit";
import archiveReducer from "@/features/archive/archiveSlice";
import lyricsReducer from "@/features/lyrics/lyricsSlice";
import filmsReducer from "@/features/films/filmsSlice";
import themesReducer from "@/features/themes/themesSlice";
import wordsReducer from "@/features/words/wordsSlice";
import journeyReducer from "@/features/journey/journeySlice";
import collaborationsReducer from "@/features/collaborations/collaborationsSlice";
import journalReducer from "@/features/journal/journalSlice";
import awardsReducer from "@/features/awards/awardsSlice";
import searchReducer from "@/features/search/searchSlice";
import uiReducer from "@/features/ui/uiSlice";

export const rootReducer = combineReducers({
  archive: archiveReducer,
  lyrics: lyricsReducer,
  films: filmsReducer,
  themes: themesReducer,
  words: wordsReducer,
  journey: journeyReducer,
  collaborations: collaborationsReducer,
  journal: journalReducer,
  awards: awardsReducer,
  search: searchReducer,
  ui: uiReducer,
});
