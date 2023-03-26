import { Search } from '@mui/icons-material'
import { IconButton} from '@mui/material'
import React from 'react'
import Profile from '../../images/profile.png'
import * as HDesign from './header.style'
// import { CircleNotifications } from '@mui/icons-material';

export default function Header(props) {
    return(
        <HDesign.HeaderStack>
            <HDesign.SearchStack>
                <HDesign.SearchPaper>
                    <HDesign.SearchInput placeholder='Search'></HDesign.SearchInput>
                    <IconButton><Search /></IconButton>
                </HDesign.SearchPaper>
            </HDesign.SearchStack>
            <HDesign.NotifStack>
                <HDesign.Notification />
                <HDesign.HeaderAvatar src={props != null? (props.picture): (Profile)}></HDesign.HeaderAvatar>
            </HDesign.NotifStack>
        </HDesign.HeaderStack>
    )
}