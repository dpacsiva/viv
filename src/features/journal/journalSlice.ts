import { createListFeatureSlice } from "@/store/createListFeatureSlice";
import type { JournalArticle } from "@/types";

export const journalSlice = createListFeatureSlice<JournalArticle>("journal");
export const journalActions = journalSlice.actions;
export default journalSlice.reducer;
