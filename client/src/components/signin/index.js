import Header from './header';
import SignBox from './signbox';
import Footer from './footer';
import { Box, Stack } from '@mui/material';

function SignIn(){
    return (
        <Box>
            <Stack height="100vh">
                <Header />
                <SignBox />  
                <Footer />
            </Stack>
        </Box>
    );
}

export default SignIn;