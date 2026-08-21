"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { uiActions } from "@/features/ui/uiSlice";
import { NAV_LINKS } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";
import { SiteBrand } from "./SiteBrand";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);

  const toggleMobileMenu = useCallback(() => {
    dispatch(uiActions.setMobileMenuOpen(!mobileMenuOpen));
  }, [dispatch, mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    dispatch(uiActions.setMobileMenuOpen(false));
  }, [dispatch]);

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
          <Link href="/" className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            <SiteBrand />
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-ink transition-colors hover:text-bronze"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={toggleMobileMenu}
              className="rounded-full p-2 text-ink transition-colors hover:bg-paper hover:text-bronze lg:hidden"
            >
              <MenuIcon open={mobileMenuOpen} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
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
