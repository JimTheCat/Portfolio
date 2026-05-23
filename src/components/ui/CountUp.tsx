import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks';

interface CountUpProps {
  end: number;
  duration?: number;
}

export const CountUp = ({ end, duration = 1400 }: CountUpProps) => {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.4 });
  const startedRef = useRef(false);
  const spanRef = ref as React.RefObject<HTMLSpanElement>;

  useEffect(() => {
    if (!visible || startedRef.current || !spanRef.current) return;
    startedRef.current = true;
    const node = spanRef.current;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = String(Math.round(end * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, end, duration, spanRef]);

  return <span ref={spanRef}>0</span>;
};
