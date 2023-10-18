import React, {useState} from "react";
import {Alert, CssBaseline, Grid} from "@mui/material";
import * as PropTypes from "prop-types";
import {AuthBox, AuthButton, AuthHint, AuthHintButton, AuthInput, AuthTitle} from "../components/Auth/Auth.styled";
import api from "../shared/service/axios/axiosClient";

const AuthPage = () => {
    const [auth, setAuth] = useState('login')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleAuth = async () => {
        if (!username || !password || (auth === 'registration' && !imageUrl)) {
            setErrorMessage('Поля не должны быть пустыми')
            return;
        }

        if (auth === 'login') {
            api.post('/auth', {
                hash: password,
                username
            }).then(res => {
                localStorage.setItem('access_token', res.data?.access_token)
                setErrorMessage('')
                window.location.reload()
            }).catch(function (error) {
                if (error.response) {
                    setErrorMessage(error.response.data?.message)
                } else {
                    setErrorMessage('Произошла ошибка: ' + error.message)
                }
            })
        } else {
            api.post('/user', {
                avatar: imageUrl,
                hash: password,
                username
            }).then(res => {
                api.post('/auth', {
                    hash: password,
                    username
                }).then(res => {
                    localStorage.setItem('access_token', res.data?.access_token)
                    setErrorMessage('')
                    window.location.reload()
                })
            }).catch(function (error) {
                console.log(error)
                if (error.response) {
                    setErrorMessage(error.response.data?.message)
                } else {
                    setErrorMessage('Произошла ошибка: ' + error.message)

                }
            })
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
                        {auth === 'registration' && <AuthInput
                            label="Url картинки"
                            inputProps={{autoComplete: 'off',}}
                            value={imageUrl}
                            onChange={(event) =>
                                setImageUrl(event.target.value)
                            }
                        />}

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
                        {errorMessage.length > 0 && <Alert
                            severity="error"
                            sx={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                textTransform: 'uppercase',
                            }}
                        >
                            {errorMessage}
                        </Alert>}
                    </AuthBox>
                </Grid>
            </Grid>
        </>
    );
};

export default AuthPage;