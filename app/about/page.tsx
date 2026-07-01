import Image from "next/image";
import type { Metadata } from "next";
import { values, founders } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — SoulFlow India",
  description:
    "Mental health care that feels like coming home. Meet the founders and values behind SoulFlow India.",
};

export default function About() {
  return (
    <div>
      <section className="mx-auto max-w-[1200px] px-8 pb-10 pt-[72px]">
        <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-amber">
          Our story
        </span>
        <h1 className="mt-[14px] max-w-[760px] font-serif text-[36px] font-semibold leading-[1.08] sm:text-[46px] md:text-[56px] md:leading-[1.06]">
          Mental health care that feels like coming home.
        </h1>
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[54px] px-8 pb-[70px] pt-6 md:grid-cols-2">
        <Image
          src="/assets/ph-about.png"
          alt="A gentle moment from SoulFlow"
          width={600}
          height={460}
          data-reveal
          className="block h-[460px] w-full rounded-[24px] object-cover shadow-[0_26px_56px_-26px_rgba(44,40,35,0.45)]"
        />
        <div data-reveal data-reveal-delay="90ms">
          <p className="m-0 mb-[18px] text-[16.5px] leading-[1.8] text-ink-soft">
            SoulFlow was shaped by a shared belief: that healing doesn&apos;t
            only happen through conversation. It happens in pauses. In images. In
            movement. In moments where something inside finally exhales.
          </p>
          <p className="m-0 mb-[18px] text-[16px] leading-[1.8] text-muted">
            We hold a gentle, accessible space for therapy, workshops, support
            groups, internships and training, meeting you where you are, without
            judgement, and walking alongside you as you heal, learn and grow.
          </p>
          <p className="m-0 text-[16px] leading-[1.8] text-muted">
            If your year didn&apos;t start the way you planned, you&apos;re not
            behind. You&apos;re just arriving in your own time.
          </p>
          <div className="mt-7 flex flex-wrap gap-[14px]">
            <span className="rounded-full bg-paper-soft px-[18px] py-[9px] text-[13.5px] font-semibold text-sage">
              🍀 Safe &amp; confidential
            </span>
            <span className="rounded-full bg-paper-soft px-[18px] py-[9px] text-[13.5px] font-semibold text-sage">
              Evidence-based
            </span>
            <span className="rounded-full bg-paper-soft px-[18px] py-[9px] text-[13.5px] font-semibold text-sage">
              Community-led
            </span>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1200px] px-8 py-[78px]">
          <h2 className="mb-[42px] text-center font-serif text-[29px] font-semibold sm:text-[33px] md:text-[38px]">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                data-reveal
                data-reveal-delay={`${i * 90}ms`}
                className="rounded-[18px] bg-paper px-7 py-[30px]"
              >
                <div className="font-serif text-[30px] text-amber">{v.sym}</div>
                <h3 className="mb-2 mt-[10px] font-serif text-[24px] font-semibold">
                  {v.title}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.65] text-muted">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="mx-auto max-w-[1200px] px-8 py-[84px]">
        <div className="mb-[42px] text-center">
          <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-amber">
            The people
          </span>
          <h2 className="mb-2 mt-3 font-serif text-[30px] font-semibold sm:text-[34px] md:text-[40px]">
            Meet the founders
          </h2>
          <p className="m-0 text-[14px] italic text-faint">
            The humans behind SoulFlow
          </p>
        </div>
        <div className="mx-auto grid max-w-[760px] grid-cols-1 gap-7 sm:grid-cols-2">
          {founders.map((f, i) => (
            <div
              key={f.id}
              data-reveal
              data-reveal-delay={`${i * 90}ms`}
              className="rounded-[22px] bg-[linear-gradient(165deg,#F5ECDC,#EAD9BE)] px-7 pb-8 pt-[38px] text-center"
            >
              <div className="relative mx-auto mb-5 h-[174px] w-[174px]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_38%,rgba(230,168,103,0.5),rgba(95,110,82,0.18))]" />
                <Image
                  src={f.src}
                  alt={f.name}
                  width={150}
                  height={150}
                  className="absolute left-3 top-3 h-[150px] w-[150px] rounded-full border-[5px] border-[#FBF7EF] object-cover shadow-[0_10px_26px_-12px_rgba(44,40,35,0.55)]"
                />
              </div>
              <h3 className="mb-1 font-serif text-[25px] font-semibold">
                {f.name}
              </h3>
              <div className="text-[13px] font-bold tracking-[0.2px] text-amber-deep">
                {f.role}
              </div>
              <p className="mx-auto mt-3 max-w-[300px] text-[14px] leading-[1.65] text-muted">
                {f.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
