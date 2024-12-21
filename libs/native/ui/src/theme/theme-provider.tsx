import React, { useEffect, useState } from 'react';
import { LightTheme, DarkTheme } from './theme';
import { useColorScheme } from 'react-native';
import { ThemeContext } from './theme-context';

type ThemesTuple = readonly [typeof DarkTheme, typeof LightTheme];

interface ThemeProviderProps {
  themes?: ThemesTuple;
}

const defaultThemes: ThemesTuple = [DarkTheme, LightTheme];

export const ThemeProvider = ({
  themes = defaultThemes,
  children,
}: React.PropsWithChildren<ThemeProviderProps>): React.JSX.Element => {
  const isDarkScheme = useColorScheme() === 'dark';

  const getColorTheme = React.useCallback((): ThemeContext => {
    const currentTheme = themes.filter(
      (theme) => theme.isDark === isDarkScheme
    )[0];

    return {
      theme: currentTheme,
    };
  }, [isDarkScheme, themes]);

  const [colorTheme, setColorTheme] = useState<ThemeContext>(getColorTheme());

  useEffect(() => {
    setColorTheme(getColorTheme());
  }, [isDarkScheme, getColorTheme]);

  return (
    <ThemeContext.Provider value={{ ...colorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
