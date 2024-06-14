import Layout from "../globals/Layout/Layout";
import Login from "../globals/pages/Login/Login";
import Register from "../globals/pages/Register/Register";

export const publicRoutes = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
]

export const privateRoutes = [
    {
        path: "/",
        element: <Layout />
    },
]