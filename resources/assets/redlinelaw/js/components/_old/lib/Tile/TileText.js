//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TileText = (props) => {
  const { children } = props
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
TileText.propTypes = {
  color: string,
  fontSize: string,
  fontStyle: string,
  fontWeight: string,
  letterSpacing: string,
  lineHeight: string,
  margin: string,
  padding: string,
  textTransform: string,
  textAlign: string,
  whiteSpace: string,
  width: string
}

TileText.defaultProps = {
  color: "white",
  fontSize: "1em",
  fontStyle: "normal",
  fontWeight: "400",
  letterSpacing: "normal",
  lineHeight: "normal",
  margin: "0 0 0 0",
  padding: "0 0 0 0",
  textTransform: "none",
  textAlign: "center",
  whiteSpace: "normal",
  width: "auto"
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-style: ${props => props.fontStyle};
  font-weight: ${props => props.fontWeight};
  letter-spacing: ${props => props.letterSpacing};
  line-height: ${props => props.lineHeight};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};
  text-transform: ${props => props.textTransform};
  white-space: ${props => props.whiteSpace};
  width: ${props => props.width};
`

export default TileText