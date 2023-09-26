import { darken, lighten } from '@mui/material/styles';

export const generatePalette = () => {};

export const generatePaletteColor = (color, contrastText = '#ffffff') => ({
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
});
