import type { Paginated, SortOption } from "@/types";

export function paginate<T>(items: T[], page = 1, pageSize = 12): Paginated<T> {
  const safePage = Math.max(1, page);
  const start = (safePage - 1) * pageSize;
  const pageItems = items.slice(start, start + pageSize);
  return {
    items: pageItems,
    total: items.length,
    page: safePage,
    pageSize,
    hasMore: start + pageItems.length < items.length,
  };
}

/** Very small Levenshtein distance implementation used for typo-tolerant search matching. */
function levenshtein(a: string, b: string): number {
  const matrix: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j += 1) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      matrix[i][j] =
        a[i - 1] === b[j - 1]
          ? matrix[i - 1][j - 1]
          : 1 + Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]);
    }
  }
  return matrix[a.length][b.length];
}

/** Case-insensitive substring match with a small typo-tolerance fallback for short queries. */
export function fuzzyIncludes(haystack: string | undefined, query: string): boolean {
  if (!haystack) return false;
  const normalisedHaystack = haystack.toLowerCase();
  const normalisedQuery = query.toLowerCase().trim();
  if (!normalisedQuery) return true;
  if (normalisedHaystack.includes(normalisedQuery)) return true;

  const words = normalisedHaystack.split(/\s+/);
  return words.some((word) => {
    const maxDistance = normalisedQuery.length <= 4 ? 1 : 2;
    return levenshtein(word, normalisedQuery) <= maxDistance;
  });
}

export function sortByOption<T>(
  items: T[],
  sort: SortOption | undefined,
  fields: { date?: keyof T; title?: keyof T; popularity?: keyof T }
): T[] {
  const copy = [...items];
  switch (sort) {
    case "oldest":
      if (fields.date) copy.sort((a, b) => String(a[fields.date!]).localeCompare(String(b[fields.date!])));
      return copy;
    case "alphabetical":
      if (fields.title) copy.sort((a, b) => String(a[fields.title!]).localeCompare(String(b[fields.title!])));
      return copy;
    case "popular":
      if (fields.popularity) copy.sort((a, b) => Number(b[fields.popularity!]) - Number(a[fields.popularity!]));
      return copy;
    case "latest":
    default:
      if (fields.date) copy.sort((a, b) => String(b[fields.date!]).localeCompare(String(a[fields.date!])));
      return copy;
  }
}
