'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroTiles, heroTrimScaleX, introFlyIn } from './heroTiles';

export default function IntroOverlay() {
  return (
    <motion.section
      className="fixed inset-0 z-[100] grid place-items-center scrapbook-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 1.3, ease: 'easeInOut' }}
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
  );
}
