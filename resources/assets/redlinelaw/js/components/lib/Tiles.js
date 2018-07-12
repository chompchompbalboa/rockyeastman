//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'

import Introduction from './tiles/Introduction'
import AreasOfPractice from './tiles/AreasOfPractice'
import AboutAnita from './tiles/AboutAnita'
import Resources from './tiles/Resources'
import InitialConsultation from './tiles/InitialConsultation'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Tiles = (props) => {
  return (
    <Container {...props}>
      <Introduction {...props} index={0} />
      <AreasOfPractice {...props} index={1} />
      <AboutAnita {...props} index={2} />
      <Resources {...props} index={3} />
      <InitialConsultation {...props} index={4} />
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: ${props => props.navigationHeight + "vh"};
  left: 0;
  width: 100vw;
  height: calc(100vh - ${props => props.navigationHeight + "vh)"};
  background-color: ${props => props.backgroundColor};
`

export default Tiles