"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.08] bg-paper/[0.86] backdrop-blur-[10px]">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-[14px] sm:px-8">
        <Link href="/" className="flex cursor-pointer items-center gap-[11px] no-underline">
          <Image
            src="/assets/soulflow-logo.png"
            alt="SoulFlow"
            width={42}
            height={42}
            className="h-[42px] w-[42px] rounded-full object-cover shadow-[0_1px_6px_rgba(44,40,35,0.12)]"
          />
          <span className="font-script text-[26px] font-semibold leading-none text-ink">
            Soulflow
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-[6px] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`rounded-full px-3 py-2 text-[14px] font-semibold no-underline transition-colors hover:text-amber ${
                isActive(item.href) ? "text-amber" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-[14px] rounded-full bg-ink px-5 py-[10px] text-[13.5px] font-semibold tracking-[0.2px] text-paper no-underline transition-colors hover:bg-amber hover:text-white"
          >
            Book a session
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06] md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-ink/[0.08] bg-paper px-5 pb-5 pt-2 md:hidden"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`rounded-[10px] px-3 py-3 text-[15.5px] font-semibold no-underline transition-colors hover:bg-ink/[0.04] ${
                  isActive(item.href) ? "text-amber" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-ink px-5 py-[13px] text-center text-[14px] font-semibold tracking-[0.2px] text-paper no-underline transition-colors hover:bg-amber hover:text-white"
            >
              Book a session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
