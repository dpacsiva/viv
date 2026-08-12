import Link from "next/link";
import { EditorialArt } from "@/components/media/EditorialArt";
import type { JournalArticle } from "@/types";

export function JournalCard({ article }: { article: JournalArticle }) {
  return (
    <article className="group flex flex-col gap-3">
      <Link href={`/journal/${article.slug}`} className="block overflow-hidden rounded-lg">
        <EditorialArt
          variant={article.heroImageVariant}
          className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
          rounded="none"
          alt={article.title}
        />
      </Link>
      <div>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-bronze">{article.category}</p>
        <h3 className="mt-1 font-serif text-xl text-ink">
          <Link href={`/journal/${article.slug}`} className="transition-colors hover:text-bronze">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 font-sans text-sm text-slate">{article.excerpt}</p>
        <Link
          href={`/journal/${article.slug}`}
          className="mt-3 inline-block font-sans text-sm font-medium text-bronze underline-offset-4 hover:underline"
        >
          Read Article →
        </Link>
      </div>
    </article>
  );
}
