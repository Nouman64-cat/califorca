import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Blog | Califorca Trading LLC",
  description: "Tips, guides, and news on commercial cleaning equipment and facility maintenance.",
};

const posts = [
  {
    title: "Choosing the Right Floor Scrubber for Your Facility",
    excerpt: "A guide to matching walk-behind and ride-on scrubbers to your floor size and traffic.",
    date: "August 2026",
  },
  {
    title: "How to Maintain Marble Floors in High-Traffic Areas",
    excerpt: "Polishing schedules, equipment, and chemical tips to keep natural stone looking new.",
    date: "July 2026",
  },
  {
    title: "5 Signs Your Facility Needs Bulk Cleaning Supplies",
    excerpt: "Why bulk ordering saves time and money for hotels, offices, and facility managers.",
    date: "June 2026",
  },
  {
    title: "Sustainable Cleaning: Reducing Chemical Waste",
    excerpt: "Practical steps facilities can take to lower chemical usage without sacrificing results.",
    date: "May 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" description="Guides and insights on cleaning equipment and facility maintenance." />
      <section className="container-page py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition hover:shadow-lg"
            >
              <div className="mb-4 h-36 rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-black/10" />
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">{post.date}</p>
              <h2 className="mt-2 text-lg font-bold text-brand-black">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm text-neutral-600">{post.excerpt}</p>
              <span className="mt-4 text-sm font-semibold text-brand-red">Read More &rarr;</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
