import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Package from "./pages/Package";
import NotFound from "./pages/NotFound";

export default function Router() {
   return useRoutes([
      { path: "/", element: <Home /> },
      { path: "semua-paket", element: <Package /> },
      { path: "*", element: <NotFound replace /> },
   ]);
}
