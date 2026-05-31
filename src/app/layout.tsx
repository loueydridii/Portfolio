import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Louey Galaxy | Portfolio",
    template: "%s | Louey Galaxy",
  },
  description:
    "3rd-year Information Technology and Business Analytics student at Tunis Business School. Hands-on experience in market analysis, growth strategy, and international partnerships.",
  keywords: [
    "portfolio",
    "information technology",
    "business analytics",
    "data science",
    "digital marketing",
    "SEO",
    "web development",
    "mobile development",
  ],
  authors: [{ name: "Louey Dridi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Louey Galaxy | Portfolio",
    description:
      "Explore my universe of projects, skills, and experiences.",
    siteName: "Louey Galaxy",
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
      className={`${outfit.variable} ${spaceMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-space-void text-text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
