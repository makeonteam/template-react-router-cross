import type { Route } from "./+types/page";
import { AppTopbar } from "@components/common/AppTopbar";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Notes" }];
}

// the page for outlet
export default function Page() {
  return (
    <div className="flex h-full w-full flex-col">
      <AppTopbar>
        <span>Notes</span>
      </AppTopbar>
      <div className="flex h-full w-full flex-col gap-2 p-2">
        <h1 className="text-xl font-bold">Notes</h1>
      </div>
    </div>
  );
}
