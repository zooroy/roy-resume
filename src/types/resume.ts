export type Locale = 'zh-TW' | 'en';

export interface ResumeData {
  avatar: string;
  background: string;
  intro: Record<Locale, string>;
  education: Array<{
    school: string;
    degree: string;
    period: string;
    description: Record<Locale, string>;
  }>;
  work: Array<{
    company: string;
    job: string;
    period: string;
    description: Record<Locale, string>;
  }>;
  skills: string[];
  portfolio: Array<{
    title: Record<Locale, string>;
    period?: string;
    description: Record<Locale, string>;
    link?: string;
    image?: string;
  }>;
}
