// A line of copy. Lines Khue has not confirmed yet carry `toConfirm` and render with a visible
// "[to confirm]" mark until the flag is removed.
export type Line = string | { text: string; toConfirm: true };

export type Language = "en" | "vi";

export type SectionId = "experience" | "how-i-work" | "skills" | "certifications" | "contact";

export interface CareerItem {
  period: string;
  org: string;
  role: string;
  place: string;
  status: "passed" | "running";
  summary: Line;
}

export interface Certification {
  name: string;
  issuer: string;
  date: Line;
  grade?: string;
}

export interface Content {
  lang: Language;
  name: string;
  role: string;
  nav: { id: SectionId; title: string }[];
  resumeUrl: string;
  labels: {
    downloadCv: string;
    getInTouch: string;
    linkedin: string;
    email: string;
    language: string;
    toConfirm: string;
    builtBy: string;
    passed: string;
    running: string;
    grade: string;
    cv: string;
    darkTheme: string;
    menu: string;
  };
  hero: { status: string; tagline: string; intro: string };
  stats: { value: string; label: string }[];
  career: { kicker: string; title: string; aside: string; items: CareerItem[]; note: string };
  howIWork: {
    kicker: string;
    title: string;
    aside: string;
    steps: { title: string; text: Line }[];
  };
  skills: { kicker: string; title: string; groups: { label: string; items: string[] }[] };
  certifications: { kicker: string; title: string; items: Certification[] };
  contact: { kicker: string; title: string; text: string; interest: string };
}
