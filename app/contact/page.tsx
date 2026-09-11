import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { companyInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us | Califorca Trading LLC",
  description: "Get in touch with Califorca Trading LLC for product inquiries, bulk orders, and support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a question about a product or need a bulk quote? Reach out to our team."
      />

      <section className="container-page grid grid-cols-1 gap-12 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold text-brand-black">Get In Touch</h2>
          <div className="mt-6 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <PinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-brand-black">Showroom &amp; Warehouse</p>
                <p className="text-neutral-600">{companyInfo.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-brand-black">Phone</p>
                <a href={`tel:${companyInfo.phone}`} className="text-neutral-600 hover:text-brand-red">
                  {companyInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <MailIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-brand-black">Email</p>
                <a href={`mailto:${companyInfo.email}`} className="text-neutral-600 hover:text-brand-red">
                  {companyInfo.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <ClockIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-brand-black">Showroom Hours</p>
                <p className="text-neutral-600">{companyInfo.hoursShowroom}</p>
                <p className="mt-2 font-semibold text-brand-black">Warehouse Hours</p>
                <p className="text-neutral-600">{companyInfo.hoursWarehouse}</p>
              </div>
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-brand-black">Send Us a Message</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-brand-red sm:col-span-1"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-brand-red sm:col-span-1"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-brand-red sm:col-span-2"
            />
            <textarea
              placeholder="How can we help?"
              rows={5}
              className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-brand-red sm:col-span-2"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-brand-red py-3 text-sm font-semibold text-white hover:bg-brand-red-dark"
          >
            Submit Inquiry
          </button>
        </form>
      </section>
    </>
  );
}
