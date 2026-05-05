'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import DraggableCard from './DraggableCard';
import type { Lang } from '../content';

type Project = {
  title: string;
  image?: string;
  summary?: string;
  role?: string;
  highlights?: string[];
  tech?: string[];
  link?: string;
};

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

interface Props {
  dragBoundsRef: React.RefObject<HTMLDivElement | null>;
  zIndexCounterRef: React.RefObject<number>;
  projects: Project[];
  title: string;
  lang: Lang;
}

export default function ProjectsSection({
  dragBoundsRef,
  zIndexCounterRef,
  projects,
  title,
  lang,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const movedRef = useRef(false);

  const activeProject = selectedIndex === null ? null : projects[selectedIndex];

  return (
    <div>
      <h2 className="display-serif text-4xl">{title}</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-12">
        {projects.map((project, index) => (
          <DraggableCard
            as="article"
            key={project.title}
            dragBoundsRef={dragBoundsRef}
            zIndexCounterRef={zIndexCounterRef}
            className={`paper-card relative w-full max-w-[360px] px-4 py-5 md:max-w-none md:basis-[calc(50%-1.5rem)] ${cardTilts[index % cardTilts.length]} cursor-grab active:cursor-grabbing`}
          >
            <div
              role="button"
              tabIndex={0}
              className="cursor-pointer"
              onPointerDown={(event) => {
                pointerStartRef.current = { x: event.clientX, y: event.clientY };
                movedRef.current = false;
              }}
              onPointerMove={(event) => {
                if (!pointerStartRef.current) return;
                const dx = event.clientX - pointerStartRef.current.x;
                const dy = event.clientY - pointerStartRef.current.y;
                if (Math.hypot(dx, dy) > 8) movedRef.current = true;
              }}
              onPointerUp={() => {
                if (!movedRef.current) setSelectedIndex(index);
                pointerStartRef.current = null;
                movedRef.current = false;
              }}
              onPointerCancel={() => {
                pointerStartRef.current = null;
                movedRef.current = false;
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedIndex(index);
                }
              }}
            >
              <span className={`tape-strip ${tapePlacements[index % tapePlacements.length]}`} />
              <div className="relative mb-4 h-44 w-full overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 360px"
                    className="object-cover pointer-events-none"
                    draggable={false}
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[var(--paper-deep)] to-[var(--tape)] opacity-60" />
                )}
              </div>
              <h3 className="serif-zh text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 leading-relaxed text-(--text-light-fg)">{project.summary}</p>
              <p className="mt-4 inline-flex rounded-full border border-black/20 px-3 py-1 text-xs text-(--text-light-fg)">
                {lang === 'zh' ? '點擊查看更多' : 'Click to view more'}
              </p>
            </div>
          </DraggableCard>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            key="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.article
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              className="paper-card relative max-h-[90vh] w-full max-w-2xl p-8 overflow-y-scroll"
            >
              <span className="tape-strip -top-4 left-50 -rotate-6" />
              <div className="relative mb-6 h-60 w-full overflow-hidden rounded-md sm:h-72">
                {activeProject.image ? (
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    sizes="(max-width: 768px) 92vw, 700px"
                    className="object-cover pointer-events-none"
                    draggable={false}
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[var(--paper-deep)] to-[var(--tape)] opacity-60" />
                )}
              </div>
              <h3 className="serif-zh text-3xl font-bold">{activeProject.title}</h3>
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
              {activeProject.highlights && activeProject.highlights.length > 0 && (
                <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-(--text-light-fg)">
                  {activeProject.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {activeProject.tech && activeProject.tech.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {activeProject.tech.map((item) => (
                    <span key={item} className="rounded-full bg-black/10 px-3 py-1 text-sm">
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
    </div>
  );
}
