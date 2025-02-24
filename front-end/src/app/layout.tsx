import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Maltsagovs personal website",
  description: "Personlig nettbassert Cv",
  keywords: "Adam, personlig nettside, utvikler, prosjekter",
  openGraph: {
    title: "Adams personal website",
    description: "Besøk Adams personlige nettside for å lære mer om hans arbeid og prosjekter.",
    url: "https://www.adammalt.com",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Adams personal website",
    description: "Se Adams prosjekter og arbeid her!",
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
        {children}
      </body>
    </html>
  );
}
