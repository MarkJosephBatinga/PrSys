import { Stack } from '@mui/material'
import {useAuthState} from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase';
import React, { useEffect } from 'react'
import Header from './header'
import Sidebar from '../sidebar/sidebar'
import Body from './body'

export default function Dashboard(){
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!user) {
            console.log(error);
            navigate("/")
        }
    });

    return(
        <div>
            {loading? (
                   <div>Loading...</div>
               ): (
                   <div>
                       {user? (
                        <Stack direction="row" minHeight='100vh' >
                            <Sidebar />
                            <Stack flex={6}>
                                <Header />
                                <Body />
                            </Stack>
                         </Stack>
                       ): (
                           <div>
                             Redirecting....
                           </div>
                       )
                       }
                   </div>
               )
               }
        </div>
    )
}