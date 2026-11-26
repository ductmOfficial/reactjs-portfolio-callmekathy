// A line of copy. Lines Khue has not confirmed yet carry `toConfirm` and render with a visible
// "[to confirm]" mark until the flag is removed.
export type Line = string | { text: string; toConfirm: true };

export type Language = "en" | "vi";

export type SectionId = "about-me" | "experience" | "skills" | "education" | "get-in-touch";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  place: string;
  summary: Line;
}

export interface EducationItem {
  degree: string;
  provider: string;
  date: Line;
  grade?: string;
}

export interface Content {
  lang: Language;
  name: string;
  nav: { id: SectionId; title: string }[];
  resumeUrl: string;
  labels: {
    downloadCv: string;
    email: string;
    followMe: string;
    grade: string;
    toConfirm: string;
    builtBy: string;
    language: string;
  };
  hero: { greeting: string; tagline: string; intro: string; action: string };
  about: { title: string; paragraphs: Line[]; interest: string };
  experience: { title: string; items: ExperienceItem[] };
  skills: { title: string; intro: string; items: string[] };
  education: { title: string; intro: string; items: EducationItem[] };
  contact: { title: string; text: string; action: string };
}
