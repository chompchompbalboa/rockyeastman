//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { Tab } from 'semantic-ui-react'
import Build from './InvitationsContentBuild'
import FollowUp from './InvitationsContentContainer'
import InvitationsContainer from './InvitationsContainer'
import Rejected from './InvitationsContentContainer'
import Send from './InvitationsContentSend'
import Sold from './InvitationsContentContainer'
import Unanswered from './InvitationsContentContainer'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationContent extends Component {

  getPanes() {
    return [
      {menuItem: "Build", render: () => <Build />},
      {menuItem: "Send", render: () => <Send />},
      {menuItem: "Follow Up", render: () => <FollowUp />},
      {menuItem: "Sold", render: () => <Sold />},
      {menuItem: "Unanswered", render: () => <Unanswered />},
      {menuItem: "Rejected", render: () => <Rejected />}
    ]
  }

  render() {
    return (
      <Container>
        <Tab defaultActiveIndex={1} panes={this.getPanes()}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled(InvitationsContainer)`
`
