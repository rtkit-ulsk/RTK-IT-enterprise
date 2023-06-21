import { createContext } from 'react';

export type ThemeType = 'light' | 'dark';

export interface IThemeContext {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}

export const THEME_LOCAL_STORAGE_KEY = 'theme';

export const ThemeContext = createContext<IThemeContext>({});
