import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  TranslationSchema, 
  LanguageConfig, 
  TextDirection, 
  supportedLanguages, 
  getTranslation 
} from '../translations';

interface LanguageContextType {
  language: string;
  dir: TextDirection;
  isRTL: boolean;
  setLanguage: (code: string) => void;
  t: TranslationSchema;
  currentLangMeta: LanguageConfig;
  languages: LanguageConfig[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'durrat_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && supportedLanguages.some((l) => l.code === saved)) {
        return saved;
      }
    } catch {
      // ignore storage errors
    }
    return 'en';
  });

  const currentLangMeta = 
    supportedLanguages.find((l) => l.code === language) || supportedLanguages[0];

  const dir: TextDirection = currentLangMeta.dir;
  const isRTL = dir === 'rtl';

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore storage errors
    }

    // Update root document HTML attributes for complete accessibility and browser styling
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  const setLanguage = (code: string) => {
    if (supportedLanguages.some((l) => l.code === code)) {
      setLanguageState(code);
    }
  };

  const t = getTranslation(language);

  return (
    <LanguageContext.Provider
      value={{
        language,
        dir,
        isRTL,
        setLanguage,
        t,
        currentLangMeta,
        languages: supportedLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
