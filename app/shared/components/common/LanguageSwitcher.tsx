import { useTranslation } from "react-i18next";
import { GlobeIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/shadcn/ui/dropdown-menu";
import { Button } from "@components/shadcn/ui/button";
import { convertDetectedLanguage, LANGUAGE_KEY } from "@utils/init/i18n";

const LANGUAGES = [
  { code: "system", label: "System" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "zh-Hant", label: "繁體中文" },
  // add more languages here
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { t: tMain } = useTranslation("main");
  const storedLang = localStorage.getItem(LANGUAGE_KEY) || "system";

  const handleChangeLanguage = (lang: string) => {
    if (lang === "system") {
      i18n.changeLanguage(convertDetectedLanguage(navigator.language));
    } else {
      i18n.changeLanguage(lang);
    }
    localStorage.setItem(LANGUAGE_KEY, lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm">
          <GlobeIcon className="size-[17px]" />
          <span className="sr-only">{tMain("common.settings.toggle-language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="flex flex-col gap-[1px]">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChangeLanguage(lang.code)}
            className={lang.code === storedLang ? "bg-accent" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
