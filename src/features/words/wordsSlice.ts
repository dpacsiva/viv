import { createListFeatureSlice } from "@/store/createListFeatureSlice";
import type { TamilWord } from "@/types";

export const wordsSlice = createListFeatureSlice<TamilWord>("words");
export const wordsActions = wordsSlice.actions;
export default wordsSlice.reducer;
