import { PageLoadingSkeleton } from "@/components/states/PageLoadingSkeleton";

/**
 * Root loading UI is inherited by every page and dynamic route in the app.
 * Next renders it inside a Suspense boundary during slow initial loads and
 * client navigations, so the shared shell remains visible and responsive.
 */
export default function Loading() {
  return <PageLoadingSkeleton />;
}
