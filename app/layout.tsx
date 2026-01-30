import type { Metadata } from 'next';
import {
  Caveat,
  LXGW_WenKai_TC,
  Noto_Sans_TC,
  Noto_Serif_TC,
} from 'next/font/google';
import './globals.css';

//Caveat 手寫體 - 英文
const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
});

//思源宋體 - 中文英文
const notoSerifTc = Noto_Serif_TC({
  variable: '--font-serif-zh',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

//思源黑體 - 中文英文
const notoSansTc = Noto_Sans_TC({
  variable: '--font-sans-zh',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

//霞鶩文楷體 - 中文
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
        className={`${notoSansTc.variable} ${caveat.variable} ${notoSerifTc.variable} ${lxgwWenkaiTc.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
