import { Button } from "@ductmofficial/sen-ui";
import { useState } from "react";

import { useContent } from "../content";

type Theme = "light" | "dark";

const currentTheme = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

export function ThemeToggle() {
  const { labels } = useContent();
  const [theme, setTheme] = useState(currentTheme);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#1a1718" : "#f8f4f1");
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // Storage blocked: the toggle still works for this visit.
    }
    setTheme(next);
  };

  return (
    <Button
      variant="secondary"
      onClick={toggle}
      aria-label={labels.darkTheme}
      aria-pressed={theme === "dark"}
      className="size-10 border-line bg-transparent p-0 text-ink hover:border-ink"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" />
      </svg>
    </Button>
  );
}
