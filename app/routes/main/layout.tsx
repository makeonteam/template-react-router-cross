import { Outlet } from "react-router";
import { SidebarProvider } from "@components/shadcn/ui/sidebar";
import AppSidebar from "@components/common/AppSidebar";

// the layout for pages in main group
// outlet is the content
export default function Layout(): React.ReactElement {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="mt-safe mb-safe min-h-full w-full">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
