import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import HomeLog from "./pages/homeLog";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lanche from "./components/categoriasLog/card/lanche";
import App from "./App";
import Salgado from "./components/categoriasLog/card/salgado";
import Bebidas from "./components/categoriasLog/card/bebida";
import Outros from "./components/categoriasLog/card/outros";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/logado",
        element: <HomeLog />,
      },
      {
        path: "/lanche",
        element: <Lanche />,
      },
      {
        path: "/salgado",
        element: <Salgado />,
      },
      {
        path: "/bebida",
        element: <Bebidas />,
      },
      {
        path: "/outro",
        element: <Outros />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
