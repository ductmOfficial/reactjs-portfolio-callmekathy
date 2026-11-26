import { createContext, use } from "react";

import { en } from "./en";
import { vi } from "./vi";

import type { Content, Language } from "./types";

export type { Content, EducationItem, ExperienceItem, Language, Line, SectionId } from "./types";
export { contactMailto, credit, profile } from "./profile";

export const content: Record<Language, Content> = { en, vi };
export const languages = Object.keys(content) as Language[];

export const ContentContext = createContext<Content>(en);

export const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
}>({
  lang: "en",
  setLang: () => undefined,
});

/** The copy for the current language. */
export function useContent(): Content {
  return use(ContentContext);
}

/** The current language and a way to change it. */
export function useLanguage() {
  return use(LanguageContext);
}
