import Link from "next/link";
import { categories } from "@/lib/site-data";
import { categoryIconMap } from "./icons";

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {categories.map((category) => {
        const Icon = categoryIconMap[category.icon];
        return (
          <Link
            key={category.slug}
            href={`/products/${category.slug}`}
            className="group flex flex-col items-center rounded-xl border border-neutral-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-brand-red hover:shadow-lg"
          >
            <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gray text-brand-black transition group-hover:bg-brand-red group-hover:text-white">
              <Icon className="h-8 w-8" />
            </span>
            <span className="text-sm font-semibold text-brand-black">{category.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
