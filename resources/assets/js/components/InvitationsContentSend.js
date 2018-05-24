//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { Tab } from 'semantic-ui-react'
import Invitation from './InvitationsContentSendInvitation'
import ChooseBusiness from './InvitationsContentChooseBusiness'
import Container from './InvitationsContentContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuild extends Component {

  state = {
    activeBusiness: null,
    activeEmailTemplate: 0,
    businesses: [],
    emailTemplates: []
  }

  componentDidMount = () => {
    // Fetch the list of businesses
    fetch('/api/invitations/businesses/built')
      .then(response => {
        return response.json()
      })
      .then(businesses => {
        this.setState({
          businesses: businesses
        })
      })
    // Fetch the list of email templates
    fetch('/api/invitations/emails/templates')
      .then(response => {
        return response.json()
      })
      .then(emailTemplates => {
        this.setState({
          emailTemplates: emailTemplates
        })
      })
  }

  updateActiveBusiness = (e, data) => {
    this.setState({
      activeBusiness: data.value
    })
  }

  updateActiveEmailTemplate = (e, data) => {
    this.setState({
      activeEmailTemplate: data.value
    })
  }

  render() {
    const { activeBusiness, activeEmailTemplate, businesses, emailTemplates } = this.state
    return (
      <Container>
        <ChooseBusiness 
          active={activeBusiness}
          businesses={businesses}
          updateActive={this.updateActiveBusiness}/>
        <Invitation 
          activeEmailTemplate={activeEmailTemplate}
          emailTemplates={emailTemplates}
          updateActive={this.updateActiveEmailTemplate}
          />
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
