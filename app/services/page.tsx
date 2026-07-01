import Link from "next/link";
import type { Metadata } from "next";
import FounderAreas from "@/components/FounderAreas";
import { services, schedule, quicklinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — SoulFlow India",
  description:
    "Therapy, workshops, support groups, internships, training and the Psychology Bootcamp. Support for every step of your journey.",
};

export default function Services() {
  return (
    <div>
      <section className="mx-auto max-w-[1200px] px-8 pb-[50px] pt-[72px] text-center">
        <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-amber">
          Our services
        </span>
        <h1 className="mx-auto mt-[14px] max-w-[720px] font-serif text-[36px] font-semibold leading-[1.08] sm:text-[46px] md:text-[56px] md:leading-[1.06]">
          Support for every step of your journey
        </h1>
        <p className="mx-auto mt-[18px] max-w-[560px] text-[16.5px] leading-[1.75] text-muted">
          From one-on-one therapy to training the next generation of
          psychologists. Here&apos;s how we can help.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-8 pb-20">
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.no}
              data-reveal
              data-reveal-delay={`${(i % 2) * 90}ms`}
              className="flex items-start gap-[22px] rounded-[20px] border border-ink/[0.07] bg-white px-8 py-[34px] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(44,40,35,0.4)]"
            >
              <div className="flex h-[54px] w-[54px] flex-none items-center justify-center rounded-[14px] bg-paper-soft font-serif text-[26px] font-bold text-sage">
                {s.no}
              </div>
              <div>
                <h3 className="mb-2 font-serif text-[27px] font-semibold">
                  {s.name}
                </h3>
                <p className="mb-[14px] text-[15px] leading-[1.68] text-muted">
                  {s.long}
                </p>
                <Link
                  href={`/contact?interest=${encodeURIComponent(s.interest)}`}
                  className="cursor-pointer text-[14px] font-bold text-amber no-underline transition-colors hover:text-ink"
                >
                  Enquire →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THERAPISTS & FOCUS AREAS */}
      <section className="mx-auto max-w-[1100px] px-8 pb-[30px] pt-[10px]">
        <div className="mb-[38px] text-center">
          <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-amber">
            Who you&apos;ll work with
          </span>
          <h2 className="mb-2 mt-3 font-serif text-[30px] font-semibold sm:text-[34px] md:text-[40px]">
            Meet your therapists &amp; their focus areas
          </h2>
          <p className="mx-auto max-w-[580px] text-[15px] leading-[1.7] text-muted">
            Therapy at SoulFlow is led by our two co-founders. Tap any area to
            see what it covers and find the right fit for you.
          </p>
        </div>
        <FounderAreas />
      </section>

      {/* SCHEDULE */}
      <section className="bg-sage text-[#F2EEE3]">
        <div className="mx-auto max-w-[1100px] px-8 py-20">
          <div className="mb-10 text-center">
            <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-amber-light">
              Upcoming
            </span>
            <h2 className="mb-[6px] mt-3 font-serif text-[30px] font-semibold sm:text-[34px] md:text-[40px]">
              Workshops &amp; group sessions
            </h2>
            <p className="m-0 text-[13.5px] italic text-[#cdd3c2]">
              Sample schedule · update with your live dates
            </p>
          </div>
          <div data-reveal className="flex flex-col gap-[2px] overflow-hidden rounded-[18px]">
            {schedule.map((e, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-3 bg-[rgba(247,242,233,0.07)] px-[26px] py-[22px] transition-colors hover:bg-[rgba(247,242,233,0.13)] sm:grid-cols-[104px_1fr_auto] sm:items-center sm:gap-5"
              >
                <div className="text-left sm:text-center">
                  <div className="font-serif text-[34px] font-bold leading-none text-amber-light">
                    {e.date}
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-[1px] text-[#cdd3c2]">
                    {e.my}
                  </div>
                  <div className="text-[11.5px] text-[#cdd3c2]">{e.day}</div>
                </div>
                <div>
                  <div className="text-[16.5px] font-bold">{e.title}</div>
                  <div className="mt-[3px] text-[13px] text-[#cdd3c2]">
                    {e.meta}
                  </div>
                </div>
                <Link
                  href={`/contact?interest=${encodeURIComponent(
                    e.title.includes("Bootcamp")
                      ? "Psychology Bootcamp"
                      : "Workshop"
                  )}&event=${encodeURIComponent(e.title)}`}
                  className="cursor-pointer justify-self-start rounded-full bg-amber-light px-[18px] py-[9px] text-[13px] font-bold text-ink no-underline transition-colors hover:bg-white sm:justify-self-auto"
                >
                  Register
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="mx-auto max-w-[1100px] px-8 pb-[90px] pt-[84px]">
        <div className="mb-[34px] text-center">
          <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-amber">
            Helpful links
          </span>
          <h2 className="mt-3 font-serif text-[30px] font-semibold sm:text-[34px] md:text-[40px]">
            Bootcamp &amp; booking
          </h2>
        </div>
        <div
          data-reveal
          className="rounded-[24px] bg-ink px-5 py-[14px] shadow-[0_22px_50px_-34px_rgba(44,40,35,0.6)] sm:px-[30px] sm:py-[18px]"
        >
          {quicklinks.map((q, i) => {
            const isExternal = q.target === "_blank";
            const className =
              "group flex items-center gap-[22px] rounded-[12px] px-[14px] py-5 no-underline text-[#F2EADB] cursor-pointer transition-all hover:bg-[rgba(230,168,103,0.14)] hover:pl-[22px]" +
              (i < quicklinks.length - 1
                ? " border-b border-[rgba(242,234,219,0.12)]"
                : "");
            const inner = (
              <>
                <span className="w-[34px] flex-none font-serif text-[26px] font-semibold text-amber-light">
                  {q.no}
                </span>
                <span className="flex-1">
                  <span className="block text-[16px] font-bold">{q.title}</span>
                  <span className="text-[13px] text-[#C9C0B2]">{q.sub}</span>
                </span>
                <span className="text-[18px] text-amber-light">→</span>
              </>
            );
            return isExternal ? (
              <a
                key={q.no}
                href={q.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link key={q.no} href={q.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
        <p className="mx-auto mt-[18px] text-center text-[12.5px] italic text-faint">
          Share the brochure, registration &amp; booking form URLs and we&apos;ll
          point these to the exact pages.
        </p>
      </section>
    </div>
  );
}
