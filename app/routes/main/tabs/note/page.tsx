import type { Route } from "./+types/page";
import { useParams } from "react-router";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Notes" }];
}

// the page for outlet
export default function Page() {
  const params = useParams();

  return (
    <div className="mt-safe mb-safe min-h-svh w-full">
      <div className="flex flex-col items-center gap-2 p-2">
        <h1 className="text-xl font-bold">Note {params.id}</h1>
      </div>
    </div>
  );
}
