import { ResumeData } from '@/types/resume';

export const resumeData: ResumeData = {
  avatar: '/avatar.jpg',
  background: '/background.jpg',
  intro: {
    'zh-TW':
      '全棧開發工程師 | React & Next.js 專家 | 熱愛 UI/UX 設計與性能優化',
    en: 'Full-Stack Developer | React & Next.js Expert | Passionate about UI/UX Design & Performance',
  },
  education: [
    {
      school: '國立臺灣大學',
      degree: '電機工程學士',
      period: '2018 - 2022',
      description: {
        'zh-TW':
          '主修 Web 開發與系統設計，在校期間參與多個前端專案，GPA: 3.8/4.0',
        en: 'Specialized in Web Development and System Design, participated in multiple frontend projects, GPA: 3.8/4.0',
      },
    },
    {
      school: 'Coursera Specialization',
      degree: 'Full Stack Web Development',
      period: '2022 - 2023',
      description: {
        'zh-TW': '完成 React、Node.js、MongoDB 全棧課程認證',
        en: 'Completed React, Node.js, and MongoDB Full Stack course certification',
      },
    },
  ],
  work: [
    {
      company: 'Tech Startup Inc.',
      job: '資深前端工程師 (Senior Frontend Engineer)',
      period: '2023 - 現在',
      description: {
        'zh-TW':
          '主導產品前端架構設計，使用 React 和 Next.js 開發核心功能，通過性能優化提升初始載入速度 40%，帶領 3 人前端小組',
        en: 'Led frontend architecture design, developed core features with React & Next.js, improved initial load time by 40% through optimization, managed a team of 3 frontend engineers',
      },
    },
    {
      company: 'Digital Solutions Ltd.',
      job: '前端工程師 (Frontend Engineer)',
      period: '2022 - 2023',
      description: {
        'zh-TW':
          '開發客戶端應用，實現複雜 UI 元件與互動效果，與設計師和後端團隊密切協作完成多個企業級項目',
        en: 'Developed client applications, implemented complex UI components and interactions, collaborated closely with design and backend teams on enterprise projects',
      },
    },
    {
      company: 'Creative Design Studio',
      job: '實習生 (Intern)',
      period: '2021 - 2022',
      description: {
        'zh-TW': '參與多個網頁設計項目，學習響應式設計和跨瀏覽器相容性最佳實踐',
        en: 'Participated in multiple web design projects, learned responsive design and cross-browser compatibility best practices',
      },
    },
  ],
  skills: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'UI Design',
    'Web Performance',
    'Figma',
  ],
  portfolio: [
    {
      title: {
        'zh-TW': 'E-Commerce 電商平臺',
        en: 'E-Commerce Platform',
      },
      period: '2024',
      description: {
        'zh-TW':
          '完整的電商解決方案，支持支付集成、訂單管理、商品推薦引擎，月活躍用戶 5000+，轉化率提升 25%',
        en: 'Complete e-commerce solution with payment integration, order management, and recommendation engine. 5000+ monthly active users, 25% conversion rate improvement',
      },
      link: 'https://example.com/ecommerce',
    },
    {
      title: {
        'zh-TW': 'SaaS 協作工具',
        en: 'SaaS Collaboration Tool',
      },
      period: '2023',
      description: {
        'zh-TW':
          '實時協作平臺，整合視訊會議、檔案分享和任務管理，使用 WebSocket 實現實時功能，支持 1000+ 併發用戶',
        en: 'Real-time collaboration platform with video conferencing, file sharing, and task management. WebSocket for real-time features, supports 1000+ concurrent users',
      },
      link: 'https://example.com/saas',
    },
    {
      title: {
        'zh-TW': 'AI 內容生成工具',
        en: 'AI Content Generator',
      },
      period: '2023',
      description: {
        'zh-TW':
          '整合 OpenAI API 的內容生成工具，提供多種文案生成模板，使用者數量 2000+',
        en: 'OpenAI API-powered content generation tool with multiple templates. 2000+ users',
      },
      link: 'https://example.com/ai-content',
    },
  ],
};
