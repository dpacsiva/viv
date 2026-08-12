import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ApiError, QueryParams, RequestStatus, SortOption } from "@/types";

export type { QueryParams };

export interface ListFeatureState<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
  status: RequestStatus;
  error: ApiError | null;
  filters: QueryParams;
  query: string;
  sort: SortOption;
  current: T | null;
  detailStatus: RequestStatus;
  detailError: ApiError | null;
  detailSlug: string | null;
}

export interface PaginatedPayload<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

function initialListFeatureState<T>(): ListFeatureState<T> {
  return {
    items: [],
    total: 0,
    page: 1,
    pageSize: 12,
    hasMore: false,
    status: "idle",
    error: null,
    filters: {},
    query: "",
    sort: "latest",
    current: null,
    detailStatus: "idle",
    detailError: null,
    detailSlug: null,
  };
}

export function createListFeatureSlice<T>(name: string) {
  return createSlice({
    name,
    initialState: initialListFeatureState<T>(),
    reducers: {
      fetchListRequest(state, _action: PayloadAction<QueryParams | undefined>) {
        state.status = "loading";
        state.error = null;
      },
      fetchListSuccess(state, action: PayloadAction<PaginatedPayload<T>>) {
        state.status = "succeeded";
        state.items = action.payload.items as typeof state.items;
        state.total = action.payload.total;
        state.page = action.payload.page;
        state.pageSize = action.payload.pageSize;
        state.hasMore = action.payload.hasMore;
      },
      fetchListFailure(state, action: PayloadAction<ApiError>) {
        state.status = "failed";
        state.error = action.payload;
      },
      fetchDetailRequest(state, action: PayloadAction<string>) {
        state.detailSlug = action.payload;
        state.detailStatus = "loading";
        state.detailError = null;
      },
      fetchDetailSuccess(state, action: PayloadAction<T>) {
        state.detailStatus = "succeeded";
        state.current = action.payload as typeof state.current;
      },
      fetchDetailFailure(state, action: PayloadAction<ApiError>) {
        state.detailStatus = "failed";
        state.detailError = action.payload;
      },
      setFilters(state, action: PayloadAction<QueryParams>) {
        state.filters = { ...state.filters, ...action.payload };
        state.page = 1;
      },
      setQuery(state, action: PayloadAction<string>) {
        state.query = action.payload;
        state.page = 1;
      },
      setSort(state, action: PayloadAction<SortOption>) {
        state.sort = action.payload;
      },
      setPage(state, action: PayloadAction<number>) {
        state.page = action.payload;
      },
      resetFilters(state) {
        state.filters = {};
        state.query = "";
        state.page = 1;
        state.sort = "latest";
      },
    },
  });
}
