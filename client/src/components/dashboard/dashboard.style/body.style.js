import {
    Typography,
    styled,
} from '@mui/material'

// NUMBER TEXT YELLOW
export const BoxNumbertext1 = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    textAlign:'center',
    fontWeight:800,
    color:"#FACF5A",
    fontSize: "1.8rem",
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.4rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '2.5rem',
    }
}));

// NUMBER TEXT BLUE
export const BoxNumbertext2 = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    textAlign:'center',
    fontWeight:800,
    color:"#1C7293",
    fontSize: "1.8rem",
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.4rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '2.5rem',
    }
}));

// NUMBER TEXT RED
export const BoxNumbertext3 = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    textAlign:'center',
    fontWeight:800,
    color:"#FF5959",
    fontSize: "1.8rem",
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.4rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '2.5rem',
    }
}));

// TEXT INSIDE THE BOX
export const BoxText = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    textAlign:"center",
    fontWeight:500,
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.75rem',
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