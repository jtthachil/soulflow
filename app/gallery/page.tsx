import Image from "next/image";
import type { Metadata } from "next";
import { gallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery — SoulFlow India",
  description: "A few moments from the SoulFlow India Instagram feed.",
};

export default function Gallery() {
  return (
    <div>
      <section className="mx-auto max-w-[1200px] px-8 pb-10 pt-[72px] text-center">
        <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-amber">
          @soulflowindia
        </span>
        <h1 className="mb-2 mt-[14px] font-serif text-[56px] font-semibold">
          From our Instagram
        </h1>
        <p className="m-0 text-[15px] text-muted">
          A few moments from our feed.
        </p>
      </section>

      <section className="mx-auto max-w-[1100px] px-8 pb-[70px] pt-[10px]">
        <div className="grid grid-cols-2 gap-[14px] sm:grid-cols-3 md:grid-cols-4">
          {gallery.map((g) => (
            <a
              key={g.id}
              href="https://www.instagram.com/soulflowindia/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-[14px]"
            >
              <Image
                src={g.src}
                alt="SoulFlow India Instagram post"
                width={330}
                height={330}
                className="h-[330px] w-full object-cover transition-transform duration-300 hover:scale-[1.04]"
              />
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/soulflowindia/"
            target="_blank"
            rel="noopener"
            className="rounded-full bg-ink px-7 py-[14px] text-[14.5px] font-bold text-paper no-underline transition-colors hover:bg-amber"
          >
            Follow on Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
