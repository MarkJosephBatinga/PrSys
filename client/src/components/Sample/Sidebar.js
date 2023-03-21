import React from 'react'
import * as sideDesign from './dashstyle'
import SigninLogo from '../../images/sign-logo.svg'
import Image from 'mui-image'

export default function Side() {
    return (
        <sideDesign.sideBox>
            <sideDesign.SideList>
                <Image src={SigninLogo} />
                <sideDesign.LogoText>
                    DICT R01
                </sideDesign.LogoText>
            </sideDesign.SideList>
                <sideDesign.ListText>
                    Dashboard
                </sideDesign.ListText>
                <sideDesign.ListText>
                    Procurement
                </sideDesign.ListText>
                <sideDesign.ListText>
                    PPMP
                </sideDesign.ListText>
                <sideDesign.ListText>
                    Purchase Request
                </sideDesign.ListText>
                <sideDesign.ListText>
                    Sign Out
                </sideDesign.ListText>
            
        </sideDesign.sideBox>
    )
}