"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language } from './translations.ts';

type LanguageContextType = {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  currentLang: 'en',
  setLanguage: () => {},
  changeLanguage: () => {},
  t: (key: string) => {
    const fallbackTranslations = translations.en as Record<string, string>;
    return fallbackTranslations[key] || key;
  },
});

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('dgkh_lang');
    if (savedLang === 'en' || savedLang === 'km' || savedLang === 'zh') {
      setCurrentLang(savedLang);
    }
  }, []);

  function changeLanguage(lang: Language) {
    setCurrentLang(lang);
    localStorage.setItem('dgkh_lang', lang);
  }

  function t(key: string) {
    const currentTranslations = translations[currentLang] as Record<string, string>;
    const fallbackTranslations = translations.en as Record<string, string>;
    return currentTranslations[key] || fallbackTranslations[key] || key;
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setLanguage: changeLanguage,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
