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
const TileBackgroundImage = (props) => {
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
TileBackgroundImage.propTypes = {
  overlayColor: string,
  src: string
}

TileBackgroundImage.defaultProps = {
  overlayColor: "rgba(255,255,255,0)",
  src: "/img/image-not-found.png",
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledTileContainer = styled(TileContainer)`
  background: ${props => "linear-gradient(" + props.overlayColor + "," + props.overlayColor + "), url(" + props.src + ")"};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`

export default TileBackgroundImage