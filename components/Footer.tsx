import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-[#C9C0B2]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-8 pb-[30px] pt-[60px] md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-[11px]">
            <Image
              src="/assets/soulflow-logo.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 rounded-full"
            />
            <span className="font-script text-[28px] text-paper">Soulflow</span>
          </div>
          <p className="m-0 max-w-[320px] text-[14.5px] leading-[1.7]">
            A safe space to heal, learn &amp; grow. Therapy, workshops and
            community, for everyone across India.
          </p>
        </div>
        <div>
          <h4 className="m-0 mb-4 text-[12px] uppercase tracking-[1.5px] text-[#8a8276]">
            Explore
          </h4>
          <div className="flex flex-col gap-[10px]">
            <Link href="/" className="text-[14.5px] text-[#C9C0B2] no-underline hover:text-amber-light">Home</Link>
            <Link href="/about" className="text-[14.5px] text-[#C9C0B2] no-underline hover:text-amber-light">About</Link>
            <Link href="/services" className="text-[14.5px] text-[#C9C0B2] no-underline hover:text-amber-light">Services</Link>
            <Link href="/gallery" className="text-[14.5px] text-[#C9C0B2] no-underline hover:text-amber-light">Gallery</Link>
          </div>
        </div>
        <div>
          <h4 className="m-0 mb-4 text-[12px] uppercase tracking-[1.5px] text-[#8a8276]">
            Connect
          </h4>
          <div className="flex flex-col gap-[10px]">
            <a href="mailto:hello@soulflowindia.com" className="text-[14.5px] text-[#C9C0B2] no-underline hover:text-amber-light">
              hello@soulflowindia.com
            </a>
            <a
              href="https://www.instagram.com/soulflowindia/"
              target="_blank"
              rel="noopener"
              className="text-[14.5px] text-[#C9C0B2] no-underline hover:text-amber-light"
            >
              @soulflowindia
            </a>
            <Link href="/contact" className="text-[14.5px] text-[#C9C0B2] no-underline hover:text-amber-light">
              Book a session
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-[10px] border-t border-[#3f3a32] px-8 py-5 text-[12.5px] text-[#8a8276]">
        <span>© {year} SoulFlow India. All rights reserved.</span>
        <span>Made with care 🍀</span>
      </div>
    </footer>
  );
}
