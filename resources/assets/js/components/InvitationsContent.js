//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { Tab } from 'semantic-ui-react'
import Build from './InvitationsContentBuild'
import InvitationsContainer from './InvitationsContainer'
import Send from './InvitationsContentSend'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationContent extends Component {

  getPanes() {
    return [
      {menuItem: "Build", render: () => <Build />},
      {menuItem: "Send", render: () => <Send />}
    ]
  }

  render() {
    return (
      <Container>
        <Tab defaultActiveIndex={0} panes={this.getPanes()}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled(InvitationsContainer)`
`
