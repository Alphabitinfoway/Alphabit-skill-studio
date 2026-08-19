import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alphabit Skill | Master Modern Skills",
  description: "Alphabit Skill provides expert-led courses, real-world projects, and a vibrant community to elevate your tech and design skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-T6G66TTK" />
      <head>
        <link rel="icon" href="/logo.webp" /> 
        {/*
          Cabinet Grotesk is now self-hosted via /public/fonts/CabinetGrotesk-Variable.woff2
          and declared in globals.css — no external CDN request needed.
          The preconnect below is a fallback hint only, safe to keep for graceful degradation.
        */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#F5F5F5] font-sans selection:bg-indigo-500/30 flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
