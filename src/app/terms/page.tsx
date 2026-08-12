import type { Metadata } from "next";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Vivek — The Official World of Words.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        Terms of Use
      </EditorialHeading>
      <div className="mt-6 flex flex-col gap-4 font-sans text-base leading-relaxed text-slate">
        <p>
          This archive is presented for editorial, archival and educational purposes. Lyrics, translations and
          annotations are provided to celebrate and document the work of lyricist Vivek.
        </p>
        <p>
          Song lyrics remain the intellectual property of their respective rights holders — composers, producers and
          lyricist. Reproduction of full lyrics outside this archive should credit the original film and songwriting
          team.
        </p>
        <p>Content on this site may be updated or corrected at any time as the archive is expanded and verified.</p>
      </div>
    </div>
  );
}
