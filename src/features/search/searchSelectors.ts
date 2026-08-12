import type { RootState } from "@/store";

export const selectSearchQuery = (state: RootState) => state.search.query;
export const selectSearchResponse = (state: RootState) => state.search.response;
export const selectSearchStatus = (state: RootState) => state.search.status;
export const selectSearchError = (state: RootState) => state.search.error;
