//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import config from '../../styles/config'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const NavigationDesktop = (props) => {
  const { links } = props
  return (
    <Container {...props}>
      <LogoContainer>
        <Logo src={config.assetsPath + "/img/logo_white.png"}/>
      </LogoContainer>
      <LinksContainer>
        {links.map((link, index) => {
          return (
            <React.Fragment
              key={index}>
              <StyledLink
                to={config.urlPath + "/" + link.slug}>
                {link.text}
              </StyledLink>
              {index !== links.length - 1 &&
              <LinkDivider />
              }
            </React.Fragment>
          )
        })}
      </LinksContainer>
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
NavigationDesktop.propTypes = {
  backgroundColor: string,
  height: number,
  links: arrayOf(shape({
    slug: string,
    text: string
  }))
}
NavigationDesktop.defaultProps = {
  backgroundColor: "rgb(49,67,107)",
  height: 10,
  links: [
    {text: "Home", slug: "/"},
    {text: "Link 1", slug: "/link-1"},
    {text: "Link 2", slug: "/link-2"},
    {text: "Link 3", slug: "/link-3"},
    {text: "Link 4", slug: "/link-4"}
  ]
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: ${props => props.height + "vh"};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
`

const LogoContainer = styled.div`  
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  height: 50%;
`

const LinksContainer = styled.div`  
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LinkDivider = styled.div`
  margin: 0 1vw;
  width: 1px;
  height: 1em;
  background-color: white;
`

const StyledLink = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 300;
`

export default NavigationDesktop