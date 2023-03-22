import React from 'react'
import { Grid } from '@mui/material'
import axios from "axios"
import Image from 'mui-image'
import SignLogo from '../../images/sign-logo.svg'
import * as SBDesign from './signin.style.js'
import { LoginSocialGoogle } from "reactjs-social-login"
import { GoogleLoginButton } from "react-social-login-buttons"

export default function SignBox(){

    const login = (provider, data) => {
        axios.post("http://localhost:5000/users", { 
            email: data.email, 
            family_name: data.family_name,
            given_name: data.given_name,
            picture: data.picture
        })
        .then(() => {
            console.log("ok");
        });
        console.log(provider, data);
        console.log(data.email);
    }

    return(
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
                            login(provider, data)
                        }}
                        onReject={(err) => {
                            console.log(err);
                        }}
                    >
                        <GoogleLoginButton />
                    </LoginSocialGoogle>
                </Grid>
            </SBDesign.GridSignBox>
        </SBDesign.SignBox>
    )
}