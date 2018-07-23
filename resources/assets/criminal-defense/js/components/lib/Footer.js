//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import {  } from 'prop-types'
import styled from 'styled-components'


import colors from '../../styles/colors'
import layout from '../../styles/layout'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Footer = ({ config, styles }) => {
  return (
    <Container 
      backgroundColor={styles.colors.primary}>
      &#9400; 2018 Eric Schurman Law. All Rights Reserved.
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Footer.propTypes = {
}
Footer.defaultProps = {
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 2.5vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-size: 0.85em;
  @media (${layout.breakpoints.tabletUpString}) {
    padding: 2.5vh 5vw;
    justify-content: flex-start;
  }
`

export default Footer