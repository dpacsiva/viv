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
