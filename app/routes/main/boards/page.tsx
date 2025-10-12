import type { Route } from "./+types/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Boards" },
  ];
}

// the page for outlet
export default function Page() {
  return (
    <div className="mt-safe mb-safe min-h-svh w-full">
      <div className="flex flex-col items-center gap-2 p-2">
        <h1 className="text-xl font-bold">Boards</h1>
      </div>
    </div>
  );
}
