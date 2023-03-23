import Header from '../signin/header';
import CheckEmailBody from './checkEmailBody';
import Footer from '../signin/footer';
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