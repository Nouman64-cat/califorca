import { brands } from "@/lib/site-data";

export function BrandStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
      {brands.map((brand) => (
        <span
          key={brand}
          className="text-lg font-bold uppercase tracking-wide text-neutral-400 transition hover:text-brand-black"
        >
          {brand}
        </span>
      ))}
    </div>
  );
}
