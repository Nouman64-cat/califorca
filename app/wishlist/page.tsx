import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { HeartIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Wishlist | Califorca Trading LLC",
};

export default function WishlistPage() {
  return (
    <>
      <PageHero title="Your Wishlist" />
      <section className="container-page flex flex-col items-center py-20 text-center">
        <HeartIcon className="h-12 w-12 text-neutral-300" />
        <p className="mt-4 text-neutral-600">Your wishlist is currently empty.</p>
      </section>
    </>
  );
}
