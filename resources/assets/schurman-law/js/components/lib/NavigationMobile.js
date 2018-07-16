//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import config from '../../styles/config'

import { exit, menu } from '../lib/Icon/icons'
import Icon from '../lib/Icon/Icon'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class NavigationMobile extends Component {

  state = {
    dropdownVisible: false
  }

  toggleDropdown = () => {
    const nextDropdownVisible = !this.state.dropdownVisible
    this.setState({
      dropdownVisible: nextDropdownVisible
    })
  }

  render() {
    const { links, ...props} = this.props
    const { dropdownVisible } = this.state
    return (
      <Container {...props}>
        <VisibleContainer {...props}>
          <LogoContainer>
            <Logo src={config.assetsPath + "/img/logo_white.png"}/>
          </LogoContainer>
          <IconContainer
            onClick={() => this.toggleDropdown()}>
            <Icon 
              color="white"
              icon={dropdownVisible ? exit : menu}
              size="35px"/>
          </IconContainer>
        </VisibleContainer>
        <DropdownContainer {...props}
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
  backgroundColor: string,
  height: number,
  links: arrayOf(shape({
    slug: string,
    text: string
  }))
}
NavigationMobile.defaultProps = {
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