'use client';

import { useState } from 'react';
import { Locale } from '@/types/resume';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function LanguageSwitcher({
  currentLocale,
  onLocaleChange,
}: LanguageSwitcherProps) {
  return (
    <div className="flex gap-2">
      {(['zh-TW', 'en'] as Locale[]).map((locale) => (
        <button
          key={locale}
          onClick={() => onLocaleChange(locale)}
          className={`
            px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300
            ${
              currentLocale === locale
                ? 'bg-cyan-400/30 border border-cyan-400 text-cyan-400 shadow-[0_0_8px_rgba(0,255,255,0.6)]'
                : 'border border-pink-500/50 text-pink-500 hover:border-pink-500 hover:shadow-[0_0_8px_rgba(255,0,255,0.4)]'
            }
          `}
        >
          <span className="text-cyan-400">$</span>{' '}
          {locale === 'zh-TW' ? '中文' : 'English'}
        </button>
      ))}
    </div>
  );
}
