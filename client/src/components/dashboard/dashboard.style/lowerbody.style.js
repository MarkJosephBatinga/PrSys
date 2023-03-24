import {styled, Stack, Typography, TableCell, TableRow, Box,} from '@mui/material'

// LOWER BODY STYLE STARTS HERE
export const BodyStack = styled(Stack)(({theme}) => ({
    // width: "100%",
    padding: "1.5rem 1rem",
    display: "flex",
    justifyContent: 'flex-end',
    // backgroundColor: 'pink',
}));

export const BodyTitle = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1rem',
    fontWeight:600,
    [theme.breakpoints.up('lg')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.2rem',
    },
}));

export const Row = styled(TableRow)(({theme}) => ({
    borderBottom: '0.1rem solid #6C757D',
    align: 'right'
}));

export const ProcNumCell = styled(TableCell)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.75rem',
    fontWeight:600,
    color: '#FF5959',
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1rem',
    },
}));

export const DetailCell = styled(TableCell)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.75rem',
    fontWeight:600,
    color: '#000000',
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1rem',
    },
}));

export const StatusCell = styled(TableCell)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.75rem',
    fontWeight:600,
    color: '#000000',
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1rem',
    },
    // backgroundColor: 'blue',
}));

export const StatusBox = styled(Box)(({theme}) => ({
    backgroundColor: '#FACF5A',
    padding: '0.1rem',
    borderRadius: '1rem',
    textAlign: 'center'
}));