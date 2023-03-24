import { CircleNotifications } from '@mui/icons-material';
import {styled, Box, Grid, Avatar, Paper, InputBase} from '@mui/material'

// HEADER WRAPPER
export const HeaderGrid = styled(Grid)(({theme}) => ({
    display: "flex",
    justifyContent: 'flex-end',
    padding: "1rem",
    // backgroundColor: "pink"
}));

//ICON WRAPPER
export const HeaderBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
}));

export const SearchPaper = styled(Paper)(({ theme }) => ({
    border: "0.1rem solid #000000",
    borderRadius: "0.4rem",
    display: 'flex', 
    width: 230,
    height: "70%",
    [theme.breakpoints.up('md')]: {
        height: "80%",
    },
    [theme.breakpoints.up('lg')]: {
        height: "70%",
    },
}));

export const SearchInput = styled(InputBase)(({ theme }) => ({
    padding: "0 0.5rem",
    fontFamily: 'Poppins, sans-serif',
    fontWeight:500,
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1rem',
    },
}));

export const HeaderAvatar = styled(Avatar)(({ theme }) => ({
    height: '2rem',
    width: '2rem',
    [theme.breakpoints.up('md')]: {
        height: '2.6rem',
        width: '2.6rem',
    },
    [theme.breakpoints.up('lg')]: {
        height: '2rem',
        width: '2rem',
    },
}));

export const Notification = styled(CircleNotifications)(({ theme }) => ({
    fontSize: "2.2rem",
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2.2rem',
    },
}));

