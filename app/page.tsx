export default function Home() {
  return (
    <div className="scrapbook-page min-h-screen px-6 py-10 sm:px-12 lg:px-20">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <section className="relative px-6 py-8 sm:px-10 text-center">
          <div className="tape tape-right absolute right-6 top-4 w-48 rounded-2xl bg-[var(--paper)] px-4 py-3 text-left shadow-[0_16px_30px_rgba(34,20,10,0.18)]">
            <p className="handwriting text-lg text-[var(--ink)]">
              Language / 語系
            </p>
            <div className="mt-2 flex gap-2">
              <button className="paper-strip px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                EN
              </button>
              <button className="paper-strip px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                中文
              </button>
            </div>
          </div>
          <h1 className="handwriting text-center text-6xl font-bold tracking-wide text-[var(--ink)]">
            Resume
          </h1>
        </section>

        <section className="relative px-6 py-8 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="tape tape-center">
                <div className="polaroid">
                  <div className="polaroid-photo flex items-center justify-center text-sm uppercase tracking-[0.3em] text-[rgba(36,28,22,0.5)]">
                    Photo
                  </div>
                  <div className="mt-5 text-center">
                    <p className="handwriting text-3xl text-[var(--ink)]">
                      HELLO, I&apos;M Roy!
                    </p>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-dark)]">
                      Frontend Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:col-span-3">
              <p className="handwriting absolute right-0 top-0 rotate-[-2deg] text-3xl text-[var(--accent)]">
                Frontend Developer
              </p>
              <div className="mt-10 space-y-4 text-lg text-[var(--ink)]">
                <div className="flex flex-wrap items-center gap-4 text-base uppercase tracking-[0.2em] text-[rgba(36,28,22,0.55)]">
                  <span>蕭亦廷</span>
                  <span>1990.10.11</span>
                  <span>Taichung City, Taiwan</span>
                </div>
                <p className="text-lg leading-relaxed">
                  以使用者體驗為核心，擅長將需求轉譯為可擴充的前端架構，
                  熟悉跨團隊協作與資料處理流程，喜歡在細節中打造具有溫度的產品。
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="double-rule" />

        <section className="px-6 py-8 sm:px-10">
          <div className="handwriting grid gap-4 text-3xl text-[var(--ink)] sm:grid-cols-3">
            <div>
              <p className="text-base uppercase tracking-[0.2em] text-[rgba(36,28,22,0.5)]">
                年齡
              </p>
              <p>35</p>
            </div>
            <div>
              <p className="text-base uppercase tracking-[0.2em] text-[rgba(36,28,22,0.5)]">
                Contact
              </p>
              <p>0912323221</p>
            </div>
            <div>
              <p className="text-base uppercase tracking-[0.2em] text-[rgba(36,28,22,0.5)]">
                學歷
              </p>
              <p>資訊工程學系</p>
            </div>
          </div>
        </section>

        <div className="double-rule" />

        <section className="px-6 py-8 sm:px-10">
          <div className="space-y-6">
            <div>
              <h2 className="handwriting text-4xl text-[var(--ink)]">SKILL</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  'Next.js 8/10',
                  'React.js 8/10',
                  'Vue.js 5/10',
                  'TypeScript 7/10',
                  'JavaScript 8/10',
                  'HTML/CSS 8/10',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="handwriting text-4xl text-[var(--ink)]">
                LIBRARIES
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  'MUI 8/10',
                  'Axios 8/10',
                  'Redux toolkit 8/10',
                  'React Hook Form 7/10',
                  'Formik 8/10',
                  'Yup 8/10',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="handwriting text-4xl text-[var(--ink)]">TOOLS</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {['Npm/Pnp', 'Git'].map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="double-rule" />

        <section className="px-6 py-8 sm:px-10">
          <h2 className="handwriting text-5xl text-[var(--ink)]">PROJECTS</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'TSMC 後台資料管理系統 (內部後台)',
                desc: '多人協作，負責完成 API 串接與資料處理、元件製作、資料篩選、lazyload',
              },
              {
                title: '凱基金控後台資料管理系統 (內部後台)',
                desc: '獨立作業，實作登入系統、RESTful API 串接與資料處理、會員權限功能製作、元件模組化、表格資料篩選、下載',
              },
              {
                title: 'Swimple 游泳池租借平台',
                desc: '多人協作，負責實作前台使用者註冊/登入流程，第三方登入，處理表單驗證、錯誤提示，頁面權限控制',
              },
              {
                title: '家樂福-家有奇雞小遊戲',
                desc: '兩人協作，負責整體架構規劃、資料流串接、驗證使用者帳號、動畫製作',
              },
              {
                title: '參山國家風景區管理處-官網',
                desc: '兩人協作，負責使用 rechart js 資料視覺化開發、切換語系功能、動態呈現靠近使用之景點',
              },
            ].map((project) => (
              <article
                key={project.title}
                className="tape paper-card relative rounded-3xl border-2 border-[rgba(36,28,22,0.12)] bg-[rgba(255,255,255,0.7)] px-5 py-6 shadow-[0_16px_30px_rgba(34,20,10,0.15)]"
              >
                <h3 className="handwriting text-3xl text-[var(--ink)]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[rgba(36,28,22,0.7)]">
                  {project.desc}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
