import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../Layouts.jsx/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Bills from "../pages/Bills";
import BillDetails from "../pages/BillDetails";
import MyProfile from "../pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // 👈 Correct: JSX element, not 'Component:'
    children: [
      { path: "/", element: <Home /> },
    
    ]
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
    element: <h1>Error 404 - Page Not Found</h1>
  }
]);

export default router;
