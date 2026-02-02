export type Lang = 'zh' | 'en';

type Project = {
  title: string;
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
    intro: `我喜歡挑戰未知、探索新技術，並把學到的東西轉化成能被實際使用的產品。
從設計出發，走進前端工程，我習慣用「程式碼的點、線、面」來思考畫面與互動的結構，讓複雜需求變得乾淨、直覺且可維護。
我在意使用者怎麼看、怎麼用，也在意流程是否順暢、畫面是否耐看，目標是做出兼顧美感、體驗與工程品質的前端作品。
場下打籃球、場上寫程式，NBA 教會我的，是團隊配合與持續升級。`,
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

      {
        title: '參山國家風景區管理處｜官網',
        summary: '官方網站資料視覺化與多語系呈現。',
        role: '獨立作業',
        highlights: [
          '使用 Recharts 進行資料視覺化呈現',
          '實作多語系切換功能',
          '以動態圖表呈現使用者行為重點',
        ],
        tech: ['Next.js', 'React', 'Recharts', 'axios'],
        link: 'https://www.trimt-nsa.gov.tw/zh-tw/',
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
    intro:
      'User-experience focused frontend developer who translates product needs into scalable UI architecture, enjoys cross-team collaboration, and builds warm, detail-oriented digital products.',
    ageLabel: 'Age',
    contactLabel: 'Contact',
    eduLabel: 'Education',
    age: '35',
    phone: '0912-323-221',
    email: 'zooroy13@gmail.com',
    education: 'B.S. in Computer Science',
    skillTitle: 'SKILLS',
    libTitle: 'LIBRARIES',
    toolsTitle: 'TOOLS',
    projectsTitle: 'PROJECTS',
    projects: [
      {
        title: 'TSMC Admin Data System (Internal)',
      },
      {
        title: 'KGI Financial Admin System (Internal)',
      },
      {
        title: 'Swimple Pool Rental Platform',
      },
      {
        title: 'Carrefour Mini Game - Home Chicken Adventure',
      },
      {
        title: 'Tri-Mountain National Scenic Area - Official Site',
      },
    ],
  },
};
