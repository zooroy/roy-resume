import type { Metadata } from 'next';
import {
  Bree_Serif,
  Caveat,
  Noto_Sans_TC,
  Noto_Serif_TC,
} from 'next/font/google';
import './globals.css';

//Bree Serif - 英文
const breeSerif = Bree_Serif({
  variable: '--font-bree-serif',
  subsets: ['latin'],
  weight: ['400'],
});

//思源宋體 - 中文英文
const notoSerifTc = Noto_Serif_TC({
  variable: '--font-serif-zh',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

// 內文
//思源黑體 - 中文英文
const notoSansTc = Noto_Sans_TC({
  variable: '--font-sans-zh',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

//Caveat 手寫體 - 數字、英文
const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
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
        className={`${notoSansTc.variable} ${breeSerif.variable} ${caveat.variable} ${notoSerifTc.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
