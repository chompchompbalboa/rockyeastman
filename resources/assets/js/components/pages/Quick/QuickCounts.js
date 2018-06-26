//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { number, shape } from 'prop-types'
import styled from 'styled-components'

import { Header } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickCounter extends Component {

  static propTypes = {
    counts: shape({
      accepted: number,
      rejected: number,
      sent: number,
      uploaded: number
    })
  }

  render() {
    const { 
      counts: {
        accepted,
        rejected,
        sent,
        uploaded
      }
    } = this.props

    return (
      <Container>
        <CountContainer>
          <CountHeader>Accepted</CountHeader>
          <CountNumber>{accepted === null ? 0 : accepted}</CountNumber>
        </CountContainer>
        <CountContainer>
          <CountHeader>Rejected</CountHeader>
          <CountNumber>{rejected === null ? 0 : rejected}</CountNumber>
        </CountContainer>
        <CountContainer>
          <CountHeader>Sent</CountHeader>
          <CountNumber>{sent === null ? 0 : sent}</CountNumber>
        </CountContainer>
        <CountContainer>
          <CountHeader>Uploaded</CountHeader>
          <CountNumber>{uploaded === null ? 0 : uploaded}</CountNumber>
        </CountContainer>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 3vh 4vh 0 0;
  display; flex;
  flex-direction: column;
  align-items: center;
`

const CountContainer = styled.div`
  margin-top: 0.5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CountHeader = styled.h4`
  margin-bottom: 0.5vh;
`
const CountNumber = styled.div`
  font-size: 16px;
`
