import { useCallback, useRef } from 'react';
import { useMantineColorScheme } from '@mantine/core';

export const useThemeTransition = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleWithTransition = useCallback(
    (event?: React.MouseEvent<HTMLButtonElement>) => {
      const newScheme = colorScheme === 'dark' ? 'light' : 'dark';

      // Get button position for the animation origin
      const button = event?.currentTarget || buttonRef.current;
      if (!button) {
        setColorScheme(newScheme);
        localStorage.setItem('portfolio-theme', newScheme);
        return;
      }

      const rect = button.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Calculate the maximum radius needed to cover the entire screen
      const maxX = Math.max(x, window.innerWidth - x);
      const maxY = Math.max(y, window.innerHeight - y);
      const maxRadius = Math.ceil(Math.sqrt(maxX * maxX + maxY * maxY)) + 10;

      // Check if View Transitions API is supported
      if (!document.startViewTransition) {
        setColorScheme(newScheme);
        localStorage.setItem('portfolio-theme', newScheme);
        return;
      }

      // Create dynamic style for this specific transition
      const styleId = 'theme-transition-style';
      let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
      }

      // Always expand the NEW view from the button position
      // This gives consistent animation direction regardless of theme
      styleEl.textContent = `
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation: none;
          mix-blend-mode: normal;
        }
        
        ::view-transition-old(root) {
          z-index: 1;
        }
        
        ::view-transition-new(root) {
          z-index: 9999;
          animation: theme-expand 0.45s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes theme-expand {
          from {
            clip-path: circle(0px at ${x}px ${y}px);
          }
          to {
            clip-path: circle(${maxRadius}px at ${x}px ${y}px);
          }
        }
      `;

      // Start the view transition
      const transition = document.startViewTransition(() => {
        setColorScheme(newScheme);
        localStorage.setItem('portfolio-theme', newScheme);
      });

      // Clean up styles after transition
      transition.finished.then(() => {
        if (styleEl) {
          styleEl.textContent = '';
        }
      }).catch(() => {
        // Transition was skipped or interrupted
        if (styleEl) {
          styleEl.textContent = '';
        }
      });
    },
    [colorScheme, setColorScheme]
  );

  return {
    buttonRef,
    toggleWithTransition,
    colorScheme,
    isDark: colorScheme === 'dark',
  };
};
