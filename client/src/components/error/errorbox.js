import React from 'react'
import * as EDesign from './error.style.js'
import Image from 'mui-image'
import NotFound from '../../images/404.svg'
import { useNavigate } from "react-router-dom";

export default function Errorbox(props) {
 const navigate = useNavigate();

 function HandleClick(e) {
    e.preventDefault()

    navigate('/')
 }

  return (
    <EDesign.ErrorStack>
        <EDesign.ImageBox>
            <Image src={NotFound} />
        </EDesign.ImageBox>
       <EDesign.TextBox>
            <EDesign.ResultText>NO RESULTS FOUND</EDesign.ResultText>
            <EDesign.ContentText>Error: {props.error}</EDesign.ContentText>
            <EDesign.NavButton onClick={HandleClick}>GO BACK</EDesign.NavButton>
       </EDesign.TextBox>
    </EDesign.ErrorStack>
  )
}
