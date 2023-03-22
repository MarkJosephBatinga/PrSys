import {
    styled,
    Grid,
} from '@mui/material'

// LOWER BODY STYLE STARTS HERE
export const LowerBody = styled(Grid)(({theme}) => ({
    width: "100%",
    marginTop: "20px",
    display: "flex",
    justifyContent: 'flex-end',
    height: '100vh',
    backgroundColor: 'pink',
}));