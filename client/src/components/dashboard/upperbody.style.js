import {
    Grid,
    styled,
    Box,
} from '@mui/material'

// UPPER BODY STYLE STARTS HERE
export const UpperContent = styled(Box)(({theme}) => ({
    width: '100%',
    height: '20%',
}));

export const UpperContentBoxWrapper = styled(Grid)(({theme}) => ({
    paddingTop:'10px',
    display:'flex',
    width: "100%",
    justifyContent:'space-around',
    alignItems: 'flex-end',
}));

export const UpperContentBox = styled(Box)(({theme}) => ({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '21.5%',
    border: 'solid 2px',
    borderRadius: '10px',
    height: '18vh',
}))