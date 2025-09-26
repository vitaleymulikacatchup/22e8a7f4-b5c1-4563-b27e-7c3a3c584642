import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemeCoin Fiesta — a playful memecoin landing page today",
  description: "MemeCoin Fiesta brings fun vibes, transparent tokenomics, and a simple buy flow. Jump in, join the community, and share the memes.",
  keywords: ["memecoin", "meme coin", "crypto", "tokenomics", "community token", "buy memecoin", "wallet", "blockchain"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "MemeCoin Fiesta — a playful memecoin landing page today",
    description: "MemeCoin Fiesta brings fun vibes, transparent tokenomics, and a simple buy flow. Jump in, join the community, and share the memes.",
    type: "website",
    url: "/",
    siteName: "MemeCoin Fiesta",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/theme-funandtrendy-section-hero-slot-con-1758880790246-d5dee170.jpg",
      width: 1200,
      height: 630,
      alt: "MemeCoin Fiesta — a playful memecoin landing page today",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemeCoin Fiesta — a playful memecoin landing page today",
    description: "MemeCoin Fiesta brings fun vibes, transparent tokenomics, and a simple buy flow. Jump in, join the community, and share the memes.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/theme-funandtrendy-section-hero-slot-con-1758880790246-d5dee170.jpg"],
  },
  robots: { index: true, follow: true },
  icons: [{ url: "/favicon.ico" }]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
