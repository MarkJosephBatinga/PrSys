import { AssignmentOutlined, DashboardOutlined, InsertDriveFileOutlined, LocalOfferOutlined, Logout } from '@mui/icons-material'
import Image from 'mui-image'
import DBLogo from '../../images/db-logo.svg'
import React from 'react'
import * as SDesign from './sidebar.style'

export default function Sidebar(){
    return(
        <SDesign.SidebarStack flex={1} >
            <SDesign.LogoBox>
                <Image src={DBLogo}></Image>
            </SDesign.LogoBox>

            <SDesign.Title>
                DICT RO1
            </SDesign.Title>


            <SDesign.SidebarList>

                <SDesign.SidebarItem >
                    <SDesign.SidebarBtn component="a" href="#home">
                        <SDesign.SidebarIcon><DashboardOutlined /></SDesign.SidebarIcon>
                        <SDesign.SidebarText>Dashboard </ SDesign.SidebarText>
                    </SDesign.SidebarBtn>
                </SDesign.SidebarItem>

                <SDesign.SidebarItem disablePadding>
                    <SDesign.SidebarBtn component="a" href="#home">
                        <SDesign.SidebarIcon><AssignmentOutlined /></SDesign.SidebarIcon>
                        <SDesign.SidebarText>Procurement </ SDesign.SidebarText>
                    </SDesign.SidebarBtn>
                </SDesign.SidebarItem>

                <SDesign.SidebarItem disablePadding>
                    <SDesign.SidebarBtn component="a" href="#home">
                        <SDesign.SidebarIcon><InsertDriveFileOutlined /></SDesign.SidebarIcon>
                        <SDesign.SidebarText>PPMP </ SDesign.SidebarText>
                    </SDesign.SidebarBtn>
                </SDesign.SidebarItem>

                <SDesign.SidebarItem disablePadding>
                    <SDesign.SidebarBtn component="a" href="#home">
                        <SDesign.SidebarIcon><LocalOfferOutlined /></SDesign.SidebarIcon>
                        <SDesign.SidebarText>PR</ SDesign.SidebarText>
                    </SDesign.SidebarBtn>
                </SDesign.SidebarItem>

                <SDesign.SidebarItem disablePadding>
                    <SDesign.SidebarBtn component="a" href="#home">
                        <SDesign.SidebarIcon><Logout /></SDesign.SidebarIcon>
                        <SDesign.SidebarText>Sign Out </ SDesign.SidebarText>
                    </SDesign.SidebarBtn>
                </SDesign.SidebarItem>

            </SDesign.SidebarList>

        </SDesign.SidebarStack>
    )
}