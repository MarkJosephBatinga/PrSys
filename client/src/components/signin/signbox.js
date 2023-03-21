import React from 'react'
import { Grid } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import Image from 'mui-image'
import SignLogo from '../../images/sign-logo.svg'
import * as SBDesign from './signinstyles'

export default function SignBox(){

    return(
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
                <SBDesign.SignBtn variant="contained" startIcon={ <GoogleIcon />}  >
                    Sign In with Google
                </SBDesign.SignBtn>
            </Grid>
        </SBDesign.GridSignBox>
    )
}