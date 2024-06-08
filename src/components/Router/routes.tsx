import { Route } from "../../types/routes";
import ChatList from "../ChatList/ChatList";
import Login from "../Login/Login";
import Register from "../Register/Register";

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