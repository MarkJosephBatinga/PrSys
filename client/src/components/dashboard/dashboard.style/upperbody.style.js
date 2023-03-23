import {
    styled,
    Box,
    Stack,
} from '@mui/material'

// UPPER BODY STYLE STARTS HERE
export const UpperContentStack = styled(Stack)(({theme}) => ({
    width: '100%',
    height: '24vh',
    alignContent:'center',
    justifyContent:'center',
}));

export const UpperContentBoxWrapperStack = styled(Stack)(({theme}) => ({
    paddingTop:'30px',
    display:'flex',
    width: "50%",
    height: '18vh',
    justifyContent:'space-around',
    alignItems: 'center',
}));

export const UpperContentBox = styled(Box)(({theme}) => ({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '40%',
    border: 'solid 2px',
    borderRadius: '10px',
    height: '18vh',
}))