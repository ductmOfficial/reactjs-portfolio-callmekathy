import Box from "@mui/material/Box";

import { useContent } from "../content";

import type { Line } from "../content";

/** Renders a line of copy, marking the ones still waiting for confirmation. */
export function LineText({ line }: { line: Line }) {
  const { labels } = useContent();

  if (typeof line === "string") return line;

  return (
    <>
      {line.text}{" "}
      <Box
        component="span"
        sx={{ color: "text.secondary", fontSize: "0.85em", whiteSpace: "nowrap" }}
      >
        {labels.toConfirm}
      </Box>
    </>
  );
}

export const lineText = (line: Line) => (typeof line === "string" ? line : line.text);
