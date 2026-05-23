import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { STORAGE_KEYS } from '../constants/storageKeys';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const toggleLanguage = useCallback(() => {
    const newLang = currentLanguage === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(newLang);
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, newLang);
  }, [currentLanguage, i18n]);

  const setLanguage = useCallback(
    (lang: 'pl' | 'en') => {
      i18n.changeLanguage(lang);
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
    },
    [i18n]
  );

  return {
    currentLanguage,
    toggleLanguage,
    setLanguage,
    isPolish: currentLanguage === 'pl',
    isEnglish: currentLanguage === 'en',
  };
};
