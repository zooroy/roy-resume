import type { Metadata } from 'next';
import {
  Caveat,
  Gochi_Hand,
  LXGW_WenKai_TC,
  Ma_Shan_Zheng,
  Noto_Serif_TC,
  Space_Grotesk,
} from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-sans',
  subsets: ['latin'],
});

const caveat = Caveat({
  variable: '--font-hand',
  subsets: ['latin'],
});

const gochiHand = Gochi_Hand({
  variable: '--font-hand-alt',
  subsets: ['latin'],
  weight: '400',
});

const maShanZheng = Ma_Shan_Zheng({
  variable: '--font-hand-zh',
  subsets: ['latin'],
  weight: '400',
});

const notoSerifTc = Noto_Serif_TC({
  variable: '--font-serif-zh',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const lxgwWenkaiTc = LXGW_WenKai_TC({
  variable: '--font-wenkai-zh',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Resume | Roy Hsiao',
  description: 'Scrapbook style resume for Roy Hsiao.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${caveat.variable} ${gochiHand.variable} ${maShanZheng.variable} ${notoSerifTc.variable} ${lxgwWenkaiTc.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
