"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { uiActions } from "@/features/ui/uiSlice";
import { NAV_LINKS, MORE_LINKS } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";
import { SearchOverlay } from "@/components/search/SearchOverlay";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const searchOpen = useAppSelector((state) => state.ui.searchOverlayOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          scrolled ? "border-border bg-ivory/90 shadow-sm backdrop-blur-md" : "border-transparent bg-ivory/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif text-xl font-semibold tracking-[0.15em] text-ink sm:text-2xl">VIVEK</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate">
              The Official World of Words
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-ink transition-colors hover:text-bronze"
              >
                {link.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 font-sans text-sm font-medium text-ink transition-colors hover:text-bronze"
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                onClick={() => setMoreOpen((v) => !v)}
              >
                More
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {moreOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full w-56 rounded-lg border border-border bg-white p-2 shadow-lg"
                >
                  {MORE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      className="block rounded-md px-3 py-2 font-sans text-sm text-ink transition-colors hover:bg-paper hover:text-bronze"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search the archive"
              onClick={() => dispatch(uiActions.setSearchOverlayOpen(true))}
              className="rounded-full p-2 text-ink transition-colors hover:bg-paper hover:text-bronze"
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => dispatch(uiActions.setMobileMenuOpen(!mobileMenuOpen))}
              className="rounded-full p-2 text-ink transition-colors hover:bg-paper hover:text-bronze lg:hidden"
            >
              <MenuIcon open={mobileMenuOpen} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileMenuOpen} onClose={() => dispatch(uiActions.setMobileMenuOpen(false))} />
      <SearchOverlay open={searchOpen} onClose={() => dispatch(uiActions.setSearchOverlayOpen(false))} />
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {open ? (
        <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      ) : (
        <path d="M4 6H18M4 11H18M4 16H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  );
}
