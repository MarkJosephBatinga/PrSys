import { Box, Stack, styled, Typography } from "@mui/material";

export const CheckStack = styled(Stack)(({theme}) => ({
    height:"100vh", 
    width:"100%",
    alignItems:"center", 
    justifyContent:"center"
}));

export const ImageBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        width: '40%',
    },
    [theme.breakpoints.up('sm')]: {
        width: '30%',
    },
    [theme.breakpoints.up('md')]: {
        width: '20%',
    },
    [theme.breakpoints.up('xl')]: {
        width: '30%',
    },
    marginBottom: "1rem"
}));

export const TextStack = styled(Stack)(({theme}) => ({
    justifyContent: "center",
    alignItems: "center",
    padding: "0 10rem",
    [theme.breakpoints.up('xs')]: {
        padding: "0 5rem",
    },
    [theme.breakpoints.up('sm')]: {
        padding: "0 7rem",
    },
 }));

 export const ConfirmText = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "900",
    color:"#1C7293",
    marginBottom: "0.5rem",
    textAlign:"center",
    fontSize: '3rem',
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.2rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '3.5rem',
    },
}));

export const DetailsText = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "500",
    color:"#000000",
    marginBottom: theme.spacing(2),
    textAlign:"center",
    fontSize: '2.5rem',
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.6rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
    },
}));
