'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import DraggableCard from './DraggableCard';
import type { Lang } from '../content';

type Project = {
  title: string;
  image?: string;
  images?: string[];
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

function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1, align: 'start' });
  const [selectedSnap, setSelectedSnap] = useState(0);
  const snapCount = images.length;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mb-6 overflow-hidden rounded-md">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex -ml-2">
          {images.map((src, i) => (
            <div key={src} className="flex-[0_0_50%] min-w-0 pl-2">
              <Image
                src={src}
                alt={`${title} ${i + 1}`}
                width={0}
                height={0}
                sizes="(max-width: 768px) 46vw, 340px"
                className="w-full h-auto pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* prev / next */}
      <button
        type="button"
        aria-label="Previous image"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white text-lg hover:bg-black/60 cursor-pointer"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white text-lg hover:bg-black/60 cursor-pointer"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {Array.from({ length: snapCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to page ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              i === selectedSnap ? 'w-4 bg-orange-600' : 'w-1.5 bg-orange-600 opacity-40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

interface Props {
  zIndexCounterRef: React.RefObject<number>;
  projects: Project[];
  title: string;
  lang: Lang;
}

export default function ProjectsSection({
  zIndexCounterRef,
  projects,
  title,
  lang,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeProject = selectedIndex === null ? null : projects[selectedIndex];
  const carouselImages = activeProject?.images ?? (activeProject?.image ? [activeProject.image] : []);

  return (
    <div>
      <h2 className="display-serif text-4xl">{title}</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-12">
        {projects.map((project, index) => (
          <DraggableCard
            as="article"
            key={project.title}
            zIndexCounterRef={zIndexCounterRef}
            className={`paper-card relative w-full max-w-[360px] px-4 py-5 md:max-w-none md:basis-[calc(50%-1.5rem)] ${cardTilts[index % cardTilts.length]}`}
          >
            <div
              role="button"
              tabIndex={0}
              className="cursor-pointer"
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedIndex(index);
                }
              }}
            >
              <span className={`tape-strip ${tapePlacements[index % tapePlacements.length]}`} />
              <div className="relative mb-4 h-44 w-full overflow-hidden">
                {(project.image ?? project.images?.[0]) ? (
                  <Image
                    src={(project.image ?? project.images![0])}
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
              className="paper-card relative w-full max-w-2xl pt-2"
            >
              <span className="tape-strip -top-4 left-50 -rotate-6" />
              <button
                type="button"
                aria-label={lang === 'zh' ? '關閉專案視窗' : 'Close project modal'}
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/10 text-(--foreground) transition-colors hover:bg-black/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--foreground)"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
              <div className="max-h-[90vh] overflow-y-auto p-8">

              {carouselImages.length > 1 ? (
                <ProjectCarousel
                  key={selectedIndex}
                  images={carouselImages}
                  title={activeProject.title}
                />
              ) : carouselImages[0] ? (
                <div className="relative mb-6 h-60 w-full overflow-hidden rounded-md sm:h-72">
                  <Image
                    src={carouselImages[0]}
                    alt={activeProject.title}
                    fill
                    sizes="(max-width: 768px) 92vw, 700px"
                    className="object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>
              ) : null}

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
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-(--foreground) px-5 py-2 text-sm font-semibold text-(--paper) transition-opacity hover:opacity-75"
                >
                  {activeProject.link.includes('github.com') ? (
                    <>
                      <svg aria-hidden viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub 連結
                    </>
                  ) : (
                    <>
                      {lang === 'zh' ? '查看專案連結' : 'View Project Link'}
                      <span aria-hidden>↗</span>
                    </>
                  )}
                </a>
              )}
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
