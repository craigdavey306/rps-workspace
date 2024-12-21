import { createContext } from 'react';
import { LightTheme, Theme } from './theme';

export interface ThemeContext {
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: LightTheme,
});
