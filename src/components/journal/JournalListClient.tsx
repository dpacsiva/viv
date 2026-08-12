"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { journalActions } from "@/features/journal/journalSlice";
import { selectJournalError, selectJournalFilters, selectJournalItems, selectJournalStatus } from "@/features/journal/journalSelectors";
import { JournalCard } from "@/components/cards/JournalCard";
import { LoadingSkeleton } from "@/components/states/LoadingSkeleton";
import { EmptyState } from "@/components/states/EmptyState";
import { ErrorState } from "@/components/states/ErrorState";
import type { JournalArticle, JournalCategory, Paginated } from "@/types";

const CATEGORIES: JournalCategory[] = [
  "Behind the Song",
  "Writing Process",
  "Tamil",
  "Cinema",
  "Interviews",
  "Personal Thoughts",
];

export function JournalListClient({ initialData }: { initialData: Paginated<JournalArticle> }) {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectJournalItems);
  const status = useAppSelector(selectJournalStatus);
  const error = useAppSelector(selectJournalError);
  const filters = useAppSelector(selectJournalFilters);

  useEffect(() => {
    dispatch(journalActions.fetchListRequest({ ...filters, pageSize: 24 }));
  }, [dispatch, filters]);

  const displayItems = status === "idle" ? initialData.items : items;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => dispatch(journalActions.setFilters({ category: undefined }))}
          className={`rounded-full border px-4 py-1.5 font-sans text-xs font-medium transition-colors ${
            !filters.category ? "border-bronze bg-bronze text-white" : "border-border text-slate hover:border-bronze hover:text-bronze"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => dispatch(journalActions.setFilters({ category: cat }))}
            className={`rounded-full border px-4 py-1.5 font-sans text-xs font-medium transition-colors ${
              filters.category === cat ? "border-bronze bg-bronze text-white" : "border-border text-slate hover:border-bronze hover:text-bronze"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {status === "loading" && displayItems.length === 0 && <LoadingSkeleton count={6} />}
      {status === "failed" && error && <ErrorState message={error.message} />}
      {status !== "loading" && displayItems.length === 0 && <EmptyState title="No articles in this category yet" />}

      {displayItems.length > 0 && (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayItems.map((article) => (
            <JournalCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
