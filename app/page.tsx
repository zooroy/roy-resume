'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { copy, type Lang } from './content';
import ExperienceSection from './components/ExperienceSection';
import IntroOverlay from './components/IntroOverlay';
import LibrariesSection from './components/LibrariesSection';
import ProfileSection from './components/ProfileSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ResumeTitleSection from './components/ResumeTitleSection';
import ToolsSection from './components/ToolsSection';

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const lang: Lang = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh';
  const [introDone, setIntroDone] = useState(false);
  const content = useMemo(() => copy[lang], [lang]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroDone(true), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  const handleLanguageChange = (nextLang: Lang) => {
    router.push(nextLang === 'en' ? '/en' : '/');
  };

  return (
    <div>
      <div className="scrapbook-bg min-h-screen px-6 py-10 sm:px-12 lg:px-20 relative">
        {!introDone && <IntroOverlay />}
        <motion.main
          initial={false}
          animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 8 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10"
        >
          <ResumeTitleSection />
          <ProfileSection
            content={content}
            lang={lang}
            onLanguageChange={handleLanguageChange}
          />
          <ExperienceSection
            title={content.experienceTitle}
            experiences={content.experiences}
            lang={lang}
          />
          <section className="px-6 py-8 sm:px-10">
            <div className="flex flex-col gap-15 lg:flex-row">
              <div className="lg:w-1/3">
                <SkillsSection title={content.skillTitle} />
                <LibrariesSection title={content.libTitle} />
                <ToolsSection title={content.toolsTitle} />
              </div>

              <div className="lg:w-2/3 flex flex-col gap-15">
                <ProjectsSection
                  projects={content.projects}
                  title={content.projectsTitle}
                  lang={lang}
                />
                <ProjectsSection
                  projects={content.aiProjects}
                  title={content.aiProjectsTitle}
                  lang={lang}
                  showModalSummary
                />
              </div>
            </div>
          </section>
        </motion.main>
      </div>
    </div>
  );
}
