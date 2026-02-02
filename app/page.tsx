'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { copy, type Lang } from './content';
import DraggableCard from './components/DraggableCard';
import heroR from '../public/hero/r.png';
import heroE from '../public/hero/e.png';
import heroS from '../public/hero/s.png';
import heroU from '../public/hero/u.png';
import heroM from '../public/hero/m.png';
import heroE2 from '../public/hero/e-2.png';

export default function Home() {
  const dragBoundsRef = useRef<HTMLDivElement>(null);
  const zIndexCounter = useRef(10);
  const projectPointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const projectMovedRef = useRef(false);
  const [lang, setLang] = useState<Lang>('zh');
  const [introDone, setIntroDone] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const content = useMemo(() => copy[lang], [lang]);
  useEffect(() => {
    const timer = window.setTimeout(() => setIntroDone(true), 1600);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (selectedProjectIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProjectIndex(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedProjectIndex]);
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
  const heroTiles: {
    src: StaticImageData;
    alt: string;
    rotate: string;
    trimScale: number;
  }[] = [
    {
      src: heroR,
      alt: 'R',
      rotate: '-rotate-[7deg]',
      trimScale: 3,
    },
    {
      src: heroE,
      alt: 'E',
      rotate: 'rotate-[5deg]',
      trimScale: 2.5,
    },
    {
      src: heroS,
      alt: 'S',
      rotate: '-rotate-[4deg]',
      trimScale: 3,
    },
    {
      src: heroU,
      alt: 'U',
      rotate: 'rotate-[6deg]',
      trimScale: 2.8,
    },
    {
      src: heroM,
      alt: 'M',
      rotate: '-rotate-[5deg]',
      trimScale: 2.5,
    },
    {
      src: heroE2,
      alt: 'E2',
      rotate: 'rotate-[4deg]',
      trimScale: 2.2,
    },
  ];
  const introFlyIn = [
    { x: -520, y: -260, scale: 0.6, delay: 0.02 },
    { x: 460, y: -220, scale: 0.7, delay: 0.1 },
    { x: -420, y: 260, scale: 0.65, delay: 0.18 },
    { x: 520, y: 240, scale: 0.72, delay: 0.26 },
    { x: -260, y: -340, scale: 0.68, delay: 0.34 },
    { x: 280, y: 340, scale: 0.62, delay: 0.42 },
  ];
  const heroTrimScaleX = 1.12;
  const activeProject =
    selectedProjectIndex === null
      ? null
      : content.projects[selectedProjectIndex];
  const activeProjectImage =
    selectedProjectIndex === null ? null : projectImages[selectedProjectIndex];

  return (
    <div ref={dragBoundsRef}>
      <div className="scrapbook-bg min-h-screen px-6 py-10 sm:px-12 lg:px-20 relative">
        {!introDone && (
          <motion.section
            className="fixed inset-0 z-[100] grid place-items-center scrapbook-bg"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          >
            <motion.div className="fixed top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row items-center justify-center gap-1">
              <p className="handwriting absolute -top-20 text-5xl text-(--blue)">
                Roy&apos;s
              </p>
              {heroTiles.map((tile, index) => (
                <motion.div
                  key={`intro-${tile.alt}`}
                  className={tile.rotate}
                  initial={{
                    opacity: 0,
                    x: introFlyIn[index]?.x ?? 0,
                    y: introFlyIn[index]?.y ?? 0,
                    scale: introFlyIn[index]?.scale ?? 0.7,
                  }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 210,
                    damping: 17,
                    mass: 0.7,
                    delay: introFlyIn[index]?.delay ?? 0,
                  }}
                >
                  <div className="relative h-[100px] w-[80px]">
                    <Image
                      src={tile.src}
                      alt={tile.alt}
                      fill
                      sizes="80px"
                      className="object-contain pointer-events-none origin-center"
                      style={{
                        transform: `scale(${tile.trimScale}) scaleX(${heroTrimScaleX})`,
                        filter: 'drop-shadow(0 1px 2px rgba(34, 20, 10, 0.24))',
                      }}
                      draggable={false}
                      priority
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}
        <motion.main
          initial={false}
          animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 8 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10"
        >
          {/* RESUME title */}
          <section className="flex flex-row flex-wrap items-center justify-center mt-12">
            <p className="handwriting absolute -top-4 text-5xl text-(--blue)">
              Roy&apos;s
            </p>
            {heroTiles.map((tile) => (
              <DraggableCard
                key={tile.alt}
                effects="scale"
                dragBoundsRef={dragBoundsRef}
                zIndexCounterRef={zIndexCounter}
                className={`${tile.rotate} cursor-grab active:cursor-grabbing`}
              >
                <div
                  className="relative"
                  style={{
                    width: 80,
                    height: 100,
                  }}
                >
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="80px"
                    className="object-contain pointer-events-none origin-center"
                    style={{
                      transform: `scale(${tile.trimScale}) scaleX(${heroTrimScaleX})`,
                      filter: 'drop-shadow(0 1px 2px rgba(34, 20, 10, 0.24))',
                    }}
                    draggable={false}
                    priority
                  />
                </div>
              </DraggableCard>
            ))}
          </section>

          {/* <section className="px-6 py-8 sm:px-10 text-center">
          <h1 className="handwriting text-center text-6xl font-bold tracking-wide ">
            {content.heroTitle}2
          </h1>
        </section> */}

          <section className="relative px-6 py-8 sm:px-10">
            <div className="absolute top-0 right-0 z-1 rotate-3">
              <DraggableCard
                dragBoundsRef={dragBoundsRef}
                zIndexCounterRef={zIndexCounter}
                // position="absolute"
                className="paper-card top-6 right-3 w-fit px-4 py-3 text-sm text-(--text-light-fg) rotate-3 cursor-grab active:cursor-grabbing"
              >
                <span className="tape-strip -top-5.5 right-5 rotate-2" />
                Tip: 卡片可自由拖曳
              </DraggableCard>
            </div>
            {/* language switcher */}
            {/* <div className="absolute top-0 right-0 z-1 rotate-3">
            <motion.div
              drag
              dragMomentum={false}
              dragElastic={0.12}
              className="relative w-48 paper-card px-4 py-3 text-left cursor-grab active:cursor-grabbing"
            >
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
            </motion.div>
          </div> */}

            <div className="flex flex-col md:flex-row gap-10">
              {/* photo */}
              <div className="shrink-0 w-[320px]">
                <div className="relative">
                  <DraggableCard
                    dragBoundsRef={dragBoundsRef}
                    zIndexCounterRef={zIndexCounter}
                    className="paper-card max-w-full px-5 py-6 -rotate-4 cursor-grab active:cursor-grabbing"
                  >
                    <span className="tape-strip -top-4 left-25" />
                    <div className="relative h-65">
                      <Image
                        src="/profile/person.jpeg"
                        alt="Profile photo"
                        fill
                        sizes="(max-width: 768px) 90vw, 320px"
                        className="object-cover pointer-events-none"
                        draggable={false}
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
                  </DraggableCard>
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
                <h2 className="display-serif text-4xl ">
                  {content.skillTitle}
                </h2>
                <DraggableCard
                  dragBoundsRef={dragBoundsRef}
                  zIndexCounterRef={zIndexCounter}
                  className="paper-card rotate-1 mt-8 relative px-4 py-5 cursor-grab active:cursor-grabbing"
                >
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
                                    className="object-contain pointer-events-none"
                                    draggable={false}
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
                </DraggableCard>

                {/* LIBRARIES */}
                <div className="mt-10">
                  <h2 className="display-serif text-4xl">{content.libTitle}</h2>
                  <DraggableCard
                    dragBoundsRef={dragBoundsRef}
                    zIndexCounterRef={zIndexCounter}
                    className="paper-card rotate-1.3 mt-8 relative px-4 py-5 cursor-grab active:cursor-grabbing"
                  >
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
                                className="object-contain aspect-square pointer-events-none"
                                draggable={false}
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
                  </DraggableCard>
                </div>

                {/* TOOLS */}
                <div className="mt-10">
                  <h2 className="display-serif text-4xl">
                    {content.toolsTitle}
                  </h2>
                  <DraggableCard
                    dragBoundsRef={dragBoundsRef}
                    zIndexCounterRef={zIndexCounter}
                    className="paper-card -rotate-2 mt-8 relative px-4 py-5 cursor-grab active:cursor-grabbing"
                  >
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
                                  className="object-contain pointer-events-none"
                                  draggable={false}
                                />
                                <div className="text-sm">{icon.alt}</div>
                              </div>
                            ))}
                          </span>
                          <div className="handwriting text-3xl">
                            {tool.level}
                          </div>
                        </span>
                      ))}
                    </div>
                  </DraggableCard>
                </div>
              </div>

              <div className="lg:w-2/3">
                <h2 className="display-serif text-4xl">
                  {content.projectsTitle}
                </h2>
                <div className="mt-8 flex flex-wrap justify-center gap-12">
                  {/* Projects */}
                  {content.projects.map((project, index) => (
                    <DraggableCard
                      as="article"
                      key={project.title}
                      dragBoundsRef={dragBoundsRef}
                      zIndexCounterRef={zIndexCounter}
                      className={`paper-card relative w-full max-w-[360px] px-4 py-5 md:max-w-none md:basis-[calc(50%-1.5rem)] ${cardTilts[index % cardTilts.length]} cursor-grab active:cursor-grabbing`}
                    >
                      <div
                        role="button"
                        tabIndex={0}
                        className="cursor-pointer"
                        onPointerDown={(event) => {
                          projectPointerStartRef.current = {
                            x: event.clientX,
                            y: event.clientY,
                          };
                          projectMovedRef.current = false;
                        }}
                        onPointerMove={(event) => {
                          if (!projectPointerStartRef.current) return;
                          const deltaX =
                            event.clientX - projectPointerStartRef.current.x;
                          const deltaY =
                            event.clientY - projectPointerStartRef.current.y;
                          if (Math.hypot(deltaX, deltaY) > 8) {
                            projectMovedRef.current = true;
                          }
                        }}
                        onPointerUp={() => {
                          if (!projectMovedRef.current) {
                            setSelectedProjectIndex(index);
                          }
                          projectPointerStartRef.current = null;
                          projectMovedRef.current = false;
                        }}
                        onPointerCancel={() => {
                          projectPointerStartRef.current = null;
                          projectMovedRef.current = false;
                        }}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            setSelectedProjectIndex(index);
                          }
                        }}
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
                            className="object-cover pointer-events-none"
                            draggable={false}
                          />
                        </div>
                        <h3 className="serif-zh text-2xl font-bold">
                          {project.title}
                        </h3>
                        <p className="mt-3 leading-relaxed text-(--text-light-fg)">
                          {project.summary}
                        </p>
                      </div>
                    </DraggableCard>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <AnimatePresence>
            {activeProject && activeProjectImage && (
              <motion.div
                key="project-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4"
                onClick={() => setSelectedProjectIndex(null)}
              >
                <motion.article
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 16 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  onClick={(event) => event.stopPropagation()}
                  className="paper-card relative max-h-[90vh] w-full max-w-2xl p-8"
                >
                  <span className="tape-strip -top-4 left-50 -rotate-6" />
                  {/* <button
                    type="button"
                    onClick={() => setSelectedProjectIndex(null)}
                    aria-label={lang === 'zh' ? '關閉視窗' : 'Close modal'}
                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-black/20 bg-[var(--paper)] text-xl leading-none hover:bg-black/5 cursor-pointer sm:right-6 sm:top-6"
                  >
                    ×
                  </button> */}
                  <div className="relative mb-6 h-60 w-full overflow-hidden rounded-md sm:h-72">
                    <Image
                      src={activeProjectImage}
                      alt={activeProject.title}
                      fill
                      sizes="(max-width: 768px) 92vw, 700px"
                      className="object-cover pointer-events-none"
                      draggable={false}
                    />
                  </div>
                  <h3 className="serif-zh text-3xl font-bold">
                    {activeProject.title}
                  </h3>
                  {activeProject.summary && (
                    <p className="mt-4 text-lg leading-relaxed text-(--text-light-fg)">
                      {activeProject.summary}
                    </p>
                  )}
                  {activeProject.role && (
                    <p className="mt-4 inline-flex rounded-full border border-black/20 px-3 py-1 text-sm">
                      {activeProject.role}
                    </p>
                  )}
                  {activeProject.highlights &&
                    activeProject.highlights.length > 0 && (
                      <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-(--text-light-fg)">
                        {activeProject.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  {activeProject.tech && activeProject.tech.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {activeProject.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-black/10 px-3 py-1 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex rounded-full border border-black/20 px-4 py-2 text-sm hover:bg-black/5"
                    >
                      {lang === 'zh' ? '查看專案連結' : 'View Project Link'}
                    </a>
                  )}
                </motion.article>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.main>
      </div>
    </div>
  );
}
