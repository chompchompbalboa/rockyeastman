//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Arrows = (props) => {
  const { activeTile, changeActiveTile, tileCount } = props
  const leftArrowActive = (activeTile !== 0)
  const rightArrowActive = (activeTile !== tileCount - 1)
  return (
    <Container {...props}>
      <LeftArrow active={leftArrowActive} onClick={leftArrowActive ? (e) => changeActiveTile(e, activeTile - 1) : null}/>
      <RightArrow active={rightArrowActive} onClick={rightArrowActive ? (e) => changeActiveTile(e, activeTile + 1) : null}/>
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: 90vh;
  left: 40vw;
  padding: 1.5vh 0;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Arrow = styled.div`
  opacity: ${props => props.active ? "1" : "0.5"};
  cursor: pointer;
  margin: 0 1vw;
  height: 2.25em;
  width: 2.25em;
  border: 1px solid white;
  border-radius: 100%;
  background-image: url(/assets/redlinelaw/img/arrow.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  &:hover {
    background-color: ${props => props.active ? "rgba(255,255,255,0.15)" : "transparent"}
  }
  transition: background-color 0.25s;
`

const LeftArrow = styled(Arrow)`
  transform: rotate(180deg);
`
const RightArrow = styled(Arrow)``



export default Arrows