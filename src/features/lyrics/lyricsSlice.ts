import { createListFeatureSlice } from "@/store/createListFeatureSlice";
import type { Lyric } from "@/types";

export const lyricsSlice = createListFeatureSlice<Lyric>("lyrics");
export const lyricsActions = lyricsSlice.actions;
export default lyricsSlice.reducer;
