import { Stack } from '@mui/material'
import {useAuthState} from 'react-firebase-hooks/auth';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase';
import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Body from './body'

export default function Dashboard(){
    const [user, loading] = useAuthState(auth);
    const [ userData, setUserData ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate("/")
        }else {
            getUserData(user.email);
        }
    }, [user, navigate]);

    const getUserData = (email) => {
        axios.get(`http://localhost:5000/users/email?email=${email}`)
            .then((response) => {
                setUserData(response.data);
            })
            .catch((e) => {
                console.log(`get user error: ${e}`);
            })
    };


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
                                <Header picture = {(userData.length === 1? (userData[0].picture): (null))} />
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