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
    const { page, pageSeed, updateJson } = this.props
    switch(page) {
      case "home":
        return <Home home={pageSeed} updateJson={updateJson}/>
      break;
      case "contact":
        return <Contact contact={pageSeed} updateJson={updateJson}/>
      break;
      case "profile":
        return <Profile profile={pageSeed} updateJson={updateJson}/>
      break;
      case "services":
        return <Services services={pageSeed} updateJson={updateJson}/>
      break;
      case "team":
        return <Team team={pageSeed} updateJson={updateJson}/>
      break;
      default:
        return <Tab.Pane />
      break;
    }
  }
}
