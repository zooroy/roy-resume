export type Lang = 'zh' | 'en';

type Project = {
  title: string;
  image?: string;
  images?: string[];
  summary?: string;
  detail?: string;
  role?: string;
  highlights?: string[];
  tech?: string[];
  link?: string;
  website?: string;
};

export type WorkExperience = {
  period: string;
  title: string;
  company: string;
  description: string;
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
  experienceTitle: string;
  experiences: WorkExperience[];
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
    intro: `5 年以上 Web 前端開發經驗，熟悉 React、Next.js、TypeScript，具備前端架構規劃、元件模組化、API 串接及權限管理經驗，參與多項企業與政府 Web 專案，具備跨團隊協作及專案交付能力。
運用 AI-assisted Development 與 SDD（Spec-driven Development）建立規格驅動開發流程，應用於個人 Web App 專案，縮短約 60% 開發週期，提升開發效率與交付品質。`,
    ageLabel: 'Age',
    contactLabel: 'Contact Details',
    eduLabel: 'Education',
    age: '35',
    phone: '0912-323-221',
    email: 'zooroy13@gmail.com',
    education: '國立成功大學 中國文學系',
    experienceTitle: 'WORK EXPERIENCE',
    experiences: [
      {
        period: '2021/10 ~ 2025/1',
        title: '前端工程師',
        company: '雲端互動股份有限公司',
        description:
          'Design System 與開發提速：將 UI 元件標準化與模組化，供 Swimple 後台、凱基金控等專案直接使用，縮短 40% 開發週期。',
      },
      {
        period: '2019/10 ~ 2021/9',
        title: '前端工程師',
        company: '瑄品股份有限公司',
        description:
          '參與 6 項政府 Web 專案，負責前端架構、元件模組化及開發分工，減少約 25% 重複開發工時，並提前完成專案交付。',
      },
      {
        period: '2017/4 ~ 2019/3',
        title: '網頁設計前端人員',
        company: '匯通商行有限公司',
        description:
          '使用 WordPress 建置電商及企業官網，透過 SEO 優化網站流量、HubSpot 設定自動化郵件，並負責品牌視覺與周邊商品設計。',
      },
    ],
    skillTitle: 'SKILLS',
    libTitle: 'LIBRARIES',
    toolsTitle: 'TOOLS',
    projectsTitle: 'PROJECTS',
    projects: [
      {
        title: 'Swimple｜游泳池租借平台',
        image: '/projects/swim.jpg',
        summary:
          '游泳池租借服務與管理平台。',
        detail:
          '負責登入註冊及 reCAPTCHA 驗證，協同設計師統一 3 項 UI 規格，減少約 30% 客製化元件，降低重複開發與維護成本。',
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
        summary: '品牌活動互動小遊戲。',
        detail:
          '主導雙人團隊的前端架構與 App／Web 通訊設計，透過 DevTools 分析 Layout／Paint 瓶頸並優化 CSS 動畫，改善互動流暢度。',
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
        summary: '企業內部資料管理後台。',
        detail:
          '獨立開發後台權限管理與查詢功能，協同 SA、Backend 設計 Permission-based API，實現動態權限選單，降低維護成本。',
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
        title: '參山國家風景區管理處｜官網',
        image: '/projects/mountain.jpg',
        summary:
          '政府觀光官方網站。',
        detail:
          '使用 Next.js／React 建立共用元件，與 Backend 統一 API 格式，實現選單及頁面動態渲染，降低重複開發成本並提升維護效率。',
        role: '多人協作',
        highlights: [
          '使用 Next.js／React 建立前端架構與共用元件',
          '與後端協作制定統一資料格式，支援動態選單與頁面模組',
          '降低逐頁客製化開發成本，提升後續頁面擴充與維護效率',
        ],
        tech: ['React', 'Next.js', 'RESTful API', 'Sass'],
        link: 'https://www.trimt-nsa.gov.tw/zh-tw/',
      },

      // {
      //   title: 'TSMC｜後台資料管理系統（內部後台）',
      //   image: '/projects/tsmc.jpg',
      //   summary: '大型企業內部後台系統，處理大量資料與元件化管理。',
      //   detail:
      //     '此專案面向大型企業內部使用情境，重點在大量資料載入、API 資料處理與前端元件模組化。我負責串接 GraphQL API、整理資料流與開發可重用元件，並透過 Lazy Loading 改善資料載入體驗。',
      //   role: '多人協作',
      //   highlights: [
      //     '負責 API 串接與資料處理邏輯',
      //     '開發元件模組化架構，提升系統可維護性',
      //     '實作 Lazy Loading，優化大量資料載入效能',
      //   ],
      //   tech: [
      //     'React',
      //     'TypeScript',
      //     'GraphQL',
      //     'Apollo Client',
      //     'React Hook Form',
      //     'Yup',
      //   ],
      // },
    ],
    aiProjectsTitle: 'AI 規格驅動開發 Side Projects',
    aiProjects: [
      // {
      //   title: '單人預約系統｜網頁 × LINE LIFF',
      //   image: '/aiprojects/appt_photo_1.webp',
      //   images: [
      //     '/aiprojects/appt_photo_1.webp',
      //     '/aiprojects/appt_photo_2.webp',
      //     '/aiprojects/appt_photo_3.webp',
      //     '/aiprojects/appt_photo_4.webp',
      //     '/aiprojects/appt_photo_5.webp',
      //   ],
      //   summary:
      //     '整合 LINE LIFF 的線上預約系統，結合 LINE 推播通知與完整後台管理。',
      //   role: 'AI Spec-driven Development',
      //   highlights: [
      //     '多步驟預約流程（服務 → 日期 → 時段 → 填資料），公休日與已過時段自動停用',
      //     '整合 LINE LIFF，自動帶入用戶顯示名稱；預約成功與取消均即時發送 LINE Push 通知',
      //     '後台支援預約管理、服務項目、公休日、營業時間設定，以 HTTP Basic Auth 保護',
      //   ],
      //   tech: [
      //     'Next.js',
      //     'TypeScript',
      //     'Prisma',
      //     'PostgreSQL',
      //     'shadcn/ui',
      //     'Tailwind CSS',
      //     'LINE Bot SDK',
      //     'LINE LIFF',
      //   ],
      //   link: 'https://github.com/zooroy/appt-system',
      // },
      // {
      //   title: 'Japan Receipt Tracking｜AI 收據辨識記帳 App',
      //   image: '/aiprojects/jrt_photo_4.webp',
      //   images: [
      //     '/aiprojects/jrt_photo_1.webp',
      //     '/aiprojects/jrt_photo_2.webp',
      //     '/aiprojects/jrt_photo_3.webp',
      //     '/aiprojects/jrt_photo_4.webp',
      //     '/aiprojects/jrt_photo_5.webp',
      //   ],
      //   summary:
      //     '日本旅遊收據管理 PWA，拍照上傳後由Gemini AI 自動辨識收據內容，並即時換算日幣台幣。',
      //   role: 'AI Spec-driven Development',
      //   highlights: [
      //     '整合 Gemini 2.5 Flash Lite 自動擷取收據店名、金額、品項、消費分類及稅別',
      //     '即時 JPY → TWD 匯率換算，匯率結果快取於資料庫避免重複呼叫 API',
      //     '支援批次上傳、圖片 hash 重複偵測與 PWA，可加入主畫面如原生 App 使用',
      //   ],
      //   tech: [
      //     'Next.js',
      //     'TypeScript',
      //     'Prisma',
      //     'PostgreSQL',
      //     'Gemini API',
      //     'TanStack Query',
      //     'Recharts',
      //     'shadcn/ui',
      //     'Tailwind CSS',
      //   ],
      //   link: 'https://github.com/zooroy/japan-receipt-tracking',
      // },
      {
        title: '森之刃 Forest Slice｜手勢切水果網頁遊戲',
        image: '/aiprojects/fruit_photo_1.webp',
        images: [
          '/aiprojects/fruit_photo_1.webp',
          '/aiprojects/fruit_photo_2.webp',
          '/aiprojects/fruit_photo_3.webp',
        ],
        summary:
          '以攝影機手勢操控的切水果網頁遊戲，手部辨識全在瀏覽器端執行。',
        role: 'AI Spec-driven Development',
        highlights: [
          'MediaPipe 於 Web Worker 即時推論，不阻塞畫面渲染',
          '線段碰撞判定，快速揮刀不漏判，支援雙手操作',
          '遊戲邏輯與渲染解耦；Supabase 排行榜處理驗證與節流',
        ],
        tech: [
          'TypeScript',
          'Vite',
          'Three.js',
          'MediaPipe',
          'Web Worker',
          'Web Audio',
          'Supabase',
          'Vitest',
          'Playwright',
        ],
        link: 'https://github.com/zooroy/ai_fruit_ninja',
        website: 'https://zooroy.github.io/ai_fruit_ninja/',
      },
      {
        title: 'AI Aquarium｜手勢互動 Low Poly 網頁水族館',
        image: '/aiprojects/aquarium_photo_1.webp',
        images: [
          '/aiprojects/aquarium_photo_1.webp',
          '/aiprojects/aquarium_photo_2.webp',
          '/aiprojects/aquarium_photo_3.webp',
          '/aiprojects/aquarium_photo_4.webp',
        ],
        summary:
          'Low Poly 網頁魚缸，可用手勢抓魚，或用手機畫魚送進桌電魚缸。',
        role: 'AI Spec-driven Development',
        highlights: [
          'Boids 群游搭配空間網格，擺尾動畫交由 shader 處理',
          'MediaPipe 手部追蹤與捏合偵測，滑鼠、觸控共用輸入層',
          'Supabase 跨裝置傳魚，IndexedDB 保存自訂魚',
        ],
        tech: [
          'TypeScript',
          'Vite',
          'Three.js',
          'MediaPipe',
          'IndexedDB',
          'Supabase',
          'PostgreSQL',
          'Vitest',
          'GitHub Actions',
        ],
        link: 'https://github.com/zooroy/ai-aquarium',
        website: 'https://zooroy.github.io/ai-aquarium/',
      },
      {
        title: '誰付錢｜AI 收據辨識旅遊分帳 App',
        image: '/aiprojects/whopays_photo_4.webp',
        images: [
          '/aiprojects/whopays_photo_4.webp',
          '/aiprojects/whopays_photo_1.webp',
          '/aiprojects/whopays_photo_2.webp',
          '/aiprojects/whopays_photo_3.webp',
        ],
        summary:
          '旅遊多人分帳 App，拍收據由 AI 辨識品項，一鍵算出誰該付誰。',
        role: 'AI Spec-driven Development',
        highlights: [
          'Edge Function 串接 Gemini 辨識並翻譯收據，金鑰不外露',
          '匿名登入 + 全表 RLS，Realtime 即時同步成員資料',
          '多幣別整數記帳，貪婪配對產生轉帳建議',
        ],
        tech: [
          'TypeScript',
          'React',
          'Vite',
          'TanStack Query',
          'Supabase',
          'PostgreSQL',
          'Gemini API',
          'Cloudflare Workers',
          'Vitest',
          'pgTAP',
        ],
        link: 'https://github.com/zooroy/who-pays',
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
    intro: `Frontend developer with 5+ years of web development experience, proficient in React, Next.js, and TypeScript, with experience in frontend architecture planning, component modularization, API integration, and access control. Has worked on multiple enterprise and government web projects, with strong cross-team collaboration and project delivery skills.
Built a spec-driven development workflow with AI-assisted Development and SDD (Spec-driven Development), applied to personal web app projects to shorten development cycles by about 60% while improving efficiency and delivery quality.`,
    ageLabel: 'Age',
    contactLabel: 'Contact Details',
    eduLabel: 'Education',
    age: '35',
    phone: '0912-323-221',
    email: 'zooroy13@gmail.com',
    education: 'NCKU, Chinese Literature',
    experienceTitle: 'WORK EXPERIENCE',
    experiences: [
      {
        period: '2021/10 ~ 2025/1',
        title: 'Frontend Engineer',
        company: 'Cloud Interactive Inc.',
        description:
          'Design System & faster delivery: standardized and modularized UI components that were reused directly across projects such as the Swimple admin panel and KGI Financial, shortening development cycles by 40%.',
      },
      {
        period: '2019/10 ~ 2021/9',
        title: 'Frontend Engineer',
        company: 'Champtron Creative Labs, Inc.',
        description:
          'Worked on 6 government web projects, responsible for frontend architecture, component modularization, and task allocation, reducing duplicated development effort by about 25% and delivering projects ahead of schedule.',
      },
      {
        period: '2017/10 ~ 2019/4',
        title: 'Web Designer / Frontend Developer',
        company: 'Huitong Products Ltd.',
        description:
          'Built ecommerce and corporate websites with WordPress, grew site traffic through SEO, set up automated email campaigns with HubSpot, and led brand visuals and merchandise design.',
      },
    ],
    skillTitle: 'SKILLS',
    libTitle: 'LIBRARIES',
    toolsTitle: 'TOOLS',
    projectsTitle: 'PROJECTS',
    projects: [
      {
        title: 'Swimple | Swimming Pool Rental Platform',
        image: '/projects/swim.jpg',
        summary:
          'A swimming pool rental service and management platform.',
        detail:
          'Owned the sign-up / login flow and reCAPTCHA verification, and worked with designers to unify 3 UI specifications, cutting custom components by about 30% and reducing duplicated development and maintenance costs.',
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
        summary: 'A branded interactive campaign mini-game.',
        detail:
          'Led the frontend architecture and App / Web communication design in a two-person team, used DevTools to analyze Layout / Paint bottlenecks and optimized CSS animations, improving interaction smoothness.',
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
        summary: 'An internal enterprise data management dashboard.',
        detail:
          'Independently developed admin permission management and query features, and worked with the SA and backend engineers to design a permission-based API that enables dynamic, role-based menus and lowers maintenance costs.',
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
        title: 'Tri-Mountain National Scenic Area Administration | Official Website',
        image: '/projects/mountain.jpg',
        summary:
          'A government tourism website.',
        detail:
          'Built shared components with Next.js / React and unified the API format with the backend to render menus and pages dynamically, reducing duplicated development and improving maintainability.',
        role: 'Team Collaboration',
        highlights: [
          'Built the frontend architecture and shared components with Next.js and React',
          'Collaborated with backend engineers to define a unified data format for dynamic menus and page modules',
          'Reduced page-by-page customization costs and improved future scalability and maintainability',
        ],
        tech: ['React', 'Next.js', 'RESTful API', 'Sass'],
        link: 'https://www.trimt-nsa.gov.tw/zh-tw/',
      },

      // {
      //   title: 'TSMC | Admin Data Management System (Internal)',
      //   image: '/projects/tsmc.jpg',
      //   summary: 'A large-scale enterprise internal dashboard handling massive data volumes and componentized management.',
      //   detail:
      //     'This project served a large enterprise internal workflow, with emphasis on large data loading, API data processing, and modular frontend components. I handled GraphQL API integration, data flow organization, reusable component development, and Lazy Loading optimization.',
      //   role: 'Team Collaboration',
      //   highlights: [
      //     'Responsible for API integration and data processing logic',
      //     'Developed a modular component architecture to improve system maintainability',
      //     'Implemented Lazy Loading to optimize performance for large data sets',
      //   ],
      //   tech: [
      //     'React',
      //     'TypeScript',
      //     'GraphQL',
      //     'Apollo Client',
      //     'React Hook Form',
      //     'Yup',
      //   ],
      // },
    ],
    aiProjectsTitle: 'Side Projects with AI SDD',
    aiProjects: [
      // {
      //   title: 'Appointment System | LINE LIFF Booking',
      //   image: '/aiprojects/appt_photo_1.webp',
      //   images: [
      //     '/aiprojects/appt_photo_1.webp',
      //     '/aiprojects/appt_photo_2.webp',
      //     '/aiprojects/appt_photo_3.webp',
      //     '/aiprojects/appt_photo_4.webp',
      //     '/aiprojects/appt_photo_5.webp',
      //   ],
      //   summary:
      //     'An online booking system with LINE LIFF integration, LINE push notifications, and a full admin dashboard.',
      //   role: 'AI Spec-driven Development',
      //   highlights: [
      //     'Multi-step booking flow (service → date → time slot → details) with auto-disabled holidays and past slots',
      //     'Integrated LINE LIFF to auto-fill user display name; LINE push sent on booking confirmation and cancellation',
      //     'Admin panel covers bookings, services, holidays, and business hours, protected by HTTP Basic Auth',
      //   ],
      //   tech: [
      //     'Next.js',
      //     'TypeScript',
      //     'Prisma',
      //     'PostgreSQL',
      //     'shadcn/ui',
      //     'Tailwind CSS',
      //     'LINE Bot SDK',
      //     'LINE LIFF',
      //   ],
      //   link: 'https://github.com/zooroy/appt-system',
      // },
      // {
      //   title: 'Japan Receipt Tracking | AI Receipt Scanner',
      //   image: '/aiprojects/jrt_photo_4.webp',
      //   images: [
      //     '/aiprojects/jrt_photo_1.webp',
      //     '/aiprojects/jrt_photo_2.webp',
      //     '/aiprojects/jrt_photo_3.webp',
      //     '/aiprojects/jrt_photo_4.webp',
      //     '/aiprojects/jrt_photo_5.webp',
      //   ],
      //   summary:
      //     'A PWA for managing Japan travel receipts — Gemini AI auto-reads receipt content with real-time JPY to TWD conversion.',
      //   role: 'AI Spec-driven Development',
      //   highlights: [
      //     'Integrated Gemini 2.5 Flash Lite to extract store name, amount, items, category, and tax type',
      //     'Real-time JPY → TWD exchange rate with DB caching to avoid redundant API calls',
      //     'Batch upload, image hash deduplication, and PWA support for a native-app-like experience',
      //   ],
      //   tech: [
      //     'Next.js',
      //     'TypeScript',
      //     'Prisma',
      //     'PostgreSQL',
      //     'Gemini API',
      //     'TanStack Query',
      //     'Recharts',
      //     'shadcn/ui',
      //     'Tailwind CSS',
      //   ],
      //   link: 'https://github.com/zooroy/japan-receipt-tracking',
      // },
      {
        title: 'Forest Slice | Gesture Fruit Ninja Game',
        image: '/aiprojects/fruit_photo_1.webp',
        images: [
          '/aiprojects/fruit_photo_1.webp',
          '/aiprojects/fruit_photo_2.webp',
          '/aiprojects/fruit_photo_3.webp',
        ],
        summary:
          'A gesture-controlled fruit-slicing web game with in-browser hand tracking.',
        role: 'AI Spec-driven Development',
        highlights: [
          'MediaPipe inference in a Web Worker, keeping rendering smooth',
          'Segment-based collision so fast swipes never miss; two-hand play',
          'Game logic decoupled from rendering; Supabase leaderboard with validation and throttling',
        ],
        tech: [
          'TypeScript',
          'Vite',
          'Three.js',
          'MediaPipe',
          'Web Worker',
          'Web Audio',
          'Supabase',
          'Vitest',
          'Playwright',
        ],
        link: 'https://github.com/zooroy/ai_fruit_ninja',
        website: 'https://zooroy.github.io/ai_fruit_ninja/',
      },
      {
        title: 'AI Aquarium | Gesture-Controlled Low Poly Aquarium',
        image: '/aiprojects/aquarium_photo_1.webp',
        images: [
          '/aiprojects/aquarium_photo_1.webp',
          '/aiprojects/aquarium_photo_2.webp',
          '/aiprojects/aquarium_photo_3.webp',
          '/aiprojects/aquarium_photo_4.webp',
        ],
        summary:
          'A Low Poly web aquarium — grab fish with hand gestures, or draw one on your phone and send it to the desktop tank.',
        role: 'AI Spec-driven Development',
        highlights: [
          'Boids schooling with a spatial grid; swim animation in shaders',
          'MediaPipe hand tracking and pinch detection; shared input layer for mouse and touch',
          'Cross-device fish delivery via Supabase; custom fish saved in IndexedDB',
        ],
        tech: [
          'TypeScript',
          'Vite',
          'Three.js',
          'MediaPipe',
          'IndexedDB',
          'Supabase',
          'PostgreSQL',
          'Vitest',
          'GitHub Actions',
        ],
        link: 'https://github.com/zooroy/ai-aquarium',
        website: 'https://zooroy.github.io/ai-aquarium/',
      },
      {
        title: 'Who Pays | AI Receipt-Scanning Trip Expense Splitter',
        image: '/aiprojects/whopays_photo_4.webp',
        images: [
          '/aiprojects/whopays_photo_4.webp',
          '/aiprojects/whopays_photo_1.webp',
          '/aiprojects/whopays_photo_2.webp',
          '/aiprojects/whopays_photo_3.webp',
        ],
        summary:
          'A trip expense-splitting app — snap a receipt, AI extracts the items, and one tap shows who owes whom.',
        role: 'AI Spec-driven Development',
        highlights: [
          'Edge Function calls Gemini to read and translate receipts, keeping the API key server-side',
          'Anonymous sign-in with RLS on every table; Realtime sync between members',
          'Multi-currency integer accounting with greedy-matched transfer suggestions',
        ],
        tech: [
          'TypeScript',
          'React',
          'Vite',
          'TanStack Query',
          'Supabase',
          'PostgreSQL',
          'Gemini API',
          'Cloudflare Workers',
          'Vitest',
          'pgTAP',
        ],
        link: 'https://github.com/zooroy/who-pays',
      },
    ],
  },
};
