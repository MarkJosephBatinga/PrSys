import React from "react";
import * as TextDesign from '../typography/textDesign'
import { Stack } from "@mui/system";
import ModeOfPrSelect from "./modeOfPr";


export default function NewProc(){
    return(

        <Stack>
            <TextDesign.BoldText>
                New Procurement
            </TextDesign.BoldText>
            <ModeOfPrSelect />
        </Stack>
    )
}