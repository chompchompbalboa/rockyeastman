//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, number } from 'prop-types'
import styled from 'styled-components'

import { Tab } from 'semantic-ui-react'
import Template from './InvitationsContentSendInvitationTemplate'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuildBusiness extends Component {

  static propTypes = {
    activeEmailTemplate: number,
    emailTemplates: array
  }

  setPanes = () => {
    const { activeEmailTemplate, emailTemplates, updateActive } = this.props
    let panes = [];
    // Template
    panes.push({
      menuItem: "Template",
      render: () => <Template active={activeEmailTemplate} emailTemplates={emailTemplates} updateActive={updateActive}/>
    })
    // Message
    panes.push({
      menuItem: "Message",
      render: () => <Template />
    })
    // Schedule
    panes.push({
      menuItem: "Schedule",
      render: () => <Template />
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