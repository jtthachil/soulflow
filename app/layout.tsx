import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish, Dancing_Script } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "SoulFlow India — A space to heal, learn & grow",
  description:
    "SoulFlow India is a safe, accessible space for therapy, workshops and community, supporting you to understand yourself, build resilience and thrive.",
  openGraph: {
    title: "SoulFlow India — A space to heal, learn & grow",
    description:
      "A safe space for therapy, workshops, support groups, internships and training across India.",
    type: "website",
  },
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
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
