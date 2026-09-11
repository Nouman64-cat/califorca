import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { companyInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Delivery System | Califorca Trading LLC",
};

export default function DeliverySystemPage() {
  return (
    <>
      <PageHero title="Delivery System" />
      <section className="container-page max-w-3xl space-y-4 py-16 text-neutral-600">
        <p>
          Orders are dispatched from our warehouse in {companyInfo.address}. Delivery timelines
          depend on order size, destination, and stock availability.
        </p>
        <p>
          Standard deliveries within the UAE are typically fulfilled within 1&ndash;3 business
          days. Bulk and wholesale orders may require additional lead time &mdash; our team will
          confirm an estimated delivery window when your order is confirmed.
        </p>
        <p>
          For urgent requirements, please call {companyInfo.phone} or email{" "}
          {companyInfo.email} to check express delivery options.
        </p>
      </section>
    </>
  );
}
