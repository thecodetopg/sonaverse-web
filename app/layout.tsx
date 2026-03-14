import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SonaVerse — Your Creative Toolkit",
  description: "Professional audio plugins for music producers. Detect keys, generate chords, analyse tempo — right inside your DAW.",
  metadataBase: new URL("https://sonaverse.vercel.app"),
  openGraph: {
    title: "SonaVerse — Your Creative Toolkit",
    description: "Professional audio plugins for music producers. Detect keys, generate chords, analyse tempo — right inside your DAW.",
    url: "https://sonaverse.vercel.app",
    siteName: "SonaVerse",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SonaVerse — Your Creative Toolkit",
    description: "Professional audio plugins for music producers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
