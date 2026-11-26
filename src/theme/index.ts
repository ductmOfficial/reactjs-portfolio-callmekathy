import { alpha, createTheme, darken, lighten } from "@mui/material/styles";

import type { Color } from "@mui/material";
import type { CSSProperties } from "react";

type ColorPartial = Partial<Color>;

declare module "@mui/material/styles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- declaration merging
  interface PaletteColor extends ColorPartial {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- declaration merging
  interface SimplePaletteColorOptions extends ColorPartial {}

  interface TypographyVariants {
    lead: CSSProperties;
    largeHeading: CSSProperties;
    mediumHeading: CSSProperties;
    numberedHeading: CSSProperties;
  }

  interface TypographyVariantsOptions {
    lead?: CSSProperties;
    largeHeading?: CSSProperties;
    mediumHeading?: CSSProperties;
    numberedHeading?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    lead: true;
    largeHeading: true;
    mediumHeading: true;
    numberedHeading: true;
  }
}

// A full 50–900 scale around one brand color, so sx props can use shades like "primary.300".
function paletteColor(color: string, contrastText = "#ffffff") {
  return {
    main: color,
    contrastText,
    50: lighten(color, 0.5),
    100: lighten(color, 0.4),
    200: lighten(color, 0.3),
    300: lighten(color, 0.2),
    400: lighten(color, 0.1),
    500: color,
    600: darken(color, 0.1),
    700: darken(color, 0.2),
    800: darken(color, 0.3),
    900: darken(color, 0.4),
    light: lighten(color, 0.3),
    dark: darken(color, 0.5),
  };
}

const FONT_FAMILY = "'Roboto', sans-serif";
const FONT_SIZE_BASE = 16;
const REGULAR = 400;
const MEDIUM = 500;

const pxToRem = (size: number) => `${(size / FONT_SIZE_BASE).toFixed(4)}rem`;

const textPrimary = "#354e5c";
const textSecondary = alpha(textPrimary, 0.7);

export const theme = createTheme({
  palette: {
    mode: "light",
    common: { black: "#000000", white: "#ffffff" },
    primary: paletteColor("#df8c86"),
    secondary: paletteColor("#f3ebdd"),
    error: paletteColor("#d32f2f"),
    warning: paletteColor("#ed6c02"),
    info: paletteColor("#0288d1"),
    success: paletteColor("#4CAF50"),
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      disabled: alpha(textPrimary, 0.5),
    },
    background: { paper: "#ffffff", default: "#f2f2f2" },
    divider: "#f2f2f2",
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: FONT_FAMILY,
    h1: { fontWeight: REGULAR, fontSize: pxToRem(FONT_SIZE_BASE + 22) },
    h2: { fontWeight: REGULAR, fontSize: pxToRem(FONT_SIZE_BASE + 10) },
    h3: { fontWeight: MEDIUM, fontSize: pxToRem(FONT_SIZE_BASE + 4) },
    h4: { fontWeight: MEDIUM, fontSize: pxToRem(FONT_SIZE_BASE + 2) },
    h5: { fontWeight: MEDIUM, fontSize: pxToRem(FONT_SIZE_BASE) },
    h6: { fontWeight: MEDIUM, fontSize: pxToRem(FONT_SIZE_BASE - 2) },
    subtitle1: { fontWeight: REGULAR, fontSize: pxToRem(FONT_SIZE_BASE) },
    subtitle2: { fontWeight: MEDIUM, fontSize: pxToRem(FONT_SIZE_BASE - 2) },
    body1: { fontWeight: REGULAR, fontSize: pxToRem(FONT_SIZE_BASE) },
    body2: { fontWeight: REGULAR, fontSize: pxToRem(FONT_SIZE_BASE - 2) },
    button: { fontWeight: REGULAR, fontSize: pxToRem(FONT_SIZE_BASE - 2) },
    caption: {
      fontWeight: REGULAR,
      fontSize: pxToRem(FONT_SIZE_BASE - 4),
      color: textSecondary,
    },
    overline: { fontWeight: REGULAR, fontSize: pxToRem(FONT_SIZE_BASE - 4) },
    lead: {
      fontSize: `clamp(${pxToRem(FONT_SIZE_BASE)}, 2.5vw, 1.25rem)`,
      fontWeight: 300,
      lineHeight: 1.6,
    },
    largeHeading: { fontSize: "clamp(40px, 8vw, 80px)", lineHeight: 1.1 },
    mediumHeading: { fontSize: "clamp(40px, 8vw, 60px)", lineHeight: 1.1 },
    numberedHeading: { fontSize: "clamp(26px, 5vw, 38px)", lineHeight: 1.1 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "unset", boxShadow: "unset" },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: { padding: "16px", "&:last-child": { paddingBottom: "16px" } },
      },
    },
  },
});
