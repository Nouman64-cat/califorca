import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { companyInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Califorca Trading LLC",
};

export default function CancellationRefundPage() {
  return (
    <>
      <PageHero title="Cancellation & Refund Policy" />
      <section className="container-page max-w-3xl space-y-4 py-16 text-neutral-600">
        <p>
          Orders can be cancelled free of charge before dispatch. Once an order has left our
          warehouse, cancellation requests will be handled on a case-by-case basis.
        </p>
        <p>
          Returns are accepted for defective or incorrectly supplied items within 7 days of
          delivery, provided the product is unused and in its original packaging.
        </p>
        <p>
          To start a cancellation or return, contact our team at {companyInfo.phone} or{" "}
          {companyInfo.email} with your order details.
        </p>
      </section>
    </>
  );
}
