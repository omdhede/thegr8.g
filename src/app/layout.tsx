import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "../context/active-section-context";
import Nav from "@/components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Om Dhede — IT Risk & Technology Consulting",
  description:
    "Om Dhede — IT Risk Analyst at KPMG India. B.Tech AI & Data Science. 14+ enterprise client engagements. Builder of AI tools for audit automation.",
  keywords: [
    "Om Dhede", "IT Risk Consultant", "KPMG", "SOX", "ITGC",
    "AI Engineer", "LangChain", "RAG", "MLOps", "FastAPI",
    "IT Developer Consultant", "Audit Automation",
  ],
  authors: [{ name: "Om Dhede" }],
  openGraph: {
    title: "Om Dhede — IT Risk & Technology Consulting",
    description:
      "IT Risk Analyst at KPMG India with 14+ enterprise engagements. Builds AI tools for audit automation.",
    type: "website",
    url: "https://thegr8.g",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Dhede — IT Risk & Technology Consulting",
    description: "IT Risk Analyst at KPMG · AI Automation Builder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground select-none`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ActiveSectionContextProvider>
            <Nav />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
