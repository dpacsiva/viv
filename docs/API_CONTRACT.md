# Backend API Contract

This document describes the API a future backend must implement to replace the in-memory mock server at
`src/services/mock/`. Every endpoint below is already implemented against this exact contract — the frontend does
not need to change when a real backend is connected; only `NEXT_PUBLIC_API_BASE_URL` and the mock-adapter
registration in `src/services/axiosClient.ts` need to change.

All endpoint paths are relative to `NEXT_PUBLIC_API_BASE_URL`.

## Conventions

### Pagination envelope

Every list endpoint returns:

```ts
type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
};
```

### Errors

Non-2xx responses should return a JSON body with at least a `message` field:

```ts
type ApiErrorBody = { message: string; code?: string };
```

The frontend's axios response interceptor (`src/services/axiosClient.ts`) normalises any error shape into
`{ message, code?, status? }` before it reaches Redux state, so additional fields are safe to add.

### Auth (future-ready, unused today)

The axios request interceptor attaches `Authorization: Bearer <token>` from `localStorage` key
`vivek_archive_auth_token` whenever present. No endpoint currently requires it.

---

## Lyrics

### `GET /lyrics`

Query params (all optional):

| Param       | Type   | Notes                                                    |
| ----------- | ------ | --------------------------------------------------------- |
| `q`         | string | Matches title, Tamil title, excerpt, film name, lyric lines (Tamil/transliteration/translation) |
| `theme`     | string | Theme slug                                                 |
| `film`      | string | Film slug                                                  |
| `year`      | string | Film release year                                          |
| `composer`  | string | Composer name                                              |
| `singer`    | string | Singer name                                                |
| `actor`     | string | Actor name                                                 |
| `director`  | string | Director name                                              |
| `award`     | string | Any truthy value filters to lyrics with at least one award |
| `sort`      | `"latest" \| "oldest" \| "alphabetical" \| "popular"` | Default `latest` (by `publishedAt`) |
| `page`      | number | Default `1`                                                |
| `pageSize`  | number | Default `12`                                               |

Response: `Paginated<Lyric>` — see `src/types/lyric.ts` for the full `Lyric` shape.

### `GET /lyrics/:slug`

Response: `Lyric`, or `404 { message }` if not found.

---

## Films

### `GET /films`

Query params: `q`, `year`, `actor`, `director`, `composer`, `careerPeriod`
(`"early-years" | "breakthrough" | "peak-mass-era" | "recent-work"`), `sort`, `page`, `pageSize`.

Response: `Paginated<Film>` — see `src/types/film.ts`.

### `GET /films/:slug`

Response: `Film`, or `404`.

---

## Themes

### `GET /themes`

No query params. Response: `Paginated<Theme>` (all themes, unpaginated in practice).

### `GET /themes/:slug`

Response: `Theme`, or `404`.

---

## Words

### `GET /words`

Query params: `q` (matches Tamil, transliteration, meaning), `theme` (theme slug), `page`, `pageSize` (default 30).

Response: `Paginated<TamilWord>` — see `src/types/word.ts`.

### `GET /words/:slug`

Response: `TamilWord`, or `404`.

---

## Collaborators

### `GET /collaborators`

No query params. Response: `Paginated<Collaborator>`.

### `GET /collaborators/:slug`

Response: `Collaborator`, or `404`.

---

## Journal

### `GET /journal`

Query params: `q`, `category` (one of the six `JournalCategory` values), `sort`, `page`, `pageSize`.

Response: `Paginated<JournalArticle>` — see `src/types/journal.ts`.

### `GET /journal/:slug`

Response: `JournalArticle`, or `404`.

---

## Awards

### `GET /awards`

No query params. Response: `Paginated<Award>`.

---

## Journey

### `GET /journey`

No query params. Response: `Paginated<JourneyMilestone>`, expected to already be sorted chronologically.

---

## Search

### `GET /search?q=`

Response:

```ts
type SearchResponse = {
  query: string;
  groups: { kind: "lyric" | "film" | "word" | "theme" | "collaborator" | "journal"; label: string; items: SearchResultItem[] }[];
  total: number;
  suggestions: string[]; // typo-tolerant suggestions when total === 0
};
```

Should match across song name, Tamil lyric line, English lyric phrase, Tanglish, film name, composer, singer,
actor, director, theme and Tamil word, with basic typo tolerance.

---

## Homepage aggregate

### `GET /archive/home`

A single denormalised payload for the homepage, avoiding a waterfall of small requests:

```ts
type HomeArchiveData = {
  stats: ArchiveStat[]; // 4 headline stats (films/lyrics/years/hearts)
  featuredLyric: Lyric;
  latestItems: LatestArchiveItem[]; // "Latest from the Archive" cards
  closingQuote: { quote: string; signatureVariant: string };
};
```

---

## Contact

### `POST /contact`

Request body: `{ name: string; email: string; message: string }`

Response: `{ success: boolean; message: string }`. A real backend should validate and rate-limit this endpoint and
likely forward it to an email/CRM integration.

---

## Not yet backed by a dedicated endpoint

Filter option lists (unique composers, singers, actors, directors, years for the lyrics/films archive filter bars)
are currently derived client-side from a full `pageSize: 100` list fetch. A production backend should expose a
lightweight facets endpoint (e.g. `GET /lyrics/facets`) to avoid over-fetching once the catalogue grows beyond a
few hundred entries.
