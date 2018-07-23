//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'

import RedText from '../lib/RedText'
import TextContainer from '../lib/TextContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Home = () => {
  return (
    <TextContainer fontSize="10px" letterSpacing="-0.5px" top="305px" contentEditable>	
    <RedText>At the Law Office of A.L. Redline,</RedText> we understand what it means to manage a successful business. We know how much time & effort it takes to keep things running profitably and how tough the competition is. That's why we've built our business law practice around the needs and interests of our clients - providing world class legal service, uncompromising integrity, & client commitment - with a flexible consultation structure that makes getting things accomplished convenient and easy.
    <br /><br />
    Smart, creative, & success-oriented business professionals are our focus. We provide a full range of legal services & unsurpassed availability including, remote site consultations, 24/7 email and message access for business legal services with a focus on ADULT FAMILY HOMES in the following areas:
    <br /><br /><br />
    • Informal Dispute Resolutions and Administrative Hearings<br />
    • Analyze the SOD in preparing for your defense<br />
    • Prepare you for DSHS inspections and investigations<br />
    • Assist you with employee concerns<br />
    • Create contracts or agreements and policy procedure manuals<br />
    • Explain the WACs - what you can and cannot do<br />
    • Consultations throughout the year<br />
    </TextContainer>
  )
}

export default Home