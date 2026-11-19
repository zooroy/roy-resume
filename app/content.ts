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
  items?: { title: string; description: string }[];
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
          '建立共用 Design System，統一 UI 樣式與元件規格，讓 Swimple 後台、凱基金控等專案能直接使用或組合現有元件，縮短約 40% 相似頁面開發工時。',
        items: [
          {
            title: 'Swimple 前台｜表單驗證與登入流程',
            description:
              '使用 React Hook Form 搭配 Yup Schema 設定表單驗證規則，完成登入、註冊及錯誤提示功能，讓表單驗證方式一致，提升程式碼可讀性與維護性。',
          },
          {
            title: '家樂福小遊戲｜輕量化元件與互動設計',
            description:
              '選用無預設樣式、體積輕量的 @mui/base 建立互動元件，並搭配 React Spring 製作動畫，將 Dialog 封裝成共用互動視窗，方便不同遊戲情境使用。',
          },
        ],
      },
      {
        period: '2019/10 ~ 2021/9',
        title: '前端工程師',
        company: '瑄品股份有限公司',
        description:
          '參與 6 項政府 Web 專案，負責前端架構、共用元件開發及工作分配，透過元件模組化，提升專案整合與團隊協作效率。',
        items: [
          {
            title: '參山國家風景區｜共用元件架構',
            description:
              '使用 React、Formik 製作首長信箱及問卷調查功能，包含表單驗證與錯誤提示，並將 Layout、Button、Modal 等常用元件模組化，讓不同頁面可以直接使用，減少約 30% 重複開發工時。',
          },
          {
            title: '宜蘭縣育兒資源網｜RWD 與互動設計',
            description:
              '使用 React Slick 製作首頁 Banner 輪播，依不同螢幕尺寸調整顯示方式，並封裝成共用元件供其他頁面使用，確保跨裝置顯示與操作體驗一致。',
          },
        ],
      },
      {
        period: '2017/6 ~ 2019/4',
        title: '網頁前端人員',
        company: '匯通商行有限公司',
        description:
          '使用 WordPress 開發電商及企業官網，整合 SEO、金流與郵件自動化功能，並負責品牌視覺與周邊商品設計。',
        items: [
          {
            title: '匯通購物網｜電商網站開發',
            description:
              '使用 WordPress 搭配 Flatsome Theme 建置電商網站，串接綠界金流完成線上付款功能，並透過 Yoast SEO 優化網站搜尋曝光，整合 HubSpot 自動寄送潛在客戶開發郵件，減少人工操作並提升行銷效率。',
          },
        ],
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
          '英國游泳池租借平台，統一 UI 規格，減少約 30% 客製化元件。',
        detail:
          '英國泳池租借平台，多人協作，負責登入註冊與 reCAPTCHA 驗證。',
        role: '多人協作',
        highlights: [
          '問題：設計稿樣式不一致，導致元件大量客製化、難以維護',
          '做法：主動盤點不一致處，與設計師協調統一為 3 項共用 UI 規格',
          '成果：減少約 30% 客製化元件，降低重複開發與維護成本',
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
        summary:
          '品牌活動互動小遊戲，主導前端架構並解決動畫卡頓。',
        detail:
          '品牌活動互動小遊戲，主導雙人團隊的前端架構，並規劃 App 與 Web 雙向溝通。',
        role: '兩人協作',
        highlights: [
          '問題：遊戲動畫明顯卡頓，影響活動體驗',
          '做法：以 DevTools Performance 找出頻繁觸發 Layout／Paint，改用 transform 執行動畫',
          '成果：動畫明顯流暢',
        ],
        tech: ['React', 'Next.js', 'TypeScript', 'React-Spring', 'axios'],
      },

      {
        title: '凱基金控｜後台資料管理系統（內部後台）',
        image: '/projects/kgi.jpg',
        summary:
          '企業內部後台，獨立開發並設計依角色驅動的權限選單。',
        detail:
          '獨立負責內部後台前端，開發權限管理與資料查詢、篩選功能。',
        role: '獨立作業',
        highlights: [
          '問題：選單需依角色權限顯示，前端寫死會與後台權限設定脫節',
          '做法：主動與 SA、後端釐清，改由 API 回傳 permission 欄位驅動選單',
          '成果：權限邏輯與後台設定一致，調整角色權限不需修改前端程式',
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
          '政府觀光官網，模組化共用元件，減少約 30% 重複開發工時。',
        detail:
          '使用 React、Formik 製作首長信箱及問卷調查功能，包含表單驗證與錯誤提示，並將 Layout、Button、Modal 等常用元件模組化，讓不同頁面可以直接使用，減少約 30% 重複開發工時。',
        role: '多人協作',
        highlights: [
          '問題：多個頁面重複實作相同的版面、按鈕與彈窗，開發工時浪費',
          '做法：將 Layout、Button、Modal 模組化為共用元件；以 Formik 製作首長信箱與問卷表單，含驗證與錯誤提示',
          '成果：不同頁面直接套用共用元件，減少約 30% 重複開發工時',
        ],
        tech: ['React', 'Next.js', 'Formik', 'RESTful API', 'Sass'],
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
        title: '森之刃｜手勢切水果遊戲',
        image: '/aiprojects/fruit_photo_1.webp',
        images: [
          '/aiprojects/fruit_photo_1.webp',
          '/aiprojects/fruit_photo_2.webp',
          '/aiprojects/fruit_photo_3.webp',
        ],
        summary:
          '鏡頭手勢切水果網頁遊戲，依手機實測回饋，將支援範圍收斂至桌機。',
        role: 'AI Spec-driven Development',
        highlights: [
          '規劃：與 AI 協作撰寫 OpenSpec 規格；手機實測體驗不佳，即時收斂支援範圍至桌機',
          '開發：AI 依規格實作，主導 UI 精簡並抽出共用元件與設計 token，降低後續維護成本',
          '測試：AI 依規格產生測試，CI 全數通過才部署',
        ],
        tech: [
          'TypeScript',
          'Three.js',
          'MediaPipe',
          'Supabase',
        ],
        link: 'https://github.com/zooroy/ai_fruit_ninja',
        website: 'https://zooroy.github.io/ai_fruit_ninja/',
      },
      {
        title: 'AI Aquarium｜網頁水族館',
        image: '/aiprojects/aquarium_photo_1.webp',
        images: [
          '/aiprojects/aquarium_photo_1.webp',
          '/aiprojects/aquarium_photo_2.webp',
          '/aiprojects/aquarium_photo_3.webp',
          '/aiprojects/aquarium_photo_4.webp',
        ],
        summary:
          '手勢互動網頁魚缸，沒有鏡頭可改用滑鼠，手機也能畫魚加入。',
        role: 'AI Spec-driven Development',
        highlights: [
          '規劃：與 AI 協作拆分 14 項能力規格，驗證流程本身也寫成規格',
          '開發：AI 依規格實作，提供鏡頭／滑鼠切換，沒有鏡頭也能互動',
          '測試：AI 依規格產生測試，CI 未通過的 PR 無法合併',
        ],
        tech: [
          'TypeScript',
          'Three.js',
          'MediaPipe',
          'Supabase',
        ],
        link: 'https://github.com/zooroy/ai-aquarium',
        website: 'https://zooroy.github.io/ai-aquarium/',
      },
      {
        title: '誰付錢｜旅遊分帳&收據辨識',
        image: '/aiprojects/whopays_photo_4.webp',
        images: [
          '/aiprojects/whopays_photo_4.webp',
          '/aiprojects/whopays_photo_1.webp',
          '/aiprojects/whopays_photo_2.webp',
          '/aiprojects/whopays_photo_3.webp',
        ],
        summary:
          '出國旅遊分帳 App，AI 辨識並翻譯收據，辨識失敗時可改手動輸入。',
        role: 'AI Spec-driven Development',
        highlights: [
          '規劃：與 AI 協作撰寫 OpenSpec 規格，先定義需求情境再實作',
          '開發：AI 依規格實作，金額以整數最小單位儲存避免浮點誤差；AI 辨識失敗時降級為手動輸入',
          '測試：AI 依規格產生測試，每條需求情境都對應到測試',
        ],
        tech: [
          'React',
          'TypeScript',
          'Supabase',
          'Gemini API',
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
          'Built a shared Design System that unified UI styles and component specs, letting projects such as the Swimple admin panel and KGI Financial use or compose existing components directly, cutting development time for similar pages by about 40%.',
        items: [
          {
            title: 'Swimple Admin | Form Validation & Login Flow',
            description:
              'Defined form validation rules with React Hook Form and Yup schemas to build login, sign-up, and error messaging, keeping validation consistent and improving code readability and maintainability.',
          },
          {
            title: 'Carrefour Mini-Game | Lightweight Components & Interaction Design',
            description:
              'Built interactive components with the unstyled, lightweight @mui/base, added animations with React Spring, and wrapped Dialog into a shared interactive modal reusable across game scenarios.',
          },
        ],
      },
      {
        period: '2019/10 ~ 2021/9',
        title: 'Frontend Engineer',
        company: 'Champtron Creative Labs, Inc.',
        description:
          'Worked on 6 government web projects, responsible for frontend architecture, shared component development, and task allocation, improving project integration and team collaboration through component modularization.',
        items: [
          {
            title: 'Tri-Mountain National Scenic Area | Shared Component Architecture',
            description:
              'Built the director’s mailbox and survey features with React and Formik, including form validation and error messages, and modularized common components such as Layout, Button, and Modal for direct reuse across pages, reducing duplicated development time by about 30%.',
          },
          {
            title: 'Yilan County Parenting Resources | RWD & Interaction Design',
            description:
              'Built the homepage banner carousel with React Slick, adapting the display to different screen sizes, and wrapped it as a shared component for other pages, ensuring a consistent display and experience across devices.',
          },
        ],
      },
      {
        period: '2017/6 ~ 2019/4',
        title: 'Web Frontend Developer',
        company: 'Huitong Products Ltd.',
        description:
          'Built ecommerce and corporate websites with WordPress, integrating SEO, payments, and email automation, and handled brand visuals and merchandise design.',
        items: [
          {
            title: 'Huitong Shop | Ecommerce Website Development',
            description:
              'Built the ecommerce site with WordPress and the Flatsome theme, integrated ECPay for online payments, improved search visibility with Yoast SEO, and set up HubSpot to send automated lead-generation emails, reducing manual work and improving marketing efficiency.',
          },
        ],
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
          'A UK swimming pool rental platform — unified UI specs and cut custom components by about 30%.',
        detail:
          'A UK swimming pool rental platform built by a team; I owned the sign-up / login flow and reCAPTCHA verification.',
        role: 'Team Collaboration',
        highlights: [
          'Problem: inconsistent design styles led to heavily customized components that were hard to maintain',
          'Approach: audited the inconsistencies and aligned with the designer on 3 shared UI specifications',
          'Result: cut custom components by about 30%, reducing duplicated development and maintenance costs',
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
        summary:
          'A branded interactive campaign mini-game — led the frontend architecture and fixed animation stutter.',
        detail:
          'A branded interactive campaign mini-game; I led the frontend architecture in a two-person team and planned two-way App / Web communication.',
        role: 'Two-Person Collaboration',
        highlights: [
          'Problem: game animations stuttered noticeably, hurting the campaign experience',
          'Approach: used DevTools Performance to find frequent Layout / Paint triggers and switched animations to transform',
          'Result: animations became noticeably smoother',
        ],
        tech: ['React', 'Next.js', 'TypeScript', 'React-Spring', 'axios'],
      },

      {
        title: 'KGI Financial Holdings | Admin Data Management System (Internal)',
        image: '/projects/kgi.jpg',
        summary:
          'An internal enterprise admin system — built solo, with role-driven permission menus.',
        detail:
          'Solely owned the frontend of an internal admin system, building permission management and data query / filtering features.',
        role: 'Solo Development',
        highlights: [
          'Problem: menus had to follow role permissions, and hard-coding them on the frontend would drift from the admin settings',
          'Approach: clarified the issue with the SA and backend, and had the API return a permission field that drives the menu',
          'Result: permission logic stays consistent with admin settings, and role permission changes need no frontend code changes',
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
          'A government tourism website — modularized shared components, cutting duplicated development time by about 30%.',
        detail:
          'Built the director’s mailbox and survey features with React and Formik, including form validation and error messages, and modularized common components such as Layout, Button, and Modal so pages could use them directly, reducing duplicated development time by about 30%.',
        role: 'Team Collaboration',
        highlights: [
          'Problem: multiple pages re-implemented the same layouts, buttons, and modals, wasting development time',
          'Approach: modularized Layout, Button, and Modal into shared components; built the director’s mailbox and survey forms with Formik, including validation and error messages',
          'Result: pages reuse the shared components directly, reducing duplicated development time by about 30%',
        ],
        tech: ['React', 'Next.js', 'Formik', 'RESTful API', 'Sass'],
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
        title: 'Forest Slice | Gesture Fruit Slicing Game',
        image: '/aiprojects/fruit_photo_1.webp',
        images: [
          '/aiprojects/fruit_photo_1.webp',
          '/aiprojects/fruit_photo_2.webp',
          '/aiprojects/fruit_photo_3.webp',
        ],
        summary:
          'A camera-gesture fruit-slicing web game — narrowed support to desktop based on real mobile testing feedback.',
        role: 'AI Spec-driven Development',
        highlights: [
          'Plan: wrote OpenSpec specs with AI; after poor results in real mobile testing, narrowed support to desktop',
          'Build: AI implemented against the specs; I led a UI simplification, extracting shared components and design tokens to lower maintenance costs',
          'Test: AI generated tests from the specs; deploys only after CI fully passes',
        ],
        tech: [
          'TypeScript',
          'Three.js',
          'MediaPipe',
          'Supabase',
        ],
        link: 'https://github.com/zooroy/ai_fruit_ninja',
        website: 'https://zooroy.github.io/ai_fruit_ninja/',
      },
      {
        title: 'AI Aquarium | Web Aquarium',
        image: '/aiprojects/aquarium_photo_1.webp',
        images: [
          '/aiprojects/aquarium_photo_1.webp',
          '/aiprojects/aquarium_photo_2.webp',
          '/aiprojects/aquarium_photo_3.webp',
          '/aiprojects/aquarium_photo_4.webp',
        ],
        summary:
          'A gesture-driven web aquarium — falls back to mouse without a camera, and phones can draw fish to join.',
        role: 'AI Spec-driven Development',
        highlights: [
          'Plan: broke the product into 14 capability specs with AI, including the verification pipeline itself',
          'Build: AI implemented against the specs; added camera / mouse switching so it works without a camera',
          'Test: AI generated tests from the specs; PRs that fail CI cannot be merged',
        ],
        tech: [
          'TypeScript',
          'Three.js',
          'MediaPipe',
          'Supabase',
        ],
        link: 'https://github.com/zooroy/ai-aquarium',
        website: 'https://zooroy.github.io/ai-aquarium/',
      },
      {
        title: 'Who Pays | Trip Expense Splitting & Receipt Scanning',
        image: '/aiprojects/whopays_photo_4.webp',
        images: [
          '/aiprojects/whopays_photo_4.webp',
          '/aiprojects/whopays_photo_1.webp',
          '/aiprojects/whopays_photo_2.webp',
          '/aiprojects/whopays_photo_3.webp',
        ],
        summary:
          'A trip expense-splitting app — AI reads and translates receipts, with manual entry when recognition fails.',
        role: 'AI Spec-driven Development',
        highlights: [
          'Plan: wrote OpenSpec specs with AI, defining requirement scenarios before implementation',
          'Build: AI implemented against the specs; amounts stored as integer minor units to avoid floating-point errors, with manual entry as a fallback when AI recognition fails',
          'Test: AI generated tests from the specs; every requirement scenario maps to a test',
        ],
        tech: [
          'React',
          'TypeScript',
          'Supabase',
          'Gemini API',
        ],
        link: 'https://github.com/zooroy/who-pays',
      },
    ],
  },
};
