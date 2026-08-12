import type { RootState } from "@/store";

export const selectHomeArchiveData = (state: RootState) => state.archive.home;
export const selectHomeArchiveStatus = (state: RootState) => state.archive.status;
export const selectHomeArchiveError = (state: RootState) => state.archive.error;
