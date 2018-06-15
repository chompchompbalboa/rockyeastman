//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import scheduleHelpers from '../../../helpers/schedule'

import { Tab } from 'semantic-ui-react'
import Container from './InvitationsContentContainer'
import InvitationsContentSendInvitation from './InvitationsContentSendInvitation'
import InvitationsContentChooseBusiness from './InvitationsContentChooseBusiness'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentSend extends Component {

  state = {
    active: {
      business: null,
      emailTemplate: 0
    },
    businesses: [],
    email: {
      templates: [],
      message: "",
      subjectLine: ""
    },
    schedule: {
      time: scheduleHelpers.getNextSendDate()
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
    // Fetch the default content for the email
    fetch('/api/invitations/send/email-defaults')
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

  changeActive = (e, data) => {
    let active = Object.assign({}, this.state.active)
    active[data.name] = data.value
    this.setState({
      active: active
    })
  }

  changeEmail = (e, data) => {
    let email = Object.assign({}, this.state.email)
    email[data.name] = data.value
    this.setState({
      email: email
    })
  }

  changeScheduleTime = (newTime) => {
    this.setState({
      schedule: {
        time: newTime
      }
    })
  }

  // Render

  render() {
    const { active, businesses, email, schedule } = this.state
    const change = {
      active: this.changeActive,
      email: this.changeEmail,
      scheduleTime: this.changeScheduleTime
    }
    return (
      <Container>
        <InvitationsContentChooseBusiness 
          active={active.business}
          businesses={businesses}
          changeActive={change.active}/>
        <InvitationsContentSendInvitation 
          active={active}
          email={email}
          schedule={schedule}
          change={change}
          />
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
