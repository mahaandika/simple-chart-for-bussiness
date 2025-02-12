import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChartKeuangan from "./pages/ChartKeuangan.jsx";
import ChartServices from "./pages/ChartServices.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChartKeuangan />,
  },
  {
    path: "/service",
    element: <ChartServices />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
