import {
    Typography,
    styled,
} from '@mui/material'

// BOLD TEXT
export const BoldText = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    textAlign:"left",
    fontWeight:600,
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.75rem',
        paddingLeft: '1.3%',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.2rem',
    }
}));

export const NormalText = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    textAlign:"left",
    fontWeight:400,
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.8rem',
        paddingLeft: '1.3%',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '0.8rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '0.8rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.8rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '0.8rem',
    }
}));