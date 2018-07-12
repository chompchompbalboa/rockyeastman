//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { bool, number, string } from 'prop-types'
import styled from 'styled-components'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Tile = (props) => {
  const { top, right, bottom, left, children } = props
  const padding = setPaddings(top, right, bottom, left)
  return (
    <Container padding={padding} {...props}>
      {children}
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Tile.propTypes = {
  tileHeight: string,
  tileWidth: number,
  top: bool,
  right: bool,
  bottom: bool,
  left: bool
}

Tile.defaultProps = {
  tileHeight: "70vh",
  tileWidth: 5,
  top: false,
  right: false,
  bottom: false,
  left: false
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  height: ${props => props.tileHeight};
  width: ${props => props.tileWidth * 10 + "%"};
  background-color: white;
  padding-top: ${props => props.padding.top};
  padding-right: ${props => props.padding.right};
  padding-bottom: ${props => props.padding.bottom};
  padding-left: ${props => props.padding.left};
`
//-----------------------------------------------------------------------------
// Functions
//-----------------------------------------------------------------------------
const setPaddings = (positionTop, positionRight, positionBottom, positionLeft) => {
  const padding = 0.75
  let paddingTop, paddingRight, paddingBottom, paddingLeft
  // Top
  paddingTop = (padding / 2)
  paddingTop = (positionBottom ? padding : paddingTop)
  paddingTop = (positionTop ? 0 : paddingTop)
  // Right
  paddingRight = (positionLeft ? padding : 0)
  // Bottom
  paddingBottom = (padding / 2)
  paddingBottom = (positionTop ? padding : paddingBottom)
  paddingBottom = (positionBottom ? 0 : paddingBottom)
  // Left
  paddingLeft = (positionRight ? padding : 0)
  return {
    top: paddingTop + "vh",
    right: paddingRight + "vh",
    bottom: paddingBottom + "vh",
    left: paddingLeft + "vh"
  }
}

export default Tile