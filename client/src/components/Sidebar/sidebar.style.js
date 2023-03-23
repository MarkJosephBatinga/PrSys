import { Box, List, ListItem, ListItemIcon, styled, Typography, Stack, ListItemButton} from "@mui/material";

export const SidebarStack = styled(Stack)(({theme}) => ({
    flex: "1.2",
    backgroundColor: "#1C7293",
    // padding: '1rem',
    justifyContent:"flex-start",
    alignItems: "center",
}));

export const LogoBox = styled(Box)(({theme}) => ({
    marginTop: "2rem",
    width: "60%",
}));

export const DBLogo = styled(ListItem)(({theme}) => ({
    justifyContent:"center", 
    alignItems: "center",
    width: '80%',
}));

export const Title = styled(Typography)(({theme}) => ({
    marginBottom: "1.5rem",
    fontWeight:800,
    color:"#ffffff",
    textAlign:"center",
    fontSize:"1.8rem",
}));

export const SidebarList = styled(List)(({theme}) => ({
    width: "100%",
    justifyContent:"center",
}));


export const SidebarItem = styled(ListItem)(({theme}) => ({
    padding: "0.25rem 5%",
    color:"#ffffff",
    "&:hover": {
        backgroundColor: "#EEF8FB",
        color:"#1C7293",
        "& .MuiSvgIcon-root": {
          color: "#1C7293"
        }
    }
}));

export const SidebarBtn = styled(ListItemButton)(({theme}) => ({
    "&:hover": {
        backgroundColor: "transparent",
      }
}));

export const SidebarIcon = styled(ListItemIcon)(({theme}) => ({
    // marginRight: theme.spacing(-3),
    // direction: "column",
    // alignItems: "center",
    // justifyContent: "center",
    "& .MuiSvgIcon-root": {
        color: "#ffffff",
        fontSize: "1.75rem"
    },
    
}));

export const SidebarText = styled(Typography)(({theme}) => ({
    fontWeight:600,
    fontSize:"1rem",
    primaryTypographyProps: { margin: '0 0px' },
    secondaryTypographyProps: { margin: '0' },
}));