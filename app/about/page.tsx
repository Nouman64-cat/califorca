import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { WhyChooseUs } from "@/components/why-choose-us";
import { BrandStrip } from "@/components/brand-strip";
import { companyInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us | Califorca Trading LLC",
  description: "Learn about Califorca Trading LLC's history, mission, and commitment to quality cleaning equipment since 1984.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Califorca"
        description="Supplying commercial cleaning equipment and supplies across the UAE since 1984."
      />

      <section className="container-page py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-brand-black">Our Story</h2>
            <p className="mt-4 text-neutral-600">
              Founded in {companyInfo.founded}, Califorca Trading LLC began as a small supplier of
              cleaning tools and has since grown into a full-scale distributor of commercial
              cleaning machinery, janitorial products, and kitchenware. Over more than three
              decades we have built lasting relationships with manufacturers in{" "}
              {companyInfo.origins.join(", ")}.
            </p>
            <p className="mt-4 text-neutral-600">
              Today our team of {companyInfo.staffCount} professionals serves hotels, hospitals,
              offices, facilities management companies, and retailers throughout the UAE,
              offering more than 2,500 products backed by fast delivery and hands-on support.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-brand-black">Our Mission</h2>
            <p className="mt-4 text-neutral-600">
              We want to be your first choice for cleaning equipment. That means stocking
              reliable, high-quality products at fair prices, and standing behind every order
              with genuine customer service &mdash; from a single mop head to a bulk warehouse
              order.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              <li className="flex gap-2">
                <span className="text-brand-red">&#10003;</span>
                Direct partnerships with manufacturers across seven countries
              </li>
              <li className="flex gap-2">
                <span className="text-brand-red">&#10003;</span>
                A catalogue of over 2,500 cleaning and kitchenware products
              </li>
              <li className="flex gap-2">
                <span className="text-brand-red">&#10003;</span>
                Dedicated wholesale pricing for bulk and B2B orders
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray py-16">
        <div className="container-page">
          <h2 className="mb-10 text-center text-2xl font-extrabold text-brand-black">
            Why Businesses Trust Califorca
          </h2>
          <WhyChooseUs />
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="mb-10 text-center text-2xl font-extrabold text-brand-black">
          Brands We Carry
        </h2>
        <BrandStrip />
      </section>
    </>
  );
}
