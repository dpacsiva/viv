"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { wordsActions } from "@/features/words/wordsSlice";
import { selectWordsError, selectWordsItems, selectWordsQuery, selectWordsStatus } from "@/features/words/wordsSelectors";
import { ArchiveSearch } from "@/components/filters/ArchiveSearch";
import { WordCard } from "@/components/cards/WordCard";
import { LoadingSkeleton } from "@/components/states/LoadingSkeleton";
import { EmptyState } from "@/components/states/EmptyState";
import { ErrorState } from "@/components/states/ErrorState";
import type { Paginated, TamilWord } from "@/types";

export function WordsExplorerClient({ initialData }: { initialData: Paginated<TamilWord> }) {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectWordsItems);
  const status = useAppSelector(selectWordsStatus);
  const error = useAppSelector(selectWordsError);
  const query = useAppSelector(selectWordsQuery);
  const debouncedQuery = useDebouncedValue(query, 250);

  useEffect(() => {
    dispatch(wordsActions.fetchListRequest({ q: debouncedQuery || undefined, pageSize: 30 }));
  }, [dispatch, debouncedQuery]);

  const displayItems = status === "idle" ? initialData.items : items;

  return (
    <div className="flex flex-col gap-8">
      <ArchiveSearch
        value={query}
        onChange={(v) => dispatch(wordsActions.setQuery(v))}
        placeholder="Search a Tamil word, transliteration or meaning…"
      />

      <p className="font-sans text-sm text-slate">
        {displayItems.length} {displayItems.length === 1 ? "word" : "words"}
      </p>

      {status === "loading" && displayItems.length === 0 && <LoadingSkeleton count={9} />}
      {status === "failed" && error && <ErrorState message={error.message} />}
      {status !== "loading" && displayItems.length === 0 && (
        <EmptyState title="No words match your search" description="Try a different Tamil word or transliteration." />
      )}

      {displayItems.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {displayItems.map((word) => (
            <WordCard key={word.id} word={word} />
          ))}
        </div>
      )}
    </div>
  );
}
