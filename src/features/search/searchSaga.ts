import { call, debounce, put } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SearchResponse } from "@/types";
import { normalizeError } from "@/utils/normalizeError";
import { searchActions } from "./searchSlice";
import { fetchSearchResults } from "./searchApi";

function* handleSearch(action: PayloadAction<string>) {
  const query = action.payload.trim();
  if (!query) return;
  try {
    const data: SearchResponse = yield call(fetchSearchResults, query);
    yield put(searchActions.searchSuccess(data));
  } catch (error) {
    yield put(searchActions.searchFailure(normalizeError(error)));
  }
}

export function* searchSaga() {
  yield debounce(300, searchActions.searchRequest.type, handleSearch);
}
