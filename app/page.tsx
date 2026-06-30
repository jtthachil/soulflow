import Link from "next/link";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";
import { services, testimonials } from "@/lib/content";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-8 pb-16 pt-[72px] md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="m-0 mb-[10px] font-script text-[26px] text-amber sm:text-[30px]">
            A space to heal, learn &amp; grow
          </p>
          <h1 className="m-0 mb-[22px] font-serif text-[clamp(2.5rem,11vw,68px)] font-semibold leading-[1.05] tracking-[-0.5px] md:leading-[1.02]">
            Mental health,
            <br />
            held with warmth.
          </h1>
          <p className="m-0 mb-[30px] max-w-[460px] text-[17px] leading-[1.7] text-muted">
            SoulFlow India is a safe, accessible space for therapy, workshops
            and community, supporting you to understand yourself, build
            resilience and thrive.
          </p>
          <div className="flex flex-wrap gap-[14px]">
            <Link
              href="/contact"
              className="cursor-pointer rounded-full bg-amber px-7 py-[15px] text-[15px] font-bold text-white no-underline transition-colors hover:bg-ink"
            >
              Book a session →
            </Link>
            <Link
              href="/services"
              className="cursor-pointer rounded-full border-[1.5px] border-ink/[0.18] px-[26px] py-[15px] text-[15px] font-semibold text-ink no-underline transition-colors hover:border-amber hover:text-amber"
            >
              Explore services
            </Link>
          </div>
          <div className="mt-[42px] flex gap-[30px]">
            <div>
              <div className="font-serif text-[34px] font-semibold text-sage">5</div>
              <div className="text-[12.5px] tracking-[0.3px] text-muted">
                Ways we support you
              </div>
            </div>
            <div>
              <div className="font-serif text-[34px] font-semibold text-sage">100%</div>
              <div className="text-[12.5px] tracking-[0.3px] text-muted">
                Confidential &amp; judgement-free
              </div>
            </div>
            <div>
              <div className="font-serif text-[34px] font-semibold text-sage">Online</div>
              <div className="text-[12.5px] tracking-[0.3px] text-muted">
                Sessions across India
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex h-[560px] w-full flex-col items-center justify-center overflow-hidden rounded-[220px_220px_28px_28px] bg-[linear-gradient(160deg,#F5ECDC_0%,#ECDAC1_50%,#DCC8AB_100%)] px-10 py-12 text-center shadow-[0_30px_60px_-28px_rgba(44,40,35,0.45)]">
            <div className="absolute -top-[50px] -right-10 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(230,168,103,0.5),transparent_68%)]" />
            <div className="absolute -bottom-[50px] -left-10 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(138,154,123,0.42),transparent_68%)]" />
            <Image
              src="/assets/soulflow-logo.png"
              alt="Soulflow"
              width={156}
              height={156}
              className="relative h-[156px] w-[156px] rounded-full shadow-[0_16px_34px_-14px_rgba(44,40,35,0.45)]"
            />
            <p className="relative m-0 mt-[26px] font-script text-[32px] text-amber-deep">
              a gentle space to pause &amp; breathe
            </p>
            <div className="relative my-[22px] h-px w-[46px] bg-ink/[0.22]" />
            <p className="relative m-0 font-serif text-[27px] leading-[1.45] text-ink-soft">
              You&apos;re safe here.
              <br />
              You&apos;re seen here.
            </p>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="bg-sage text-[#EFE7D7]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-x-9 gap-y-[14px] px-8 py-[18px] font-serif text-[22px] italic">
          <span>Therapy</span>
          <span className="opacity-40">✦</span>
          <span>Workshops</span>
          <span className="opacity-40">✦</span>
          <span>Support Groups</span>
          <span className="opacity-40">✦</span>
          <span>Internships</span>
          <span className="opacity-40">✦</span>
          <span>Training</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[980px] px-8 py-[88px] text-center">
        <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-amber">
          Who we are
        </span>
        <h2 className="mx-auto mt-4 max-w-[760px] font-serif text-[30px] font-semibold leading-[1.18] sm:text-[36px] md:text-[42px]">
          A gentle space to pause, breathe, and reconnect with yourself.
        </h2>
        <p className="mx-auto mt-[22px] max-w-[640px] text-[16.5px] leading-[1.8] text-muted">
          Here, we talk about emotions, healing, growth, and everything in
          between, without judgement, without rush. You&apos;re safe here.
          You&apos;re seen here.
        </p>
        <Link
          href="/about"
          className="mt-[26px] inline-block cursor-pointer border-b-2 border-amber-light pb-[3px] text-[15px] font-bold text-amber no-underline"
        >
          More about us
        </Link>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1200px] px-8 py-[84px]">
          <div className="mb-[38px] flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-amber">
                What we offer
              </span>
              <h2 className="mt-3 font-serif text-[30px] font-semibold sm:text-[34px] md:text-[40px]">
                Ways we can support you
              </h2>
            </div>
            <Link
              href="/services"
              className="cursor-pointer rounded-full border-[1.5px] border-ink/[0.18] px-[22px] py-[11px] text-[14.5px] font-semibold text-ink no-underline transition-colors hover:border-amber hover:text-amber"
            >
              View all services
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.no}
                className="rounded-[18px] border border-ink/[0.07] bg-paper px-[26px] py-7 transition duration-[250ms] hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(44,40,35,0.4)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#E9E1D0] font-serif text-[22px] font-bold text-sage">
                  {s.no}
                </div>
                <h3 className="mb-2 mt-[18px] font-serif text-[25px] font-semibold">
                  {s.name}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.65] text-muted">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-[1200px] px-8 py-[88px]">
        <div className="mb-[46px] text-center">
          <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-amber">
            Kind words
          </span>
          <h2 className="mt-3 font-serif text-[30px] font-semibold sm:text-[34px] md:text-[40px]">
            From the people we&apos;ve held space for
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="m-0 rounded-[18px] bg-white px-7 py-[30px] shadow-[0_12px_30px_-22px_rgba(44,40,35,0.4)]"
            >
              <div className="font-serif text-[46px] leading-[0.5] text-amber-light">
                &ldquo;
              </div>
              <blockquote className="my-[14px] mb-5 ml-0 text-[15.5px] leading-[1.7] text-ink-soft">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-sage text-[14px] font-bold text-[#EFE7D7]">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-bold">{t.name}</div>
                  <div className="text-[12.5px] text-muted">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <Newsletter />
    </div>
  );
}
