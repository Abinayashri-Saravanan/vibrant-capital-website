import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

type SupportedLanguage = "en" | "ar";

type LanguageContextValue = {
  language: SupportedLanguage;
  isArabic: boolean;
  setLanguage: (lang: SupportedLanguage) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "vibrant_language";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const detectInitial = (): SupportedLanguage => {
    try {
      // Check if we're in browser environment
      if (typeof window === 'undefined') return "en";
      
      const fromPath = window.location.pathname.startsWith("/ar") ? "ar" : undefined;
      const saved = (localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null) || undefined;
      return (fromPath || saved || "en");
    } catch {
      return "en";
    }
  };

  const [language, setLanguage] = useState<SupportedLanguage>(detectInitial);

  const isArabic = language === "ar";

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {}
  }, [language]);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", isArabic ? "ar" : "en");
    html.setAttribute("dir", isArabic ? "rtl" : "ltr");
    document.body.classList.toggle("font-arabic", isArabic);
  }, [isArabic]);

  const value = useMemo<LanguageContextValue>(() => ({ language, isArabic, setLanguage }), [language, isArabic]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};


