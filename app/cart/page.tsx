import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CartIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Cart | Califorca Trading LLC",
};

export default function CartPage() {
  return (
    <>
      <PageHero title="Your Cart" />
      <section className="container-page flex flex-col items-center py-20 text-center">
        <CartIcon className="h-12 w-12 text-neutral-300" />
        <p className="mt-4 text-neutral-600">Your cart is currently empty.</p>
      </section>
    </>
  );
}
