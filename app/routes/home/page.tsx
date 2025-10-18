import type { Route } from "./+types/page";
import { useTranslation } from "react-i18next";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Home" }];
}

// the page for outlet
export default function Page() {
  const { t: tHome } = useTranslation("home");

  return (
    <div className="mt-safe mb-safe min-h-svh w-full">
      <div className="flex flex-col items-center gap-2 p-2">
        <h1 className="text-xl font-bold">{tHome("common.title")}</h1>
      </div>
    </div>
  );
}
