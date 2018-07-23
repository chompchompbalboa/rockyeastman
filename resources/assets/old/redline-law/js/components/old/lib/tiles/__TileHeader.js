//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TileHeader = (props) => {
  const { children } = props
  return (
    <Container>
      { children }
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.h2`
  margin-bottom: 1em;
  width: 40vw;
  font-size: 2em;
  font-weight: 700;
  line-height: 1.4;
`

export default TileHeader