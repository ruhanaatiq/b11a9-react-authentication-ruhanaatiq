import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../Layouts.jsx/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Bills from "../pages/Bills";
import BillDetails from "../pages/BillDetails";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },           // Homepage with Carousel
      { path: "bills", element: <Bills /> },
      { path: "bills/:id", element: <BillDetails /> },
    
      { path: "profile", element: <MyProfile /> },
      { path: "update-profile", element: <UpdateProfile /> }
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
    element: <h1 className="text-center text-3xl text-red-600 mt-10">Error 404 - Page not found</h1>
  },

  {
    path:"/auth",
    element : <h1>Authentication</h1>,
    children:[
      {
        path: "/auth/login",
        element:<Login></Login>
      },
      {
        path: "/auth/register",
        element:<Register></Register>
      },
    ]
    
  }
]);

export default router;
