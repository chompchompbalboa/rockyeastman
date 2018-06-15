//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'

import { Header, Button } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentChangeBusiness extends Component {

  static propTypes = {
    business: object
  }

  render() {
    const { business, getNextBusiness } = this.props
    return (
      <Container>
        <Header as="h3">{business.name ? business.name : "Loading..."}</Header>
        <ActionsContainer>
          <Button onClick={() => getNextBusiness("rejected-email")}>Reject - Email</Button>
          <Button onClick={() => getNextBusiness("rejected-website")}>Reject - Website</Button>
          <Button onClick={() => getNextBusiness("rejected-other")}>Reject - Other</Button>
          <Button onClick={() => getNextBusiness("built")}>Built</Button>
        </ActionsContainer>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
`