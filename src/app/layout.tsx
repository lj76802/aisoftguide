import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AiSoftGuide – Best AI Tools Directory & Tutorials 2025",
    template: "%s | AiSoftGuide",
  },
  description:
    "Discover the best AI tools with in-depth reviews, tutorials, and comparisons. Find the right AI software for writing, coding, image generation, and more.",
  keywords: ["AI tools", "AI software", "AI tutorials", "best AI tools 2025", "AI directory"],
  openGraph: {
    type: "website",
    siteName: "AiSoftGuide",
    title: "AiSoftGuide – Best AI Tools Directory & Tutorials 2025",
    description: "Discover the best AI tools with in-depth reviews, tutorials, and comparisons.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-gray-950 text-gray-100 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
