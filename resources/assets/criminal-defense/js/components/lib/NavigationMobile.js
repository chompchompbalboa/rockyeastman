//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { exit, menu } from '../lib/Icon/icons'
import Icon from '../lib/Icon/Icon'
import NavigationLogo from './NavigationLogo'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class NavigationMobile extends Component {

  state = {
    dropdownVisible: false
  }

  toggleDropdownVisible = () => {
    const nextDropdownVisible = !this.state.dropdownVisible
    this.setState({
      dropdownVisible: nextDropdownVisible
    })
  }

  render() {
    const { 
      config,
      links,
      logo,
      styles,
      ...props 
    } = this.props

    const { 
      dropdownVisible 
    } = this.state

    return (
      <Container 
        height={styles.layout.navigationHeightMobile}>
        <VisibleContainer 
          backgroundColor={styles.colors.primary}>
          <LogoContainer>
            {logo.type === "img" && <Logo src={logo.img}/>}
            {logo.type === "text" && <NavigationLogo logo={logo.text}/>}
          </LogoContainer>
          <IconContainer
            onClick={() => this.toggleDropdownVisible()}>
            <Icon 
              color="white"
              icon={dropdownVisible ? exit : menu}
              size="35px"/>
          </IconContainer>
        </VisibleContainer>
        <DropdownContainer 
          backgroundColor={styles.colors.primary}
          visible={dropdownVisible}>
          {links.map((link, index) => {
            return (
              <React.Fragment
                key={index}>
                <Link
                  to={config.urlPath + "/" + link.slug}>
                  {link.text}
                </Link>
                {index !== links.length - 1 &&
                <LinkDivider />
                }
              </React.Fragment>
            )
          })}
        </DropdownContainer>
      </Container>
    )
  }
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
NavigationMobile.propTypes = {
  config: shape({
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
      navigationHeightMobile: number
    })
  })
}

NavigationMobile.defaultProps = {
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
      navigationHeightMobile: 15
    }
  }
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${props => props.height + "vh"};
  color: white;
`

const VisibleContainer = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.backgroundColor};
`

const LogoContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  width: 80%;
`

const IconContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DropdownContainer = styled.div`
  z-index: -1;
  position: fixed;
  padding: 3vh 0;
  top: ${props => props.visible ? "10vh" : "-30vh"};
  padding: 3vh 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: top 0.5s;
  background-color: ${props => props.backgroundColor};
  box-shadow:inset 0px 0px 0px 4px white;
  text-transform: uppercase;
`

const LinkDivider = styled.div`
  margin: 1vh 0;
  width: 10vw;
  height: 1px;
  background-color: white;
`