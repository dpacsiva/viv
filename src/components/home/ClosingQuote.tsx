import { FadeInSection } from "@/components/motion/FadeInSection";

export function ClosingQuote({ quote }: { quote: string }) {
  return (
    <FadeInSection as="section" className="border-t border-border bg-paper/40">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <span aria-hidden="true" className="font-serif text-5xl text-bronze">
          “
        </span>
        <blockquote className="font-serif text-2xl italic leading-relaxed text-ink sm:text-3xl">{quote}</blockquote>
        <p className="mt-6 font-serif text-2xl italic text-bronze">— Vivek</p>
      </div>
    </FadeInSection>
  );
}
