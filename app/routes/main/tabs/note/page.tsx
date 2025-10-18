import type { Route } from "./+types/page";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

import { AppTopbar } from "@components/common/AppTopbar";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Note Tab" }];
}

// the page for outlet
export default function Page(): React.ReactElement {
  const { t: tMain } = useTranslation("main");
  const params = useParams();

  return (
    <div className="flex h-full w-full flex-col">
      <AppTopbar>
        <span className="pl-2">{tMain("common.sidebar.notes")}</span>
      </AppTopbar>
      <div className="flex h-full w-full flex-col gap-2 p-2">
        <h1 className="text-xl font-bold">
          {tMain("common.sidebar.notes")} {params.id}
        </h1>
      </div>
    </div>
  );
}
