import type { RootState } from "@/store";

export const selectLyricsItems = (state: RootState) => state.lyrics.items;
export const selectLyricsStatus = (state: RootState) => state.lyrics.status;
export const selectLyricsError = (state: RootState) => state.lyrics.error;
export const selectLyricsPagination = (state: RootState) => ({
  total: state.lyrics.total,
  page: state.lyrics.page,
  pageSize: state.lyrics.pageSize,
  hasMore: state.lyrics.hasMore,
});
export const selectLyricsFilters = (state: RootState) => state.lyrics.filters;
export const selectLyricsQuery = (state: RootState) => state.lyrics.query;
export const selectLyricsSort = (state: RootState) => state.lyrics.sort;
export const selectCurrentLyric = (state: RootState) => state.lyrics.current;
export const selectLyricDetailStatus = (state: RootState) => state.lyrics.detailStatus;
export const selectLyricDetailError = (state: RootState) => state.lyrics.detailError;
