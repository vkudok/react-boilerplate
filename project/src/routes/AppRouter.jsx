import React, {useEffect, useState} from 'react';
import {publicRoutes, userRoutes} from "./routes";
import {Route, Routes} from "react-router-dom";
import api from "../shared/service/axios/axiosClient";
import Loading from "../components/Loading";

const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const hasAccessToken = localStorage.getItem("access_token") ?? false;

    useEffect(() => {
        if(hasAccessToken) {
            const token = localStorage.getItem("access_token")
            setIsLoading(true)
            api.get('/auth/user', {headers: {'Authorization': `Bearer ${token}`}}).then((body) => {
                if(body?.data?.uuid) {
                    setIsAuth(true)
                }
                setIsLoading(false)
            }).catch(function (error) {setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
    }, [hasAccessToken])

    const getRouts = () => {
        if (!isAuth) {
            return publicRoutes
        } else {
            return userRoutes
        }
    }

    if(isLoading) {
        return (
            <Loading/>
        )
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