import { Button } from "@ductmofficial/sen-ui";

import { languages, useContent, useLanguage } from "../content";

const names = { en: "English", vi: "Tiếng Việt" } as const;

export function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  const { labels } = useContent();

  return (
    <div role="group" aria-label={labels.language} className="flex">
      {languages.map((option) => (
        <Button
          key={option}
          variant="secondary"
          lang={option}
          aria-pressed={lang === option}
          onClick={() => {
            setLang(option);
          }}
          className={`-ml-px size-10 p-0 font-mono text-[13px] font-medium uppercase first:ml-0 ${
            lang === option
              ? "relative z-10 border-ink bg-ink text-bg hover:bg-ink"
              : "border-line bg-transparent text-muted hover:text-ink"
          }`}
        >
          {`${option.toUpperCase()} `}
          <span className="sr-only">{names[option]}</span>
        </Button>
      ))}
    </div>
  );
}
