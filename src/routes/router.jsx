import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../Layouts.jsx/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Bills from "../pages/Bills";
import BillDetails from "../pages/BillDetails";
import Profile from "../pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "bills", element: <Bills /> },
      { path: "profile", element: <Profile /> }
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "*",
    element: <h1>Error 404 - Page not found</h1>
  }
]);

export default router;
