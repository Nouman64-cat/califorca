"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroSlides } from "@/lib/site-data";

const gradients = [
  "from-brand-black via-neutral-800 to-brand-red",
  "from-brand-red-dark via-brand-red to-neutral-800",
  "from-neutral-900 via-neutral-700 to-brand-red-dark",
  "from-brand-red via-neutral-900 to-brand-black",
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          className={`bg-gradient-to-br ${gradients[i % gradients.length]} transition-opacity duration-700 ${
            i === active ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
          }`}
        >
          <div className="container-page flex min-h-[340px] flex-col items-start justify-center py-16 sm:min-h-[420px]">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
              Since 1984 &middot; Trusted Across the UAE
            </p>
            <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              {slide.title}
            </h1>
            <p className="mt-4 max-w-lg text-base text-white/80 sm:text-lg">{slide.subtitle}</p>
            <Link
              href={slide.href}
              className="mt-7 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-red hover:text-white"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.title}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
