import { createBrowserRouter } from "react-router";

const router =createBrowserRouter(
    [
        {
        path:"/",
        element: <h2>Home layout </h2>
        },
        {
        path:"/auth",
        element: <h1>authentication layout</h1>
        },
        {
            path: "/*",
            element: <h1>Error 404</h1>,
        }
    ]
);
export default router;