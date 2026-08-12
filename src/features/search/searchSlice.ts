import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ApiError, RequestStatus, SearchResponse } from "@/types";

interface SearchState {
  query: string;
  response: SearchResponse | null;
  status: RequestStatus;
  error: ApiError | null;
}

const initialState: SearchState = {
  query: "",
  response: null,
  status: "idle",
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchRequest(state, action: PayloadAction<string>) {
      state.query = action.payload;
      state.status = action.payload.trim() ? "loading" : "idle";
      state.error = null;
      if (!action.payload.trim()) state.response = null;
    },
    searchSuccess(state, action: PayloadAction<SearchResponse>) {
      state.status = "succeeded";
      state.response = action.payload;
    },
    searchFailure(state, action: PayloadAction<ApiError>) {
      state.status = "failed";
      state.error = action.payload;
    },
    clearSearch(state) {
      state.query = "";
      state.response = null;
      state.status = "idle";
      state.error = null;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
