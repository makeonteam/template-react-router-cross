import type { Theme } from "@hooks/common/ThemeProvider";
import { useTheme } from "@hooks/common/ThemeProvider";

function ThemeSwitcher(): React.ReactElement {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (value: Theme) => {
    setTheme(value);
  };

  return (
    <div className="flex flex-1 flex-col gap-2 p-4">
      <div className="text-sm font-medium text-black dark:text-white">Theme</div>
      <div className="flex gap-2">
        {["system", "light", "dark"].map((value) => (
          <label key={value} className="flex cursor-pointer items-center gap-2 text-sm text-black dark:text-white">
            <input
              type="radio"
              name="theme"
              value={value}
              checked={theme === value}
              onChange={() => handleThemeChange(value as Theme)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="capitalize">{value}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ThemeSwitcher;
