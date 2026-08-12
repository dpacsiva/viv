"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { lyricsActions } from "@/features/lyrics/lyricsSlice";
import {
  selectLyricsError,
  selectLyricsFilters,
  selectLyricsItems,
  selectLyricsPagination,
  selectLyricsQuery,
  selectLyricsSort,
  selectLyricsStatus,
} from "@/features/lyrics/lyricsSelectors";
import { ArchiveSearch } from "@/components/filters/ArchiveSearch";
import { FilterBar, type FilterGroup } from "@/components/filters/FilterBar";
import { LyricCard } from "@/components/cards/LyricCard";
import { LoadingSkeleton } from "@/components/states/LoadingSkeleton";
import { EmptyState } from "@/components/states/EmptyState";
import { ErrorState } from "@/components/states/ErrorState";
import type { Paginated, SortOption, Lyric } from "@/types";

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Latest", value: "latest" },
  { label: "Oldest", value: "oldest" },
  { label: "Alphabetical", value: "alphabetical" },
  { label: "Most popular", value: "popular" },
];

export interface LyricsFilterOptions {
  themes: { label: string; value: string }[];
  films: { label: string; value: string }[];
  years: { label: string; value: string }[];
  composers: { label: string; value: string }[];
  singers: { label: string; value: string }[];
  actors: { label: string; value: string }[];
  directors: { label: string; value: string }[];
}

export function LyricsArchiveClient({
  initialData,
  filterOptions,
}: {
  initialData: Paginated<Lyric>;
  filterOptions: LyricsFilterOptions;
}) {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectLyricsItems);
  const status = useAppSelector(selectLyricsStatus);
  const error = useAppSelector(selectLyricsError);
  const pagination = useAppSelector(selectLyricsPagination);
  const filters = useAppSelector(selectLyricsFilters);
  const query = useAppSelector(selectLyricsQuery);
  const sort = useAppSelector(selectLyricsSort);
  const debouncedQuery = useDebouncedValue(query, 300);

  useEffect(() => {
    dispatch(
      lyricsActions.fetchListRequest({
        ...filters,
        q: debouncedQuery || undefined,
        sort,
        page: pagination.page,
        pageSize: pagination.pageSize,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filters, debouncedQuery, sort, pagination.page]);

  const displayItems = status === "idle" ? initialData.items : items;
  const total = status === "idle" ? initialData.total : pagination.total;
  const hasMore = status === "idle" ? initialData.hasMore : pagination.hasMore;

  const groups: FilterGroup[] = [
    { key: "theme", label: "Theme", options: filterOptions.themes, value: String(filters.theme || "") },
    { key: "film", label: "Film", options: filterOptions.films, value: String(filters.film || "") },
    { key: "year", label: "Year", options: filterOptions.years, value: String(filters.year || "") },
    { key: "composer", label: "Composer", options: filterOptions.composers, value: String(filters.composer || "") },
    { key: "singer", label: "Singer", options: filterOptions.singers, value: String(filters.singer || "") },
    { key: "actor", label: "Actor", options: filterOptions.actors, value: String(filters.actor || "") },
    { key: "director", label: "Director", options: filterOptions.directors, value: String(filters.director || "") },
  ];

  return (
    <div className="flex flex-col gap-6">
      <ArchiveSearch value={query} onChange={(v) => dispatch(lyricsActions.setQuery(v))} />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <FilterBar groups={groups} onChange={(key, value) => dispatch(lyricsActions.setFilters({ [key]: value || undefined }))} />
        <label className="flex items-center gap-2">
          <span className="font-sans text-sm text-slate">Sort by</span>
          <select
            value={sort}
            onChange={(e) => dispatch(lyricsActions.setSort(e.target.value as SortOption))}
            className="rounded-full border border-border bg-white px-4 py-2 font-sans text-sm text-ink hover:border-bronze focus:border-bronze"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="font-sans text-sm text-slate">
        {total} {total === 1 ? "lyric" : "lyrics"} found
      </p>

      {status === "loading" && displayItems.length === 0 && <LoadingSkeleton count={4} variant="row" />}

      {status === "failed" && error && (
        <ErrorState message={error.message} onRetry={() => dispatch(lyricsActions.fetchListRequest({ ...filters, q: debouncedQuery, sort }))} />
      )}

      {status !== "failed" && displayItems.length === 0 && status !== "loading" && (
        <EmptyState
          title="No lyrics match these filters"
          description="Try clearing a filter or searching a different word."
          action={
            <button
              type="button"
              onClick={() => dispatch(lyricsActions.resetFilters())}
              className="mt-2 rounded-full border border-bronze px-5 py-2 font-sans text-sm font-medium text-bronze hover:bg-bronze hover:text-white"
            >
              Clear filters
            </button>
          }
        />
      )}

      {displayItems.length > 0 && (
        <div>
          {displayItems.map((lyric, i) => (
            <LyricCard key={lyric.id} lyric={lyric} index={(pagination.page - 1) * pagination.pageSize + i} />
          ))}
        </div>
      )}

      {(pagination.page > 1 || hasMore) && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            disabled={pagination.page <= 1}
            onClick={() => dispatch(lyricsActions.setPage(pagination.page - 1))}
            className="rounded-full border border-border px-5 py-2 font-sans text-sm font-medium text-ink transition-colors hover:border-bronze hover:text-bronze disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Previous
          </button>
          <span className="font-sans text-sm text-slate">Page {pagination.page}</span>
          <button
            type="button"
            disabled={!hasMore}
            onClick={() => dispatch(lyricsActions.setPage(pagination.page + 1))}
            className="rounded-full border border-bronze px-5 py-2 font-sans text-sm font-medium text-bronze transition-colors hover:bg-bronze hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Load more →
          </button>
        </div>
      )}
    </div>
  );
}
