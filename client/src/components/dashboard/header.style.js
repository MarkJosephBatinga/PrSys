import {
    styled,
    Box,
    Grid,
} from '@mui/material'

// BODY HEADER STARTS HERE
export const DashHeader = styled(Grid)(({theme}) => ({
    width: "100%",
    marginTop: "20px",
    display: "flex",
    justifyContent: 'flex-end',
    height: '40px',
    paddingRight:'30px'
}));

export const HeaderIconWrapper = styled(Box)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
}));