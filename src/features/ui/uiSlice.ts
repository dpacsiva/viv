import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type LyricReadingMode = "tamil" | "transliteration" | "meaning" | "annotated";
export type FilmsViewMode = "poster" | "list" | "timeline";

interface UiState {
  mobileMenuOpen: boolean;
  searchOverlayOpen: boolean;
  lyricReadingMode: LyricReadingMode;
  filmsViewMode: FilmsViewMode;
  filterDrawerOpen: boolean;
}

const initialState: UiState = {
  mobileMenuOpen: false,
  searchOverlayOpen: false,
  lyricReadingMode: "tamil",
  filmsViewMode: "poster",
  filterDrawerOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenuOpen(state, action: PayloadAction<boolean>) {
      state.mobileMenuOpen = action.payload;
    },
    setSearchOverlayOpen(state, action: PayloadAction<boolean>) {
      state.searchOverlayOpen = action.payload;
    },
    setLyricReadingMode(state, action: PayloadAction<LyricReadingMode>) {
      state.lyricReadingMode = action.payload;
    },
    setFilmsViewMode(state, action: PayloadAction<FilmsViewMode>) {
      state.filmsViewMode = action.payload;
    },
    setFilterDrawerOpen(state, action: PayloadAction<boolean>) {
      state.filterDrawerOpen = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
