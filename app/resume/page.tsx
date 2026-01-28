'use client';
import { useEffect, useState } from 'react';
import type { ResumeData, Locale } from '@/types/resume';

export default function ResumePage() {
  const [data, setData] = useState<ResumeData | null>(null);
  const [lang, setLang] = useState<Locale>('zh-TW');

  useEffect(() => {
    fetch('/api/resume')
      .then((r) => r.json())
      .then(setData);
  }, []);

  if (!data)
    return (
      <div className="text-center text-lg text-pink-400 mt-20 animate-pulse">
        Loading...
      </div>
    );

  return (
    <main className="max-w-2xl mx-auto py-10 text-white">
      {/* 簡易語言切換，正式版可做成全域元件 */}
      <div className="text-right mb-5">
        <button
          className={`mr-2 ${lang === 'zh-TW' ? 'font-bold underline' : ''}`}
          onClick={() => setLang('zh-TW')}
        >
          中文2
        </button>
        <button
          className={`${lang === 'en' ? 'font-bold underline' : ''}`}
          onClick={() => setLang('en')}
        >
          English
        </button>
      </div>
      {/* Avatar 和背景(可另做成特效 component) */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={data.avatar}
          className="rounded-full w-28 h-28 border-4 border-cyan-300 shadow-neon mb-3"
          alt="avatar"
        />
        <div className="text-center mb-2">{data.intro[lang]}</div>
      </div>
      <section className="mb-8">
        <h2 className="text-2xl neon-gradient mb-2">學歷 / Education</h2>
        {data.education.map((edu, i) => (
          <div key={i} className="mb-3">
            <div className="font-bold">
              {edu.school} - {edu.degree}
            </div>
            <div className="text-sm text-cyan-300">{edu.period}</div>
            <div>{edu.description[lang]}</div>
          </div>
        ))}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl neon-gradient mb-2">工作經驗 / Work</h2>
        {data.work.map((wk, i) => (
          <div key={i} className="mb-3">
            <div className="font-bold">
              {wk.company} - {wk.job}
            </div>
            <div className="text-sm text-pink-400">{wk.period}</div>
            <div>{wk.description[lang]}</div>
          </div>
        ))}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl neon-gradient mb-2">技能 / Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((s) => (
            <span key={s} className="px-2 py-1 neon-tag">
              {s}
            </span>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl neon-gradient mb-2">作品集 / Portfolio</h2>
        <div className="grid grid-cols-1 gap-5">
          {data.portfolio.map((p, i) => (
            <div
              key={i}
              className="rounded-lg shadow-xl bg-black bg-opacity-60 neon-box p-4"
            >
              {p.image && (
                <img
                  src={p.image}
                  className="h-32 object-contain mb-2 w-full"
                  alt={p.title[lang]}
                />
              )}
              <div className="text-lg font-bold">{p.title[lang]}</div>
              <div className="text-sm text-purple-400">{p.period}</div>
              <div className="mb-2">{p.description[lang]}</div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  className="underline text-cyan-300"
                >
                  LINK
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
