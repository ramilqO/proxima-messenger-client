import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import NotFound from "../NotFound/NotFound";

const isAuth = true;
export default function Router() {  // у авторизованных пользователей нет доступа к publicRoutes
    return (
        <BrowserRouter>
            <Routes>
                {isAuth ? privateRoutes.map(route => {
                    return <Route key={route.path} path={route.path} element={route.component} />
                }) : publicRoutes.map(route => {
                    return <Route key={route.path} path={route.path} element={route.component} />
                })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
