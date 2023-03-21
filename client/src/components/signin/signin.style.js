import { AppBar, Box, Button, Grid, styled, Typography } from "@mui/material";

// STYLES FOR HEADER STARTS HERE
export const HeaderBox = styled(Box)(({theme}) => ({
    backgroundColor:"#1C7293", 
    width:"100vw",
    marginBottom: theme.spacing(8), //100% screen responsive
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(20), //67% screen responsive
    },
    [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(10), //100% screen
      },
    [theme.breakpoints.up('xl')]: {
      marginBottom: theme.spacing(25), // 67% screen
    },
}));

export const HeaderText = styled(Typography)(({theme}) => ({
    padding: "6px 1px",
    fontWeight:700,
    color:"#ffffff",
    textAlign:"center",
    fontSize: '0.75rem',
    [theme.breakpoints.up('sm')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '0.75rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.3rem',
    },
}));
// STYLES FOR HEADER ENDS HERE

// STYLES FOR SIGN IN BOX STARTS HERE
export const GridSignBox = styled(Grid)(({theme}) => ({
    padding: "2.3rem", 
    justifyContent:"center", 
    alignItems:"center" ,
    textAlign:"center",
    backgroundColor:"#EEF8FB",
    borderRadius: "1rem",
    boxShadow:"4px 5px 5px rgba(0, 0, 0, 0.25)",
    width: '80%',
    [theme.breakpoints.up('sm')]: {
        width: '80%',
    },
    [theme.breakpoints.up('md')]: {
        width: '35%',
    },
    [theme.breakpoints.up('lg')]: {
        width: '35%',
    },
    [theme.breakpoints.up('xl')]: {
        width: '30%',
    },
}));

export const WelcomeText = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontWeight:800,
    color:"#1C7293",
    fontSize: "1.8rem",
    [theme.breakpoints.up('xl')]: {
        fontSize: '3rem',
    },
}));

export const SignInText = styled(Typography)(({theme}) => ({
    fontWeight:400,
    color:"#000000",
    marginBottom: "2rem",
    fontSize: "0.8rem",
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.2rem',
    },
}));

export const SignBtn = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.signBtn.main,
    marginBottom: theme.spacing(2),
    fontWeight: '800',
    color: '#ffffff',
    fontSize: '0.9rem',
    "& .MuiSvgIcon-root": {
        fontSize: "1.2rem"
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.3rem',
        "& .MuiSvgIcon-root": {
            fontSize: "1.9rem"
        }
    },
}));
// STYLES FOR SIGN IN BOX ENDS HERE

// STYLES FOR FOOTER STARTS HERE
export const FooterBox = styled(AppBar) ({
    position:"fixed",
    top: 'auto', 
    bottom: 0 ,
});

export const FooterText = styled(Typography)(({theme}) => ({
    padding:"0.2rem",
    textAlign:"center",
    fontWeight:400,
    fontSize: "0.75rem",
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.2rem',
    },
}));
// STYLES FOR FOOTER ENDS HERE