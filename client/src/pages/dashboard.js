import { Stack } from '@mui/material'
import React from 'react'
import Header from '../components/Header/header'
import Sidebar from '../components/Sidebar/sidebar'

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