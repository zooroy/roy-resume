'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import type { Lang } from '../content';

type ProfileContent = {
  hello: string;
  name: string;
  dob: string;
  intro: string;
  ageLabel: string;
  eduLabel: string;
  education: string;
};

type Props = {
  content: ProfileContent;
  lang: Lang;
  onLanguageChange: (lang: Lang) => void;
};

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

export default function ProfileSection({
  content,
  lang,
  onLanguageChange,
}: Props) {
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
  const age = useMemo(() => calculateAge(content.dob), [content.dob]);

  useEffect(() => {
    const controls = animate(profileRotateY, isProfileFlipped ? 180 : 0, {
      type: 'spring',
      stiffness: 180,
      damping: 22,
      mass: 0.8,
    });
    return () => controls.stop();
  }, [isProfileFlipped, profileRotateY]);

  return (
    <section className="relative px-6 sm:py-4 sm:px-10">
      <div className="relative z-1 mb-8 flex justify-end rotate-3 xl:absolute xl:top-0 xl:right-0 xl:mb-0 xl:block">
        <motion.div className="relative w-48 paper-card px-4 py-3 text-left">
          <span className="tape-strip right-5 -top-4.5 rotate-[5deg]" />
          <p className="handwriting text-2xl">language</p>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={() => onLanguageChange('zh')}
              className={`rounded-full border-2 border-[rgba(36,28,22,0.08)] bg-(--paper-deep) px-3 py-1 text-xs font-semibold cursor-pointer text-(--ink) ${
                lang === 'zh' ? 'bg-(--tape)' : ''
              }`}
            >
              中文
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`rounded-full border-2 border-[rgba(36,28,22,0.08)] bg-(--paper-deep) px-3 py-1 text-xs font-semibold cursor-pointer text-(--ink) ${
                lang === 'en' ? 'bg-(--tape)' : ''
              }`}
            >
              EN
            </button>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full max-w-[320px] shrink-0 self-center md:w-[320px]">
          <div className="relative">
            <div className="max-w-full -rotate-4 [perspective:1400px]">
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
                <div style={{ backfaceVisibility: 'hidden' }}>
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
  );
}
