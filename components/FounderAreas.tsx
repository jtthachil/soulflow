"use client";

import Image from "next/image";
import { useState } from "react";
import { therapists, type Therapist } from "@/lib/content";

function TherapistCard({ t }: { t: Therapist }) {
  // First area open by default; multiple may be open at once.
  const [open, setOpen] = useState<number[]>([0]);
  const toggle = (i: number) =>
    setOpen((cur) =>
      cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]
    );

  return (
    <div className="flex flex-col rounded-[22px] border border-ink/[0.07] bg-white p-6 shadow-[0_18px_44px_-30px_rgba(44,40,35,0.45)] sm:p-7">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="relative h-[68px] w-[68px] flex-none">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_38%,rgba(230,168,103,0.5),rgba(95,110,82,0.18))]" />
          <Image
            src={t.src}
            alt={t.name}
            width={62}
            height={62}
            className="absolute left-[3px] top-[3px] h-[62px] w-[62px] rounded-full border-[3px] border-[#FBF7EF] object-cover"
          />
        </div>
        <div>
          <h3 className="font-serif text-[23px] font-semibold leading-tight text-ink">
            {t.name}
          </h3>
          <div className="mt-[2px] text-[12.5px] font-bold tracking-[0.2px] text-amber-deep">
            {t.role}
          </div>
        </div>
      </div>

      <p className="mt-[14px] text-[14px] leading-[1.6] text-muted">{t.intro}</p>

      {t.draft && (
        <span className="mt-3 inline-flex w-fit items-center gap-[6px] rounded-full bg-paper-soft px-[12px] py-[5px] text-[11.5px] font-bold uppercase tracking-[0.6px] text-amber-deep">
          <span className="h-[6px] w-[6px] rounded-full bg-amber" />
          Draft · pending confirmation
        </span>
      )}

      {/* Accordion */}
      <div className="mt-5 flex flex-col border-t border-ink/[0.08]">
        {t.areas.map((area, i) => {
          const isOpen = open.includes(i);
          return (
            <div key={area.title} className="border-b border-ink/[0.08]">
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-3 py-[15px] text-left"
              >
                <span className="font-serif text-[18.5px] font-semibold text-ink">
                  {area.title}
                </span>
                <span
                  className={`flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full text-amber transition-all duration-300 ${
                    isOpen ? "rotate-180 bg-amber/[0.12]" : "bg-paper-soft"
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="m-0 list-none p-0 pb-[18px]">
                    {area.items.map((it) => (
                      <li
                        key={it}
                        className="mb-[9px] flex items-start gap-[10px] text-[13.5px] leading-[1.55] text-muted last:mb-0"
                      >
                        <span className="mt-[1px] flex-none leading-[1.4] text-amber">
                          •
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FounderAreas() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {therapists.map((t) => (
        <TherapistCard key={t.id} t={t} />
      ))}
    </div>
  );
}
