import { useTranslation } from 'react-i18next';

/**
 * Returns the current UI language as a typed literal.
 * Eliminates the repeated `(i18n.language === 'pl' ? 'pl' : 'en') as 'pl' | 'en'` pattern.
 */
export const useLang = (): 'pl' | 'en' => {
  const { i18n } = useTranslation();
  return i18n.language === 'pl' ? 'pl' : 'en';
};
