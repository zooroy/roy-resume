import type { StaticImageData } from 'next/image';
import heroR from '../../public/hero/r.png';
import heroE from '../../public/hero/e.png';
import heroS from '../../public/hero/s.png';
import heroU from '../../public/hero/u.png';
import heroM from '../../public/hero/m.png';
import heroE2 from '../../public/hero/e-2.png';

export type HeroTile = {
  src: StaticImageData;
  alt: string;
  rotate: string;
  trimScale: number;
};

export const heroTiles: HeroTile[] = [
  { src: heroR, alt: 'R', rotate: '-rotate-[7deg]', trimScale: 3 },
  { src: heroE, alt: 'E', rotate: 'rotate-[5deg]', trimScale: 2.5 },
  { src: heroS, alt: 'S', rotate: '-rotate-[4deg]', trimScale: 3 },
  { src: heroU, alt: 'U', rotate: 'rotate-[6deg]', trimScale: 2.8 },
  { src: heroM, alt: 'M', rotate: '-rotate-[5deg]', trimScale: 2.5 },
  { src: heroE2, alt: 'E2', rotate: 'rotate-[4deg]', trimScale: 2.2 },
];

export const introFlyIn = [
  { x: -520, y: -260, scale: 0.6, delay: 0.02 },
  { x: 460, y: -220, scale: 0.7, delay: 0.1 },
  { x: -420, y: 260, scale: 0.65, delay: 0.18 },
  { x: 520, y: 240, scale: 0.72, delay: 0.26 },
  { x: -260, y: -340, scale: 0.68, delay: 0.34 },
  { x: 280, y: 340, scale: 0.62, delay: 0.42 },
];

export const heroTrimScaleX = 1.12;
