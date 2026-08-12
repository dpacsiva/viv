import type { RootState } from "@/store";

export const selectThemesItems = (state: RootState) => state.themes.items;
export const selectThemesStatus = (state: RootState) => state.themes.status;
export const selectThemesError = (state: RootState) => state.themes.error;
export const selectCurrentTheme = (state: RootState) => state.themes.current;
export const selectThemeDetailStatus = (state: RootState) => state.themes.detailStatus;
export const selectThemeDetailError = (state: RootState) => state.themes.detailError;
