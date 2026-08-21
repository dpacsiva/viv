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
      <div className="relative hidden sm:block sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src="/images/cover/cover.webp"
          alt="Vivek writing longhand at his desk, surrounded by handwritten notebook pages"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
      </div>
    </FadeInSection>
  );
}
