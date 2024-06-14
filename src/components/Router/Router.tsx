import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import NotFound from "../globals/pages/NotFound/NotFound";

const isAuth = true;

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {isAuth ? privateRoutes.map(route => {
                    return <Route key={route.path} path={route.path} element={route.element} />
                }) :
                    publicRoutes.map(route => {
                        return <Route key={route.path} path={route.path} element={route.element} />
                    })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
