import type { RootState } from "@/store";

export const selectJournalItems = (state: RootState) => state.journal.items;
export const selectJournalStatus = (state: RootState) => state.journal.status;
export const selectJournalError = (state: RootState) => state.journal.error;
export const selectJournalFilters = (state: RootState) => state.journal.filters;
export const selectCurrentJournalArticle = (state: RootState) => state.journal.current;
export const selectJournalDetailStatus = (state: RootState) => state.journal.detailStatus;
export const selectJournalDetailError = (state: RootState) => state.journal.detailError;
