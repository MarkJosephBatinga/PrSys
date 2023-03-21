import { Stack } from '@mui/material'
import React from 'react'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'

export default function Dashboard(){
    return(
        <Stack direction="row" minHeight='100vh' >
            <Sidebar />

            <Stack flex={6}>
                <Header />
            </Stack>
        </Stack>
    )
}