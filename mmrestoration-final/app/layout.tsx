import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "M&M Restoration | Professional Damage Restoration Services Michigan",
  description: "Professional restoration services in Michigan including water damage, fire damage, mold remediation, storm damage, and biohazard cleanup. 24/7 emergency response available.",
  keywords: "water damage restoration, fire damage cleanup, mold remediation, storm damage, biohazard cleanup, emergency restoration, Michigan restoration services",
  authors: [{ name: "M&M Restoration" }],
  creator: "M&M Restoration",
  publisher: "M&M Restoration",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mmrestoration.com",
    siteName: "M&M Restoration",
    title: "M&M Restoration | Professional Damage Restoration Services Michigan",
    description: "Professional restoration services in Michigan including water damage, fire damage, mold remediation, storm damage, and biohazard cleanup. 24/7 emergency response available.",
  },
  twitter: {
    card: "summary_large_image",
    title: "M&M Restoration | Professional Damage Restoration Services Michigan",
    description: "Professional restoration services in Michigan including water damage, fire damage, mold remediation, storm damage, and biohazard cleanup. 24/7 emergency response available.",
    creator: "@mmrestoration",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}