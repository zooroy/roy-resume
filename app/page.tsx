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
        label: 'Tailwind CSS',
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

  return (
    <div className="scrapbook-page min-h-screen px-6 py-10 sm:px-12 lg:px-20">
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        {/* <section className="px-6 py-8 sm:px-10 text-center">
          <h1 className="handwriting text-center text-6xl font-bold tracking-wide ">
            {content.heroTitle}2
          </h1>
        </section> */}

        <section className="relative px-6 py-8 sm:px-10">
          {/* language switcher */}
          {/* <div className="absolute top-0 right-0 z-1 rotate-[3deg]">
            <div className="tape tape-right w-48 rounded-2xl bg-[var(--paper)] px-4 py-3 text-left shadow-[0_16px_30px_rgba(34,20,10,0.18)]">
              <p className="text-lg ">語系</p>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`paper-strip px-3 py-1 text-xs font-semibold cursor-pointer  ${
                    lang === 'en' ? 'bg-[var(--tape)]' : ''
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang('zh')}
                  className={`paper-strip px-3 py-1 text-xs font-semibold cursor-pointer text-(--ink) ${
                    lang === 'zh' ? 'bg-(--tape)' : ''
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
              <div className="tape tape-center">
                <div className="polaroid max-w-full">
                  <div className="polaroid-photo flex items-center justify-center text-sm uppercase tracking-[0.3em] text-[rgba(36,28,22,0.5)]">
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

        <section className="px-6 py-8 sm:px-10">
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
        </section>

        <div className="tape paper-card">
          {/* SKILL */}
          <section className="px-6 py-8 sm:px-10">
            <div className="space-y-6">
              <div>
                <h2 className="display-serif text-4xl ">
                  {content.skillTitle}
                </h2>
                <div className="mt-4 flex flex-wrap gap-8">
                  {skillItems.map((skill) => (
                    <div
                      key={`${skill.label}-${skill.level}`}
                      className="flex flex-col items-center"
                    >
                      <span className="skill-icons">
                        {skill.icons.map((icon) => (
                          <img
                            key={icon.src}
                            src={icon.src}
                            alt={icon.alt}
                            className="skill-icon"
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
                <div className="mt-4 flex flex-wrap gap-6">
                  {libraryItems.map((skill) => (
                    <div
                      key={`${skill.label}-${skill.level}`}
                      className="flex flex-col items-center"
                    >
                      <div className="text-xl">{skill.label}</div>
                      <div className="handwriting text-3xl">{skill.level}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* TOOLS */}
              <div>
                <h2 className="display-serif text-4xl">{content.toolsTitle}</h2>
                <div className="mt-4 flex flex-wrap gap-6">
                  {toolItems.map((tool) => (
                    <span
                      key={tool.label}
                      className="flex flex-col items-center text-sm"
                    >
                      <span className="skill-icons">
                        {tool.icons.map((icon) => (
                          <img
                            key={icon.src}
                            src={icon.src}
                            alt={icon.alt}
                            className="skill-icon"
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
        </div>

        <section className="px-6 py-8 sm:px-10">
          <h2 className="display-serif text-4xl ">{content.projectsTitle}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.projects.map((project) => (
              <article
                key={project.title}
                className="tape paper-card relative rounded-3xl px-5 py-6"
              >
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
