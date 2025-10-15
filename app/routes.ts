import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

// routes like file-based routing
export default [
  index("routes/page.tsx"),
  layout("routes/main/layout.tsx", [
    route("boards", "routes/main/boards/page.tsx"),
    route("notes", "routes/main/notes/page.tsx"),
    route("note/:id", "routes/main/tabs/note/page.tsx"),
  ]),
  route("home", "routes/home/page.tsx"),
] satisfies RouteConfig;
