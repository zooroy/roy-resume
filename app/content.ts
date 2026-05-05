export type Lang = 'zh' | 'en';

type Project = {
  title: string;
  image?: string;
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
    aiProjectsTitle: 'AI PROJECTS',
    aiProjects: [
      {
        title: 'AI 互動履歷｜Scrapbook Resume',
        image: '/projects/moutain.jpg',
        summary:
          '以 Claude Code 輔助開發的互動式剪貼簿風格履歷，卡片可拖曳、翻轉，並支援中英文切換。',
        role: '個人作品',
        highlights: [
          '全程使用 Claude Code 進行 AI Pair Programming 開發',
          '實作 Framer Motion 拖曳、3D 翻轉、入場動畫等互動效果',
          '元件化架構，Skills / Libraries / Tools / Projects 獨立拆分',
        ],
        tech: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Claude Code'],
      },
      {
        title: 'AI 對話介面｜Claude Chat UI',
        summary:
          '串接 Anthropic Claude API 打造的對話介面，支援串流輸出、Markdown 渲染與對話記憶。',
        role: '個人作品',
        highlights: [
          '串接 Claude Messages API，實作 SSE 串流回應',
          '支援 Markdown / Code Block 語法高亮渲染',
          '本地 sessionStorage 保存對話上下文',
        ],
        tech: ['Next.js', 'TypeScript', 'Anthropic SDK', 'Tailwind CSS'],
      },
      {
        title: 'AI 圖片說明產生器',
        summary:
          '上傳圖片後自動呼叫 Vision API 產生描述文字，可一鍵複製或下載結果。',
        role: '個人作品',
        highlights: [
          '使用 Claude Vision 多模態 API 解析圖片內容',
          '拖放上傳 + 即時預覽，支援批次處理',
          '輸出結果可選語言（中文 / 英文）',
        ],
        tech: ['Next.js', 'TypeScript', 'Claude Vision API', 'Tailwind CSS'],
      },
      {
        title: 'AI Prompt 管理工具',
        summary:
          '提供前端工程師管理、測試、版本控管 Prompt 的輕量工具，支援變數替換與歷史紀錄。',
        role: '個人作品',
        highlights: [
          '可新增 / 編輯 / 刪除 Prompt 模板並儲存至 localStorage',
          '支援 {{variable}} 語法動態填入測試值',
          '直接在介面呼叫 Claude API 進行即時測試',
        ],
        tech: ['Next.js', 'TypeScript', 'Anthropic SDK', 'Zustand', 'Tailwind CSS'],
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
    intro: `I enjoy tackling the unknown, exploring new technologies, and turning what I learn into products that people actually use.
Starting from design and moving into frontend engineering, I think about layouts and interactions through the "dots, lines, and planes of code," making complex requirements clean, intuitive, and maintainable.
I care about how users see and interact with a product, whether the flow is smooth, and whether the visuals hold up over time — my goal is to deliver frontend work that balances aesthetics, experience, and engineering quality.
Off the court I play basketball, on the court I write code — what the NBA taught me is teamwork and continuous improvement.`,
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
    aiProjectsTitle: 'AI PROJECTS',
    aiProjects: [
      {
        title: 'AI Interactive Resume | Scrapbook Style',
        image: '/projects/moutain.jpg',
        summary:
          'An interactive scrapbook-style resume built with Claude Code AI pair programming — draggable cards, 3D flip animations, and bilingual support.',
        role: 'Personal Project',
        highlights: [
          'Developed end-to-end using Claude Code for AI-assisted pair programming',
          'Built draggable cards, 3D flip, and entrance animations with Framer Motion',
          'Componentized architecture: Skills / Libraries / Tools / Projects split into dedicated components',
        ],
        tech: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Claude Code'],
      },
      {
        title: 'Claude Chat UI | AI Conversation Interface',
        summary:
          'A chat interface powered by the Anthropic Claude API with streaming output, Markdown rendering, and conversation memory.',
        role: 'Personal Project',
        highlights: [
          'Integrated Claude Messages API with SSE streaming responses',
          'Supports Markdown and syntax-highlighted code block rendering',
          'Persists conversation context via sessionStorage',
        ],
        tech: ['Next.js', 'TypeScript', 'Anthropic SDK', 'Tailwind CSS'],
      },
      {
        title: 'AI Image Caption Generator',
        summary:
          'Upload an image and instantly receive an AI-generated description via Vision API — one-click copy or download.',
        role: 'Personal Project',
        highlights: [
          'Used Claude Vision multimodal API to analyze image content',
          'Drag-and-drop upload with live preview and batch processing support',
          'Output language selectable: Chinese or English',
        ],
        tech: ['Next.js', 'TypeScript', 'Claude Vision API', 'Tailwind CSS'],
      },
      {
        title: 'AI Prompt Manager',
        summary:
          'A lightweight tool for frontend engineers to manage, test, and version-control prompts with variable substitution and history.',
        role: 'Personal Project',
        highlights: [
          'Create, edit, and delete prompt templates stored in localStorage',
          'Supports {{variable}} syntax for dynamic test value injection',
          'Live Claude API testing directly within the interface',
        ],
        tech: ['Next.js', 'TypeScript', 'Anthropic SDK', 'Zustand', 'Tailwind CSS'],
      },
    ],
  },
};
