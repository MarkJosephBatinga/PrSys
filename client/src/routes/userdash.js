import {useAuthState} from 'react-firebase-hooks/auth';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar/sidebar';
import Header from '../components/header/header';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/system';



export default function UserDash() {
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
    
  return (
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
                            <Outlet />
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
