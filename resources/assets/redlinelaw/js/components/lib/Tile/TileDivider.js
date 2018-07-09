//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TileDivider = (props) => {
  return (
    <Container {...props} />
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
TileDivider.propTypes = {
  backgroundColor: string,
  height: string,
  margin: string,
  padding: string,
  width: string
}

TileDivider.defaultProps = {
  backgroundColor: "white",
  height: "0.5vh",
  margin: "0 0 0 0",
  padding: "0 0 0 0",
  width: "25%"
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  background-color: ${props => props.backgroundColor};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
`

export default TileDivider