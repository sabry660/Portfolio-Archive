import type { Metadata } from "next";
import { Anton, Geist } from "next/font/google";
import { siteConfig } from "@/lib/data";
import QuickMenu from "@/components/QuickMenu";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Front-end Developer`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "Mohamed Sabry is a Senior Front-end Developer specializing in building high-performance, modern web applications with Angular, React, Next.js, and TypeScript.",
  keywords: [
    "Mohamed Sabry",
    "Front-end Developer",
    "Frontend Developer",
    "Angular Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "UI/UX Frontend Engineer",
    "Portfolio Mohamed Sabry",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Front-end Developer Portfolio`,
    description:
      "Explore the portfolio of Mohamed Sabry, a Front-end Developer crafting fast, responsive, and intuitive web experiences with Angular, React, and Next.js.",
    images: [
      {
        url: "/Projects/w.w.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Front-end Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Front-end Developer`,
    description:
      "Front-end Developer crafting modern, high-performance digital web applications.",
    images: ["/Projects/w.w.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [],
    apple: [],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Front-end Developer",
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  url: siteConfig.url,
  sameAs: [
    siteConfig.socials.github,
    siteConfig.socials.linkedin,
  ],
  knowsAbout: [
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "UI/UX Web Design",
    "Frontend Performance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${anton.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <QuickMenu />
      </body>
    </html>
  );
}
