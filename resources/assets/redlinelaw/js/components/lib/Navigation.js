//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { array, func, number, string } from 'prop-types'
import styled from 'styled-components'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Navigation = (props) => {
  const { activeTile, changeActiveTile, links } = props
  return (
    <Container {...props}>
    {links.map((link, index) => {
      const href = "/preview/redline-law/" + link.slug
      return (
        <Link 
          key={index}
          active={activeTile === index}
          href={href}
          onClick={(e) => changeActiveTile(e, index)}
          {...props}>
          {link.text}
        </Link>
      )
    })}
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Navigation.propTypes = {
  activeTile: number,
  backgroundColor: string,
  changeActiveTile: func,
  links: array,
  navigationHeight: number
}
Navigation.defaultProps = {
  activeTile: 0,
  backgroundColor: "red",
  navigationHeight: 10
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${props => props.navigationHeight + "vh"};
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  cursor: pointer;
  margin: 0 0.25em;
  padding: 0em 2em;
  background-color: ${props => props.active ? "white" : "transparent"};
  color: ${props => props.active ? props.backgroundColor : "white"};
  font-family: 'Open Sans', sans-serif;
  font-size: 0.7em;
  text-transform: uppercase;
  line-height: 3.5em;
  letter-spacing: 0.25em;
  &:hover {
    background-color: ${props => props.active ? "white" : "rgba(255,255,255,0.1)"};
  }
  transition: background-color 0.25s;
`

export default Navigation