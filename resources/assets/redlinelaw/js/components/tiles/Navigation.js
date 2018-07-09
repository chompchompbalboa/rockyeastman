//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Navigation = (props) => {
  return (
    <Container {...props}>
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: 5vh;
  right: 0;
  width: 75vw;
  height: 8vh;
  background-color: ${props => props.backgroundColor};
`

export default Navigation