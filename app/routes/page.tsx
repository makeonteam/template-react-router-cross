import type { Route } from "./+types/page";
import { Link } from "react-router";

import { Button } from "@components/shadcn/ui/button";
import ThemeSwitcher from "@components/ThemeSwitcher";

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
  return (
    <div className="mt-safe mb-safe min-h-full w-full">
      <div className="flex flex-col items-center gap-2 p-2">
        <h1 className="text-xl font-bold">Welcome to Cross</h1>
        <p className="text-md">Build desktop & mobile apps with web tech</p>
        <ThemeSwitcher />
        <Button asChild>
          <Link to="/boards">Goto Main app {"=>"} /boards</Link>
        </Button>
        <Button asChild>
          <Link to="/home">Goto Home page {"=>"} /home</Link>
        </Button>
      </div>
    </div>
  );
}
