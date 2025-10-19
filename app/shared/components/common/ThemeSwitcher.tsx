import { useTranslation } from "react-i18next";

import type { Theme } from "@hooks/common/ThemeProvider";
import { useTheme } from "@hooks/common/ThemeProvider";

function ThemeSwitcher(): React.ReactElement {
  const { t: tMain } = useTranslation("main");
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <div className="flex flex-1 flex-col gap-2 p-4">
      <p className="text-sm font-medium">{tMain("common.settings.theme")}</p>
      <div className="flex gap-2 text-sm">
        {["system", "light", "dark"].map((value) => (
          <label key={value} className="flex items-center gap-2">
            <input
              type="radio"
              name="theme"
              value={value}
              checked={theme === value}
              onChange={() => handleChangeTheme(value as Theme)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="capitalize">{tMain(`common.settings.${value}`)}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ThemeSwitcher;
