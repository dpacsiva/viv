import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ApiError, HomeArchiveData, RequestStatus } from "@/types";

interface ArchiveState {
  home: HomeArchiveData | null;
  status: RequestStatus;
  error: ApiError | null;
}

const initialState: ArchiveState = {
  home: null,
  status: "idle",
  error: null,
};

export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers: {
    fetchHomeRequest(state) {
      state.status = "loading";
      state.error = null;
    },
    fetchHomeSuccess(state, action: PayloadAction<HomeArchiveData>) {
      state.status = "succeeded";
      state.home = action.payload;
    },
    fetchHomeFailure(state, action: PayloadAction<ApiError>) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const archiveActions = archiveSlice.actions;
export default archiveSlice.reducer;
