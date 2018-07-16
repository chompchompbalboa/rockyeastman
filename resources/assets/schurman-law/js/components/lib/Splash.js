//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import {  } from 'prop-types'
import styled from 'styled-components'

import layout from '../../styles/layout'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Splash = (props) => {
  return (
    <Container>
      <Blurb>
        <BlurbBorder/>
        Aggressive, Experienced
        <br/>
        Criminal Defense
        <BlurbBorder/>
      </Blurb>
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Splash.propTypes = {
}
Splash.defaultProps = {
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(/assets/schurman-law/img/arrest.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: white;
`

const Blurb = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Lora;
  font-size: 2.5em;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  @media (${layout.breakpoints.tabletUpString}) {
    margin-top: 5%;
  }
`

const BlurbBorder = styled.div`
  margin: 2vh 0;
  width: 40%;
  height: 2px;
  background-color: white;
`

export default Splash