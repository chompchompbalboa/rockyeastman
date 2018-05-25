//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, number, shape, string } from 'prop-types'
import styled from 'styled-components'

import { Tab } from 'semantic-ui-react'
import Message from './InvitationsContentSendInvitationMessage'
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
    const { activeEmailTemplate, change, email } = this.props
    let panes = [];
    // Template
    panes.push({
      menuItem: "Message",
      render: () => 
        <Message
          active={activeEmailTemplate} 
          email={email} 
          change={change}/>
    })
    // Message
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