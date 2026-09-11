import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { companyInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Califorca Trading LLC",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="container-page max-w-3xl space-y-4 py-16 text-neutral-600">
        <p>
          Califorca Trading LLC collects only the information needed to process orders, respond
          to inquiries, and improve our services &mdash; such as name, contact details, and order
          history.
        </p>
        <p>
          We do not sell or share customer information with third parties, except where required
          to fulfill an order (e.g. delivery partners) or comply with the law.
        </p>
        <p>
          For questions about your data or to request its removal, contact us at{" "}
          {companyInfo.email}.
        </p>
      </section>
    </>
  );
}
