import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { categories } from "@/lib/site-data";
import { categoryIconMap } from "@/components/icons";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} | Califorca Trading LLC`,
    description: category.description,
  };
}

export default async function CategoryPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const Icon = categoryIconMap[category.icon];
  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <PageHero title={category.name} description={category.description} />

      <section className="container-page py-16">
        <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center">
          <span className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
            <Icon className="h-10 w-10" />
          </span>
          <h2 className="text-xl font-bold text-brand-black">
            Browse our {category.name.toLowerCase()} range
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-600">
            {category.description} Contact our sales team for full specifications, pricing, and
            availability across this range.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-brand-red-dark"
          >
            Request a Quote
          </Link>
        </div>

        <div className="mt-14">
          <h3 className="mb-6 text-lg font-bold text-brand-black">Other Categories</h3>
          <div className="flex flex-wrap gap-3">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:border-brand-red hover:text-brand-red"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
