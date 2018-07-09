//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'

import TileBackgroundColor from '../lib/Tile/TileBackgroundColor'
import TileDivider from '../lib/Tile/TileDivider'
import TileHorizontalContainer from '../lib/Tile/TileHorizontalContainer'
import TileText from '../lib/Tile/TileText'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const BusinessInfo = (props) => {
  return (
    <TileBackgroundColor {...props}
      src="/assets/redlinelaw/img/edmondsferry.jpg">
      <StickyContainer {...props}>
        <Headshot
          src="/assets/redlinelaw/img/circular_headshot.png"/>
        <TileText
          fontSize="40px"
          fontWeight="700"
          textTransform="uppercase">
          Anita L. Redline
        </TileText>
        <TileText
          color="gray"
          fontSize="16px"
          fontWeight="400"
          textTransform="uppercase">
          Attorney at Law
        </TileText>
        <TileDivider 
          margin="3vh 0"
          width="50%"
          height="2px"/>
        <TileText
          fontSize="15px"
          fontStyle="italic"
          fontWeight="300"
          lineHeight="22px"
          width="80%">
          “I've built my business around the belief that today's businesses have a need for expert and effective legal counsel on their own terms and at their own convenience.”
        </TileText>
        <TileHorizontalContainer>
          Hello
        </TileHorizontalContainer>
      </StickyContainer>
    </TileBackgroundColor>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StickyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
`
const Headshot = styled.img`
  margin: 15vh 0 3vh 0;
  width: 40%;
  height: auto;
`


export default BusinessInfo