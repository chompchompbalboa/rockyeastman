//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'

import TextContainer from '../lib/TextContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Contact = () => {
  return (
    <TextContainer top="200px" fontSize="11px" lineHeight="12px" contentEditable>
    Law Office Of A.L. Redline, PLLC
    <br/>
    Serving Washington State
    <br/><br/>
    (PH) 425-879-4628
    <br/><br/>
    <StyledLink href="mailto:anita@redlinelaw.net">Anita@redlinelaw.net</StyledLink>
    <br/><br/><br/><br/>
    <ContactContainer>
    Call or e-mail the Law Office of A.L. Redline today for a legal advocate 
    that provides 100% dedication, a collaborative approach and a willingness 
    to go the distance, call or email the Law Office of A.L. Redline today. If 
    you have an immediate need, our initial consultation can help you 
    put your legal concerns in context to make the right decisions. Remote 
    location consultation available upon request.
    <br/><br/>
    "When you so much as suspect a potential complaint, get advice
    before a problem becomes expensive or devastating. If you are 
    starting, operating, or defending an adult family home, please 
    consider legal counseling through the Law Office of A.L. Redline."
    </ContactContainer>
    </TextContainer>
  )
}

const ContactContainer = styled.div`
  width: 362px;
`

const StyledLink = styled.a`
  color: blue;
  text-decoration: underline;
`

export default Contact