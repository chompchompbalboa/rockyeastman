//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import InvitationsHeader from './InvitationsHeader'
import InvitationsContent from './InvitationsContent'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class Invitations extends Component {
  render() {
    return (
      <Container>
        <InvitationsHeader />
        <InvitationsContent />
      </Container>
    );
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100vw;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
//-----------------------------------------------------------------------------
// Attach to page
//-----------------------------------------------------------------------------
if (document.getElementById('react')) {
  ReactDOM.render(<Invitations />, document.getElementById('react'));
}
