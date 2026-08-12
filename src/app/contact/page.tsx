import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Vivek — The Official World of Words team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        Get in Touch
      </EditorialHeading>
      <p className="mt-4 font-sans text-base leading-relaxed text-slate">
        For press, licensing, corrections or general questions about the archive, send us a note.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
