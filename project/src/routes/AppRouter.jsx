import React, {useEffect, useState} from 'react';
import {publicRoutes, userRoutes} from "./routes";
import {Route, Routes} from "react-router-dom";
import api from "../shared/service/axios/axiosClient";

const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(false)

    const hasAccessToken = localStorage.getItem("access_token") ?? false;

    useEffect(() => {
        console.log('hasAccessToken', hasAccessToken)
        if(hasAccessToken) {
            const token = localStorage.getItem("access_token")
            api.get('/auth/user', {headers: {'Authorization': `Bearer ${token}`}}).then((body) => {
                console.log('res', body)
                if(body?.data) {
                    setIsAuth(true)
                }
            }).catch(function (error) {})
        }
    }, [hasAccessToken])

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