import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish, Dancing_Script } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/Reveal";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-dancing",
  display: "swap",
});

const siteUrl = "https://soulflow-xi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SoulFlow India — A space to heal, learn & grow",
  description:
    "SoulFlow India is a safe, accessible space for therapy, workshops and community, supporting you to understand yourself, build resilience and thrive.",
  keywords: [
    "therapy India",
    "online therapy",
    "mental health India",
    "psychology workshops",
    "support groups",
    "psychology internship",
    "SoulFlow India",
  ],
  openGraph: {
    title: "SoulFlow India — A space to heal, learn & grow",
    description:
      "A safe space for therapy, workshops, support groups, internships and training across India.",
    url: "/",
    siteName: "SoulFlow India",
    type: "website",
    images: [{ url: "/assets/soulflow-logo.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "SoulFlow India — A space to heal, learn & grow",
    description:
      "A safe space for therapy, workshops, support groups, internships and training across India.",
    images: ["/assets/soulflow-logo.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SoulFlow India",
  url: siteUrl,
  logo: `${siteUrl}/assets/soulflow-logo.png`,
  email: "hello@soulflowindia.com",
  description:
    "A safe, accessible space for therapy, workshops, support groups, internships and training across India.",
  sameAs: [
    "https://www.instagram.com/soulflowindia/",
    "https://linktr.ee/soulflowindia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${mulish.variable} ${dancing.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <RevealObserver />
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
