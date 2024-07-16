import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const isAuth = true;

export default function Router() {
  return (
    <BrowserRouter>
      <TransitionGroup>
        <CSSTransition in={true} timeout={300} classNames='page' unmountOnExit>
          <Routes>
            {isAuth
              ? privateRoutes.map(route => {
                  return <Route key={route.path} path={route.path} element={route.element} />;
                })
              : publicRoutes.map(route => {
                  return <Route key={route.path} path={route.path} element={route.element} />;
                })}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  );
}
