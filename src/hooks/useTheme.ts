import { useCallback, useEffect, useState } from 'react';
import { useColorScheme } from '@mantine/hooks';

type ColorScheme = 'light' | 'dark';

export const useTheme = () => {
  const preferredColorScheme = useColorScheme();
  
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return preferredColorScheme;
  });

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (!saved) {
      setColorScheme(preferredColorScheme);
    }
  }, [preferredColorScheme]);

  const toggleColorScheme = useCallback(() => {
    setColorScheme((current) => {
      const newScheme = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', newScheme);
      return newScheme;
    });
  }, []);

  const setTheme = useCallback((scheme: ColorScheme) => {
    setColorScheme(scheme);
    localStorage.setItem('portfolio-theme', scheme);
  }, []);

  return {
    colorScheme,
    toggleColorScheme,
    setTheme,
    isDark: colorScheme === 'dark',
    isLight: colorScheme === 'light',
  };
};
