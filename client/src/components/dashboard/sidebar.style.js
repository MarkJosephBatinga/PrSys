import { Box, List, ListItem, ListItemIcon, styled, Typography, Stack } from "@mui/material";

export const SidebarBox = styled(Stack)(({theme}) => ({
    backgroundColor: "#1C7293",
    padding: '1rem',
    justifyContent:"flex-start",
    alignItems: "center",
}));

export const SideLogo = styled(Box)(({theme}) => ({
    width: "60%",
}));

export const SidebarList = styled(List)(({theme}) => ({
    justifyContent:"center", 
}));


export const DBLogo = styled(ListItem)(({theme}) => ({
    width: '80%',
    justifyContent:"center", 
    alignItems: "center",
}));

export const Title = styled(Typography)(({theme}) => ({
    fontWeight:800,
    color:"#ffffff",
    textAlign:"center",
    fontSize:"1.8rem",
    marginBottom: "1.5rem",
}));

export const SidebarItem = styled(ListItem)(({theme}) => ({
    padding: "0.25rem 0",
    
}));

export const SidebarIcon = styled(ListItemIcon)(({theme}) => ({
    // backgroundColor: "blue",
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiSvgIcon-root": {
        color: "#ffffff",
        fontSize: "1.7rem",
    },
}));

export const SidebarText = styled(Typography)(({theme}) => ({
    // backgroundColor: "red",
    fontWeight:600,
    color:"#ffffff",
    fontSize:"1.2rem",
}));