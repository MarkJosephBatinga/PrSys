import React from 'react'
import * as HDesign from './error.style.js'
import Image from 'mui-image'
import SignLogo from '../../images/sign-logo.svg'

export default function header() {
  return (
    <HDesign.HeaderBox>
        <HDesign.HeaderStack>
            <HDesign.HeaderText>
                DICT RO1
            </HDesign.HeaderText>
            <HDesign.LogoBox>
                <Image src={SignLogo} />
            </HDesign.LogoBox>
        </HDesign.HeaderStack>
    </HDesign.HeaderBox>
  )
}
