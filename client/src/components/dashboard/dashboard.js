import { Stack } from '@mui/material'
import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Body from './body'

export default function Dashboard(){
    return(
        <Stack direction="row" minHeight='100vh' >
            <Sidebar />

            <Stack flex={6}>
                <Header />
                <Body />
            </Stack>
        </Stack>
    )
}