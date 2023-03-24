import React from "react";
import * as UpperBodyDesign from './dashboard.style/upperbody.style'
import * as LBDesign from './dashboard.style/lowerbody.style'
import * as TextDesign from "./dashboard.style/body.style";
import { Stack } from "@mui/system";
import { Table, TableBody, TableContainer,} from "@mui/material";


export default function Body(){
    
    //procNum, name, mode, status, date
    function createData(procNum, name, mode, status, date) {
        return {procNum, name, mode, status, date};
    }

    const rows= [
        createData('R1-2023-03-004', 'Procurement 1', 'Small Value Procurement', 'On-going', 'March 12, 2023'),
        createData('R1-2023-03-005', 'Procurement 2', 'Small Value Procurement', 'On-going', 'March 13, 2023'),
        createData('R1-2023-03-006', 'Procurement 3', 'Small Value Procurement', 'On-going', 'March 14, 2023'),
        createData('R1-2023-03-007', 'Procurement 4', 'Small Value Procurement', 'On-going', 'March 15, 2023'),
        createData('R1-2023-03-008', 'Procurement 5', 'Small Value Procurement', 'On-going', 'March 16, 2023'),
    ];

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
            <LBDesign.BodyStack>
                <LBDesign.BodyTitle>Procurement</LBDesign.BodyTitle>

                <TableContainer>
                    <Table>
                        <TableBody>

                            {rows.map((row) => (
                                <LBDesign.Row key={row.procNum}>
                                    <LBDesign.ProcNumCell>{row.procNum}</LBDesign.ProcNumCell>
                                    <LBDesign.DetailCell>{row.name}</LBDesign.DetailCell>
                                    <LBDesign.DetailCell>{row.mode}</LBDesign.DetailCell>
                                    <LBDesign.StatusCell>
                                        <LBDesign.StatusBox>
                                            {row.status}
                                        </LBDesign.StatusBox>
                                    </LBDesign.StatusCell>
                                    <LBDesign.DetailCell>{row.date}</LBDesign.DetailCell>
                                </LBDesign.Row>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </LBDesign.BodyStack>
            {/* END OF LOWER BODY */}
        </Stack>
    )
}