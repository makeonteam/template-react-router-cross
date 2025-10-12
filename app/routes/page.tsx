import type { Route } from "./+types/page";

// you can change metadata for each page
export function meta({}: Route.MetaArgs) {
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
    <div className="mt-safe mb-safe min-h-svh w-full">
      <div className="flex flex-col items-center gap-2 p-2">
        <h1 className="text-xl font-bold">Cross</h1>
        <p className="text-md">
          Open Cards {"=>"} Notes, Boards, Snips, Tasks, Chats
        </p>
      </div>
    </div>
  );
}
