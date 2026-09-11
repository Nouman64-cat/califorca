import Image from "next/image";
import Link from "next/link";

export function AboutTeaser() {
  return (
    <section className="container-page py-16">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute -bottom-6 -left-6 h-28 w-28"
            style={{
              backgroundImage:
                "radial-gradient(var(--brand-red) 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
            }}
            aria-hidden="true"
          />
          <div
            className="relative aspect-[488/500] overflow-hidden border-4 border-brand-red"
            style={{ borderRadius: "63% 37% 54% 46% / 43% 37% 63% 57%" }}
          >
            <Image
              src="/about-us-img-1.webp"
              alt="Califorca team member"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 24rem, 80vw"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold leading-snug text-brand-red sm:text-3xl">
            Are You Looking For Reliable Cleaning Equipment Suppliers In UAE?
          </h2>
          <p className="mt-5 text-neutral-600">
            Established in 1984, Califorca Trading LLC is one of the oldest and leading supplier
            of Cleaning Equipment, Cleaning Machinery, Janitorial products, Kitchenware and
            Household Products. Our Brand &ldquo;Moonlight&rdquo; is well known and trusted by
            reputed companies such as MBM, POWER Group, ACCURO and many more. We are proud to
            offer our Cleaning Equipment in Dubai, Sharjah, Ajman, Ras al Khaimah, Umm Al Quwain,
            Fujairah, Abu Dhabi, UAE.
          </p>
          <Link
            href="/products"
            className="mt-7 inline-flex items-center rounded-full bg-brand-red px-7 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand-red-dark"
          >
            Explore Our Products
          </Link>
        </div>
      </div>
    </section>
  );
}
