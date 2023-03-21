import { styled, Box, Typography, Stack, Button } from "@mui/material";

// STYLES FOR HEADER STARTS HERE
export const HeaderBox = styled(Box)(({theme}) => ({
    width:"100%",
}));

export const HeaderStack = styled(Stack)(({theme}) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px"
}));

export const HeaderText = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "700",
    color:"#1C7293",
    textAlign:"center",
    fontSize: '2rem',
}));

export const LogoBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        width: '10%',
    },
    [theme.breakpoints.up('sm')]: {
        width: '5%',
    },
    [theme.breakpoints.up('md')]: {
        width: '5%',
    },
    [theme.breakpoints.up('xl')]: {
        width: '3%',
    },
}));

// Error Box

export const ErrorStack = styled(Stack)(({theme}) => ({
    height:"100vh", 
    width:"100%",
    alignItems:"center", 
    justifyContent:"center"
}));

export const ContentStack = styled(Stack)(({theme}) => ({
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
        width: '30%',
    },
    [theme.breakpoints.up('xl')]: {
        width: '30%',
    },
}));

export const TextBox = styled(Stack)(({theme}) => ({
   justifyContent: "center",
   alignItems: "center"
}));

export const ResultText = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "900",
    color:"#1C7293",
    textAlign:"center",
    fontSize: '4rem',
    [theme.breakpoints.up('xs')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '3.5rem',
    },
}));

export const ContentText = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "600",
    color:"#1C7293",
    textAlign:"center",
    fontSize: '2.5rem',
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '2rem',
    },
}));

export const NavButton = styled(Button)(({theme}) => ({
    backgroundColor: "#1C7293",
    color: "#FFFFFF",
    padding: "5px 20px",
    marginTop: "20px",
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "700",
    textAlign:"center",
    fontSize: '1.5rem',
    [theme.breakpoints.up('xs')]: {
        fontSize: '.7rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '.8rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.3rem',
    },
}));