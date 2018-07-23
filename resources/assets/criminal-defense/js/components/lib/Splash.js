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
const Splash = ({ splash, styles }) => {
  return (
    <Container
      backgroundImage={splash.img}>
      <Blurb
        breakpoint={styles.layout.breakpoints.tabletUpString}>
        <BlurbBorder/>
        {splash.text.map((text, index) => {
          return (
            <p key={index}>
              {text}
            </p>
          )
        })}
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
  background: ${props => "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(" + props.backgroundImage + ")"};
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
  @media (${props => props.breakpoint}) {
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