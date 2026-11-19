import { Fragment } from "react";
import type { Lang, WorkExperience } from "../content";

type Props = {
  title: string;
  experiences: WorkExperience[];
  lang: Lang;
};

const parsePeriodDate = (date: string) => {
  const [year, month] = date.trim().split("/").map(Number);

  if (!year || !month) return null;

  return { year, month };
};

const calculateDuration = (period: string, lang: Lang) => {
  const [startText, endText] = period.split("~");
  const start = parsePeriodDate(startText ?? "");
  const end = parsePeriodDate(endText ?? "");

  if (!start || !end) return "";

  const totalMonths =
    (end.year - start.year) * 12 + (end.month - start.month) + 1;

  if (totalMonths <= 0) return "";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (lang === "zh") {
    const yearText = years > 0 ? `${years}年` : "";
    const monthText = months > 0 ? `${months}個月` : "";
    return `總年資：${yearText}${monthText || (years === 0 ? "0個月" : "")}`;
  }

  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "month" : "months"}`);

  return `Duration: ${parts.join(" ") || "0 months"}`;
};

export default function ExperienceSection({ title, experiences, lang }: Props) {
  return (
    <section className="px-6 py-8 sm:px-10">
      <h2 className="display-serif text-4xl">{title}</h2>
      <div className="paper-card relative mt-8 px-5 py-6 sm:px-8">
        <span className="tape-strip -top-4 left-[48%] -rotate-[3deg]" />
        <div>
          {experiences.map((experience, experienceIndex) => (
            <Fragment key={`${experience.period}-${experience.company}`}>
              {experienceIndex > 0 && (
                <div
                  aria-hidden="true"
                  className="flex justify-center gap-3 py-10"
                >
                  <span className="size-1.5 rounded-full bg-(--text-light-fg) opacity-40" />
                  <span className="size-1.5 rounded-full bg-(--text-light-fg) opacity-40" />
                  <span className="size-1.5 rounded-full bg-(--text-light-fg) opacity-40" />
                </div>
              )}
              <article className="grid gap-3 md:grid-cols-[190px_1fr] md:gap-8">
                <div className="text-base leading-relaxed text-black/45 md:pt-1">
                  <p>{experience.period}</p>
                  <p>{calculateDuration(experience.period, lang)}</p>
                </div>
                <div>
                  <h3 className="text-xl leading-relaxed">
                    <span className="font-bold">{experience.title}</span>
                    <span className="ml-2 text-base">{experience.company}</span>
                  </h3>
                  <p className="mt-2 leading-8 text-(--text-light-fg)">
                    {experience.description}
                  </p>
                  {experience.items && experience.items.length > 0 && (
                    <div className="mt-4 space-y-4">
                      {experience.items.map((item, index) => (
                        <div key={item.title}>
                          <p className="font-bold leading-8">
                            {experience.items!.length > 1 && `${index + 1}. `}
                            {item.title}
                          </p>
                          <p className="leading-8 text-(--text-light-fg)">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
