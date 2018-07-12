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
const AreasOfPractice = (props) => {
  return (
    <Tile  {...props}
      backgroundImage="/assets/redlinelaw/img/edmondsferry.jpg">
      <TileHeader>We understand what it takes to manage a successful business</TileHeader>
      <TileParagraph>We provide a full range of legal services & unsurpassed availability including, remote site consultations, 24/7 email and message access for business legal services with a focus on ADULT FAMILY HOMES in the following areas:</TileParagraph>
      <TileParagraph>
        <List>
          <li>Informal Dispute Resolutions and Administrative Hearings</li>
          <li>Analyze the SOD in preparing for your defense</li>
          <li>Prepare you for DSHS inspections and investigations</li>
          <li>Assist you with employee concerns</li>
          <li>Create contracts or agreements and policy procedure manuals</li>
          <li>Explain the WACs - what you can and cannot do</li>
          <li>Consultations throughout the year</li>
        </List>
      </TileParagraph>
    </Tile>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------

const List = styled.ul`
  list-style-position: inside;
`

export default AreasOfPractice