import type { Metadata } from "next";
import { Caveat, Fraunces, Inter } from "next/font/google";
import { siteConfig } from "@/lib/data";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CursorGlow } from "@/components/cursor-glow";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Handwriting accent — one decorative face, used sparingly as a
// scholar's marginal annotation. Never for body, headings, nav, or CTAs.
const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Daniel Bird",
    "Software Engineer",
    "AI",
    "Machine Learning",
    "Georgia Tech",
    "Fitness Coach",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${caveat.variable}`}
    >
      <head>
        {/* Apply the saved theme before paint to avoid a flash of the
            wrong palette. Defaults to light ("paper") when no choice saved. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {/* Effect 1 — page-level cursor glow. Lives outside <main> so it
            covers the full viewport; z-10 keeps it below content + nav and
            above the body grid / ambient glow. */}
        <CursorGlow />
        <Nav />
        {/* relative z-20 stacks content above the fixed cursor glow so card
            and section text is never tinted by it. */}
        <main id="main" className="relative z-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
