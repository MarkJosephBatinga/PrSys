import {
    Typography,
    styled,
} from '@mui/material'

// BODDY TEXT STYLE STARTS HERE
export const BoldText = styled(Typography)(({theme}) => ({
    paddingLeft: '20px',
    paddingTop:'20px',
    fontFamily: 'Poppins, sans-serif',
    textAlign:"left",
    fontWeight:600,
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.50rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 'o.75rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1rem',
    }
}));

export const BoxNumbertext1 = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    textAlign:'center',
    fontWeight:800,
    color:"#FACF5A",
    fontSize: "1.8rem",
    [theme.breakpoints.up('xl')]: {
        fontSize: '2.2rem',
    },
}));

export const BoxNumbertext2 = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    textAlign:'center',
    fontWeight:800,
    color:"#1C7293",
    fontSize: "1.8rem",
    [theme.breakpoints.up('xl')]: {
        fontSize: '2.2rem',
    },
}));

export const BoxNumbertext3 = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    textAlign:'center',
    fontWeight:800,
    color:"#FF5959",
    fontSize: "1.8rem",
    [theme.breakpoints.up('xl')]: {
        fontSize: '2.2rem',
    },
}));

export const BoxText = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    textAlign:"center",
    fontWeight:600,
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.50rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 'o.75rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1rem',
    }
}));