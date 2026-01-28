import { NextResponse } from 'next/server';
import type { ResumeData } from '@/types/resume';

const resumeData: ResumeData = {
  avatar: '/file.svg',
  background: '/globe.svg',
  intro: {
    'zh-TW':
      '這是一個簡短的自我介紹。熱愛前端、互動設計與新技術，具備豐富的專案經驗。',
    en: 'A brief self-introduction. Passionate about frontend, interaction design, and new technologies, with extensive project experience.',
  },
  education: [
    {
      school: '台灣大學',
      degree: '資訊工程學系 學士',
      period: '2014 - 2018',
      description: {
        'zh-TW': '主修軟體工程與人機互動設計。',
        en: 'Major in Software Engineering and HCI.',
      },
    },
  ],
  work: [
    {
      company: '前端科技股份有限公司',
      job: '資深前端工程師',
      period: '2018 - 現在',
      description: {
        'zh-TW': '負責大型專案開發、前端架構設計與指導團隊。',
        en: 'Responsible for large project development, frontend architecture design, and team mentoring.',
      },
    },
  ],
  skills: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Zod',
    'shadcn/ui',
  ],
  portfolio: [
    {
      title: {
        'zh-TW': '作品集範例一',
        en: 'Portfolio Example 1',
      },
      period: '2025',
      description: {
        'zh-TW': '這是一個前端作品集的案例說明。',
        en: 'A case description of a frontend portfolio.',
      },
      link: 'https://github.com/your-portfolio',
      image: '/next.svg',
    },
  ],
};

export async function GET() {
  return NextResponse.json(resumeData);
}
