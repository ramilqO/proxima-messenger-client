import { Navigate } from "react-router-dom";
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
    {
        path: "*",
        element: <Navigate to="/register" />
    }
]

export const privateRoutes = [
    {
        path: "/chats",
        element: <Layout />
    },
    {
        path: "*",
        element: <Navigate to="/chats" />
    }
]