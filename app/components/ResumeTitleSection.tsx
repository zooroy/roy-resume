'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroTiles, heroTrimScaleX } from './heroTiles';

export default function ResumeTitleSection() {
  return (
    <section className="flex flex-row flex-wrap items-center justify-center mt-12">
      <p className="handwriting absolute -top-4 text-5xl text-(--blue)">
        Roy&apos;s
      </p>
      {heroTiles.map((tile) => (
        <motion.div
          key={tile.alt}
          whileTap={{ scale: 1.02 }}
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
        </motion.div>
      ))}
    </section>
  );
}
