/**
 * routes.jsx — Application route configuration
 *
 * This portfolio is a Single-Page Application (SPA) with smooth-scroll
 * section navigation. React Router is used here for clean URL support
 * and to handle the /resume redirect.
 */

import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

// Lazy-load the main portfolio shell
const App = lazy(() => import("./App"));

// Minimal loading fallback (matches dark background)
const Fallback = () => (
  <div
    style={{
      background: "#0a0a0f",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.85rem",
        color: "rgba(248,249,255,0.4)",
        letterSpacing: "3px",
      }}
    >
      Loading…
    </span>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Fallback />}>
        <App />
      </Suspense>
    ),
  },
  {
    // /resume → redirect to the PDF (opens in new tab via Navbar/Hero links)
    path: "/resume",
    element: <Navigate to="/" replace />,
  },
  {
    // 404 fallback — redirect to home
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
