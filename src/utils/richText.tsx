import { Fragment, type ReactNode } from 'react';

// Markdown-ish: turn **bold** into <strong>
export const richText = (s: string): ReactNode[] => {
  const parts = s.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? (
      <strong key={i}>{p.slice(2, -2)}</strong>
    ) : (
      <Fragment key={i}>{p}</Fragment>
    )
  );
};
