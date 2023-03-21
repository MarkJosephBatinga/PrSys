import React from 'react'
import Header from './header'
import ErrorBox from './errorbox'
import { useRouteError } from "react-router-dom";
import { Box, Stack } from '@mui/material';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

  return (
    <div>
      <Box>
        <Stack height="100vh">
        <Header />
        <ErrorBox error={error.statusText}/>
        </Stack>
      </Box>
    </div>
  )
}
