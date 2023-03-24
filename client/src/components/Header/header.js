import { Search } from '@mui/icons-material'
import { IconButton} from '@mui/material'
import React from 'react'
import Profile from '../../images/profile.png'
import * as HeadDesign from './header.style'
// import { CircleNotifications } from '@mui/icons-material';

export default function Header() {
    return(
        <HeadDesign.HeaderGrid>
            <HeadDesign.HeaderBox>
                <HeadDesign.SearchPaper>
                    <HeadDesign.SearchInput placeholder='Search'></HeadDesign.SearchInput>
                    <IconButton><Search /></IconButton>
                </HeadDesign.SearchPaper>

                <HeadDesign.Notification />
                <HeadDesign.HeaderAvatar src={Profile}></HeadDesign.HeaderAvatar>
            </HeadDesign.HeaderBox>
        </HeadDesign.HeaderGrid>
    )
}