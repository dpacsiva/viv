"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { filmsActions } from "@/features/films/filmsSlice";
import {
  selectFilmsError,
  selectFilmsFilters,
  selectFilmsItems,
  selectFilmsPagination,
  selectFilmsQuery,
  selectFilmsStatus,
} from "@/features/films/filmsSelectors";
import { uiActions } from "@/features/ui/uiSlice";
import { ArchiveSearch } from "@/components/filters/ArchiveSearch";
import { FilterBar, type FilterGroup } from "@/components/filters/FilterBar";
import { FilmCard } from "@/components/cards/FilmCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LoadingSkeleton } from "@/components/states/LoadingSkeleton";
import { EmptyState } from "@/components/states/EmptyState";
import { ErrorState } from "@/components/states/ErrorState";
import type { CareerPeriod, Film, Paginated } from "@/types";

const CAREER_PERIOD_LABELS: Record<CareerPeriod, string> = {
  "early-years": "Early Years",
  breakthrough: "Breakthrough",
  "peak-mass-era": "Peak Mass Era",
  "recent-work": "Recent Work",
};

export interface FilmsFilterOptions {
  years: { label: string; value: string }[];
  actors: { label: string; value: string }[];
  directors: { label: string; value: string }[];
  composers: { label: string; value: string }[];
}

export function FilmsArchiveClient({
  initialData,
  filterOptions,
}: {
  initialData: Paginated<Film>;
  filterOptions: FilmsFilterOptions;
}) {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectFilmsItems);
  const status = useAppSelector(selectFilmsStatus);
  const error = useAppSelector(selectFilmsError);
  const pagination = useAppSelector(selectFilmsPagination);
  const filters = useAppSelector(selectFilmsFilters);
  const query = useAppSelector(selectFilmsQuery);
  const viewMode = useAppSelector((state) => state.ui.filmsViewMode);
  const debouncedQuery = useDebouncedValue(query, 300);

  useEffect(() => {
    dispatch(
      filmsActions.fetchListRequest({
        ...filters,
        q: debouncedQuery || undefined,
        sort: "oldest",
        page: pagination.page,
        pageSize: 50,
      })
    );
  }, [dispatch, filters, debouncedQuery, pagination.page]);

  const displayItems = status === "idle" ? initialData.items : items;

  const groups: FilterGroup[] = [
    { key: "year", label: "Year", options: filterOptions.years, value: String(filters.year || "") },
    { key: "actor", label: "Actor", options: filterOptions.actors, value: String(filters.actor || "") },
    { key: "director", label: "Director", options: filterOptions.directors, value: String(filters.director || "") },
    { key: "composer", label: "Composer", options: filterOptions.composers, value: String(filters.composer || "") },
  ];

  const featured = displayItems.find((f) => f.careerPeriod === "breakthrough");

  const periods: CareerPeriod[] = ["early-years", "breakthrough", "peak-mass-era", "recent-work"];
  const grouped = periods.map((period) => ({
    period,
    films: displayItems.filter((f) => f.careerPeriod === period),
  }));

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ArchiveSearch value={query} onChange={(v) => dispatch(filmsActions.setQuery(v))} placeholder="Search films…" />
        <div role="group" aria-label="View mode" className="flex shrink-0 gap-2">
          {(["poster", "list", "timeline"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              aria-pressed={viewMode === mode}
              onClick={() => dispatch(uiActions.setFilmsViewMode(mode))}
              className={`rounded-full border px-4 py-2 font-sans text-xs font-medium capitalize transition-colors ${
                viewMode === mode ? "border-bronze bg-bronze text-white" : "border-border text-slate hover:border-bronze hover:text-bronze"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <FilterBar groups={groups} onChange={(key, value) => dispatch(filmsActions.setFilters({ [key]: value || undefined }))} />

      <p className="font-sans text-sm text-slate">
        {displayItems.length} {displayItems.length === 1 ? "film" : "films"}
      </p>

      {status === "loading" && displayItems.length === 0 && <LoadingSkeleton count={6} />}
      {status === "failed" && error && <ErrorState message={error.message} />}

      {status !== "loading" && displayItems.length === 0 && (
        <EmptyState title="No films match these filters" description="Try clearing a filter or search term." />
      )}

      {featured && viewMode === "poster" && (
        <div>
          <SectionLabel>Featured Film</SectionLabel>
          <div className="mt-3 max-w-xs">
            <FilmCard film={featured} view="poster" />
          </div>
        </div>
      )}

      {viewMode === "poster" && displayItems.length > 0 && (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {displayItems.map((film) => (
            <FilmCard key={film.id} film={film} view="poster" />
          ))}
        </div>
      )}

      {viewMode === "list" && displayItems.length > 0 && (
        <div>
          {displayItems.map((film) => (
            <FilmCard key={film.id} film={film} view="list" />
          ))}
        </div>
      )}

      {viewMode === "timeline" && (
        <div className="flex flex-col gap-10">
          {grouped
            .filter((g) => g.films.length > 0)
            .map((group) => (
              <div key={group.period}>
                <SectionLabel>{CAREER_PERIOD_LABELS[group.period]}</SectionLabel>
                <div className="mt-4 border-l border-border pl-6">
                  {group.films.map((film) => (
                    <div key={film.id} className="relative pb-8 last:pb-0">
                      <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-bronze" aria-hidden="true" />
                      <FilmCard film={film} view="list" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
