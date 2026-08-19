import Link from "next/link";
import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-bronze">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="font-sans text-sm text-slate transition-colors hover:text-bronze">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <div>
            <span className="font-serif text-lg font-semibold tracking-tight text-ink">Lyricist Vivek</span>
            <p className="mt-1 font-sans text-xs text-slate">Lyrics, works and the journey of Tamil lyricist Vivek.</p>
          </div>
          <ul className="flex flex-wrap gap-5">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-slate transition-colors hover:text-bronze"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 font-sans text-xs text-slate">© {new Date().getFullYear()} Vivek. All rights reserved.</p>
      </div>
    </footer>
  );
}
