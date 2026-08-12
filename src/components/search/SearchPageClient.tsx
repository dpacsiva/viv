"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { searchActions } from "@/features/search/searchSlice";
import { selectSearchQuery, selectSearchResponse, selectSearchStatus } from "@/features/search/searchSelectors";
import { ArchiveSearch } from "@/components/filters/ArchiveSearch";
import { LoadingSkeleton } from "@/components/states/LoadingSkeleton";

export function SearchPageClient({ initialQuery }: { initialQuery: string }) {
  const dispatch = useAppDispatch();
  const query = useAppSelector(selectSearchQuery);
  const response = useAppSelector(selectSearchResponse);
  const status = useAppSelector(selectSearchStatus);

  useEffect(() => {
    if (initialQuery) dispatch(searchActions.searchRequest(initialQuery));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeQuery = query || initialQuery;

  return (
    <div className="flex flex-col gap-8">
      <ArchiveSearch value={activeQuery} onChange={(v) => dispatch(searchActions.searchRequest(v))} placeholder="Search the archive…" />

      {status === "loading" && <LoadingSkeleton count={4} variant="row" />}

      {response && response.total === 0 && (
        <p className="font-sans text-sm text-slate">No results for &ldquo;{response.query}&rdquo;.</p>
      )}

      {response &&
        response.groups.map((group) => (
          <div key={group.kind}>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-bronze">{group.label}</h2>
            <ul className="mt-3 flex flex-col gap-1">
              {group.items.map((item) => (
                <li key={`${item.kind}-${item.id}`}>
                  <Link href={item.href} className="block rounded-md px-3 py-3 -mx-3 transition-colors hover:bg-paper">
                    <span className="block font-serif text-lg text-ink">{item.title}</span>
                    {item.subtitle && <span className="block font-sans text-sm text-slate">{item.subtitle}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      {!activeQuery && <p className="font-sans text-sm text-slate">Start typing to search lyrics, films, words, themes and more.</p>}
    </div>
  );
}
