import { useCallback, useRef } from 'react';
import { useTheme } from './useTheme';

/**
 * Theme toggle with View Transition API circular-reveal animation.
 * Falls back to instant toggle when View Transitions are unsupported.
 */
export const useThemeTransition = () => {
  const { isDark, toggleColorScheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleWithTransition = useCallback(
    (event?: React.MouseEvent<HTMLButtonElement>) => {
      const button = event?.currentTarget ?? buttonRef.current;

      if (!button || !document.startViewTransition) {
        toggleColorScheme();
        return;
      }

      const rect = button.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const maxX = Math.max(x, window.innerWidth - x);
      const maxY = Math.max(y, window.innerHeight - y);
      const maxRadius = Math.ceil(Math.sqrt(maxX * maxX + maxY * maxY)) + 10;

      const styleId = 'theme-transition-style';
      let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
      }

      styleEl.textContent = `
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation: none;
          mix-blend-mode: normal;
        }
        ::view-transition-old(root) { z-index: 1; }
        ::view-transition-new(root) {
          z-index: 9999;
          animation: theme-expand 0.45s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes theme-expand {
          from { clip-path: circle(0px at ${x}px ${y}px); }
          to   { clip-path: circle(${maxRadius}px at ${x}px ${y}px); }
        }
      `;

      const transition = document.startViewTransition(() => {
        toggleColorScheme();
      });

      transition.finished.finally(() => {
        if (styleEl) styleEl.textContent = '';
      });
    },
    [toggleColorScheme]
  );

  return { buttonRef, toggleWithTransition, isDark };
};
