import {Box, Button, styled, TextField, Typography} from "@mui/material";

export const AuthBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: theme.palette.background.default,
    borderRadius: '16px',
    padding: '22px',
}))

export const AuthStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: theme.palette.background.default,
    borderRadius: '16px',
    padding: '22px',
}))

export const AuthTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    textTransform: 'uppercase',
}))

export const AuthInput = styled(TextField)(({ theme }) => ({
    width: '395px',
    '& label': {
        fontFamily: 'Montserrat',
        fontWeight: '500',
    },
    '& .MuiInputBase-root': {
        fontFamily: 'Montserrat',
        fontWeight: '500',
    }
}))

export const AuthButton = styled(Button)(({ theme }) => ({
    borderRadius: '5px',
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    letterSpacing: '3px',
}))

export const AuthHint = styled(Typography)(({ theme }) => ({
    color: '#6D6D6D',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    textTransform: 'uppercase',
}))

export const AuthHintButton = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.light,
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    textTransform: 'uppercase',
    marginLeft: '3px',
    padding: '0px',
    '&:hover': {
        cursor: 'pointer'
    },
}))