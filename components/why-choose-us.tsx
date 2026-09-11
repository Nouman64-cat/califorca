import { benefits } from "@/lib/site-data";
import { benefitIconMap } from "./icons";

export function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {benefits.map((benefit) => {
        const Icon = benefitIconMap[benefit.icon];
        return (
          <div
            key={benefit.title}
            className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-neutral-200"
          >
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="text-base font-bold text-brand-black">{benefit.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{benefit.description}</p>
          </div>
        );
      })}
    </div>
  );
}
