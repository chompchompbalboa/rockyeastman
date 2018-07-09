//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import Tile from './Tile'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TileContainer = (props) => {
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
TileContainer.propTypes = {
  alignItems: string,
  flexDirection: string,
  justifyContent: string
}

TileContainer.defaultProps = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center"
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

export default TileContainer