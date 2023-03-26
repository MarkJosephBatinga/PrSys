import { CircleNotifications } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import {styled, Stack, Avatar, Paper, InputBase} from '@mui/material'

// HEADER WRAPPER
export const HeaderStack = styled(Stack)(({theme}) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: '20px',
}));

//ICON WRAPPER
export const NotifStack = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '1rem',
}));

//SEARCH WRAPPER
export const SearchStack = styled(Stack)(({ theme }) => ({
    alignItems: 'flex-start',
    justifyContent: 'space-between',
}));

export const SearchPaper = styled(Paper)(({ theme }) => ({
    border: "0.1rem solid #000000",
    borderRadius: "0.4rem",
    display: 'flex', 
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

// HEADER WITH BACK BUTTON STARTS HERE
// HEADER WRAPPER
export const BackButton = styled(ArrowBackIcon)(({ theme }) => ({
    fontSize: "2.2rem",
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2.2rem',
    },
}));