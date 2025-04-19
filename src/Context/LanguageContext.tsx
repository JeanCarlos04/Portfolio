import { createContext, useState, useEffect } from "react";

type Language = "es" | "en";

type LanguageContextProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const languageContextDefault: LanguageContextType = {
  language: "es",
  toggleLanguage() {},
};

const LanguageContext = createContext(languageContextDefault);

function LanguageContextProvider({ children }: LanguageContextProps) {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    setLanguage(savedLanguage || "es");
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
    localStorage.setItem("language", language === "es" ? "en" : "es");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageContextProvider };
