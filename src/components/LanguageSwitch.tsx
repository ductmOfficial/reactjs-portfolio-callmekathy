import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { useContent, useLanguage } from "../content";

const names = { en: "English", vi: "Tiếng Việt" } as const;

// Hidden from sight but read out, so the button's name starts with the code it shows.
const visuallyHidden = {
  position: "absolute",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
} as const;

export function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  const { labels } = useContent();

  return (
    <ButtonGroup size="small" aria-label={labels.language} sx={{ alignSelf: "center" }}>
      {(Object.keys(names) as (keyof typeof names)[]).map((option) => (
        <Button
          key={option}
          lang={option}
          aria-pressed={lang === option}
          variant={lang === option ? "contained" : "outlined"}
          onClick={() => {
            setLang(option);
          }}
        >
          {option.toUpperCase()}
          <Box component="span" sx={visuallyHidden}>
            {` ${names[option]}`}
          </Box>
        </Button>
      ))}
    </ButtonGroup>
  );
}
