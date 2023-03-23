import React from 'react'
import * as HeadDesign from './dashboard.style/header.style'
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import NotifIcon from '@mui/icons-material/NotificationsNoneOutlined';

export default function Header() {
    return(
        <HeadDesign.DashHeader>
            <HeadDesign.HeaderIconWrapper>
                <AccountIcon />
                <NotifIcon />
            </HeadDesign.HeaderIconWrapper>
        </HeadDesign.DashHeader>
    )
}