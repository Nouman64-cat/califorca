import Link from "next/link";
import { categories } from "@/lib/site-data";
import { categoryIconMap } from "./icons";

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const Icon = categoryIconMap[category.icon];
        return (
          <div
            key={category.slug}
            className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-neutral-200">
              <Icon className="h-11 w-11 text-brand-red" />
            </span>
            <h3 className="text-lg font-bold text-brand-red">{category.name}</h3>
            <p className="mt-2 text-sm text-neutral-600">{category.description}</p>
            <Link
              href={`/products/${category.slug}`}
              className="mt-6 rounded-full bg-brand-red px-7 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand-red-dark"
            >
              Shop Now
            </Link>
          </div>
        );
      })}
    </div>
  );
}
