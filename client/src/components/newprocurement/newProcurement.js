import { Stack } from '@mui/material'
import React from 'react'
import Header from '../header/backHeader'
import Sidebar from '../sidebar/sidebar'
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