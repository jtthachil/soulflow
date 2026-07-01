"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Reveals any [data-reveal] element as it scrolls into view.
// The hiding CSS is scoped under `html.sf-js`, so content stays fully
// visible when JS is unavailable, and prefers-reduced-motion disables
// the effect entirely (see globals.css).
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("sf-js");
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("sf-in");
            io.unobserve(el);
            // Once the entrance finishes, drop the attribute so the
            // reveal transition no longer overrides hover transitions.
            window.setTimeout(() => {
              el.removeAttribute("data-reveal");
              el.style.transitionDelay = "";
            }, 1100);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    for (const el of els) {
      if (el.dataset.revealDelay) {
        el.style.transitionDelay = el.dataset.revealDelay;
      }
      io.observe(el);
    }
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
