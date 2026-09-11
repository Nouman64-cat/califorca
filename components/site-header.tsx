"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CartIcon,
  ChevronDownIcon,
  CloseIcon,
  HeartIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
  UserIcon,
} from "./icons";
import { categories, companyInfo, primaryNav } from "@/lib/site-data";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="hidden bg-brand-black text-white md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-1.5 hover:text-brand-red">
              <PhoneIcon className="h-3.5 w-3.5" />
              {companyInfo.phone}
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-1.5 hover:text-brand-red">
              <MailIcon className="h-3.5 w-3.5" />
              {companyInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={companyInfo.wholesaleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-red"
            >
              Wholesale Site
            </a>
            <Link href="/account" className="hover:text-brand-red">
              My Account
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-page flex h-18 items-center gap-4 py-3 md:h-20">
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>

        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-brand-black">
            CALIFOR<span className="text-brand-red">CA</span>
          </span>
        </Link>

        <div className="relative hidden flex-1 items-center md:flex">
          <input
            type="search"
            placeholder="Search for cleaning equipment, supplies & more..."
            className="w-full rounded-full border border-neutral-300 bg-neutral-50 py-2.5 pl-4 pr-11 text-sm outline-none focus:border-brand-red"
          />
          <button
            type="button"
            aria-label="Search"
            className="absolute right-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white"
          >
            <SearchIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="ml-auto flex items-center gap-4 text-brand-black md:ml-0">
          <Link href="/account" className="hidden flex-col items-center text-[11px] leading-tight sm:flex" aria-label="Account">
            <UserIcon className="h-5 w-5" />
            Account
          </Link>
          <Link href="/wishlist" className="hidden flex-col items-center text-[11px] leading-tight sm:flex" aria-label="Wishlist">
            <HeartIcon className="h-5 w-5" />
            Wishlist
          </Link>
          <Link href="/cart" className="flex flex-col items-center text-[11px] leading-tight" aria-label="Cart">
            <CartIcon className="h-5 w-5" />
            Cart
          </Link>
        </div>
      </div>

      {/* Category / links bar */}
      <nav className="hidden border-t border-neutral-200 bg-white md:block">
        <div className="container-page flex h-12 items-center gap-7 text-sm font-medium">
          <div
            className="group relative flex h-full items-center"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-full bg-brand-red px-4 py-1.5 text-white">
              Products
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            {productsOpen && (
              <div className="absolute left-0 top-full w-72 rounded-lg border border-neutral-200 bg-white p-2 shadow-lg">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    className="block rounded-md px-3 py-2 text-neutral-700 hover:bg-brand-gray hover:text-brand-red"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {primaryNav.filter((link) => link.label !== "Products").map((link) => (
            <Link key={link.href} href={link.href} className="text-neutral-700 hover:text-brand-red">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
          <div className="h-full w-80 max-w-[85%] overflow-y-auto bg-white p-5">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xl font-extrabold text-brand-black">
                CALIFOR<span className="text-brand-red">CA</span>
              </span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 font-medium text-neutral-800 hover:bg-brand-gray"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 border-t border-neutral-200 pt-4 text-sm text-neutral-600">
              <a href={`tel:${companyInfo.phone}`} className="mb-2 flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" /> {companyInfo.phone}
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2">
                <MailIcon className="h-4 w-4" /> {companyInfo.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
