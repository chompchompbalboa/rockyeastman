//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, number, shape, string } from 'prop-types'
import styled from 'styled-components'

import { Tab } from 'semantic-ui-react'
import Actions from './InvitationsContentSendInvitationActions'
import Message from './InvitationsContentSendInvitationMessage'
import Schedule from './InvitationsContentSendInvitationSchedule'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuildBusiness extends Component {

  static propTypes = {
    activeEmailTemplate: number,
    email: shape({
      message: string,
      templates: array
    })
  }

  setPanes = () => {
    const { active, change, email, schedule } = this.props
    let panes = []
    // Message
    panes.push({
      menuItem: "Message",
      render: () => 
        <Message
          active={active} 
          email={email} 
          change={change}/>
    })
    // Schedule
    panes.push({
      menuItem: "Schedule",
      render: () => 
        <Schedule 
          schedule={schedule}
          change={change}/>
    })
    // Schedule
    panes.push({
      menuItem: "Actions",
      render: () => 
        <Actions 
          active={active}
          email={email}
          schedule={schedule}/>
    })
    return panes
  }

  render() {
    const panes = this.setPanes()
    return (
      <Container>
        <Tab menu={{fluid: true, vertical: true, tabular: true}} panes={panes}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin-top: 2vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`