import { Route } from "../../../types/routes";
import ChatList from "../pages/ChatList/ChatList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const publicRoutes: Route[] = [
    {
        path: '/',
        component: <Login />,
    },
    {
        path: '/register',
        component: <Register />,
    },
]


export const privateRoutes: Route[] = [
    {
        path: '/',
        component: <ChatList />,
    },
]