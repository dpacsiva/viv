import type { Metadata } from "next";
import { EditorialHeading } from "@/components/ui/EditorialHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Lyricist Vivek.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <EditorialHeading as="h1" size="lg" className="mt-4">
        Privacy Policy
      </EditorialHeading>
      <div className="mt-6 flex flex-col gap-4 font-sans text-base leading-relaxed text-slate">
        <p>
          This archive collects only the information you choose to submit through the contact form — your name,
          email address and message — solely to respond to your enquiry.
        </p>
        <p>
          We do not sell or share personal information with third parties. Anonymous usage analytics may be
          collected to understand which lyrics, films and articles readers find most valuable.
        </p>
        <p>For any privacy-related questions or requests to remove your data, please contact the site owner.</p>
      </div>
    </div>
  );
}
