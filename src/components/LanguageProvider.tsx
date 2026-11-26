import { useEffect, useMemo, useState } from "react";

import { content, ContentContext, LanguageContext, languages } from "../content";

import type { Language } from "../content";
import type { ReactNode } from "react";

const STORAGE_KEY = "lang";

const isLanguage = (value: string | null): value is Language =>
  languages.includes(value as Language);

// A shared link (?lang=vi) wins, then the visitor's last choice, then English.
function initialLanguage(): Language {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLanguage(fromUrl)) return fromUrl;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    // Storage can be blocked; English is a fine default.
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;

    const url = new URL(window.location.href);
    if (lang === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", lang);
    window.history.replaceState(null, "", url);

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Not remembering the choice is fine.
    }
  }, [lang]);

  const language = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext value={language}>
      <ContentContext value={content[lang]}>{children}</ContentContext>
    </LanguageContext>
  );
}
