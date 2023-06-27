import { useContext, useEffect } from 'react';
import { localStorage } from 'src/shared/lib/localeStorage';

import { THEME_LOCAL_STORAGE_KEY, ThemeContext, ThemeType } from './themeContext';

export interface IUseThemeResult {
  theme?: ThemeType;
  themeToggler?: () => void;
  isLightThemeEnabled?: boolean;
  isDarkThemeEnabled?: boolean;
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const oldTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.classList.remove(oldTheme);
    document.body.classList.add(theme || 'light');
  }, [theme]);

  const themeToggler = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    if (!setTheme) return;
    setTheme(newTheme);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
  };

  const isDarkThemeEnabled = theme === 'dark';
  const isLightThemeEnabled = theme === 'light';

  return {
    theme,
    themeToggler,
    isLightThemeEnabled,
    isDarkThemeEnabled,
  };
};
