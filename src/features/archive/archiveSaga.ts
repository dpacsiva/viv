import { call, put, takeLatest } from "redux-saga/effects";
import type { HomeArchiveData } from "@/types";
import { normalizeError } from "@/utils/normalizeError";
import { archiveActions } from "./archiveSlice";
import { fetchHomeArchiveData } from "./archiveApi";

function* handleFetchHome() {
  try {
    const data: HomeArchiveData = yield call(fetchHomeArchiveData);
    yield put(archiveActions.fetchHomeSuccess(data));
  } catch (error) {
    yield put(archiveActions.fetchHomeFailure(normalizeError(error)));
  }
}

export function* archiveSaga() {
  yield takeLatest(archiveActions.fetchHomeRequest.type, handleFetchHome);
}
