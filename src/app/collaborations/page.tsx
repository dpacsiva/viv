import type { Metadata } from "next";
import Link from "next/link";
import { fetchCollaboratorsList } from "@/features/collaborations/collaborationsApi";
import { EditorialArt } from "@/components/media/EditorialArt";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonLd";
import type { CollaboratorRole } from "@/types";

export const metadata: Metadata = {
  title: "Collaborations — Composers, Singers, Directors & Actors",
  description:
    "Meet the composers, singers, directors and actors who have shaped lyricist Vivek's songs across Tamil cinema.",
  alternates: { canonical: "/collaborations" },
};

const ROLE_LABELS: Record<CollaboratorRole, string> = {
  composer: "Composers",
  singer: "Singers",
  director: "Directors",
  actor: "Actors",
};

export default async function CollaborationsPage() {
  const { items } = await fetchCollaboratorsList();
  const roles: CollaboratorRole[] = ["composer", "singer", "director", "actor"];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <SEOJsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Collaborations" }]),
          collectionPageSchema("Collaborations", "Vivek's long-running creative collaborators.", "/collaborations"),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Collaborations" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        Collaborations
      </EditorialHeading>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate">
        The composers, singers, directors and actors whose work has shaped — and been shaped by — Vivek&rsquo;s
        lyrics.
      </p>

      <div className="mt-10 flex flex-col gap-12">
        {roles.map((role) => {
          const roleItems = items.filter((c) => c.role === role);
          if (roleItems.length === 0) return null;
          return (
            <div key={role}>
              <SectionLabel>{ROLE_LABELS[role]}</SectionLabel>
              <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {roleItems.map((collaborator) => (
                  <Link key={collaborator.id} href={`/collaborations/${collaborator.slug}`} className="group flex flex-col gap-2">
                    <EditorialArt
                      variant={collaborator.portraitVariant}
                      monogram={collaborator.name.charAt(0)}
                      alt={collaborator.name}
                      className="aspect-square w-full"
                      rounded="full"
                    />
                    <span className="text-center font-serif text-lg text-ink transition-colors group-hover:text-bronze">
                      {collaborator.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
