import { useEffect, useRef, useState } from 'react';

/**
 * Shared IntersectionObserver hook.
 * Returns [ref, isVisible] - once visible, stays true (fire-once).
 */
export const useIntersectionObserver = (
  options?: IntersectionObserverInit
): [React.RefObject<HTMLElement | null>, boolean] => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, options);
    obs.observe(node);
    return () => obs.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [ref, visible];
};
