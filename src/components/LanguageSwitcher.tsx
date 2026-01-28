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
            px-4 py-2 rounded-xl font-mono text-sm transition-all duration-300
            ${
              currentLocale === locale
                ? 'bg-purple-400/30 border border-purple-600 text-purple-700 shadow-[0_2px_8px_rgba(115,79,156,0.15)]'
                : 'border border-pink-400/50 text-pink-600 hover:border-pink-500 hover:shadow-[0_2px_8px_rgba(196,123,180,0.15)]'
            }
          `}
        >
          <span className="text-purple-700">$</span>{' '}
          {locale === 'zh-TW' ? '中文' : 'English'}
        </button>
      ))}
    </div>
  );
}
