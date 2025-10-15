import type { Route } from "./+types/page";
import { AppTopbar } from "@components/common/AppTopbar";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Boards" }];
}

// the page for outlet
export default function Page() {
  return (
    <div className="flex h-full w-full flex-col">
      <AppTopbar>
        <span>Boards</span>
      </AppTopbar>
      <div className="flex h-full w-full flex-col gap-2 p-2">
        <h1 className="text-xl font-bold">Boards</h1>
      </div>
    </div>
  );
}
