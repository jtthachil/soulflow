# SoulFlow India

A marketing site for **SoulFlow India** — a mental-health brand offering therapy,
workshops, support groups, internships and training. Built with **Next.js (App
Router) + TypeScript + Tailwind CSS v4**.

This is the production implementation of the design exported from Claude Design.
The original design source and conversation history are preserved under
[`project/`](./project) and [`chats/`](./chats).

## Pages

Real per-page routes (good for SEO, sharing and future ads/landing pages):

| Route       | Contents                                                                      |
| ----------- | ----------------------------------------------------------------------------- |
| `/`         | Hero, service-strip marquee, intro, services preview, testimonials, newsletter |
| `/about`    | Brand story, values, founders (Yuktika & Achintt)                              |
| `/services` | 6 services, specializations, sample workshop schedule, bootcamp/booking links  |
| `/gallery`  | Instagram tile grid + follow link                                              |
| `/contact`  | Contact details, payment links (Razorpay / form), inquiry form                 |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build (all pages prerender as static)
npm run start    # serve the production build
```

## Project structure

```
app/                 # App Router routes + root layout (fonts, nav, footer)
  page.tsx           # Home
  about/             # About
  services/          # Services
  gallery/           # Gallery
  contact/           # Contact
  globals.css        # Tailwind theme tokens (brand palette, fonts, keyframes)
components/          # Nav, Footer, Newsletter, ContactForm
lib/content.ts       # All site copy/data (services, founders, schedule, etc.)
public/assets/       # Logo, founder photos, Instagram tiles
```

## Notes

- **Fonts:** Cormorant Garamond (headings), Mulish (body), Dancing Script
  (wordmark), loaded via `next/font`.
- **Palette:** warm cream `#F7F2E9`, ink `#2C2823`, amber `#C57E3E`, sage
  `#5F6E52` — defined as Tailwind theme tokens in `app/globals.css`.
- **Forms:** the contact form and newsletter are client-side only (show a
  thank-you / subscribed state). Wire these to a backend / email service when
  ready — they're isolated in `components/ContactForm.tsx` and
  `components/Newsletter.tsx`.
- **Content:** all copy lives in `lib/content.ts`. Update the workshop schedule
  dates and the bootcamp/registration link URLs there when the real ones land
  (currently the Linktree is used as a placeholder, per the design handoff).
- **Images:** static, served from `public/assets/`. Swap in higher-resolution
  founder headshots / post images by replacing the files of the same name.
