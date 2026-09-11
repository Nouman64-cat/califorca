import Link from "next/link";
import { HeroCarousel } from "@/components/hero-carousel";
import { SectionHeading } from "@/components/section-heading";
import { CategoryGrid } from "@/components/category-grid";
import { WhyChooseUs } from "@/components/why-choose-us";
import { BrandStrip } from "@/components/brand-strip";
import { companyInfo } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Company introduction */}
      <section className="container-page py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-red">
              Welcome to Califorca
            </p>
            <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">
              We want to be your first choice for cleaning equipment!
            </h2>
            <p className="mt-4 text-neutral-600">
              Established in {companyInfo.founded}, Califorca Trading LLC has grown into one of
              the UAE&apos;s trusted suppliers of commercial cleaning machinery, janitorial
              products, and kitchenware. We import directly from leading manufacturers in{" "}
              {companyInfo.origins.join(", ")}, bringing quality equipment to businesses across
              the region at competitive prices.
            </p>
            <p className="mt-4 text-neutral-600">
              With a dedicated team of {companyInfo.staffCount} staff and decades of hands-on
              industry experience, we help facilities, hotels, hospitals, and offices find the
              right equipment for the job &mdash; backed by fast delivery and real support.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-brand-gray p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-red">
                {new Date().getFullYear() - companyInfo.founded}+
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-600">Years of Expertise</p>
            </div>
            <div className="rounded-xl bg-brand-gray p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-red">2,500+</p>
              <p className="mt-1 text-sm font-medium text-neutral-600">Products Catalogued</p>
            </div>
            <div className="rounded-xl bg-brand-gray p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-red">{companyInfo.staffCount}</p>
              <p className="mt-1 text-sm font-medium text-neutral-600">Team Members</p>
            </div>
            <div className="rounded-xl bg-brand-gray p-6 text-center">
              <p className="text-3xl font-extrabold text-brand-red">7</p>
              <p className="mt-1 text-sm font-medium text-neutral-600">Sourcing Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by category */}
      <section className="bg-brand-gray py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Catalogue"
            title="Browse by Category"
            description="Over 2,500 products across ten core categories, sourced from trusted manufacturers worldwide."
          />
          <CategoryGrid />
        </div>
      </section>

      {/* Brands */}
      <section className="container-page py-16">
        <SectionHeading eyebrow="Trusted Partners" title="Brands We Carry" />
        <BrandStrip />
      </section>

      {/* Why choose us */}
      <section className="bg-brand-black py-16">
        <div className="container-page">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-brand-red">
            Why Choose Us
          </p>
          <h2 className="text-center text-2xl font-extrabold text-white sm:text-3xl">
            Reasons Businesses Choose Califorca
          </h2>
          <div className="mt-10">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-red px-8 py-12 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white">Need bulk pricing or a catalogue?</h2>
            <p className="mt-2 text-white/85">
              Reach out to our team for wholesale rates, catalogue downloads, and product advice.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-red hover:bg-brand-gray"
            >
              Contact Us
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
