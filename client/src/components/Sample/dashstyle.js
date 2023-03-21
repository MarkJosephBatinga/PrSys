import {
    Box,
    Stack,
    styled,
    Typography,
} from "@mui/material"


export const sideBox = styled(Box)(({theme}) => ({
    backgroundColor:"#1C7293", 
    padding: "2.3rem", 
    justifyContent:"center", 
    alignItems:"left" ,
    textAlign:"center",
    width: '10%',
    height: '100vh',
}));

export const LogoText = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontWeight:500,
    fontSize: "1.5rem",
    color: "white",
}));

export const ListText = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    color: "white",
    fontWeight:500,
    fontSize: "1rem",
    textAlign: "left",
}));

export const SideList = styled(Stack)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontWeight:500,
    fontSize: "1rem",
    width: "80%",
}))