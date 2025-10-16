import "./root.css";

import type { Route } from "./+types/root";
import { Meta, Links, Scripts, ScrollRestoration, Outlet, isRouteErrorResponse } from "react-router";
import { ThemeProvider } from "@hooks/common/ThemeProvider";

// root layout for the entire app
// children is the content
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="/init-theme.js" defer></script>
      </head>
      <body className="min-h-dvh w-dvw overflow-hidden antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// the root-page for children in layout
export default function Page(): React.ReactElement {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
