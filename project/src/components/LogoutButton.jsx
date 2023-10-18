import React from 'react';
import {Button} from "@mui/material";

const LogoutButton = () => {
    const handleLogout = () => {
        localStorage.removeItem("access_token")
        window.location.reload()
    }

    return (
        <Button onClick={handleLogout}>
            Выйти
        </Button>
    );
};

export default LogoutButton;