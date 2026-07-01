export type Lang = 'zh' | 'en';

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

type Content = {
  heroTitle: string;
  languageLabel: string;
  hello: string;
  role: string;
  name: string;
  dob: string;
  city: string;
  intro: string;
  ageLabel: string;
  contactLabel: string;
  eduLabel: string;
  age: string;
  phone?: string;
  contact?: string;
  email?: string;
  education: string;
  skillTitle: string;
  libTitle: string;
  toolsTitle: string;
  projectsTitle: string;
  projects: Project[];
  aiProjectsTitle: string;
  aiProjects: Project[];
};

export const copy: Record<Lang, Content> = {
  zh: {
    heroTitle: 'Resume',
    languageLabel: 'Language / 語系',
    hello: "HELLO, I'M Roy!",
    role: 'Frontend Developer',
    name: '蕭亦廷',
    dob: '1990.10.11',
    city: 'Taichung City, Taiwan',
    intro: `從設計背景走進前端工程，開發時，思考元件共用、程式結構與後續維護性，減少重複程式碼與過度客製化，讓專案保持清楚、穩定的架構。
在開發過程中，我持續運用 AI 輔助開發，並嘗試導入 SDD（Spec-driven Development）流程，讓需求規格、畫面設計與程式實作能更有效地串接。`,
    ageLabel: 'Age',
    contactLabel: 'Contact Details',
    eduLabel: 'Education',
    age: '35',
    phone: '0912-323-221',
    email: 'zooroy13@gmail.com',
    education: '國立成功大學 中國文學系',
    skillTitle: 'SKILLS',
    libTitle: 'LIBRARIES',
    toolsTitle: 'TOOLS',
    projectsTitle: 'PROJECTS',
    projects: [
      {
        title: 'Swimple｜游泳池租借平台',
        image: '/projects/swim.jpg',
        summary:
          '游泳池即時租借與管理平台，提供使用者快速查詢、預約與驗證流程。',
        role: '多人協作',
        highlights: [
          '負責前台使用者註冊與登入流程設計',
          '整合第三方登入機制，處理帳號驗證流程',
          '實作表單驗證、錯誤提示與頁面權限控管',
        ],
        tech: [
          'React',
          'Next.js',
          'TypeScript',
          'Material UI',
          'Formik',
          'Yup',
        ],
        link: 'https://www.swimple.co.uk/homepage',
      },

      {
        title: '家樂福｜家有奇雞互動小遊戲',
        image: '/projects/game.jpg',
        summary: '品牌活動互動小遊戲，提升使用者參與度與活動完成率。',
        role: '兩人協作',
        highlights: [
          '負責整體架構規劃與資料流程設計',
          '實作使用者帳號驗證與活動資格判斷',
          '製作互動動畫與遊戲流程',
        ],
        tech: ['React', 'Next.js', 'TypeScript', 'React-Spring', 'axios'],
      },

      {
        title: '凱基金控｜後台資料管理系統（內部後台）',
        image: '/projects/kgi.jpg',
        summary: '企業內部使用的資料管理後台，支援會員權限與資料處理。',
        role: '獨立作業',
        highlights: [
          '獨立負責整體前端系統開發與維護',
          '串接 RESTful API，完成資料新增、查詢與編輯功能',
          '實作會員權限功能與資料篩選模組',
        ],
        tech: [
          'React',
          'Next.js',
          'TypeScript',
          'Material UI',
          'Redux Toolkit',
          'Formik',
        ],
      },

      {
        title: 'TSMC｜後台資料管理系統（內部後台）',
        image: '/projects/tsmc.jpg',
        summary: '大型企業內部後台系統，處理大量資料與元件化管理。',
        role: '多人協作',
        highlights: [
          '負責 API 串接與資料處理邏輯',
          '開發元件模組化架構，提升系統可維護性',
          '實作 Lazy Loading，優化大量資料載入效能',
        ],
        tech: [
          'React',
          'TypeScript',
          'GraphQL',
          'Apollo Client',
          'React Hook Form',
          'Yup',
        ],
      },
    ],
    aiProjectsTitle: 'AI 規格驅動開發 Side Projects',
    aiProjects: [
      {
        title: '單人預約系統｜網頁 × LINE LIFF',
        image: '/aiprojects/appt_photo_1.webp',
        images: [
          '/aiprojects/appt_photo_1.webp',
          '/aiprojects/appt_photo_2.webp',
          '/aiprojects/appt_photo_3.webp',
          '/aiprojects/appt_photo_4.webp',
          '/aiprojects/appt_photo_5.webp',
        ],
        summary:
          '整合 LINE LIFF 的線上預約系統，結合 LINE 推播通知與完整後台管理。',
        role: 'AI Spec-driven Development',
        highlights: [
          '多步驟預約流程（服務 → 日期 → 時段 → 填資料），公休日與已過時段自動停用',
          '整合 LINE LIFF，自動帶入用戶顯示名稱；預約成功與取消均即時發送 LINE Push 通知',
          '後台支援預約管理、服務項目、公休日、營業時間設定，以 HTTP Basic Auth 保護',
        ],
        tech: [
          'Next.js',
          'TypeScript',
          'Prisma',
          'PostgreSQL',
          'shadcn/ui',
          'Tailwind CSS',
          'LINE Bot SDK',
          'LINE LIFF',
        ],
        link: 'https://github.com/zooroy/appt-system',
      },
      {
        title: 'Japan Receipt Tracking｜AI 收據辨識記帳 App',
        image: '/aiprojects/jrt_photo_4.webp',
        images: [
          '/aiprojects/jrt_photo_1.webp',
          '/aiprojects/jrt_photo_2.webp',
          '/aiprojects/jrt_photo_3.webp',
          '/aiprojects/jrt_photo_4.webp',
          '/aiprojects/jrt_photo_5.webp',
        ],
        summary:
          '日本旅遊收據管理 PWA，拍照上傳後由Gemini AI 自動辨識收據內容，並即時換算日幣台幣。',
        role: 'AI Spec-driven Development',
        highlights: [
          '整合 Gemini 2.5 Flash Lite 自動擷取收據店名、金額、品項、消費分類及稅別',
          '即時 JPY → TWD 匯率換算，匯率結果快取於資料庫避免重複呼叫 API',
          '支援批次上傳、圖片 hash 重複偵測與 PWA，可加入主畫面如原生 App 使用',
        ],
        tech: [
          'Next.js',
          'TypeScript',
          'Prisma',
          'PostgreSQL',
          'Gemini API',
          'TanStack Query',
          'Recharts',
          'shadcn/ui',
          'Tailwind CSS',
        ],
        link: 'https://github.com/zooroy/japan-receipt-tracking',
      },
    ],
  },
  en: {
    heroTitle: 'Resume',
    languageLabel: 'Language / 語系',
    hello: "HELLO, I'M Roy!",
    role: 'Frontend Developer',
    name: 'Yi-Ting Hsiao',
    dob: '1990.10.11',
    city: 'Taichung City, Taiwan',
    intro: `Coming from a design background into frontend engineering, I think about component reuse, code structure, and long-term maintainability while developing. I aim to reduce duplicated code and excessive customization, keeping projects clear, stable, and well-structured.
Throughout development, I continue to use AI-assisted workflows and explore SDD (Spec-driven Development), helping requirements, interface design, and implementation connect more effectively.`,
    ageLabel: 'Age',
    contactLabel: 'Contact Details',
    eduLabel: 'Education',
    age: '35',
    phone: '0912-323-221',
    email: 'zooroy13@gmail.com',
    education: 'NCKU, Chinese Literature',
    skillTitle: 'SKILLS',
    libTitle: 'LIBRARIES',
    toolsTitle: 'TOOLS',
    projectsTitle: 'PROJECTS',
    projects: [
      {
        title: 'Swimple | Swimming Pool Rental Platform',
        image: '/projects/swim.jpg',
        summary:
          'A real-time swimming pool rental and management platform providing users with quick search, booking, and verification workflows.',
        role: 'Team Collaboration',
        highlights: [
          'Designed the frontend user registration and login flow',
          'Integrated third-party login mechanisms and handled account verification',
          'Implemented form validation, error prompts, and page-level access control',
        ],
        tech: [
          'React',
          'Next.js',
          'TypeScript',
          'Material UI',
          'Formik',
          'Yup',
        ],
        link: 'https://www.swimple.co.uk/homepage',
      },

      {
        title: 'Carrefour | Home Chicken Adventure Interactive Mini-Game',
        image: '/projects/game.jpg',
        summary: 'A branded interactive mini-game designed to boost user engagement and campaign completion rates.',
        role: 'Two-Person Collaboration',
        highlights: [
          'Responsible for overall architecture planning and data flow design',
          'Implemented user account verification and campaign eligibility checks',
          'Created interactive animations and game flow',
        ],
        tech: ['React', 'Next.js', 'TypeScript', 'React-Spring', 'axios'],
      },

      {
        title: 'KGI Financial Holdings | Admin Data Management System (Internal)',
        image: '/projects/kgi.jpg',
        summary: 'An internal data management dashboard supporting member permissions and data processing.',
        role: 'Solo Development',
        highlights: [
          'Independently responsible for the entire frontend system development and maintenance',
          'Integrated RESTful APIs to implement data creation, querying, and editing features',
          'Implemented member permission controls and data filtering modules',
        ],
        tech: [
          'React',
          'Next.js',
          'TypeScript',
          'Material UI',
          'Redux Toolkit',
          'Formik',
        ],
      },

      {
        title: 'TSMC | Admin Data Management System (Internal)',
        image: '/projects/tsmc.jpg',
        summary: 'A large-scale enterprise internal dashboard handling massive data volumes and componentized management.',
        role: 'Team Collaboration',
        highlights: [
          'Responsible for API integration and data processing logic',
          'Developed a modular component architecture to improve system maintainability',
          'Implemented Lazy Loading to optimize performance for large data sets',
        ],
        tech: [
          'React',
          'TypeScript',
          'GraphQL',
          'Apollo Client',
          'React Hook Form',
          'Yup',
        ],
      },
    ],
    aiProjectsTitle: 'Side Projects with AI SDD',
    aiProjects: [
      {
        title: 'Appointment System | LINE LIFF Booking',
        image: '/aiprojects/appt_photo_1.webp',
        images: [
          '/aiprojects/appt_photo_1.webp',
          '/aiprojects/appt_photo_2.webp',
          '/aiprojects/appt_photo_3.webp',
          '/aiprojects/appt_photo_4.webp',
          '/aiprojects/appt_photo_5.webp',
        ],
        summary:
          'An online booking system with LINE LIFF integration, LINE push notifications, and a full admin dashboard.',
        role: 'AI Spec-driven Development',
        highlights: [
          'Multi-step booking flow (service → date → time slot → details) with auto-disabled holidays and past slots',
          'Integrated LINE LIFF to auto-fill user display name; LINE push sent on booking confirmation and cancellation',
          'Admin panel covers bookings, services, holidays, and business hours, protected by HTTP Basic Auth',
        ],
        tech: [
          'Next.js',
          'TypeScript',
          'Prisma',
          'PostgreSQL',
          'shadcn/ui',
          'Tailwind CSS',
          'LINE Bot SDK',
          'LINE LIFF',
        ],
        link: 'https://github.com/zooroy/appt-system',
      },
      {
        title: 'Japan Receipt Tracking | AI Receipt Scanner',
        image: '/aiprojects/jrt_photo_4.webp',
        images: [
          '/aiprojects/jrt_photo_1.webp',
          '/aiprojects/jrt_photo_2.webp',
          '/aiprojects/jrt_photo_3.webp',
          '/aiprojects/jrt_photo_4.webp',
          '/aiprojects/jrt_photo_5.webp',
        ],
        summary:
          'A PWA for managing Japan travel receipts — Gemini AI auto-reads receipt content with real-time JPY to TWD conversion.',
        role: 'AI Spec-driven Development',
        highlights: [
          'Integrated Gemini 2.5 Flash Lite to extract store name, amount, items, category, and tax type',
          'Real-time JPY → TWD exchange rate with DB caching to avoid redundant API calls',
          'Batch upload, image hash deduplication, and PWA support for a native-app-like experience',
        ],
        tech: [
          'Next.js',
          'TypeScript',
          'Prisma',
          'PostgreSQL',
          'Gemini API',
          'TanStack Query',
          'Recharts',
          'shadcn/ui',
          'Tailwind CSS',
        ],
        link: 'https://github.com/zooroy/japan-receipt-tracking',
      },
    ],
  },
};
