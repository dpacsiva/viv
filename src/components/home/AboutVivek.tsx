import Link from "next/link";
import { PortraitArt } from "@/components/media/PortraitArt";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { FadeInSection } from "@/components/motion/FadeInSection";

export function AboutVivek() {
  return (
    <FadeInSection as="section" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <PortraitArt className="aspect-[4/5] w-full max-w-md" />
        <div>
          <SectionLabel>About Vivek</SectionLabel>
          <EditorialHeading as="h2" size="lg" className="mt-3">
            A poet who found
            <br />
            his place in cinema.
          </EditorialHeading>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-slate">
            From engineering classrooms to cinema sets, from silence to standing ovations — this is the story of a
            man who chose words to change lives.
          </p>
          <Link
            href="/profile"
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-bronze underline-offset-4 hover:underline"
          >
            Know His Journey
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </FadeInSection>
  );
}
