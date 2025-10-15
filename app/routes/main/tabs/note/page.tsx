import type { Route } from "./+types/page";
import { useParams } from "react-router";
import { AppTopbar } from "@components/common/AppTopbar";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Notes" }];
}

// the page for outlet
export default function Page(): React.ReactElement {
  const params = useParams();

  return (
    <div className="flex h-full w-full flex-col">
      <AppTopbar>
        <span>Note {params.id}</span>
      </AppTopbar>
      <div className="flex h-full w-full flex-col gap-2 p-2">
        <h1 className="text-xl font-bold">Note {params.id}</h1>
      </div>
    </div>
  );
}
