'use client';

import { useMemo, useState } from 'react';
import { copy, type Lang } from './content';
import { langClass } from './lang';

export default function Home() {
  const [lang, setLang] = useState<Lang>('zh');
  const content = useMemo(() => copy[lang], [lang]);
  const skillItems = useMemo(
    () => [
      {
        label: 'Next.js',
        level: '8/10',
        icons: [{ src: '/skills/nextjs-icon.svg', alt: 'Next.js' }],
      },
      {
        label: 'React.js',
        level: '8/10',
        icons: [{ src: '/skills/react-icon.svg', alt: 'React' }],
      },
      {
        label: 'Vue.js',
        level: '5/10',
        icons: [{ src: '/skills/vue-icon.svg', alt: 'Vue' }],
      },
      {
        label: 'TypeScript',
        level: '7/10',
        icons: [{ src: '/skills/typescript-icon.svg', alt: 'TypeScript' }],
      },
      {
        label: 'JavaScript',
        level: '8/10',
        icons: [{ src: '/skills/javascript-icon.svg', alt: 'JavaScript' }],
      },
      {
        label: 'HTML/CSS',
        level: '8/10',
        icons: [
          { src: '/skills/html-5-icon.svg', alt: 'HTML5' },
          { src: '/skills/css-3-icon.svg', alt: 'CSS3' },
        ],
      },
    ],
    [],
  );
  const libraryItems = useMemo(
    () => [
      {
        label: 'MUI',
        level: '8/10',
      },
      {
        label: 'Tailwind',
        level: '6/10',
      },
      {
        label: 'Axios',
        level: '8/10',
      },
      {
        label: 'Redux toolkit',
        level: '8/10',
      },
      {
        label: 'React Hook Form',
        level: '7/10',
      },
      {
        label: 'Formik',
        level: '8/10',
      },
      {
        label: 'Yup',
        level: '8/10',
      },
    ],
    [],
  );
  const toolItems = useMemo(
    () => [
      {
        label: 'Npm/Pnpm',
        icons: [
          { src: '/skills/npm-icon.svg', alt: 'Npm' },
          { src: '/skills/pnpm-icon.svg', alt: 'Pnpm' },
        ],
        level: '8/10',
      },
      {
        label: 'Git',
        icons: [{ src: '/skills/git-icon.svg', alt: 'Git' }],
        level: '8/10',
      },
    ],
    [],
  );
  const projectImages = useMemo(
    () => [
      '/projects/tsmc.jpg',
      '/projects/kgi.jpg',
      '/projects/swim.jpg',
      '/projects/game.jpg',
      '/projects/moutain.jpg',
    ],
    [],
  );
  const tapePlacements = [
    '-top-4 left-6 -rotate-6',
    '-top-5 right-6 rotate-6',
    '-top-3 left-16 -rotate-2',
    '-top-4 right-14 rotate-4',
    '-top-5 left-28 -rotate-8',
  ];
  const cardTilts = [
    '-rotate-[1.2deg]',
    'rotate-[0.8deg]',
    '-rotate-[0.6deg]',
    'rotate-[1.5deg]',
    '-rotate-[1deg]',
  ];

  return (
    <div className="scrapbook-bg min-h-screen px-6 py-10 sm:px-12 lg:px-20">
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10">
        {/* <section className="px-6 py-8 sm:px-10 text-center">
          <h1 className="handwriting text-center text-6xl font-bold tracking-wide ">
            {content.heroTitle}2
          </h1>
        </section> */}

        <section className="relative px-6 py-8 sm:px-10">
          {/* language switcher */}
          {/* <div className="absolute top-0 right-0 z-1 rotate-[3deg]">
            <div className="relative w-48 rounded-2xl bg-[var(--paper)] px-4 py-3 text-left shadow-[0_16px_30px_rgba(34,20,10,0.18)]">
              <div className="absolute right-5 top-[-18px] z-[1] h-[30px] w-[90px] rotate-[5deg] rounded-[8px] bg-[var(--tape)] opacity-80 shadow-[0_8px_18px_rgba(36,28,22,0.18)]" />
              <p className="text-lg text-[var(--ink)]">語系</p>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`rounded-full border-2 border-[rgba(36,28,22,0.08)] bg-[var(--paper-deep)] px-3 py-1 text-xs font-semibold cursor-pointer text-[var(--ink)] ${
                    lang === 'en' ? 'bg-[var(--tape)]' : ''
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang('zh')}
                  className={`rounded-full border-2 border-[rgba(36,28,22,0.08)] bg-[var(--paper-deep)] px-3 py-1 text-xs font-semibold cursor-pointer text-[var(--ink)] ${
                    lang === 'zh' ? 'bg-[var(--tape)]' : ''
                  }`}
                >
                  中文
                </button>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* photo */}
            <div className="shrink-0 w-[320px]">
              <div className="relative">
                <div className="absolute left-1/2 top-[-18px] z-[1] h-[30px] w-[90px] -translate-x-1/2 rotate-[-2deg] rounded-[8px] bg-[var(--tape)] opacity-80 shadow-[0_8px_18px_rgba(36,28,22,0.18)]" />
                <div className="max-w-full rounded-[20px] bg-white p-[18px] pb-[28px] shadow-[0_18px_30px_var(--shadow)] rotate-[-1.5deg]">
                  <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-[16px] bg-[linear-gradient(135deg,#cdd6d5,#f2e8d5)] text-sm uppercase tracking-[0.3em] text-[rgba(36,28,22,0.5)]">
                    <div className="pointer-events-none absolute inset-[18px] rounded-[12px] border-2 border-dashed border-[rgba(36,28,22,0.2)]" />
                    Photo
                  </div>
                  <div className="mt-5 text-center -rotate-2">
                    <p className="handwriting text-3xl text-(--blue)">
                      {/* {content.hello} */}
                      Frontend Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:col-span-3">
              <div className="mt-10 space-y-6 text-lg text-(--ink)">
                <div className="relative flex flex-col flex-wrap gap-4 text-lg">
                  {/* <div className="handwriting absolute left-48 bottom-0 leading-[0.8] rotate-[-8deg] text-3xl text-(--blue)">
                    Frontend
                    <br />
                    Developer
                  </div> */}
                  <div className="flex flex-col gap-2 serif-zh">
                    <div className="text-7xl font-semibold mb-1">
                      {content.name}
                    </div>
                    {/* <div className="text-4xl">{content.dob}</div> */}
                    <div className="text-xl leading-none uppercase">
                      Taichung City,
                      <br />
                      Taiwan
                    </div>
                  </div>
                </div>
                <p className="whitespace-pre-line leading-8 text-(--text-light-fg)">
                  {content.intro}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="px-6 py-8 sm:px-10">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <h2 className="text-4xl display-serif">{content.ageLabel}</h2>
              <p className="text-(--text-light-fg)">{content.age}</p>
            </div>
            <div>
              <h2 className="text-4xl display-serif">{content.contactLabel}</h2>
              <p className="text-(--text-light-fg) whitespace-pre-line">
                {content.contact}
              </p>
            </div>
            <div>
              <h2 className="text-4xl display-serif">{content.eduLabel}</h2>
              <p className="text-(--text-light-fg)">{content.education}</p>
            </div>
          </div>
        </section> */}

        {/* SKILL */}
        <section className="px-6 py-8 sm:px-10">
          <div className="space-y-6">
            <div>
              <h2 className="display-serif text-4xl ">{content.skillTitle}</h2>
              <div className="mt-4 flex flex-wrap gap-10">
                {skillItems.map((skill) => (
                  <div
                    key={`${skill.label}-${skill.level}`}
                    className="flex flex-col items-center"
                  >
                    <span className="inline-flex items-center gap-2">
                      {skill.icons.map((icon) => (
                        <img
                          key={icon.src}
                          src={icon.src}
                          alt={icon.alt}
                          className={`object-contain ${
                            skill.icons.length > 1 ? 'w-10 h-10' : 'w-14 h-14'
                          }`}
                          loading="lazy"
                        />
                      ))}
                    </span>
                    {/* <div>{skill.label}</div> */}
                    <div className="handwriting text-3xl">{skill.level}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* LIBRARIES */}
            <div>
              <h2 className="display-serif">{content.libTitle}</h2>
              <div className="mt-4 flex flex-wrap gap-10">
                {libraryItems.map((skill) => (
                  <div
                    key={`${skill.label}-${skill.level}`}
                    className="flex flex-col items-center"
                  >
                    <div className="text-xl font-semibold">{skill.label}</div>
                    <div className="handwriting text-3xl">{skill.level}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* TOOLS */}
            <div>
              <h2 className="display-serif text-4xl">{content.toolsTitle}</h2>
              <div className="mt-4 flex flex-wrap gap-10">
                {toolItems.map((tool) => (
                  <span
                    key={tool.label}
                    className="flex flex-col items-center text-sm"
                  >
                    <span className="inline-flex items-center gap-2">
                      {tool.icons.map((icon) => (
                        <img
                          key={icon.src}
                          src={icon.src}
                          alt={icon.alt}
                          className={`object-contain ${
                            tool.icons.length > 1 ? 'w-10 h-10' : 'w-14 h-14'
                          }`}
                          loading="lazy"
                        />
                      ))}
                    </span>
                    <div className="handwriting text-3xl">{tool.level}</div>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-8 sm:px-10">
          <h2 className="display-serif text-4xl ">{content.projectsTitle}</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-12">
            {content.projects.map((project, index) => (
              <article
                key={project.title}
                className={`w-full max-w-90 rounded-3xl bg-(--paper) px-4 py-5 shadow-[0_20px_40px_var(--shadow)] md:max-w-none md:basis-[calc(50%-1.5rem)] lg:basis-[calc(33.333%-2rem)] ${cardTilts[index % cardTilts.length]} relative`}
              >
                <span
                  className={`pointer-events-none absolute z-2 h-7.5 w-24 rounded-lg bg-(--tape) opacity-80 shadow-[0_8px_18px_rgba(36,28,22,0.18)] ${tapePlacements[index % tapePlacements.length]}`}
                />
                <div className="mb-4 overflow-hidden">
                  <img
                    src={projectImages[index]}
                    alt={project.title}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="serif-zh text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 leading-relaxed text-(--text-light-fg)">
                  {project.desc}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
