import Link from "next/link";
import { MailIcon, PhoneIcon, PinIcon } from "./icons";
import { categories, companyInfo, footerInfoLinks, primaryNav, socialLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-brand-black text-neutral-300">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="text-xl font-extrabold text-white">
            CALIFOR<span className="text-brand-red">CA</span>
          </span>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            Since {companyInfo.founded}, Califorca Trading LLC has supplied commercial cleaning
            equipment, janitorial products, and kitchenware to businesses across the UAE.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-xs hover:border-brand-red hover:text-brand-red"
                aria-label={s.label}
              >
                {s.label.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-red">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Top Categories</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/products/${c.slug}`} className="hover:text-brand-red">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
              {companyInfo.address}
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneIcon className="h-4 w-4 shrink-0 text-brand-red" />
              <a href={`tel:${companyInfo.phone}`} className="hover:text-brand-red">
                {companyInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon className="h-4 w-4 shrink-0 text-brand-red" />
              <a href={`mailto:${companyInfo.email}`} className="hover:text-brand-red">
                {companyInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Califorca Trading LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerInfoLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand-red">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
