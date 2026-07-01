import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — SoulFlow India",
  description:
    "Reach out to book a session, ask about a workshop, or explore an internship with SoulFlow India.",
};

export default function Contact() {
  return (
    <div>
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-14 px-8 pb-20 pt-[72px] md:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal>
          <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-amber">
            Get in touch
          </span>
          <h1 className="mb-[18px] mt-[14px] font-serif text-[36px] font-semibold leading-[1.08] sm:text-[44px] md:text-[50px] md:leading-[1.06]">
            Let&apos;s begin,
            <br />
            gently.
          </h1>
          <p className="m-0 mb-[30px] max-w-[380px] text-[16px] leading-[1.75] text-muted">
            Reach out to book a session, ask about a workshop, or explore an
            internship. We usually reply within 1-2 days.
          </p>
          <div className="flex flex-col gap-[18px]">
            <a
              href="mailto:hello@soulflowindia.com"
              className="flex items-center gap-[13px] text-ink no-underline transition-colors hover:text-amber"
            >
              <span className="flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-paper-soft text-[18px]">
                ✉
              </span>
              <span>
                <span className="block text-[12px] tracking-[0.3px] text-faint">
                  Email
                </span>
                <span className="text-[15px] font-bold">
                  hello@soulflowindia.com
                </span>
              </span>
            </a>
            <a
              href="https://www.instagram.com/soulflowindia/"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-[13px] text-ink no-underline transition-colors hover:text-amber"
            >
              <span className="flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-paper-soft text-[18px]">
                ◎
              </span>
              <span>
                <span className="block text-[12px] tracking-[0.3px] text-faint">
                  Instagram
                </span>
                <span className="text-[15px] font-bold">@soulflowindia</span>
              </span>
            </a>
          </div>

          <div className="mt-[30px] border-t border-ink/[0.1] pt-[26px]">
            <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-amber">
              Payments
            </span>
            <p className="m-0 mb-4 mt-2 max-w-[360px] text-[14px] leading-[1.65] text-muted">
              Booked a session? Complete your payment online below, or let us
              know if you&apos;d prefer cash.
            </p>
            <div className="flex max-w-[340px] flex-col gap-[10px]">
              <a
                href="https://razorpay.me/@Soulflow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[12px] bg-amber px-5 py-[14px] text-[14.5px] font-bold text-white no-underline transition-colors hover:bg-ink"
              >
                <span>Pay online via Razorpay</span>
                <span>→</span>
              </a>
              <a
                href="https://forms.gle/ZgFMUoFMZyKVWAYv9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[12px] bg-paper-soft px-5 py-[14px] text-[14.5px] font-bold text-ink no-underline transition-colors hover:bg-[#E6DCC8]"
              >
                <span>Payment details form (online / cash)</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </section>
    </div>
  );
}
