import React from "react";
import * as UpperBodyDesign from './dashboard.style/upperbody.style'
import * as LowerBodyDesign from './dashboard.style/lowerbody.style'
import * as TextDesign from "./dashboard.style/body.style";
import { Stack } from "@mui/system";


export default function Body(){
    return(
        <Stack>
            <TextDesign.BoldText>
                Here's an overview of today's report
            </TextDesign.BoldText>

                {/*START OF OUTER STACK */}
                <UpperBodyDesign.UpperContentStack direction={{xs:'column', md:'row', }}>

                    {/* START OF FIRST BOX WRAPPER */}
                    <UpperBodyDesign.UpperContentBoxWrapperStack1 direction='row'>
                        <UpperBodyDesign.UpperContentBox>
                            <Stack spacing={2} >
                                <TextDesign.BoxNumbertext1>
                                    30
                                </TextDesign.BoxNumbertext1>
                                <TextDesign.BoxText>
                                    On-going Procurements
                                </TextDesign.BoxText>
                            </Stack>
                        </UpperBodyDesign.UpperContentBox>
                        <UpperBodyDesign.UpperContentBox>
                            <Stack spacing={2} >
                                <TextDesign.BoxNumbertext2>
                                    40
                                </TextDesign.BoxNumbertext2>
                                <TextDesign.BoxText>
                                    Approved Procurements
                                </TextDesign.BoxText>
                            </Stack>
                        </UpperBodyDesign.UpperContentBox>
                    </UpperBodyDesign.UpperContentBoxWrapperStack1>
                    {/* END OF FIRST BOX WRAPPER */}

                    {/* START OF SECOND BOX WRAPPER */}
                    <UpperBodyDesign.UpperContentBoxWrapperStack2 direction='row' justifyContent='flex-start'>
                        <UpperBodyDesign.UpperContentBox>
                            <Stack spacing={2} >
                                <TextDesign.BoxNumbertext3>
                                    10
                                </TextDesign.BoxNumbertext3>
                                <TextDesign.BoxText>
                                    Disapproved Procurements
                                </TextDesign.BoxText>
                            </Stack>
                        </UpperBodyDesign.UpperContentBox>
                        <UpperBodyDesign.UpperContentBox>
                            <Stack spacing={2} >
                                <TextDesign.BoxNumbertext1>
                                    5
                                </TextDesign.BoxNumbertext1>
                                <TextDesign.BoxText>
                                    On-going Procurements
                                </TextDesign.BoxText>
                            </Stack>
                        </UpperBodyDesign.UpperContentBox>
                    </UpperBodyDesign.UpperContentBoxWrapperStack2>
                    {/* END OF SECOND BOX WRAPPER */}

                </UpperBodyDesign.UpperContentStack>
                {/* END OF OUTER STACK */}

             {/* START OF LOWER BODY    */}
            <LowerBodyDesign.LowerBody>
            </LowerBodyDesign.LowerBody>
            {/* END OF LOWER BODY */}
        </Stack>
    )
}