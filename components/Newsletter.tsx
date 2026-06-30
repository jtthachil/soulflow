"use client";

import { useState } from "react";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="mx-auto max-w-[1200px] px-8 pb-[90px]">
      <div className="grid grid-cols-1 items-center gap-10 rounded-[28px] bg-ink px-12 py-[60px] text-paper md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="m-0 mb-3 font-serif text-[38px] font-semibold leading-[1.15]">
            Letters for the soul
          </h2>
          <p className="m-0 max-w-[420px] text-[15.5px] leading-[1.7] text-[#C9C0B2]">
            Gentle reflections, workshop invites and grounding practices, once a
            month, never spam.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubscribed(true);
          }}
          className="flex flex-wrap gap-[10px]"
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="min-w-[180px] flex-1 rounded-full border border-[#4a443b] bg-ink-soft px-5 py-[15px] text-[14.5px] text-paper outline-none"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-full border-none bg-amber px-[26px] py-[15px] text-[14.5px] font-bold text-white transition-colors hover:bg-amber-light"
          >
            {subscribed ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
