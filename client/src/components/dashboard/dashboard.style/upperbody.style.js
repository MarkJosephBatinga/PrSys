import {
    styled,
    Box,
    Stack,
} from '@mui/material'

// OUTER BOX WRAPPER
export const UpperContentStack = styled(Stack)(({theme}) => ({
    // width: '100%',
    padding: "1rem 0",
    // height: '24vh',
    alignContent:'center',
    justifyContent:'space-between',
    // backgroundColor:'blue',
    // border:'solid 1px',
}));

// INNER BOX WRAPPER1
export const UpperContentBoxWrapperStack1 = styled(Stack)(({theme}) => ({
    // padding: '1rem 0',
    display:'flex',
    width: "100%",
    height: '100%',
    justifyContent:'space-around',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    // border:'solid 1px',
}));

// INNER BOX WRAPPER2
export const UpperContentBoxWrapperStack2 = styled(Stack)(({theme}) => ({
    // padding: '1rem 0',
    display:'flex',
    width: "100%",
    height: '100%',
    justifyContent:'space-around',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    // border:'solid 1px',
}));

// BOXES
export const UpperContentBox = styled(Box)(({theme}) => ({
    display:'flex',
    border: 'solid 2px',
    borderRadius: '10px',
    padding: "0.6rem 0",
    // backgroundColor:'green',
    [theme.breakpoints.up('xs')]: {
        alignItems:'center',
        justifyContent:'flex-end',
        width: '46%',
        // height: '9vh',
    },
    [theme.breakpoints.up('sm')]: {
        alignItems:'center',
        justifyContent:'center',
        width: '46%',
        // height: '9vh',
    },
    [theme.breakpoints.up('md')]: {
        width: '44%',
        // height: '15vh',
    },
    [theme.breakpoints.up('xl')]: {
        width: '45%',
        // height: '15vh',
    },
}))