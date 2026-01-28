'use client';

import { useState } from 'react';
import { Locale } from '@/types/resume';
import { resumeData } from '@/data/resume';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import {
  EducationSection,
  WorkSection,
  SkillsSection,
  PortfolioSection,
} from '@/components/ResumeSections';
import {
  InfiniteGrid,
  ScanlineOverlay,
  TerminalText,
  NeonGradientText,
  PulseGlow,
  NeonCard,
  NeonTag,
} from '@/components/VaporComponents';
import { Button, Badge, Card } from '@/components/ui';

export default function Resume() {
  const [locale, setLocale] = useState<Locale>('zh-TW');
  const [activeSection, setActiveSection] = useState<string>('home');

  const headerText = locale === 'zh-TW' ? '霍伊·掘' : 'Roy Hsiao';
  const introText = resumeData.intro[locale];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
      {/* 背景動畫網格 */}
      <InfiniteGrid className="opacity-10" />

      {/* 背景漸層光線 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 opacity-5 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 opacity-5 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500 opacity-5 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* 主容器 */}
      <div className="relative z-10">
        {/* 導航欄 */}
        <nav className="sticky top-0 z-50 border-b border-cyan-400/20 backdrop-blur-md bg-slate-950/50">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-cyan-400 font-mono text-lg flex-shrink-0">
                &gt;_
              </span>
              <h1 className="text-lg md:text-xl font-bold truncate">
                <NeonGradientText>{headerText}</NeonGradientText>
              </h1>
            </div>
            <LanguageSwitcher
              currentLocale={locale}
              onLocaleChange={setLocale}
            />
          </div>
        </nav>

        {/* 主內容 */}
        <main className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-12 md:space-y-16">
          {/* 英雄區塊 */}
          <ScanlineOverlay>
            <section className="space-y-6 md:space-y-8 py-8 md:py-12">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-block px-3 md:px-4 py-2 rounded-lg border border-cyan-400 bg-cyan-400/10 mb-4 md:mb-6 text-sm md:text-base">
                  <TerminalText className="text-cyan-400">
                    {locale === 'zh-TW'
                      ? '歡迎來到我的履歷'
                      : 'Welcome to my resume'}
                  </TerminalText>
                </div>

                <h1 className="text-4xl md:text-6xl font-black tracking-wider leading-tight">
                  <NeonGradientText>{headerText}</NeonGradientText>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
                  <PulseGlow color="cyan">{introText}</PulseGlow>
                </p>
              </div>

              {/* 快速連結 */}
              <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4">
                {[
                  {
                    name: 'GitHub',
                    url: 'https://github.com',
                    label: 'GitHub',
                  },
                  {
                    name: 'LinkedIn',
                    url: 'https://linkedin.com',
                    label: 'LinkedIn',
                  },
                  {
                    name: 'Email',
                    url: 'mailto:contact@example.com',
                    label: locale === 'zh-TW' ? '電子郵件' : 'Email',
                  },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.name === 'Email' ? undefined : '_blank'}
                    rel={
                      link.name === 'Email' ? undefined : 'noopener noreferrer'
                    }
                  >
                    <Button variant="neon-pink" size="sm">
                      <TerminalText prefix="$">{link.label}</TerminalText>
                    </Button>
                  </a>
                ))}
              </div>

              {/* 分隔線 */}
              <div className="divider-grid" />
            </section>
          </ScanlineOverlay>

          {/* 統計卡片 */}
          <section className="grid grid-cols-3 gap-2 md:gap-6">
            {[
              {
                label: locale === 'zh-TW' ? '專業年數' : 'Years Pro',
                value: '3+',
                emoji: '📅',
                glow: 'cyan' as const,
              },
              {
                label: locale === 'zh-TW' ? '完成專案' : 'Projects',
                value: '20+',
                emoji: '🚀',
                glow: 'pink' as const,
              },
              {
                label: locale === 'zh-TW' ? '技能數' : 'Skills',
                value: '12+',
                emoji: '⚡',
                glow: 'orange' as const,
              },
            ].map((stat, idx) => (
              <Card
                key={idx}
                glow={stat.glow}
                className="text-center p-4 md:p-6"
              >
                <div className="text-3xl md:text-4xl mb-2">{stat.emoji}</div>
                <div className="text-2xl md:text-3xl font-black text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 font-mono">
                  {stat.label}
                </div>
              </Card>
            ))}
          </section>

          {/* 工作經驗 */}
          <WorkSection locale={locale} data={resumeData} />

          {/* 教育背景 */}
          <EducationSection locale={locale} data={resumeData} />

          {/* 技能 */}
          <SkillsSection locale={locale} data={resumeData} />

          {/* 作品集 */}
          <PortfolioSection locale={locale} data={resumeData} />

          {/* 額外的召喚區塊 */}
          <ScanlineOverlay>
            <div className="bg-gradient-to-r from-cyan-900/20 via-pink-900/20 to-orange-900/20 border border-gradient rounded-xl p-6 md:p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  <TerminalText>
                    {locale === 'zh-TW'
                      ? '有興趣合作？'
                      : 'Interested in collaboration?'}
                  </TerminalText>
                </h3>
                <p className="text-gray-300">
                  {locale === 'zh-TW'
                    ? '我很樂意聽取你的想法和專案機會。通過以下方式與我聯絡：'
                    : "I'd love to hear about your ideas and project opportunities. Get in touch with me:"}
                </p>
                <div className="flex gap-2">
                  <Badge variant="cyan">
                    contact@example.com
                  </Badge>
                </div>
              </div>
            </div>
          </ScanlineOverlay>

          {/* 頁腳 */}
          <ScanlineOverlay>
            <footer className="border-t border-cyan-400/20 pt-8 md:pt-12 pb-6 md:pb-8 mt-12 md:mt-16">
              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center gap-3 text-gray-400 flex-wrap">
                  <span className="text-cyan-400 font-mono">&gt;</span>
                  <span className="font-mono text-xs md:text-sm">
                    {locale === 'zh-TW'
                      ? '© 2024 Roy Hsiao. 保留所有權利。'
                      : '© 2024 Roy Hsiao. All rights reserved.'}
                  </span>
                </div>
                <div className="text-xs text-gray-500 font-mono space-y-1">
                  <div>
                    <PulseGlow color="pink">
                      {locale === 'zh-TW'
                        ? '由 React & Next.js 驅動'
                        : 'Powered by React & Next.js'}
                    </PulseGlow>
                  </div>
                  <div className="text-cyan-400">
                    {locale === 'zh-TW'
                      ? '設計系統: Vaporwave/Outrun'
                      : 'Design System: Vaporwave/Outrun'}
                  </div>
                </div>
              </div>
            </footer>
          </ScanlineOverlay>
        </main>
      </div>
    </div>
  );
}
