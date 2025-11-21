import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "system" | "light" | "dark";
type ResolvedTheme = Exclude<Theme, "system">;

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: ResolvedTheme;
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

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  const setTheme = (theme: Theme) => {
    setThemeState(theme);
    localStorage.setItem(themeKey, theme);
  };

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === "system") {
      const systemThemeChangeHandler = (para: MediaQueryListEvent | MediaQueryList) => {
        const resolvedTheme = para.matches ? "dark" : "light";
        if (process.env.NODE_ENV === "development") {
          console.log("resolvedTheme:", resolvedTheme);
        }
        htmlElement.dataset.theme = resolvedTheme;
        setResolvedTheme(resolvedTheme);
      };
      // this time (change to system)
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      systemThemeChangeHandler(darkModeMediaQuery);
      // set auto change
      darkModeMediaQuery.addEventListener("change", systemThemeChangeHandler);
      return () => darkModeMediaQuery.removeEventListener("change", systemThemeChangeHandler);
    } else {
      htmlElement.dataset.theme = theme;
    }
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme, resolvedTheme }}>{children}</ThemeContext>;
}

export { ThemeProvider, useTheme };
