# Vivek — The Official Digital Archive

An SEO-focused digital archive of Tamil lyricist Vivek's lyrics, films, words, journey, journal and awards. This is
the **frontend-only** phase: all data is served by an in-memory mock backend so the UI, routing, SEO and state
architecture can be built and reviewed before a real backend exists.

The site is deliberately **not** a music-streaming interface — there are no play buttons, waveforms or playlists.
The lyrics and words are the hero.

## Tech stack

- **Next.js 16** (App Router) + React 19 + TypeScript (strict)
- **Tailwind CSS v4** (CSS-first `@theme` configuration, see `src/app/globals.css`)
- **Redux Toolkit** + **Redux-Saga** for interactive, client-side state (filters, search, view modes, pagination)
- **Axios** + **axios-mock-adapter** as the API layer — every request is a real `axios` call intercepted by an
  in-memory mock server, so swapping in a real backend later is a one-line change
- **Framer Motion** for subtle, reduced-motion-aware entrance and interaction animations

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — leave NEXT_PUBLIC_API_BASE_URL empty to keep using the mock backend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build — statically generates every lyric, film, word, theme, collaborator and journal page
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```text
src/
  app/                  Next.js App Router routes (server components by default)
  components/
    layout/             Header, MobileMenu, Footer
    home/                Homepage section components
    cards/               LyricCard, FilmCard, ThemeCard, JournalCard, WordCard
    lyrics/              Reading-mode blocks (Tamil / transliteration / meaning / annotated)
    filters/             FilterBar, ArchiveSearch
    search/              Header search overlay + /search page client
    media/               Self-contained SVG "editorial art" system (see below)
    states/              LoadingSkeleton, EmptyState, ErrorState
    seo/                 SEOJsonLd (JSON-LD renderer)
    providers/           Redux + Framer Motion providers
  features/              One folder per Redux Toolkit feature: slice + saga + api + selectors
    lyrics/  films/  themes/  words/  collaborations/  journal/  awards/  journey/  archive/  search/  ui/
  store/                 createListFeatureSlice/Saga factories, root reducer/saga, store
  services/
    axiosClient.ts       Shared axios instance (interceptors, auth header, error normalisation)
    apiRoutes.ts          Centralised endpoint path builders
    mock/                 In-memory mock backend (axios-mock-adapter) — handlers + query utils
  data/                   Typed mock data: 20 lyrics, 10 films, 10 themes, 15 words, 6 collaborators,
                           8 journal articles, 8 awards, 12 journey milestones
  types/                  Shared TypeScript interfaces (single source of truth for all entities)
  lib/                    Constants, fonts, JSON-LD builders
  hooks/                  Typed Redux hooks, useDebouncedValue
```

## Data flow (Redux-Saga)

```text
Component → dispatch(fetchListRequest(params))
          → saga takes the action, calls the feature's *Api.ts function
          → that function calls axiosClient.get(...)
          → axios-mock-adapter intercepts it and returns Paginated<T> JSON
          → saga dispatches fetchListSuccess / fetchListFailure
          → slice updates state → selectors → component re-renders
```

Every list-style feature (lyrics, films, themes, words, collaborations, journal, awards, journey) is built on two
shared factories — `createListFeatureSlice` and `createListFeatureSaga` — so each feature file only wires together
its own entity type and API functions, without duplicating loading/error/pagination/filter boilerplate.

## SEO strategy

- **Server-rendered content**: every public page (`/lyrics/[slug]`, `/films/[slug]`, `/words/[slug]`, `/journal/[slug]`,
  `/themes/[slug]`, homepage, archive listings) fetches its data in an `async` Server Component and renders the
  full HTML — lyric text, metadata, related links — before any client JavaScript runs.
- **Client-side Redux** is reserved for interactive-only concerns: archive filters/search/sort/pagination, the
  reading-mode toggle, films view mode, the search overlay, and the mobile menu.
- **Metadata**: every route exports a unique `generateMetadata`/`metadata` (title, description, keywords, canonical,
  Open Graph). See `src/lib/constants.ts` and each `page.tsx`.
- **Structured data**: `src/lib/jsonLd.ts` builds Person, WebSite, BreadcrumbList, CollectionPage, MusicComposition,
  MusicRecording, Movie, and Article JSON-LD, rendered via `<SEOJsonLd />`.
- **Sitemap & robots**: `src/app/sitemap.ts` generates five separate sitemaps (static pages, lyrics, films, words,
  journal + themes/collaborators) via `generateSitemaps()`; `src/app/robots.ts` emits `robots.txt`.
- All 20 lyrics, 10 films, 15 words, 8 journal articles, 10 themes and 6 collaborators are pre-rendered at build
  time via `generateStaticParams`.

## The "editorial art" illustration system

The brief calls for a warm, photograph-led editorial look while explicitly staying frontend-only with no external
image hosting. Rather than hot-linking stock photography, `src/components/media/EditorialArt.tsx` and
`HeroNotebookArt.tsx` render self-contained SVG illustrations (gradients + minimal line icons in the bronze accent
colour) driven by a `variant` string on each mock data entry (`posterVariant`, `watercolorVariant`,
`portraitVariant`, `heroImageVariant`, `thumbnailVariant`). Replacing these with real photography later only means
swapping the component that renders each variant — no data model changes required.

## Connecting a real backend later

1. Implement the endpoints listed in [`docs/API_CONTRACT.md`](./docs/API_CONTRACT.md).
2. Set `NEXT_PUBLIC_API_BASE_URL` to the real API's base URL.
3. Delete the one line in `src/services/axiosClient.ts` that calls `registerMockHandlers(axiosClient)` — everything
   else (slices, sagas, components, pages) is unchanged, since they only ever talk to `axiosClient`.

## Accessibility & performance notes

- Skip-to-content link, visible focus rings (`:focus-visible`), semantic landmarks and heading order throughout.
- `<html lang="en">` with `lang="ta"` on every Tamil text node for correct screen-reader pronunciation.
- All Framer Motion animation is wrapped in `<MotionConfig reducedMotion="user">` (see `MotionProvider.tsx`), so
  `prefers-reduced-motion` disables motion site-wide automatically.
- No autoplaying media, no layout-shifting images (all illustrations are inline SVG with fixed aspect ratios).
