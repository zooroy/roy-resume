export type Lang = 'zh' | 'en';

type Project = {
  title: string;
  desc: string;
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
    skillTitle: 'SKILL',
    libTitle: 'LIBRARIES',
    toolsTitle: 'TOOLS',
    projectsTitle: 'PROJECTS',
    projects: [
      {
        title: 'Swimple 游泳池租借平台',
        desc: '多人協作，負責實作前台使用者註冊/登入流程，第三方登入，處理表單驗證、錯誤提示，頁面權限控制',
      },
      {
        title: '家樂福-家有奇雞小遊戲',
        desc: '兩人協作，負責整體架構規劃、資料流串接、驗證使用者帳號、動畫製作',
      },
      {
        title: '凱基金控後台資料管理系統 (內部後台)',
        desc: '獨立作業，實作登入系統、RESTful API 串接與資料處理、會員權限功能製作、元件模組化、表格資料篩選、下載',
      },
      {
        title: 'TSMC 後台資料管理系統 (內部後台)',
        desc: '多人協作，負責完成 API 串接與資料處理、元件製作、資料篩選、lazyload',
      },
      {
        title: '參山國家風景區管理處-官網',
        desc: '兩人協作，負責使用 rechart js 資料視覺化開發、切換語系功能、動態呈現靠近使用之景點',
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
    skillTitle: 'SKILL',
    libTitle: 'LIBRARIES',
    toolsTitle: 'TOOLS',
    projectsTitle: 'PROJECTS',
    projects: [
      {
        title: 'TSMC Admin Data System (Internal)',
        desc: 'Team project; built API integrations, data processing, components, data filtering, and lazy loading.',
      },
      {
        title: 'KGI Financial Admin System (Internal)',
        desc: 'Solo project; implemented auth, RESTful API integration, permission features, component modularization, table filtering, and data export.',
      },
      {
        title: 'Swimple Pool Rental Platform',
        desc: 'Team project; built user signup/login flow, third-party login, form validation, error messaging, and page access control.',
      },
      {
        title: 'Carrefour Mini Game - Home Chicken Adventure',
        desc: 'Pair project; planned architecture, connected data flow, verified user accounts, and built animations.',
      },
      {
        title: 'Tri-Mountain National Scenic Area - Official Site',
        desc: 'Pair project; built Recharts data visualizations, language toggle, and dynamic nearby attractions display.',
      },
    ],
  },
};
