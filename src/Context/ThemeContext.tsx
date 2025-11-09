import { createContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

type ContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const defaultContext: ContextType = {
  theme: "light",
  toggleTheme() {},
};

type ThemeContextProp = { children: React.ReactNode };

const ThemeContext = createContext(defaultContext);

const ThemeContextProvider = ({ children }: ThemeContextProp) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    setTheme(savedTheme || "light");
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
