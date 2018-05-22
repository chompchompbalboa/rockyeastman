//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Header, Input as SemanticUIInput, Segment, Tab } from 'semantic-ui-react'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenPageContact extends Component {

  render() {
    const { contact, updateJson } = this.props
    return (
      <Tab.Pane>

        <Segment>
          <Header as="h4">Splash</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.contact.splash.header"
            value={contact.splash.header}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Line 1"
            name="pages.contact.splash.text.0"
            value={contact.splash.text[0]}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Line 2"
            name="pages.contact.splash.text.1"
            value={contact.splash.text[1]}
            onChange={updateJson} />
        </Segment>

        <Segment>
          <Header as="h4">Information</Header>
          <StyledInput 
            fluid
            label="Blurb"
            name="pages.contact.information.blurb"
            value={contact.information.blurb}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Visit 1"
            name="pages.contact.information.visit.0"
            value={contact.information.visit[0]}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Visit 2"
            name="pages.contact.information.visit.1"
            value={contact.information.visit[1]}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Call 1"
            name="pages.contact.information.call.0"
            value={contact.information.call[0]}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Email"
            name="pages.contact.information.email"
            value={contact.information.email}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Email"
            name="pages.contact.information.latLng"
            value={contact.information.latLng}
            onChange={updateJson} />
        </Segment>

      </Tab.Pane>
    )
  }
}

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const StyledInput = styled(SemanticUIInput)`
  margin: 1.5vh 0 0 0;
`