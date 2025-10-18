import type { Route } from "./+types/page";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import { Button } from "@components/shadcn/ui/button";
import ThemeSwitcher from "@components/common/ThemeSwitcher";
import LanguageSwitcher from "@components/common/LanguageSwitcher";

// you can change metadata for each page
export function meta(_: Route.MetaArgs) {
  return [
    { title: "Cross" },
    {
      name: "description",
      content: "Template of Cross-Platform app build with Web tech",
    },
  ];
}

// the page for outlet
export default function Page(): React.ReactElement {
  const { t: tTest } = useTranslation("test");

  return (
    <div className="mt-safe mb-safe min-h-full w-full">
      <div className="flex flex-col items-center gap-2 p-2">
        <h1 className="text-xl font-bold">{tTest("welcome")}</h1>
        <p className="text-md">{tTest("description")}</p>
        <Button asChild>
          <Link to="/boards">{tTest("goto_main_app")}</Link>
        </Button>
        <Button asChild>
          <Link to="/home">{tTest("goto_home_page")}</Link>
        </Button>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
