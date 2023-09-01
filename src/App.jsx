import React from "react";
import DetailMenu from "./pages/DetailMenu";
import Menus from "./pages/Menus";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useRoutes } from "react-router";
import ProtectedRoute from "./routes/ProtectedRoute";

const routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/menus",
    element: (
      <ProtectedRoute>
        <Menus />
      </ProtectedRoute>
    ),
  },
  {
    path: "/menu/:Id",
    element: (
      <ProtectedRoute>
        <DetailMenu />
      </ProtectedRoute>
    ),
  },
];

function App() {
  const element = useRoutes(routes);

  return element;
}

export default App;
