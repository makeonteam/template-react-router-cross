import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "system" | "light" | "dark" | "e-ink";
type ResolvedTheme = Exclude<Theme, "system">;

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme?: ResolvedTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  themeKey?: string;
}

function ThemeProvider({ children, themeKey = "theme" }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(themeKey);
      return (storedTheme as Theme) || "system";
    }
    return "system";
  });

  const setTheme = (theme: Theme) => {
    setThemeState(theme);
    if (typeof window !== "undefined") {
      localStorage.setItem(themeKey, theme);
    }
  };

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === "system") {
      const updateThemeHandler = (para: MediaQueryListEvent | MediaQueryList) => {
        htmlElement.dataset.theme = para.matches ? "dark" : "light";
      };
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      updateThemeHandler(darkModeMediaQuery);
      darkModeMediaQuery.addEventListener("change", updateThemeHandler);
      return () => darkModeMediaQuery.removeEventListener("change", updateThemeHandler);
    } else {
      htmlElement.dataset.theme = theme;
    }
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}

export { ThemeProvider, useTheme };
