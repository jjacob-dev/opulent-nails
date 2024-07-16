import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Enhancements from "./pages/Enhancements.tsx";
import Nails from "./pages/Nails.tsx";
import Services from "./pages/Services.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "enhancements",
    element: <Enhancements />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "gallery",
    element: <Nails />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
