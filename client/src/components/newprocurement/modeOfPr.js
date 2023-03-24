import { FormControl } from '@mui/material';
import React from 'react'
import * as FormDesign from './newprocurement.style/modeOfPr.style'

export default function ModeOfPrSelect(){
    const [mode, setMode] = React.useState('');

    const handleChange = (event) => {
        setMode(event.target.value);
    };

    return(
            <FormControl>
                <FormDesign.FormSelect
                labelId="mode-of-pr"
                id="mode-of-pr"
                value={mode}
                label=""
                onChange={handleChange}
            >
                <FormDesign.StyledMenuItem value="">
                <em>None</em>
                </FormDesign.StyledMenuItem>
                <FormDesign.StyledMenuItem value='Mark Joseph Batinga'>Mark Joseph Batinga</FormDesign.StyledMenuItem>
                <FormDesign.StyledMenuItem value='Juanette Catalene Lictaoa'>Juanette Catalene Lictaoa</FormDesign.StyledMenuItem>
                <FormDesign.StyledMenuItem value='Vahn Allen F. Tadije'>Vahn Allen F. Tadije</FormDesign.StyledMenuItem>
            </FormDesign.FormSelect>
            </FormControl>
    )
}
