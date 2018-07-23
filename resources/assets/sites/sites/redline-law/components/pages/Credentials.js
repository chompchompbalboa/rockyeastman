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
const Credentials = () => {
  return (
    <TextContainer top="185px" fontSize="11px" lineHeight="12px" contentEditable>
      
      <RedText>Anita L. Redline</RedText>
      <br/><br/>
      "I've built my business around the belief that today's businesses have a need for expert and effective legal counsel on their own terms and at their own convenience. There is a depth of intelligence in clients that deserves respect - and a desire to collaborate that breaks the barrier of past legal traditions. My consistent work with business professionals in their own work environment allows me to see their business within their own world. I've been able to leverage that to extraordinary advantage for them."
      <br/><br/>
      Anita Redline has a down to earth, practical approach to legal concerns that helps clients understand their situation and their legal options. Her straight forward manner and in-depth understanding of the law demystifies the situation and clarifies underlying and related elements so that business professionals are empowered to make sound, well thought-out decisions.
      <br/><br/>
      <RedText>Interests:</RedText>
      <br/>
      Anita Redline supports the Arts in the Puget Sound area in a variety of ways. She annually subscribes to the Seattle Symphony, the Pacific Northwest Ballet, the Act Theater, and the Rep, to name a few. She also donates a percentage of the Law Office revenues to the Arts as well. 
      <br/><br/>
      <RedText>Credentials:</RedText>
      <br/>
      <CredentialsContainer>
      Anita Redline holds a Juris Doctorate degree from Seattle University, School of Law. She's a member of the American Bar Association, the Washington State Bar Association, the King County Bar Association and the Snohomish County Bar Associations and is also a member of many subset legal associations in the Puget Sound area. Anita Redline belongs to the Law Office Management Assistance Program as appointed by the WSBA Board of Governors.
      </CredentialsContainer>
    </TextContainer>
  )
}

const CredentialsContainer = styled.div`
  width: 332px;
`

export default Credentials