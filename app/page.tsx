'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { copy, type Lang } from './content';
import DraggableCard from './components/DraggableCard';
import SkillsSection from './components/SkillsSection';
import LibrariesSection from './components/LibrariesSection';
import ToolsSection from './components/ToolsSection';
import ProjectsSection from './components/ProjectsSection';
import heroR from '../public/hero/r.png';
import heroE from '../public/hero/e.png';
import heroS from '../public/hero/s.png';
import heroU from '../public/hero/u.png';
import heroM from '../public/hero/m.png';
import heroE2 from '../public/hero/e-2.png';

const calculateAge = (dob: string) => {
  const [year, month, day] = dob.split(/[./-]/).map(Number);

  if (!year || !month || !day) return '';

  const today = new Date();
  let age = today.getFullYear() - year;
  const hasHadBirthday =
    today.getMonth() + 1 > month ||
    (today.getMonth() + 1 === month && today.getDate() >= day);

  if (!hasHadBirthday) age -= 1;

  return String(age);
};

export default function Home() {
  const zIndexCounter = useRef(10);
  const [lang, setLang] = useState<Lang>('en');
  const [introDone, setIntroDone] = useState(false);
  const [isProfileFlipped, setIsProfileFlipped] = useState(false);
  const profileRotateY = useMotionValue(0);
  const profileShadow = useTransform(profileRotateY, (value) => {
    const rad = (value * Math.PI) / 180;
    const absDepth = Math.abs(Math.cos(rad));
    const side = Math.sin(rad);
    const offsetX = side * 16;
    const offsetY = 16 + (1 - absDepth) * 7;
    const blur = 36 - (1 - absDepth) * 10;
    const spread = -8 + (1 - absDepth) * 3;
    const alpha = 0.24 + (1 - absDepth) * 0.12;
    return `${offsetX.toFixed(1)}px ${offsetY.toFixed(1)}px ${blur.toFixed(1)}px ${spread.toFixed(1)}px rgba(34, 20, 10, ${alpha.toFixed(2)})`;
  });
  const content = useMemo(() => copy[lang], [lang]);
  const age = useMemo(() => calculateAge(content.dob), [content.dob]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroDone(true), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const controls = animate(profileRotateY, isProfileFlipped ? 180 : 0, {
      type: 'spring',
      stiffness: 180,
      damping: 22,
      mass: 0.8,
    });
    return () => controls.stop();
  }, [isProfileFlipped, profileRotateY]);

  const heroTiles: {
    src: StaticImageData;
    alt: string;
    rotate: string;
    trimScale: number;
  }[] = [
    { src: heroR, alt: 'R', rotate: '-rotate-[7deg]', trimScale: 3 },
    { src: heroE, alt: 'E', rotate: 'rotate-[5deg]', trimScale: 2.5 },
    { src: heroS, alt: 'S', rotate: '-rotate-[4deg]', trimScale: 3 },
    { src: heroU, alt: 'U', rotate: 'rotate-[6deg]', trimScale: 2.8 },
    { src: heroM, alt: 'M', rotate: '-rotate-[5deg]', trimScale: 2.5 },
    { src: heroE2, alt: 'E2', rotate: 'rotate-[4deg]', trimScale: 2.2 },
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

  return (
    <div>
      <div className="scrapbook-bg min-h-screen px-6 py-10 sm:px-12 lg:px-20 relative">
        {!introDone && (
          <motion.section
            className="fixed inset-0 z-[100] grid place-items-center scrapbook-bg"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          >
            <motion.div className="fixed top-1/2 left-1/2 flex w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 flex-row flex-wrap items-center justify-center gap-1 sm:w-auto sm:flex-nowrap">
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
                      sizes="180px"
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
                zIndexCounterRef={zIndexCounter}
                className={tile.rotate}
              >
                <div className="relative" style={{ width: 80, height: 100 }}>
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="180px"
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

          <section className="relative px-6 py-8 sm:px-10">
            {/* language switcher */}
            <div className="relative z-1 mb-8 flex justify-end rotate-3 sm:absolute sm:top-0 sm:right-0 sm:mb-0 sm:block">
              <motion.div
                className="relative w-48 paper-card px-4 py-3 text-left"
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
            </div>

            <div className="flex flex-col md:flex-row gap-10">
              {/* photo */}
              <div className="w-full max-w-[320px] shrink-0 self-center md:w-[320px]">
                <div className="relative">
                  <DraggableCard
                    effects="none"
                    zIndexCounterRef={zIndexCounter}
                    className="max-w-full -rotate-4 [perspective:1400px]"
                  >
                    <motion.div
                      role="button"
                      tabIndex={0}
                      aria-label="Flip profile photo card"
                      onClick={() => setIsProfileFlipped((prev) => !prev)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setIsProfileFlipped((prev) => !prev);
                        }
                      }}
                      style={{
                        rotateY: profileRotateY,
                        boxShadow: profileShadow,
                        transformStyle: 'preserve-3d',
                      }}
                      className="paper-card relative px-5 py-6 outline-none will-change-transform"
                    >
                      <div className="" style={{ backfaceVisibility: 'hidden' }}>
                        <span className="tape-strip -top-4 left-25" />
                        <div className="relative h-65">
                          <Image
                            src="/profile/person.png"
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
                            <p className="handwriting text-3xl">{content.hello}</p>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <h2 className="display-serif">{content.ageLabel}: </h2>
                              <p className="handwriting leading-1 text-2xl text-(--text-light-fg)">
                                {age}
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
                              <h2 className="display-serif">{content.eduLabel}: </h2>
                              <p className="text-base leading-1 text-(--text-light-fg)">
                                {content.education}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="paper-card px-5 py-6 absolute inset-0"
                        style={{
                          transform: 'rotateY(180deg)',
                          backfaceVisibility: 'hidden',
                        }}
                      >
                        <span className="tape-strip -top-4 right-25" />
                        <div className="relative h-55">
                          <Image
                            src="/profile/family.jpeg"
                            alt="Family photo"
                            fill
                            sizes="(max-width: 768px) 90vw, 320px"
                            className="object-cover pointer-events-none"
                            draggable={false}
                          />
                        </div>
                        <div className="mt-6 mb-2 text-center">
                          <p className="handwriting text-2xl text-(--blue)">
                            My life is better because of you,
                            <br /> my Ellen.
                            <br />
                            Yes, she&apos;s my wife now
                            <br />
                            😌😌😌
                          </p>
                        </div>
                      </div>
                    </motion.div>
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
                      <div className="text-7xl font-semibold mb-1">{content.name}</div>
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
            <div className="flex flex-col gap-15 lg:flex-row">
              <div className="lg:w-1/3">
                <SkillsSection
                  zIndexCounterRef={zIndexCounter}
                  title={content.skillTitle}
                />
                <LibrariesSection
                  zIndexCounterRef={zIndexCounter}
                  title={content.libTitle}
                />
                <ToolsSection
                  zIndexCounterRef={zIndexCounter}
                  title={content.toolsTitle}
                />
              </div>

              <div className="lg:w-2/3 flex flex-col gap-15">
                <ProjectsSection
                  zIndexCounterRef={zIndexCounter}
                  projects={content.projects}
                  title={content.projectsTitle}
                  lang={lang}
                />
                <ProjectsSection
                  zIndexCounterRef={zIndexCounter}
                  projects={content.aiProjects}
                  title={content.aiProjectsTitle}
                  lang={lang}
                />
              </div>
            </div>
          </section>
        </motion.main>
      </div>
    </div>
  );
}
