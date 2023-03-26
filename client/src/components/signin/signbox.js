import React, {useState, useEffect}  from 'react'
import { Grid, Typography } from '@mui/material'
import axios from "axios"
import Image from 'mui-image'
import SignLogo from '../../images/sign-logo.svg'
import * as SBDesign from './signin.style.js'
import { LoginSocialGoogle } from "reactjs-social-login"
import { GoogleLoginButton } from "react-social-login-buttons"
import {useAuthState} from "react-firebase-hooks/auth"
import {sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink} from "firebase/auth"
import {auth} from "../../firebase"
import {useNavigate, useLocation } from "react-router-dom"

export const SignBox = () => {

    const [user] = useAuthState(auth);
    
    const [ loginLoading, setLoginLoading ] = useState(false);
    const [ loginError, setLoginError ] = useState('');
    
    const [ initialLoading, setInitialLoading ] = useState(false)
    const [ initialError, setInitialError ] = useState('')

    const location = useLocation();
    const {search} = location;
    const navigate = useNavigate();

    useEffect(() => {
        if(user)
        {
            navigate('/dashboard')
        }
    }, [user, navigate])

    useEffect(() => {
        // user is not signed in but the link is valid
        if(isSignInWithEmailLink(auth, window.location.href)){
            // check if user clicks the link on the same device
            let email = localStorage.getItem('email');
            if(!email) {
                email = window.prompt('Please provide your email');
            }
            
            // Login Process
            setInitialLoading(true);
            signInWithEmailLink(auth, localStorage.getItem('email'), window.location.href)
            .then((result) => {
                // Check if user is in the database
                // let data = localStorage.getItem('data');
                // loginDbUser(data);

                localStorage.removeItem('email');
                setInitialLoading(false);
                setInitialError('');
                navigate("/dashboard");
            }).catch((err) => {
                setInitialLoading(false);
                setInitialError(err.message);
                navigate('/');
            })
        }
    }, [search, navigate])


    const loginDbUser = (data) => {
        axios.post("http://localhost:5000/users", { 
            email: data.email, 
            family_name: data.family_name,
            given_name: data.given_name,
            picture: data.picture
        })
        .then(() => {
            console.log("ok");
            firebaseLogin(data)
        })
        .catch((e) => {
            console.log(`set user error: ${e}`);
        })
    }

    const firebaseLogin = (data) => {
        sendSignInLinkToEmail(auth, data.email, {
            //this is the URL that we will redirect back after clicking on the link in mailbox
            url: 'http://localhost:3000/',
            handleCodeInApp: true,
        }).then(() => {
            localStorage.setItem("email", data.email);
            // localStorage.setItem("data", JSON.stringify(data));
            setLoginLoading(false);
            setLoginError('');
            navigate('/checkemail')
        }).catch(err => {
            setLoginLoading(false);
            setLoginError(err.message);
        })
    }

    const login = (data) => {
        axios.get(`http://localhost:5000/users/email?email=${data.email}`)
            .then((response) => {
                setLoginLoading(true);
                if(response.data.length === 0) {
                    loginDbUser(data);
                }
                else {
                    firebaseLogin(data);
                }
            })
            .catch((e) => {
                console.log(`get user error: ${e}`);
            })

           
        
    }


return(
        <div>
            {initialLoading? (
                <div>
                    Loading...
                </div>
            ): (
                <div>
                    {initialError? (
                        <div>
                            Initial Error: {initialError}
                        </div>
                    ):(
                        <div>
                             {user? (
                                <div>
                                    Please Wait...
                                </div>
                                ): (
                                <SBDesign.SignBox>
                                    <SBDesign.GridSignBox container direction="column">
                                        <Grid item marginBottom={2}>
                                            <Image src={SignLogo} />
                                        </Grid>
                        
                                        <Grid item>
                                            <SBDesign.WelcomeText>
                                                Welcome back.
                                            </SBDesign.WelcomeText>
                                        </Grid>
                        
                                        <Grid item>
                                            <SBDesign.SignInText>
                                                Sign in to your account
                                            </SBDesign.SignInText>
                                        </Grid>
                        
                                        <Grid item>
                                            <LoginSocialGoogle
                                                client_id={
                                                    "773879625658-sv5vdvdj602ge4m9teh4jau94gbn0j4k.apps.googleusercontent.com"
                                                }
                                                scope="openid profile email"
                                                discoveryDocs="claims_supported"
                                                access_type='offline'
                                                onResolve={({ provider, data }) => {
                                                    login(data)
                                                }}
                                                onReject={(err) => {
                                                    console.log(err);
                                                }}
                                            >
                                                {loginLoading? (
                                                    <SBDesign.SignInText>
                                                        <Typography component={'span'}>Loading</Typography>
                                                    </SBDesign.SignInText>
                                                ):(
                                                    <GoogleLoginButton />
                                                )}
                                            </LoginSocialGoogle>
                                        </Grid>
                                        <Grid item>
                                            {loginError!==''&&(
                                                <SBDesign.SignInText>
                                                    <Typography component={'span'}>Login Error: {loginError}</Typography>
                                                </SBDesign.SignInText>
                                            )}
                                        </Grid>
                                    </SBDesign.GridSignBox>
                                </SBDesign.SignBox>
                                )}
                        </div>
                    )}
                </div>
            )}
        </div>
       
    )
}