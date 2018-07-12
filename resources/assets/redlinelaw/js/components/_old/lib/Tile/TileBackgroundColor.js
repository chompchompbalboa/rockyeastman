//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import Tile from './Tile'
import TileContainer from './TileContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TileBackgroundColor = (props) => {
  const { children } = props
  return (
    <Tile {...props}>
      <StyledTileContainer {...props}>
        {children}
      </StyledTileContainer>
    </Tile>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
TileBackgroundColor.propTypes = {
  backgroundColor: string
}

TileBackgroundColor.defaultProps = {
  backgroundColor: "red"
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledTileContainer = styled(TileContainer)`
  background-color: ${props => props.backgroundColor};
`

export default TileBackgroundColor