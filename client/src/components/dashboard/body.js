import React from "react";
import * as UpperBodyDesign from './upperbody.style'
import * as LowerBodyDesign from './lowerbody.style'
import * as TextDesign from "./body.style";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";


export default function Body(){
    return(
        <Grid direction='column' spacing={0}>
            <UpperBodyDesign.UpperContent>
            <TextDesign.BoldText>
                Here's an overview of today's report
            </TextDesign.BoldText>
                <UpperBodyDesign.UpperContentBoxWrapper>
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
                </UpperBodyDesign.UpperContentBoxWrapper>
            </UpperBodyDesign.UpperContent>
            <LowerBodyDesign.LowerBody>
            </LowerBodyDesign.LowerBody>
        </Grid>
    )
}