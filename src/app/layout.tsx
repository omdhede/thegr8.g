import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "../context/active-section-context";
import Nav from "@/components/nav";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Om Dhede - TheGr8G",
  description: "Om Dhede - Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`bg-black text-white select-none ${inter.className}`}>
        <ActiveSectionContextProvider>
          <Nav />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
