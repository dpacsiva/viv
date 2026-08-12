import type { RootState } from "@/store";

export const selectWordsItems = (state: RootState) => state.words.items;
export const selectWordsStatus = (state: RootState) => state.words.status;
export const selectWordsError = (state: RootState) => state.words.error;
export const selectWordsQuery = (state: RootState) => state.words.query;
export const selectCurrentWord = (state: RootState) => state.words.current;
export const selectWordDetailStatus = (state: RootState) => state.words.detailStatus;
export const selectWordDetailError = (state: RootState) => state.words.detailError;
