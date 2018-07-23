//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Home = ({ contentEditable, fontSize, letterSpacing, lineHeight, top, children }) => {
  return (
    <Container
      contentEditable={contentEditable}
      fontSize={fontSize}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      top={top}>
      {children}
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Home.defaultProps = {
  contentEditable: false,
  fontSize: "11px",
  top: "175px",
  letterSpacing: "none",
  lineHeight: "13px"
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: 160px;
  width: 625px;
  font-family: arial, serif;
  font-size: ${props => props.fontSize};
  font-weight: 400;
  letter-spacing: ${props => props.letterSpacing};
  line-height: ${props => props.lineHeight};
`

export default Home