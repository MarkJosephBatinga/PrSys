import { DashboardOutlined, InsertDriveFileOutlined } from '@mui/icons-material'
import {ListItem, ListItemButton} from '@mui/material'
import Image from 'mui-image'
import DBLogo from '../../images/db-logo.svg'
import React from 'react'
import * as SDesign from './sidebar.style'

export default function Sidebar(){
    return(
        <SDesign.SidebarBox flex={1} >
            <SDesign.SideLogo>
                <Image src={DBLogo}></Image>
            </SDesign.SideLogo>

            <SDesign.SidebarList>
                <ListItem> 
                    <SDesign.Title>
                        DICT RO1
                    </SDesign.Title>
                </ListItem>

                <SDesign.SidebarItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <SDesign.SidebarIcon><DashboardOutlined /></SDesign.SidebarIcon>
                        <SDesign.SidebarText>Dashboard </ SDesign.SidebarText>
                    </ListItemButton>
                </SDesign.SidebarItem>

                <SDesign.SidebarItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <SDesign.SidebarIcon><InsertDriveFileOutlined /></SDesign.SidebarIcon>
                        <SDesign.SidebarText>Procurement </ SDesign.SidebarText>
                    </ListItemButton>
                </SDesign.SidebarItem>
            </SDesign.SidebarList>

        </SDesign.SidebarBox>
    )
}