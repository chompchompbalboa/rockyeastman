//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'

import Tile from './__Tile'
import TileHeader from './__TileHeader'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Introduction = (props) => {
  const { changeActiveTile } = props
  return (
    <Tile {...props}
      backgroundImage="/assets/redlinelaw/img/headshot.png"
      overlayColor="rgba(0,0,0,1)">
      <Logo src="/assets/redlinelaw/img/logo.png"/>
      <Slogan>The Attorney With Integrity Building Trust</Slogan>
      <Button onClick={(e) => changeActiveTile(e, 1)}>
        I Fight For You	<Arrow src="/assets/redlinelaw/img/long-arrow.svg"/>
      </Button>
    </Tile>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Logo = styled.img`
  margin-left: -3vw;
  height: 12.5vh;
  width: auto;
`

const Slogan = styled.div`
  margin: 3vh 0 5vh 0;
  font-size: 1.25em;
  letter-spacing: 2px;
  text-transform: uppercase;
`

const Button = styled.div`
  cursor: pointer;
  padding: 1.1vw 2.5vw;
  border: white 1px solid;
  border-radius: 3px;
  font-size: 0.85em;
  letter-spacing: 3px;
  text-transform: uppercase;
  background-color: transparent;
  &:hover {
    background-color: rgba(255,255,255,0.1);
  }
  transition: background-color 0.25s;
`

const Arrow = styled.img`
  margin-left: 1vw;
  height: 1em;
  width: auto;
`

export default Introduction