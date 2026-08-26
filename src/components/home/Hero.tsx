import Image from "next/image";
import { FadeInSection } from "@/components/motion/FadeInSection";

export function Hero() {
  return (
    <FadeInSection as="section" className="relative w-full overflow-hidden">
      {/* Mobile cover photo */}
      <div className="relative aspect-[1/2] w-full sm:hidden">
        <Image
          src="/images/cover/cover-mobile.webp"
          alt="Vivek writing longhand at his desk, surrounded by handwritten notebook pages"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center bottom" }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        <a
          href="#archive-highlights"
          aria-label="Scroll to archive highlights"
          className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 rounded-full bg-black/20 px-4 py-2.5 text-ivory backdrop-blur-sm transition-colors hover:bg-black/35 focus-visible:bg-black/35"
        >
          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-ivory/75 p-1.5" aria-hidden="true">
            <span className="home-scroll-cue-dot h-1.5 w-1.5 rounded-full bg-ivory" />
          </span>
          <span className="font-sans text-[0.6rem] font-medium uppercase tracking-[0.2em]">Scroll to explore</span>
        </a>
      </div>

      {/* Desktop cover photo */}
      <div className="relative hidden h-[calc(100svh-16rem)] sm:block">
        <Image
          src="/images/cover/cover.webp"
          alt="Vivek writing longhand at his desk, surrounded by handwritten notebook pages"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_35%]"
        />
      </div>
    </FadeInSection>
  );
}
