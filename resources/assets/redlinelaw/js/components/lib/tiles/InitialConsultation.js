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
const InitialConsultation = (props) => {
  return (
    <Tile  {...props}
      backgroundImage="/assets/redlinelaw/img/edmondswaterfrontnight.jpg">
      <TileHeader>Schedule an initial consultation today</TileHeader>
      <TileParagraph>Call or e-mail the Law Office of A.L. Redline today for a legal advocate that provides 100% dedication, a collaborative approach and a willingness to go the distance. If you have an immediate need, our initial consultation can help you put your legal concerns in context to make the right decisions.</TileParagraph>
      <TileParagraph>Remote location consultation available upon request.</TileParagraph>
      <TileParagraph>
        Phone: <Link href="tel:4258794628">(425) 879-4628</Link>
        <br />
        Email: <Link href="mailto:anita@redlinelaw.net">anita@redlinelaw.net</Link>
      </TileParagraph>
    </Tile>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Link = styled.a`
  border-bottom: dotted 1px;
`

export default InitialConsultation