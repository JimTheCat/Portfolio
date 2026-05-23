import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { fontPairs, densityScale, siteConfig } from '../config/site';
import { STORAGE_KEYS } from '../constants/storageKeys';

export type ColorScheme = 'light' | 'dark';

export interface ThemeContextValue {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
  setTheme: (scheme: ColorScheme) => void;
  isDark: boolean;
  isLight: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextValue | null>(null);

const getInitialScheme = (): ColorScheme => {
  const saved = localStorage.getItem(STORAGE_KEYS.THEME);
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(getInitialScheme);

  // Static appearance vars (accent / fonts / density) - applied once.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent-h', String(siteConfig.accentHue));
    const fp = fontPairs[siteConfig.fontPair] ?? fontPairs['inter-mono'];
    root.style.setProperty(
      '--font-sans',
      `"${fp.sans}", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
    );
    root.style.setProperty(
      '--font-mono',
      `"${fp.mono}", ui-monospace, "SF Mono", Menlo, monospace`
    );
    root.style.setProperty('--font-display', `"${fp.display}", "${fp.sans}", sans-serif`);
    root.style.setProperty('--density', String(densityScale[siteConfig.density] ?? 1));
  }, []);

  // Theme attribute follows colorScheme.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorScheme);
  }, [colorScheme]);

  const setTheme = useCallback((scheme: ColorScheme) => {
    setColorScheme(scheme);
    localStorage.setItem(STORAGE_KEYS.THEME, scheme);
  }, []);

  const toggleColorScheme = useCallback(() => {
    setColorScheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEYS.THEME, next);
      return next;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      colorScheme,
      toggleColorScheme,
      setTheme,
      isDark: colorScheme === 'dark',
      isLight: colorScheme === 'light',
    }),
    [colorScheme, toggleColorScheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
