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
export default class InvitationsContentSend extends Component {

  state = {
    activeBusiness: null,
    activeEmailTemplate: 0,
    businesses: [],
    email: {
      templates: [],
      message: "",
      subjectLine: ""
    }
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
    fetch('/api/invitations/emails/defaults')
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          email: {
            templates: response.templates,
            message: response.message,
            subjectLine: response.subjectLine
          }
        })
      })
  }

  // Changes

  changeActiveBusiness = (e, data) => {
    this.setState({
      activeBusiness: data.value
    })
  }

  changeActiveEmailTemplate = (e, data) => {
    this.setState({
      activeEmailTemplate: data.value
    })
  }

  changeEmail = (e, data) => {
    let email = Object.assign({}, this.state.email)
    email[data.name] = data.value
    this.setState({
      email: email
    })
  }

  // Render

  render() {
    const { activeBusiness, activeEmailTemplate, businesses, email } = this.state
    const change = {
      activeBusiness: this.changeActiveBusiness,
      activeEmailTemplate: this.changeActiveEmailTemplate,
      email: this.changeEmail
    }
    return (
      <Container>
        <ChooseBusiness 
          active={activeBusiness}
          businesses={businesses}
          updateActive={change.activeBusiness}/>
        <Invitation 
          activeEmailTemplate={activeEmailTemplate}
          email={email}
          change={change}
          />
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
