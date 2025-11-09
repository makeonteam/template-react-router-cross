import { useEffect } from "react";
import { useTheme } from "@hooks/common/ThemeProvider";
import { SafeArea } from "@capacitor-community/safe-area";

export function SafeAreaInitializer() {
  const { theme } = useTheme();
  const reversedTheme = theme === "light" ? "dark" : "light";

  // if theme changes, then status bar changes
  useEffect(() => {
    SafeArea.enable({
      config: {
        customColorsForSystemBars: true,
        statusBarColor: "#00000000", // transparent
        statusBarContent: reversedTheme,
        navigationBarColor: "#00000000", // transparent
        // navigationBarContent: "light",
      },
    });
  }, [theme]);

  return null; // this component doesn't render anything
}
