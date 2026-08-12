import { call, cancelled, put, takeLatest, type ActionPattern } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Paginated } from "@/types";
import { normalizeError } from "@/utils/normalizeError";
import type { QueryParams } from "./createListFeatureSlice";

interface ListFeatureActions<T> {
  fetchListRequest: { type: string };
  fetchListSuccess: (payload: Paginated<T>) => PayloadAction<Paginated<T>>;
  fetchListFailure: (payload: ReturnType<typeof normalizeError>) => PayloadAction<ReturnType<typeof normalizeError>>;
  fetchDetailRequest: { type: string };
  fetchDetailSuccess: (payload: T) => PayloadAction<T>;
  fetchDetailFailure: (payload: ReturnType<typeof normalizeError>) => PayloadAction<ReturnType<typeof normalizeError>>;
}

interface CreateListFeatureSagaOptions<T> {
  actions: ListFeatureActions<T>;
  fetchList: (params: QueryParams, signal?: AbortSignal) => Promise<Paginated<T>>;
  fetchDetail?: (slug: string, signal?: AbortSignal) => Promise<T>;
}

export function createListFeatureSaga<T>({ actions, fetchList, fetchDetail }: CreateListFeatureSagaOptions<T>) {
  function* handleFetchList(action: PayloadAction<QueryParams | undefined>) {
    const controller = new AbortController();
    try {
      const data: Paginated<T> = yield call(fetchList, action.payload || {}, controller.signal);
      yield put(actions.fetchListSuccess(data));
    } catch (error) {
      yield put(actions.fetchListFailure(normalizeError(error)));
    } finally {
      if ((yield cancelled()) as boolean) controller.abort();
    }
  }

  function* handleFetchDetail(action: PayloadAction<string>) {
    if (!fetchDetail) return;
    const controller = new AbortController();
    try {
      const data: T = yield call(fetchDetail, action.payload, controller.signal);
      yield put(actions.fetchDetailSuccess(data));
    } catch (error) {
      yield put(actions.fetchDetailFailure(normalizeError(error)));
    } finally {
      if ((yield cancelled()) as boolean) controller.abort();
    }
  }

  return function* saga() {
    yield takeLatest(actions.fetchListRequest.type as ActionPattern, handleFetchList);
    if (fetchDetail) {
      yield takeLatest(actions.fetchDetailRequest.type as ActionPattern, handleFetchDetail);
    }
  };
}
