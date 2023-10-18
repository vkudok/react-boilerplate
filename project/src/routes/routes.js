import AuthPage from "../pages/AuthPage";
import TasksPage from "../pages/TasksPage";
import {Navigate} from "react-router-dom";

export const publicRoutes = [
    {
        path: '/auth',
        element: <AuthPage />,
    },
    { path: '*', element: <Navigate to='/auth' replace /> },
]

export const userRoutes = [
    {
        path: '/tasks',
        element: <TasksPage />,
    },
    {
        path: '/tasks/:id',
        element: <TasksPage />,
    },
    { path: '*', element: <Navigate to='/tasks/1' replace /> },
]