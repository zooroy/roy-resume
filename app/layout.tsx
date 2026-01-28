import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: '數位履歷 Resume',
  description: 'Vaporwave / Outrun Design 個人履歷網站',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="bg-black min-h-screen flex flex-col">
        {/* Vaporwave CRT scanline + grid背景可用 radial-gradient 或 SVG 疊加 */}
        {/* LanguageSwitcher 之後納入 */}
        {children}
      </body>
    </html>
  );
}
