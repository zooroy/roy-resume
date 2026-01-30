"use client";

import { useMemo, useState } from "react";
import { copy, type Lang } from "./content";

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const content = useMemo(() => copy[lang], [lang]);

  return (
    <div className="scrapbook-page min-h-screen px-6 py-10 sm:px-12 lg:px-20">
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="tape tape-right absolute right-0 top-0 w-48 rounded-2xl bg-[var(--paper)] px-4 py-3 text-left shadow-[0_16px_30px_rgba(34,20,10,0.18)]">
          <p className="handwriting text-lg text-[var(--ink)]">
            {content.languageLabel}
          </p>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`paper-strip px-3 py-1 text-xs font-semibold text-[var(--ink)] ${
                lang === "en" ? "bg-[var(--tape)]" : ""
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("zh")}
              className={`paper-strip px-3 py-1 text-xs font-semibold text-[var(--ink)] ${
                lang === "zh" ? "bg-[var(--tape)]" : ""
              }`}
            >
              中文
            </button>
          </div>
        </div>
        <section className="px-6 py-8 sm:px-10 text-center">
          <h1 className="handwriting text-center text-6xl font-bold tracking-wide text-[var(--ink)]">
            {content.heroTitle}
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
                      {content.hello}
                    </p>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-dark)]">
                      {content.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:col-span-3">
              <p className="handwriting absolute right-0 top-0 rotate-[-2deg] text-3xl text-[var(--accent)]">
                {content.role}
              </p>
              <div className="mt-10 space-y-4 text-lg text-[var(--ink)]">
                <div className="flex flex-wrap items-center gap-4 text-base uppercase tracking-[0.2em] text-[rgba(36,28,22,0.55)]">
                  <span>{content.name}</span>
                  <span>{content.dob}</span>
                  <span>{content.city}</span>
                </div>
                <p className="text-lg leading-relaxed">{content.intro}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="double-rule" />

        <section className="px-6 py-8 sm:px-10">
          <div className="handwriting grid gap-4 text-3xl text-[var(--ink)] sm:grid-cols-3">
            <div>
              <p className="text-base uppercase tracking-[0.2em] text-[rgba(36,28,22,0.5)]">
                {content.ageLabel}
              </p>
              <p>{content.age}</p>
            </div>
            <div>
              <p className="text-base uppercase tracking-[0.2em] text-[rgba(36,28,22,0.5)]">
                {content.contactLabel}
              </p>
              <p>{content.contact}</p>
            </div>
            <div>
              <p className="text-base uppercase tracking-[0.2em] text-[rgba(36,28,22,0.5)]">
                {content.eduLabel}
              </p>
              <p>{content.education}</p>
            </div>
          </div>
        </section>

        <div className="double-rule" />

        <section className="px-6 py-8 sm:px-10">
          <div className="space-y-6">
            <div>
              <h2 className="handwriting text-4xl text-[var(--ink)]">
                {content.skillTitle}
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Next.js 8/10",
                  "React.js 8/10",
                  "Vue.js 5/10",
                  "TypeScript 7/10",
                  "JavaScript 8/10",
                  "HTML/CSS 8/10",
                ].map((skill) => (
                  <span key={skill} className="skill-pill text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="handwriting text-4xl text-[var(--ink)]">
                {content.libTitle}
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "MUI 8/10",
                  "Axios 8/10",
                  "Redux toolkit 8/10",
                  "React Hook Form 7/10",
                  "Formik 8/10",
                  "Yup 8/10",
                ].map((skill) => (
                  <span key={skill} className="skill-pill text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="handwriting text-4xl text-[var(--ink)]">
                {content.toolsTitle}
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Npm/Pnp", "Git"].map((skill) => (
                  <span key={skill} className="skill-pill text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="double-rule" />

        <section className="px-6 py-8 sm:px-10">
          <h2 className="handwriting text-5xl text-[var(--ink)]">
            {content.projectsTitle}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.projects.map((project) => (
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
