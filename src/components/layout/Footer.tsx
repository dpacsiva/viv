import Link from "next/link";
import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/lib/constants";

function SocialIcon({ name }: { name: (typeof SOCIAL_LINKS)[number]["icon"] }) {
  if (name === "instagram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
      />
    </svg>
  );
}

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
                  aria-label={social.label}
                  className="group inline-flex items-center gap-2 font-sans text-sm text-slate transition-colors hover:text-bronze"
                >
                  <SocialIcon name={social.icon} />
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
