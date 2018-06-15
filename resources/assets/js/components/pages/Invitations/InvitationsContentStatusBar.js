//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsStatusBar extends Component {

  static propTypes = {
    status: string
  }

  static defaultProps = {
    status: "UNSAVED"
  }

  messages = {
    "READY": "Ready",
    "UNSAVED": "Waiting to save...",
    "SAVING": "Saving...",
    "SAVED": "Saved",
    "ERROR": "Something went wrong saving. Please try again"
  }

  render() {
    const { status } = this.props
    return (
      <Container>
        <Wrapper>
          {this.messages[status]}
        </Wrapper>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 7vh;
  background-color: white;
  box-shadow:0px 1px 4px rgb(160,160,160);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items; center;
  font-size: 15px;
`
