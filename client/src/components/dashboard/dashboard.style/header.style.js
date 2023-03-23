import {
    styled,
    Box,
    Grid,
} from '@mui/material'

// HEADER WRAPPER
export const DashHeader = styled(Grid)(({theme}) => ({
    width: "100%",
    marginTop: "20px",
    display: "flex",
    justifyContent: 'flex-end',
    height: '40px',
    paddingRight:'30px'
}));

// ICON WRAPPER
export const HeaderIconWrapper = styled(Box)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
}));