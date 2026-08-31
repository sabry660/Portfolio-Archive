import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedsabry.dev"),
  title: "Mohamed Sabry — Front End Developer",
  description:
    "Professional Front End Developer specializing in modern web applications. Expert in React, Angular, Next.js, and creating responsive, user-friendly digital experiences.",
  keywords: ["Front End Developer", "Web Developer", "React", "Angular", "Next.js", "TypeScript", "Mohamed Sabry"],
  authors: [{ name: "Mohamed Sabry" }],
  openGraph: {
    title: "Mohamed Sabry — Front End Developer",
    description: "Professional Front End Developer specializing in modern web applications. Expert in React, Angular, Next.js, and creating responsive, user-friendly digital experiences.",
    url: "https://mohamedsabry.dev",
    siteName: "Mohamed Sabry Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
