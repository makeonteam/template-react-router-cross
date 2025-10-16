import type { Route } from "./+types/page";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Home" }];
}

// the page for outlet
export default function Page() {
  return (
    <div className="mt-safe mb-safe min-h-svh w-full">
      <div className="flex flex-col items-center gap-2 p-2">
        <h1 className="text-xl font-bold">Home page</h1>
      </div>
    </div>
  );
}
