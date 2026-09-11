import Image from "next/image";
import { brandLogos } from "@/lib/site-data";

export function BrandCarousel() {
  const track = [...brandLogos, ...brandLogos];

  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="animate-brand-scroll flex w-max items-stretch group-hover:[animation-play-state:paused]">
        {track.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex h-28 w-52 shrink-0 items-center justify-center border border-neutral-200 bg-white p-6"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={340}
              height={340}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
