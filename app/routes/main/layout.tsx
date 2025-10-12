import { Outlet } from "react-router";

// the layout for pages in main group
// outlet is the content
export default function Layout(): React.ReactElement {
  return (
    <div>
      <div>sidebar</div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
