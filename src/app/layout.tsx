import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { StoreProvider } from "@/components/providers/StoreProvider";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { PageTransition } from "@/components/motion/PageTransition";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InitialLoader } from "@/components/layout/InitialLoader";
import { SEOJsonLd } from "@/components/seo/SEOJsonLd";
import { personSchema, websiteSchema } from "@/lib/jsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Lyricist Vivek",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <SEOJsonLd data={[personSchema(), websiteSchema()]} />
        <MotionProvider>
          <InitialLoader />
          <StoreProvider>
            <Header />
            <main id="main-content" className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </StoreProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
