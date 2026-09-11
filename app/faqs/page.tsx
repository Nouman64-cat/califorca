import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { companyInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQs | Califorca Trading LLC",
  description: "Frequently asked questions about ordering, delivery, and products from Califorca Trading LLC.",
};

const faqs = [
  {
    q: "What areas do you deliver to?",
    a: "We deliver across the UAE from our warehouse in Umm Al Qwain, with express options available for Dubai, Sharjah, and Ajman.",
  },
  {
    q: "Do you offer bulk or wholesale pricing?",
    a: `Yes. Bulk and wholesale orders can be placed through our wholesale site at ${companyInfo.wholesaleUrl} or by contacting our sales team directly.`,
  },
  {
    q: "Can I request a product catalogue?",
    a: "Yes, a downloadable catalogue is available on request — reach out via the Contact Us page or call our showroom.",
  },
  {
    q: "What brands do you carry?",
    a: "We stock brands including HaoTian, IPC Pulex, TMB Italy, Martinazzo, and Tramontina, alongside our own product lines.",
  },
  {
    q: "What are your showroom hours?",
    a: `Our showroom is open ${companyInfo.hoursShowroom}. The warehouse operates ${companyInfo.hoursWarehouse}.`,
  },
  {
    q: "Do you accept returns?",
    a: "Please see our Cancellation & Refund Policy page for full details on returns and exchanges.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" description="Answers to common questions about ordering and delivery." />
      <section className="container-page max-w-3xl py-16">
        <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-6">
              <summary className="cursor-pointer list-none font-semibold text-brand-black marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="shrink-0 text-brand-red transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-neutral-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
