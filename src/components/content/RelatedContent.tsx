import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

export interface RelatedContentItem {
  title: string;
  subtitle?: string;
  href: string;
}

export function RelatedContent({ label, items }: { label: string; items: RelatedContentItem[] }) {
  if (items.length === 0) return null;

  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-lg border border-border bg-white px-4 py-3 transition-shadow hover:shadow-md"
            >
              <span className="block font-serif text-base text-ink">{item.title}</span>
              {item.subtitle && <span className="block font-sans text-xs text-slate">{item.subtitle}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
