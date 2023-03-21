import React from 'react';
import SignIn from './components/signin/index';
import { Box } from '@mui/material';

import Dashboard from './components/Sample';
// import Dashboard from './pages/dashboard';


function App() {
  return (
    <Box>
      {/* <SignIn /> */}
      <Dashboard />
      
    </Box>
  );
}

export default App;