import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import type { ReactElement } from "react";

export function HideOnScroll({ children }: { children: ReactElement }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
