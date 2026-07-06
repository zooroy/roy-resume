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
    intro: `從設計背景走進前端工程，開發時，思考元件共用、程式結構與後續維護性，減少重複程式碼與過度客製化，讓專案保持清楚、穩定的架構。
在開發過程中，我持續運用 AI 輔助開發，並嘗試導入 SDD（Spec-driven Development）流程，讓需求規格、畫面設計與程式實作能更有效地串接。`,
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
          '在專案中主動參與前端架構規劃、元件模組化與 Design System 建置，並依需求與設計、產品等跨部門夥伴協作，協助釐清需求與統一實作方向，降低溝通成本並提升專案執行效率。',
      },
      {
        period: '2019/10 ~ 2021/9',
        title: '前端工程師',
        company: '瑄品股份有限公司',
        description:
          '依據客戶規格與專案需求規劃前端開發，並主動與主管及團隊成員溝通協作，完成前端功能開發、後端 API 串接與整合測試，確保專案目標一致並如期交付。',
      },
      {
        period: '2017/4 ~ 2019/3',
        title: '網頁設計前端人員',
        company: '匯通商行有限公司',
        description:
          '負責 WordPress 電商網站與官方網站建置，並使用 HTML、CSS、JavaScript 開發客製化頁面與互動動畫效果；同時參與品牌形象、平面設計與周邊商品設計，整合視覺設計與前端實作需求。',
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
          '游泳池即時租借與管理平台，提供使用者快速查詢、預約與驗證流程。',
        detail:
          '英國泳池租借平台，多人協作。負責處理登入註冊流程與 reCAPTCHA 驗證。執行此專案期間，協作的工程師提到設計稿樣式不一致，導致模組化component太多客製化與難以維護，主動整理專案設計不一致的地方，與設計師討論統一成共用規格。減少過多客製化造成維護成本。透過觀察、溝通，讓專案後續維護與開發更有效率。',
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
        detail:
          '兩人協作，負責整體架構、元件模組化，規劃app跟web雙向溝通。執行此專案時，動畫會明顯卡頓，使用DevTools的Performance錄製後，發現會頻繁觸發layout和paint，優化方向改用transform: translate()跑動畫，畫面明顯流暢，理解到動畫效能優化的基本原則。',
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
        detail:
          '獨立作業，建立角色權限管理、優化查詢與篩選。由於後台有角色權限管理功能，導航欄需要依照角色權限顯示，因此前端不能寫死角色對應的導航欄，主動找SA和後端釐清問題，決定後端多回傳permission欄位，讓權限邏輯與後台設定一致。',
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
          '政府觀光官方網站，支援高度客製化的選單與內容模組，提升頁面維護與擴充效率。',
        detail:
          '使用 Next.js／React 建置專案架構與共用元件。執行期間，發現選單、頁面內容具有高度客製化需求，若由前端逐頁寫死，將增加重複開發與維護成本。因此主動與後端制定統一資料格式，依據回傳設定動態產生選單與頁面模組，完成客製化需求，並提升後續頁面的擴充與維護效率。',
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
    experienceTitle: 'WORK EXPERIENCE',
    experiences: [
      {
        period: '2021/10 ~ 2025/1',
        title: 'Frontend Engineer',
        company: 'Cloud Interactive Inc.',
        description:
          'Proactively participated in frontend architecture planning, component modularization, and Design System development. Collaborated with design, product, and cross-functional partners to clarify requirements and align implementation direction, reducing communication costs and improving project execution efficiency.',
      },
      {
        period: '2019/10 ~ 2021/9',
        title: 'Frontend Engineer',
        company: 'Champtron Creative Labs, Inc.',
        description:
          'Planned frontend development based on client specifications and project requirements. Proactively communicated and collaborated with supervisors and team members to complete frontend features, backend API integration, and integration testing, ensuring project goals stayed aligned and were delivered on schedule.',
      },
      {
        period: '2017/10 ~ 2019/4',
        title: 'Web Designer / Frontend Developer',
        company: 'Huitong Products Ltd.',
        description:
          'Built WordPress ecommerce and official websites, using HTML, CSS, and JavaScript to develop customized pages and interactive animations. Also participated in brand identity, graphic design, and merchandise design, bridging visual design and frontend implementation needs.',
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
          'A real-time swimming pool rental and management platform providing users with quick search, booking, and verification workflows.',
        detail:
          'A UK swimming pool rental platform built through team collaboration. I was responsible for the login and registration flow and reCAPTCHA verification. During the project, another engineer pointed out that inconsistent design styles were causing too many customized modular components and making maintenance difficult. I proactively organized the inconsistent parts of the design, discussed them with the designer, and aligned them into shared specifications. This reduced maintenance costs caused by excessive customization and made future development and maintenance more efficient through observation and communication.',
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
        detail:
          'A two-person collaboration where I was responsible for the overall architecture, component modularization, and planning two-way communication between the app and web views. During the project, the animation had noticeable stuttering. After recording with DevTools Performance, I found that layout and paint were triggered frequently, so I changed the animation approach to use transform: translate(). The experience became noticeably smoother, and I gained a clearer understanding of the basic principles of animation performance optimization.',
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
        detail:
          'A solo project where I built role permission management and optimized query and filtering workflows. Because the admin system included role permission management, the navigation needed to display items based on each role. The frontend could not hard-code navigation by role, so I proactively clarified the issue with the SA and backend engineer. We decided that the backend would return an additional permission field, keeping the permission logic aligned with the admin settings.',
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
          'A government tourism website with highly customizable navigation and content modules, built to improve maintainability and page expansion.',
        detail:
          'Built the project architecture and shared components with Next.js and React. During development, I found that the menu and page content required a high level of customization. Hard-coding each page on the frontend would have increased duplicated development and maintenance costs, so I proactively worked with backend engineers to define a unified data format. Based on returned configuration data, the frontend dynamically generated menus and page modules, meeting customization needs while improving future scalability and maintainability.',
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
