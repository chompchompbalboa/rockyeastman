//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import config from '../../styles/config'

import NavigationLogo from './NavigationLogo'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const NavigationDesktop = (props) => {
  const { 
    config, 
    links,
    logo,
    styles 
  } = props

  return (
    <Container
      backgroundColor={styles.colors.primary}
      height={styles.layout.navigationHeightDesktop}>
      <LogoContainer>
        {logo.type === "img" && <Logo src={logo.img}/>}
        {logo.type === "text" && <NavigationLogo logo={logo.text}/>}
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
  config: shape({
    assetsPath: string,
    urlPath: string
  }),
  links: arrayOf(shape({
    slug: string,
    text: string
  })),
  logo: shape({
    type: string,
    text: shape({
      name: string,
      phone: string,
      tag: string
    }),
    img: string
  }),
  styles: shape({
    colors: shape({
      primary: string
    }),
    layout: shape({
      navigationHeightDesktop: number
    })
  })
}

NavigationDesktop.defaultProps = {
  config: {
    urlPath: "/preview/criminal-defense"
  },
  links: [
    {text: "Home", slug: "/"},
    {text: "Practice Area 1", slug: "practice-area-1"},
    {text: "Practice Area 2", slug: "practice-area-2"},
    {text: "Practice Area 3", slug: "practice-area-3"},
    {text: "About", slug: "/about"}
  ],
  logo: {
    "type": "text",
    "img": "/assets/previews/criminal-defense/img/logo_white.png",
    "text": {
      "name": "Eric Schurman",
      "tag": "Criminal Defense",
      "phone": "(206) 264-2979"
    }
  },
  styles: {
    colors: {
      primary: "rgb(49,67,107)"
    },
    layout: {
      navigationHeightDesktop: 15
    }
  }
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
  white-space: nowrap;
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