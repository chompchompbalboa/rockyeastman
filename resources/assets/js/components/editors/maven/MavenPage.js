//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Tab } from 'semantic-ui-react'
import Contact from './MavenPageContact'
import Home from './MavenPageHome'
import Profile from './MavenPageProfile'
import Services from './MavenPageServices'
import Team from './MavenPageTeam'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenPage extends Component {

  render() {
    const { page, pageSeed, update } = this.props
    switch(page) {
      case "home":
        return <Home home={pageSeed} update={update}/>
      break;
      case "contact":
        return <Contact contact={pageSeed} update={update}/>
      break;
      case "profile":
        return <Profile profile={pageSeed} update={update}/>
      break;
      case "services":
        return <Services services={pageSeed} update={update}/>
      break;
      case "team":
        return <Team team={pageSeed} update={update}/>
      break;
      default:
        return <Tab.Pane />
      break;
    }
  }
}
