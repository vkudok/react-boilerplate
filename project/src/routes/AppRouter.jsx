import React, {useState} from 'react';
import {publicRoutes, userRoutes} from "./routes";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    // Здесь мы должы стучаться к бэку
    const [isAuth, setIsAuth] = useState(false)
    const getRouts = () => {
        if (!isAuth) {
            return publicRoutes
        } else {
            return userRoutes
        }
    }

    return (
        <Routes>
            {getRouts().map(route => (
                <Route path={route.path} element={route.element} key={route.path} />
            ))}
        </Routes>
    )
};

export default AppRouter;