import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/motion/FadeInSection";

function HeroText() {
  return (
    <>
      <h1 className="text-center font-serif text-3xl leading-[1.05] text-white sm:text-left sm:text-6xl lg:text-7xl sm:text-ink">
        Words that
        <br />
        become
        <br />
        <span className="inline-block text-white bg-bronze px-3 py-1 rounded-md shadow-lg shadow-amber-600/30 sm:bg-transparent sm:px-0 sm:py-0 sm:rounded-none sm:shadow-none sm:text-bronze">
          memories.
        </span>
      </h1>
      <span className="mx-auto mt-3 block h-px w-16 bg-bronze sm:mx-0 sm:mt-6" aria-hidden="true" />
      <p className="mx-auto mt-3 max-w-md text-center font-sans text-sm leading-relaxed text-white/90 sm:mx-0 sm:mt-6 sm:text-left sm:text-lg sm:text-slate">
        The official home of Vivek — lyricist, poet and dreamer.
      </p>
      <p className="mt-2 hidden max-w-md font-sans text-base leading-relaxed text-slate sm:mt-3 sm:block sm:text-lg">
        Explore the lyrics, stories and journey behind the lines that live in our hearts.
      </p>
      <Link
        href="/lyrics"
        className="mt-4 flex w-full justify-center items-center gap-2 font-sans text-sm font-semibold text-white underline-offset-4 hover:underline sm:w-auto sm:justify-start sm:text-bronze sm:mt-8 sm:text-base"
      >
        Explore His Works
        <span aria-hidden="true">→</span>
      </Link>
    </>
  );
}

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Mobile: cover photo as the back layer, full-bleed */}
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
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0.2) 68%, rgba(255,255,255,0.45) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* sm+: full-bleed wide cover as the back layer */}
      <div className="relative hidden sm:block sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src="/images/cover/cover.webp"
          alt="Vivek writing longhand at his desk, surrounded by handwritten notebook pages"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/70 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Mobile: text top-and-centered; sm+: text vertically centered on the left */}
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:items-center sm:justify-start sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl justify-center sm:block">
          <div className="relative w-fit">
            {/* Soft gradient glow hugging just the text block (mobile only) — not a
                hard-edged panel, just enough contrast to read clearly over the photo. */}
            <div
              className="absolute -inset-8 -z-10 sm:hidden"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(23,23,23,0.9) 0%, rgba(23,23,23,0.55) 45%, rgba(23,23,23,0) 75%)",
              }}
              aria-hidden="true"
            />
            <FadeInSection className="max-w-xl">
              <HeroText />
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
