import type { ReactNode } from "react";

import { useReveal } from "./useReveal";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHead({
  n,
  kicker,
  title,
  aside,
}: {
  n: number;
  kicker: string;
  title: string;
  aside?: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
      <div className="flex flex-col gap-2.5">
        <p className="kicker">
          {String(n).padStart(2, "0")} · {kicker}
        </p>
        <h2 className="text-3xl font-semibold tracking-[-0.015em] sm:text-[40px]">{title}</h2>
      </div>
      {aside && <p className="max-w-md text-[17px] text-muted">{aside}</p>}
    </div>
  );
}

const button =
  "inline-flex min-h-11 items-center gap-2 border px-5 text-[15px] font-medium no-underline motion-safe:transition-colors";

export const buttonStyles = {
  primary: `${button} border-ink bg-ink text-bg hover:border-accent hover:bg-accent hover:text-on-accent`,
  secondary: `${button} border-line text-ink hover:border-ink`,
};
