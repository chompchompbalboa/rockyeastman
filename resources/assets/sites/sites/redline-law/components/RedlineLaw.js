//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Home from './pages/Home'
import PracticeAreas from './pages/PracticeAreas'
import Credentials from './pages/Credentials'
import Contact from './pages/Contact'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class RedlineLaw extends Component {

  render() {
    const {
      seed
    } = this.props

    const urlPath = seed.config.urlPath

    return (
      <Site>
        <Background />
        <Content>
          <StyledImage 
            width="828px"
            height="129px"
            src="/assets/redline-law/img/header.jpg"/>
          <Switch>
            <Route 
              path={urlPath} 
              component={() => {return (<StyledImage width="158px" height="33px" src="/assets/redline-law/img/headshot_leftOfNav.jpg"/>)}}/>
          </Switch>
          <StyledLink 
            to={urlPath}
            width="194px"
            height="33px">
            <StyledImage 
              innerRef={(c) => this.navHome = c}
              cursor="pointer"
              width="194px"
              height="33px"
              src="/assets/redline-law/img/home.jpg"
              onMouseEnter={() => {this.navHome.src = "/assets/redline-law/img/home_over.jpg"}}
              onMouseLeave={() => {this.navHome.src = "/assets/redline-law/img/home.jpg"}}/>
          </StyledLink>
          <StyledLink 
            to={urlPath + "/practice-areas"}
            width="197px"
            height="33px">
            <StyledImage 
              innerRef={(c) => this.navPractice = c}
              cursor="pointer"
              width="197px"
              height="33px"
              src="/assets/redline-law/img/practice.jpg"
              onMouseEnter={() => {this.navPractice.src = "/assets/redline-law/img/practice_over.jpg"}}
              onMouseLeave={() => {this.navPractice.src = "/assets/redline-law/img/practice.jpg"}}/>
          </StyledLink>
          <StyledLink 
            to={urlPath + "/credentials"}
            width="147px"
            height="33px">
            <StyledImage 
              innerRef={(c) => this.navCredentials = c}
              cursor="pointer"
              width="147px"
              height="33px"
              src="/assets/redline-law/img/credentials.jpg"
              onMouseEnter={() => {this.navCredentials.src = "/assets/redline-law/img/credentials_over.jpg"}}
              onMouseLeave={() => {this.navCredentials.src = "/assets/redline-law/img/credentials.jpg"}}/>
          </StyledLink>
          <StyledLink 
            to={urlPath + "/contact"}
            width="132px"
            height="33px">
            <StyledImage 
              innerRef={(c) => this.navContact = c}
              cursor="pointer"
              width="132px"
              height="33px"
              src="/assets/redline-law/img/contact.jpg"
              onMouseEnter={() => {this.navContact.src = "/assets/redline-law/img/contact_over.jpg"}}
              onMouseLeave={() => {this.navContact.src = "/assets/redline-law/img/contact.jpg"}}/>
          </StyledLink>
          <Switch>
            <Route
              exact 
              path={urlPath} 
              component={() => {return (<StyledImage width="828px" height="143px" src="/assets/redline-law/img/home_row1.jpg"/>)}}/>
            <Route 
              path={urlPath + "/"} 
              component={() => {return (<StyledImage width="828px" height="413px" src="/assets/redline-law/img/large_background.jpg"/>)}}/>
          </Switch>
          <Switch>
            <Route
              exact
              path={urlPath}
              component={() => {return (<StyledImage width="828px" height="271px" src="/assets/redline-law/img/headshot_row2.jpg"/>)}}/>
          </Switch>
          <Switch>
            <Route
              exact 
              path={urlPath} 
              component={() => {return (<StyledImage width="828px" height="51px" src="/assets/redline-law/img/home_footer.jpg"/>)}}/>
            <Route 
              path={urlPath + "/"} 
              component={() => {return (<StyledImage width="828px" height="51px" src="/assets/redline-law/img/footer.jpg"/>)}}/>
          </Switch>
          <Switch>
            <Route 
              path={urlPath + "/"} 
              component={() => {return (<Footer>A.L. REDLINE PLLC 425-879-4628 SERVING WASHINGTON STATE (C) 2012 - 2014</Footer>)}}/>
          </Switch>
          <Switch>
            <Route exact path={urlPath} component={Home}/>
            <Route exact path={urlPath + "/practice-areas"} component={PracticeAreas}/>
            <Route exact path={urlPath + "/credentials"} component={Credentials}/>
            <Route exact path={urlPath + "/contact"} component={Contact}/>
          </Switch>
        </Content>
      </Site>
    );
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Site = styled.div`
  display: flex;
  justify-content: center;
`

const Background = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
`

const Content = styled.div`
  position: relative;
  z-index: 1000;
  width: 828px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const StyledImage = styled.img`
  cursor: ${props => props.cursor ? props.cursor : "auto"};
  width: ${props => props.width};
  height: ${props => props.height};
`

const StyledLink = styled(Link)`
  width: ${props => props.width};
  height: ${props => props.height};
`

const Text = styled.div`
  position: absolute;
  top: 305px;
  left: 160px;
  font-family: arial, serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.5px;
`

const Footer = styled.div`
  position: absolute;
  top: 575px;
  left: 10px;
  height: 51px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: normal;
  letter-spacing: 1px;
  margin-top: 0;
  font-style: normal;
  font-size: 7pt;
  line-height: 7pt;
  color: #ffffff;
  font-family: arial, helvetica, sans-serif;
`