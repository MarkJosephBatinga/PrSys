import {
    MenuItem,
    Select,
    styled,
} from '@mui/material'

export const FormSelect = styled(Select)(({theme}) => ({
    width: '20%',
    height: "50%",
}));

export const StyledMenuItem = styled(MenuItem)(({theme}) => ({
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

