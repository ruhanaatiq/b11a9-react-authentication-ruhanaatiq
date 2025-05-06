import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts.jsx/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Bills from "../pages/Bills";
import BillDetails from "../pages/BillDetails";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "../routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "bills", element: <Bills /> },
      { path: "bills/:id", element: <BillDetails /> },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: (
      <h1 className="text-center text-3xl text-red-600 mt-10">
        Error 404 - Page not found
      </h1>
    ),
  },
]);

export default router;
