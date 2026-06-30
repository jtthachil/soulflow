"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.08] bg-paper/[0.86] backdrop-blur-[10px]">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-8 py-[14px]">
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
        <div className="flex items-center gap-[6px]">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`rounded-full px-3 py-2 text-[14px] font-semibold no-underline transition-colors hover:text-amber ${
                  active ? "text-amber" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-[14px] rounded-full bg-ink px-5 py-[10px] text-[13.5px] font-semibold tracking-[0.2px] text-paper no-underline transition-colors hover:bg-amber hover:text-white"
          >
            Book a session
          </Link>
        </div>
      </nav>
    </header>
  );
}
