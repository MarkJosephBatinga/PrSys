import React from 'react'
import * as CEDesign from './checkEmail.styles'
import Image from 'mui-image'
import CheckEmail from '../../images/checkEmail.svg'

export default function checkEmailBody() {

  return (
    <CEDesign.CheckStack>
        <CEDesign.ImageBox>
            <Image src={CheckEmail} />
        </CEDesign.ImageBox>

        <CEDesign.TextStack>
            <CEDesign.ConfirmText>Check Email Confirmation</CEDesign.ConfirmText>
            <CEDesign.DetailsText>
                We sent an email confirmation to hello@gmail.com. 
                Check your email and click on the confirmation link to continue. 
                The link will expire after an hour.
            </CEDesign.DetailsText>
            
        </CEDesign.TextStack>
    </CEDesign.CheckStack>
  )
}
