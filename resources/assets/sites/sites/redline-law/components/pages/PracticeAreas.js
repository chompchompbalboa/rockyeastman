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
const PracticeAreas = () => {
  return (
    <TextContainer top="200px" fontSize="11px" lineHeight="13px" contentEditable>
      <RedText>Administration Law</RedText> for AFH providers and licensed professionals 
      <br /><br />
      <RedText>Business Law</RedText> for business owners 
      <br /><br />
      <RedText>Elder Law</RedText> for vulnerable adults 
      <br /><br />
      <RedText>Employee Law</RedText> for employers 
      <br /><br />
      <RedText>Presentation at Seminars</RedText> for the WSRCC and other venues 
    </TextContainer>
  )
}

export default PracticeAreas