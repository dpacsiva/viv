import { createListFeatureSaga } from "@/store/createListFeatureSaga";
import { lyricsActions } from "./lyricsSlice";
import { fetchLyricsList, fetchLyricBySlug } from "./lyricsApi";

export const lyricsSaga = createListFeatureSaga({
  actions: lyricsActions,
  fetchList: fetchLyricsList,
  fetchDetail: fetchLyricBySlug,
});
