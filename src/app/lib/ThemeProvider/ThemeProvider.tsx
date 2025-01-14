import { ThemeProvider as DCThemeProvider } from '@design-system-rt/rtk-ui-kit';
import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { theme as themeConfig } from 'src/shared/config/theme';
import { localStorage } from 'src/shared/lib/localeStorage';

import { THEME_LOCAL_STORAGE_KEY, ThemeContext, ThemeType } from './themeContext';

const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const DEFAULT_THEME = (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as ThemeType) || 'light';

  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME);

  const defaultThemeProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <DCThemeProvider themeName={defaultThemeProps.theme} useCssVariables themeConfig={themeConfig}>
      <ThemeContext.Provider value={defaultThemeProps}>{props.children}</ThemeContext.Provider>
    </DCThemeProvider>
  );
};

export default ThemeProvider;
