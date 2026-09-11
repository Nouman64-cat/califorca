import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms & Conditions | Califorca Trading LLC",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" />
      <section className="container-page max-w-3xl space-y-4 py-16 text-neutral-600">
        <p>
          By placing an order with Califorca Trading LLC, you agree to our pricing, availability,
          and delivery terms as confirmed at the time of purchase.
        </p>
        <p>
          Product specifications and images are provided for guidance; slight variations may
          occur between batches or manufacturers. Prices are subject to change without prior
          notice for non-confirmed orders.
        </p>
        <p>
          These terms are governed by the laws of the United Arab Emirates.
        </p>
      </section>
    </>
  );
}
