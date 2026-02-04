import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';

const primaryColor: MantineColorsTuple = [
  '#e5f4ff',
  '#cde2ff',
  '#9bc2ff',
  '#64a0ff',
  '#3984fe',
  '#1d72fe',
  '#0969ff',
  '#0058e4',
  '#004ecc',
  '#0043b5',
];

const secondaryColor: MantineColorsTuple = [
  '#f3f0ff',
  '#e5dbff',
  '#c9b2ff',
  '#ab87ff',
  '#9162ff',
  '#804bff',
  '#773fff',
  '#6531e4',
  '#592acc',
  '#4b21b3',
];

export const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
  },
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  headings: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontWeight: '700',
  },
  defaultRadius: 'md',
  cursorType: 'pointer',
  components: {
    Button: {
      defaultProps: {
        size: 'md',
      },
    },
    Card: {
      defaultProps: {
        shadow: 'sm',
        padding: 'lg',
        radius: 'md',
      },
    },
  },
});
