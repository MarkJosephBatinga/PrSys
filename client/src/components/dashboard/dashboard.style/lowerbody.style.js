import {
    styled,
    Stack,
} from '@mui/material'

// LOWER BODY STYLE STARTS HERE
export const LowerBody = styled(Stack)(({theme}) => ({
    width: "100%",
    marginTop: "20px",
    display: "flex",
    justifyContent: 'flex-end',
    height: '10vh',
    backgroundColor: 'pink',
}));