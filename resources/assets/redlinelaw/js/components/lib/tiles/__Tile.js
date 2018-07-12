//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Tile = (props) => {
  const { activeTile, backgroundImage, index, previouslyActiveTile, children } = props
  const left = getLeft(activeTile, index)
  const containerOpacity = getContainerOpacity(activeTile, previouslyActiveTile, index)
  const transition = getTransition(previouslyActiveTile, index)
  const zIndex = getZIndex(activeTile, index)
  return (
    <Container left={left} opacity={containerOpacity} transition={transition} zIndex={zIndex} {...props}>
      <Content {...props}>
        {children}
      </Content>
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Tile.propTypes = {
  activeTile: number,
  backgroundImage: string,
  color: string,
  justifyContent: string,
  navigationHeight: number,
  overlayColor: string,
  previouslyActiveTile: number
}
Tile.defaultProps = {
  activeTile: 0,
  backgroundImage: "/assets/redlinelaw/img/headshot.png",
  color: "white",
  justifyContent: "flex-start",
  navigationHeight: 10,
  overlayColor: "rgba(0,0,0,0.5)",
  previouslyActiveTile: null
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  z-index: ${props => props.zIndex};
  opacity: ${props => props.opacity};
  position: fixed;
  top: ${props => props.navigationHeight + "vh"};
  left: ${props => props.left};
  width: 100vw;
  height: calc(100vh - ${props => props.navigationHeight + "vh)"};
  color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${props => props.transition};
  background: ${props => "linear-gradient(" + props.overlayColor + "," + props.overlayColor + "), url(" + props.backgroundImage + ")"};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`

const Content = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
//-----------------------------------------------------------------------------
// Functions
//-----------------------------------------------------------------------------
const getLeft = (activeTile, index) => {
  let left = "100vw"
  left = (index === activeTile ? "0" : left)
  left = (activeTile > index ? "-100vw" : left)
  return left
}

const getContainerOpacity = (activeTile, previouslyActiveTile, index) => {
  let opacity = "0"
  opacity = (index === activeTile || index === previouslyActiveTile ? "1" : opacity)
  return opacity
}

const getTransition = (previouslyActiveTile, index) => {
  return (index === previouslyActiveTile ? "left 2s" : "left 1s")
}

const getZIndex = (activeTile, index) => {
  return (index === activeTile ? "1000" : "1")
}

export default Tile