//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'

import Tile from './__Tile'
import TileHeader from './__TileHeader'
import TileParagraph from './__TileParagraph'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AboutAnita = (props) => {
  return (
    <Tile  {...props}
      overlayColor="rgba(0,0,0,1)"
      backgroundImage="/assets/redlinelaw/img/headshot.png">
      <TileHeader>A down to earth, practical approach to legal concerns</TileHeader>
      <TileParagraph>"I've built my business around the belief that today's businesses have a need for expert and effective legal counsel on their own terms and at their own convenience.</TileParagraph>
      <TileParagraph>There is a depth of intelligence in clients that deserves respect - and a desire to collaborate that breaks the barrier of past legal traditions. My consistent work with business professionals in their own work environment allows me to see their business within their own world. I've been able to leverage that to extraordinary advantage for them."</TileParagraph>
      <TileParagraph>An avid supporter of the arts in the Puget Sound area, Anita Redline holds a Juris Doctorate degree from Seattle University, School of Law. She's a member of the American Bar Association, the Washington State Bar Association, the King County Bar Association and the Snohomish County Bar Associations.</TileParagraph>
    </Tile>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------

const Container = styled.div`
`

export default AboutAnita