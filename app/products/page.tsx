import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CategoryGrid } from "@/components/category-grid";

export const metadata: Metadata = {
  title: "Products | Califorca Trading LLC",
  description: "Browse Califorca's full catalogue of commercial cleaning machinery, janitorial supplies, and kitchenware.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        description="Over 2,500 products across nine core categories, sourced from trusted manufacturers worldwide."
      />
      <section className="bg-neutral-200 py-16">
        <div className="container-page">
          <CategoryGrid />
        </div>
      </section>
    </>
  );
}
