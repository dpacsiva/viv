import type { RootState } from "@/store";

export const selectFilmsItems = (state: RootState) => state.films.items;
export const selectFilmsStatus = (state: RootState) => state.films.status;
export const selectFilmsError = (state: RootState) => state.films.error;
export const selectFilmsPagination = (state: RootState) => ({
  total: state.films.total,
  page: state.films.page,
  pageSize: state.films.pageSize,
  hasMore: state.films.hasMore,
});
export const selectFilmsFilters = (state: RootState) => state.films.filters;
export const selectFilmsQuery = (state: RootState) => state.films.query;
export const selectCurrentFilm = (state: RootState) => state.films.current;
export const selectFilmDetailStatus = (state: RootState) => state.films.detailStatus;
export const selectFilmDetailError = (state: RootState) => state.films.detailError;
