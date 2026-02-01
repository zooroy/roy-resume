'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
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
        icons: [{ src: '/skills/mui-icon.png', alt: 'MUI' }],
      },
      {
        label: 'Tailwind',
        level: '6/10',
        icons: [{ src: '/skills/tailwind-icon.svg', alt: 'Tailwind' }],
      },
      {
        label: 'Redux toolkit',
        level: '8/10',
        icons: [{ src: '/skills/redux-logo.svg', alt: 'Redux' }],
      },
      {
        label: 'Axios',
        level: '8/10',
        icons: [{ src: '/skills/axios-icon.svg', alt: 'Axios' }],
      },
      {
        label: 'React Hook Form',
        level: '7/10',
        icons: [
          { src: '/skills/react-hook-form-icon.png', alt: 'React Hook Form' },
        ],
      },
      {
        label: 'Formik',
        level: '8/10',
        icons: [{ src: '/skills/formik-icon.png', alt: 'Formik' }],
      },
      // {
      //   label: 'Yup',
      //   level: '8/10',
      //   icons: [],
      // },
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
      '/projects/swim.jpg',
      '/projects/game.jpg',
      '/projects/kgi.jpg',
      '/projects/tsmc.jpg',
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
          {/* <div className="absolute top-0 right-0 z-1 rotate-3">
            <div className="relative w-48 paper-card px-4 py-3 text-left">
              <span className="tape-strip right-5 -top-4.5 rotate-[5deg]" />
              <p className="handwriting text-2xl">language</p>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`rounded-full border-2 border-[rgba(36,28,22,0.08)] bg-(--paper-deep) px-3 py-1 text-xs font-semibold cursor-pointer text-(--ink) ${
                    lang === 'en' ? 'bg-(--tape)' : ''
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang('zh')}
                  className={`rounded-full border-2 border-[rgba(36,28,22,0.08)] bg-(--paper-deep) px-3 py-1 text-xs font-semibold cursor-pointer text-(--ink) ${
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
              <div className="relative">
                <span className="tape-strip -top-4 left-25" />
                <div className="paper-card max-w-full px-5 py-6 -rotate-4">
                  <div className="relative h-65">
                    <Image
                      src="/profile/person.jpeg"
                      alt="Profile photo"
                      fill
                      sizes="(max-width: 768px) 90vw, 320px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="mt-3 mb-2 text-center rotate-2">
                      <p className="handwriting text-3xl">
                        {content.hello}
                        {/* Frontend Developer */}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <h2 className="display-serif">Age: </h2>
                        <p className="handwriting leading-1 text-2xl text-(--text-light-fg)">
                          35
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <h2 className="display-serif">Phone: </h2>
                        <p className="handwriting leading-1 text-2xl text-(--text-light-fg)">
                          0912-323-221
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <h2 className="display-serif">Mail: &nbsp;</h2>
                        <p className="handwriting leading-1 text-2xl text-(--text-light-fg)">
                          zooroy13@gmail.com
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <h2 className="display-serif">Education: </h2>
                        <p className="text-base leading-1 text-(--text-light-fg)">
                          國立成功大學 中國文學系
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:col-span-3">
              <div className="space-y-6 text-lg text-(--ink)">
                <div className="relative flex flex-col flex-wrap gap-4 text-lg">
                  <div className="handwriting absolute left-48 bottom-0 leading-[0.8] rotate-[-8deg] text-3xl text-(--blue)">
                    Frontend
                    <br />
                    Developer
                  </div>
                  <div className="flex flex-col gap-2 serif-zh">
                    <div className="text-7xl font-semibold mb-1">
                      {content.name}
                    </div>
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

        <section className="px-6 py-8 sm:px-10">
          <div className="flex flex-col gap-15 lg:flex-row">
            <div className="lg:w-1/3">
              {/* SKILLS */}
              <h2 className="display-serif text-4xl ">{content.skillTitle}</h2>
              <div className="paper-card rotate-1 mt-8 relative px-4 py-5">
                <span className="tape-strip -top-4 left-20 -rotate-[5deg]" />
                <div className="space-y-6">
                  <div>
                    <div className="mt-4 flex flex-wrap gap-6">
                      {skillItems.map((skill) => (
                        <div
                          key={`${skill.label}-${skill.level}`}
                          className="flex flex-col items-center"
                        >
                          <span className="inline-flex items-center gap-2">
                            {skill.icons.map((icon) => (
                              <div
                                className="flex flex-col items-center"
                                key={icon.src}
                              >
                                <Image
                                  src={icon.src}
                                  alt={icon.alt}
                                  width={48}
                                  height={48}
                                  className="object-contain"
                                />
                                <div className="text-sm">{icon.alt}</div>
                              </div>
                            ))}
                          </span>
                          {/* <div>{skill.label}</div> */}
                          <div className="handwriting text-3xl">
                            {skill.level}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* LIBRARIES */}
              <div className="mt-10">
                <h2 className="display-serif text-4xl">{content.libTitle}</h2>
                <div className="paper-card rotate-1.3 mt-8 relative px-4 py-5">
                  <span className="tape-strip -top-4 left-28 rotate-[5deg]" />
                  <div className="mt-4 flex flex-wrap gap-6">
                    {libraryItems.map((skill) => (
                      <div
                        key={`${skill.label}-${skill.level}`}
                        className="flex flex-col items-center"
                      >
                        <span className="inline-flex items-center gap-2">
                          {skill.icons.map((icon) => (
                            <Image
                              key={icon.src}
                              src={icon.src}
                              alt={icon.alt}
                              width={48}
                              height={48}
                              className="object-contain aspect-square"
                            />
                          ))}
                        </span>
                        <div className="text-sm">{skill.label}</div>
                        <div className="handwriting text-3xl">
                          {skill.level}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* TOOLS */}
              <div className="mt-10">
                <h2 className="display-serif text-4xl">{content.toolsTitle}</h2>
                <div className="paper-card -rotate-2 mt-8 relative px-4 py-5">
                  <span className="tape-strip -top-4 left-28 rotate-[5deg]" />
                  <div className="mt-4 flex flex-wrap gap-6">
                    {toolItems.map((tool) => (
                      <span
                        key={tool.label}
                        className="flex flex-col items-center text-sm"
                      >
                        <span className="inline-flex items-center gap-2">
                          {tool.icons.map((icon) => (
                            <div
                              className="flex flex-col items-center"
                              key={icon.src}
                            >
                              <Image
                                src={icon.src}
                                alt={icon.alt}
                                width={48}
                                height={48}
                                className="object-contain"
                              />
                              <div className="text-sm">{icon.alt}</div>
                            </div>
                          ))}
                        </span>
                        <div className="handwriting text-3xl">{tool.level}</div>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <h2 className="display-serif text-4xl">
                {content.projectsTitle}
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-12">
                {content.projects.map((project, index) => (
                  <article
                    key={project.title}
                    className={`paper-card relative w-full max-w-[360px] px-4 py-5 md:max-w-none md:basis-[calc(50%-1.5rem)] ${cardTilts[index % cardTilts.length]}`}
                  >
                    <span
                      className={`tape-strip ${tapePlacements[index % tapePlacements.length]}`}
                    />
                    <div className="relative mb-4 h-44 w-full overflow-hidden">
                      <Image
                        src={projectImages[index]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 360px"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="serif-zh text-2xl font-bold">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-(--text-light-fg)">
                      {project.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
