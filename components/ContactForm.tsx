"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const INTERESTS = [
  "Therapy session",
  "Workshop",
  "Support group",
  "Internship",
  "Training programme",
  "Psychology Bootcamp",
  "Something else",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const params = useSearchParams();

  const interestParam = params.get("interest");
  const interest =
    interestParam && INTERESTS.includes(interestParam)
      ? interestParam
      : undefined;

  const therapist = params.get("therapist");
  const event = params.get("event");
  const prefilledMessage = therapist
    ? `Hi, I'd like to book a session with ${therapist}.`
    : event
      ? `Hi, I'd like to register for "${event}".`
      : undefined;

  if (sent) {
    return (
      <div className="rounded-[22px] border border-ink/[0.07] bg-white px-[34px] py-9 shadow-[0_22px_50px_-30px_rgba(44,40,35,0.45)]">
        <div className="px-[10px] py-[50px] text-center">
          <div className="text-[46px]">🍀</div>
          <h3 className="m-0 mb-2 mt-[14px] font-serif text-[30px] font-semibold">
            Thank you for reaching out
          </h3>
          <p className="m-0 text-[15px] text-muted">
            We&apos;ve received your message and will be in touch soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[22px] border border-ink/[0.07] bg-white px-[34px] py-9 shadow-[0_22px_50px_-30px_rgba(44,40,35,0.45)]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="flex flex-col gap-4"
      >
        <div>
          <label htmlFor="cf-name" className="mb-[6px] block text-[13px] font-semibold">
            Your name
          </label>
          <input
            id="cf-name"
            name="name"
            required
            placeholder="Full name"
            className="w-full rounded-[12px] border border-[#e2dac9] bg-[#FBF8F1] px-[15px] py-[13px] text-[14.5px] outline-none focus:border-amber"
          />
        </div>
        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
          <div>
            <label htmlFor="cf-email" className="mb-[6px] block text-[13px] font-semibold">
              Email
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-[12px] border border-[#e2dac9] bg-[#FBF8F1] px-[15px] py-[13px] text-[14.5px] outline-none focus:border-amber"
            />
          </div>
          <div>
            <label htmlFor="cf-phone" className="mb-[6px] block text-[13px] font-semibold">
              Phone
            </label>
            <input
              id="cf-phone"
              name="phone"
              placeholder="Optional"
              className="w-full rounded-[12px] border border-[#e2dac9] bg-[#FBF8F1] px-[15px] py-[13px] text-[14.5px] outline-none focus:border-amber"
            />
          </div>
        </div>
        <div>
          <label htmlFor="cf-interest" className="mb-[6px] block text-[13px] font-semibold">
            I&apos;m interested in
          </label>
          <select
            id="cf-interest"
            name="interest"
            defaultValue={interest}
            className="w-full rounded-[12px] border border-[#e2dac9] bg-[#FBF8F1] px-[15px] py-[13px] text-[14.5px] outline-none focus:border-amber"
          >
            {INTERESTS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-message" className="mb-[6px] block text-[13px] font-semibold">
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            defaultValue={prefilledMessage}
            placeholder="Tell us a little about what you're looking for…"
            className="w-full resize-y rounded-[12px] border border-[#e2dac9] bg-[#FBF8F1] px-[15px] py-[13px] text-[14.5px] outline-none focus:border-amber"
          />
        </div>
        <button
          type="submit"
          className="mt-1 cursor-pointer rounded-full border-none bg-amber p-[15px] text-[15px] font-bold text-white transition-colors hover:bg-ink"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
