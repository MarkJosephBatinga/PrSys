import React from "react";
import * as UpperBodyDesign from './dashboard.style/upperbody.style'
import * as LowerBodyDesign from './dashboard.style/lowerbody.style'
import * as TextDesign from "./dashboard.style/body.style";
import { Stack } from "@mui/system";


export default function Body(){
    return(
        <Stack direction='column' spacing={0}>

            <TextDesign.BoldText>
                Here's an overview of today's report
            </TextDesign.BoldText>

                <UpperBodyDesign.UpperContentStack direction={{xs:'column', sm:'row'}}>
                    <UpperBodyDesign.UpperContentBoxWrapperStack direction='row'>
                        <UpperBodyDesign.UpperContentBox>
                            <Stack spacing={2}>
                                <TextDesign.BoxNumbertext1>
                                    30
                                </TextDesign.BoxNumbertext1>
                                <TextDesign.BoxText>
                                    On-going Procurements
                                </TextDesign.BoxText>
                            </Stack>
                        </UpperBodyDesign.UpperContentBox>
                        <UpperBodyDesign.UpperContentBox>
                            <Stack spacing={2}>
                                <TextDesign.BoxNumbertext2>
                                    40
                                </TextDesign.BoxNumbertext2>
                                <TextDesign.BoxText>
                                    Approved Procurements
                                </TextDesign.BoxText>
                            </Stack>
                        </UpperBodyDesign.UpperContentBox>
                    </UpperBodyDesign.UpperContentBoxWrapperStack>

                    <UpperBodyDesign.UpperContentBoxWrapperStack direction='row'>
                        <UpperBodyDesign.UpperContentBox>
                            <Stack spacing={2}>
                                <TextDesign.BoxNumbertext3>
                                    10
                                </TextDesign.BoxNumbertext3>
                                <TextDesign.BoxText>
                                    Disapproved Procurements
                                </TextDesign.BoxText>
                            </Stack>
                        </UpperBodyDesign.UpperContentBox>
                        <UpperBodyDesign.UpperContentBox>
                            <Stack spacing={2}>
                                <TextDesign.BoxNumbertext1>
                                    5
                                </TextDesign.BoxNumbertext1>
                                <TextDesign.BoxText>
                                    On-going Procurements
                                </TextDesign.BoxText>
                            </Stack>
                        </UpperBodyDesign.UpperContentBox>
                    </UpperBodyDesign.UpperContentBoxWrapperStack>
                </UpperBodyDesign.UpperContentStack>

            <LowerBodyDesign.LowerBody>
            </LowerBodyDesign.LowerBody>
        </Stack>
    )
}