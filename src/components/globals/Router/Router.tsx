import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { motion } from 'framer-motion';

const isAuth = true;

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {isAuth
          ? privateRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}>{route.element}</motion.div>
              }
            />
          ))
          : publicRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}>{route.element}</motion.div>
              }
            />
          ))}
      </Routes>
    </BrowserRouter>
  );
}