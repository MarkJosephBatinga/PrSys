import Header from './header';
import CheckEmailBody from './checkEmailBody';
import Footer from './footer';
import { Box, Stack } from '@mui/material';

function checkEmail(){
    return (
        <Box>
            <Stack height="100vh">
                <Header />
                <CheckEmailBody />
                <Footer />
            </Stack>
        </Box>
    );
}

export default checkEmail;