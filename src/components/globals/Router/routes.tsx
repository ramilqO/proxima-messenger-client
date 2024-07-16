import { Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
        path: "/profile",
        element: <h1>Профиль!</h1>
    },
    {
        path: "*",
        element: <Navigate to="/chats" />
    }
]