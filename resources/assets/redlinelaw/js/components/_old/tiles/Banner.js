//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import colors from '../../styles/colors'

import TileBackgroundImage from '../lib/Tile/TileBackgroundImage'
import TileDivider from '../lib/Tile/TileDivider'
import TileText from '../lib/Tile/TileText'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Banner = (props) => {
  return (
    <TileBackgroundImage {...props} 
      alignItems="flex-start"
      src="/assets/redlinelaw/img/edmondsferry.jpg">
      <TileDivider
        backgroundColor={colors.red}
        margin="50% 0 3% 10%"
        width="10%"/>
      <TileText
        fontSize="28px"
        fontWeight="300"
        letterSpacing="0.1em"
        padding="0 0 0 10%">
        The Attorney With Integrity Building Trust
      </TileText>
    </TileBackgroundImage>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
const Logo = styled.img`
  margin: 0 0 3vh 0;
  width: 40%;
  height: auto;
`

export default Banner