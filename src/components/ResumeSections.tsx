import React from 'react';
import { Locale, ResumeData } from '@/types/resume';
import {
  NeonCard,
  NeonTag,
  ScanlineOverlay,
  TerminalText,
  VaporTitle,
  NeonGradientText,
} from './VaporComponents';
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui';

interface SectionProps {
  locale: Locale;
  data: ResumeData;
}

export function EducationSection({ locale, data }: SectionProps) {
  return (
    <section className="space-y-6">
      <VaporTitle>{locale === 'zh-TW' ? '📚 學歷' : '📚 Education'}</VaporTitle>
      <div className="space-y-4">
        {data.education.map((edu, idx) => (
          <ScanlineOverlay key={idx}>
            <NeonCard glow="cyan" className="border-purple-300">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-purple-700">
                      {edu.school}
                    </h3>
                    <p className="text-pink-600 font-mono">{edu.degree}</p>
                  </div>
                  <span className="text-purple-600 font-mono text-sm whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">
                  {edu.description[locale]}
                </p>
              </div>
            </NeonCard>
          </ScanlineOverlay>
        ))}
      </div>
    </section>
  );
}

export function WorkSection({ locale, data }: SectionProps) {
  return (
    <section className="space-y-6">
      <VaporTitle>
        {locale === 'zh-TW' ? '💼 工作經驗' : '💼 Work Experience'}
      </VaporTitle>
      <div className="space-y-4">
        {data.work.map((work, idx) => (
          <ScanlineOverlay key={idx}>
            <NeonCard glow="pink" className="border-pink-300">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-pink-600">
                      {work.company}
                    </h3>
                    <p className="text-purple-700 font-mono">{work.job}</p>
                  </div>
                  <span className="text-purple-600 font-mono text-sm whitespace-nowrap">
                    {work.period}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">
                  {work.description[locale]}
                </p>
              </div>
            </NeonCard>
          </ScanlineOverlay>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection({ locale, data }: SectionProps) {
  return (
    <section className="space-y-6">
      <VaporTitle>{locale === 'zh-TW' ? '⚡ 技能' : '⚡ Skills'}</VaporTitle>
      <div className="flex flex-wrap gap-3">
        {data.skills.map((skill, idx) => (
          <Badge key={idx} variant="orange">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}

export function PortfolioSection({ locale, data }: SectionProps) {
  return (
    <section className="space-y-6">
      <VaporTitle>
        {locale === 'zh-TW' ? '🎨 作品集' : '🎨 Portfolio'}
      </VaporTitle>
      <div className="grid gap-6 md:grid-cols-2">
        {data.portfolio.map((project, idx) => (
          <Card key={idx} glow="orange" className="h-full">
            <CardHeader>
              <CardTitle className="text-orange-600">
                <TerminalText>{project.title[locale]}</TerminalText>
              </CardTitle>
              {project.period && (
                <CardDescription className="text-pink-600">
                  {project.period}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {project.description[locale]}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-mono text-xs rounded-lg hover:shadow-[0_2px_8px_rgba(115,79,156,0.4)] transition-all duration-300 hover:scale-105"
                >
                  {locale === 'zh-TW' ? '查看專案' : 'View Project'}
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
