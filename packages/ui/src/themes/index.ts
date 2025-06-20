import { lightTheme } from './light';
import { darkTheme } from './dark';

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeType = keyof typeof themes;
