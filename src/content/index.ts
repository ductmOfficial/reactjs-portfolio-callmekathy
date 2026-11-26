import { createContext, use } from "react";

import { en } from "./en";

import type { Content } from "./types";

export type { Content, EducationItem, ExperienceItem, Line, SectionId } from "./types";
export { contactMailto, credit, profile } from "./profile";

export const ContentContext = createContext<Content>(en);

/** The copy for the current language. */
export function useContent(): Content {
  return use(ContentContext);
}
