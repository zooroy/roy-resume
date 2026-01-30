import type { Metadata } from "next";
import {
  Caveat,
  Gochi_Hand,
  Ma_Shan_Zheng,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
});

const gochiHand = Gochi_Hand({
  variable: "--font-hand-alt",
  subsets: ["latin"],
  weight: "400",
});

const maShanZheng = Ma_Shan_Zheng({
  variable: "--font-hand-zh",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Resume | Roy Hsiao",
  description: "Scrapbook style resume for Roy Hsiao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${caveat.variable} ${gochiHand.variable} ${maShanZheng.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
