import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ShieldIcon, TagIcon, TruckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sustainable Cleaning Solutions | Califorca Trading LLC",
  description: "Califorca's approach to sustainable cleaning equipment and eco-conscious sourcing.",
};

const pillars = [
  {
    icon: ShieldIcon,
    title: "Responsible Sourcing",
    body: "We partner with manufacturers who meet recognized quality and environmental standards.",
  },
  {
    icon: TagIcon,
    title: "Reduced Chemical Waste",
    body: "Concentrate formats and precision dispensers help facilities cut down on overuse.",
  },
  {
    icon: TruckIcon,
    title: "Efficient Logistics",
    body: "Consolidated deliveries from our Umm Al Qwain warehouse reduce unnecessary trips.",
  },
];

export default function SustainablePage() {
  return (
    <>
      <PageHero
        title="Sustainable Cleaning Solutions"
        description="Practical steps we take to help facilities clean effectively while reducing environmental impact."
      />
      <section className="container-page py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-neutral-200 bg-white p-7 text-center">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <pillar.icon className="h-7 w-7" />
              </span>
              <h2 className="text-lg font-bold text-brand-black">{pillar.title}</h2>
              <p className="mt-2 text-sm text-neutral-600">{pillar.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-2xl bg-brand-gray p-8">
          <h2 className="text-xl font-bold text-brand-black">Our Commitment</h2>
          <p className="mt-3 max-w-3xl text-neutral-600">
            As a long-standing supplier in the UAE cleaning industry, Califorca is committed to
            offering equipment and consumables that help our customers reduce water, chemical,
            and energy use &mdash; without compromising on results. Ask our team about
            eco-conscious alternatives across our machinery and chemical ranges.
          </p>
        </div>
      </section>
    </>
  );
}
