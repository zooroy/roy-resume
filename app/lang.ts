import type { Lang } from "./content";

export const langClass = (lang: Lang, zhClass: string, enClass: string) =>
  lang === "zh" ? zhClass : enClass;
