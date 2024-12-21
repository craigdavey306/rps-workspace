import { Colors, LightColors, DarkColors } from '../tokens';

type DarkThemeType = {
  isDark: true;
  colors: Colors;
};

type LightThemeType = {
  isDark: false;
  colors: Colors;
};

export type Theme = DarkThemeType | LightThemeType;

export const LightTheme: LightThemeType = {
  isDark: false,
  colors: LightColors,
};

export const DarkTheme: DarkThemeType = {
  isDark: true,
  colors: DarkColors,
};
