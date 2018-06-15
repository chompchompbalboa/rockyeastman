//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { Header } from 'semantic-ui-react'
import InvitationsContainer from './InvitationsContainer'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationHeaders extends Component {
  render() {
    return (
      <Container>
        <Header as="h1">
          Invitations
        </Header>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled(InvitationsContainer)`
`
