import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/motion/FadeInSection";

function HeroText() {
  return (
    <>
      <h1 className="text-center font-serif text-5xl font-semibold leading-none tracking-tight text-white sm:text-left sm:text-7xl sm:text-ink lg:text-8xl">
        Lyricist Vivek
      </h1>
      <Link
        href="/lyrics"
        className="mt-6 flex w-full items-center justify-center gap-2 font-sans text-sm font-semibold text-white underline-offset-4 hover:underline sm:mt-8 sm:w-auto sm:justify-start sm:text-bronze sm:text-base"
      >
        Explore Lyrics
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

      {/* Mobile: text centered over the image; sm+: text vertically centered on the left */}
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
