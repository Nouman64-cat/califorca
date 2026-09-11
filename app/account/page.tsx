import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "My Account | Califorca Trading LLC",
};

export default function AccountPage() {
  return (
    <>
      <PageHero title="My Account" description="Sign in to view your orders and account details." />
      <section className="container-page max-w-md py-16">
        <form className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-brand-red py-3 text-sm font-semibold text-white hover:bg-brand-red-dark"
          >
            Sign In
          </button>
        </form>
      </section>
    </>
  );
}
