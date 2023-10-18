import React, {useState} from "react";
import {CssBaseline, Grid} from "@mui/material";
import * as PropTypes from "prop-types";
import {AuthBox, AuthButton, AuthHint, AuthHintButton, AuthInput, AuthTitle} from "../components/Auth/Auth.styled";

const AuthPage = () => {
    const [auth, setAuth] = useState('login')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [imageUrl, setImageUrl] = useState('')


    const handleAuth = async () => {
        if (!username || !password) {
            return;
        }

        if (password.length < 8) {
            //Пароль должен содержать не менее 8 символов
            return;
        }

        if (auth === 'login') {
           // стучимся в логин
        } else {
            // стучимся в регистрацию
        }

    }

    return (
        <>
            <Grid container component="main" sx={{ height: 'calc(100vh)' }}>
                <CssBaseline/>
                <Grid
                    item
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2458&q=80)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                    }}
                >
                    <AuthBox>
                        <AuthTitle component="div">
                            {auth === 'login' ? 'Логин' : 'Регистрация'}
                        </AuthTitle>
                        <AuthInput
                            label="Пользователь"
                            inputProps={{autoComplete: 'off',}}
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                        />
                        <AuthInput
                            label="Пароль"
                            type="password"
                            inputProps={{autoComplete: 'off',}}
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                        <AuthInput
                            label="Url картинки"
                            inputProps={{autoComplete: 'off',}}
                            value={imageUrl}
                            onChange={(event) =>
                                setImageUrl(event.target.value)
                            }
                        />
                        <AuthButton
                            onClick={handleAuth}
                            variant="contained"
                        >
                            {auth === 'login' ? 'Войти' : 'Зарегистирироваться'}
                        </AuthButton>
                        <AuthHint component="div">
                            {auth === 'login' ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
                            <AuthHintButton
                                component='span'
                                onClick={() => setAuth(auth === 'login' ? 'registration' : 'login')}>
                                {auth === 'login' ? 'Зарегистирироваться' : 'Войти'}
                            </AuthHintButton>
                        </AuthHint>
                    </AuthBox>
                </Grid>
            </Grid>
        </>
    );
};

export default AuthPage;