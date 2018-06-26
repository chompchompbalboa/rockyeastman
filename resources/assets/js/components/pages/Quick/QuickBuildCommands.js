//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { Table } from 'semantic-ui-react'
import Command from './lib/Command'
import Container from './QuickTabPaneContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickSendCommands extends Component {

  state = {
    status: {
      accept: "",
      reject: ""
    }
  }

  timeout = null

  componentWillUnmount = () => {
    clearTimeout(this.timeout)
  }

  clearStatus = () => {
    this.setState({
      status: {
        accept: "",
        reject: ""
      }
    })
  }

  acceptOrReject = (acceptOrReject) => {
    const { inputs, update } = this.props
    // Update the status to "Sending..."
    this.setState({
      status: {
        accept: acceptOrReject === "accept" ? "Sending..." : "",
        reject: acceptOrReject === "reject" ? "Sending..." : ""
      }
    })
    // Send the data to the QuickController
    fetch('/api/quick/send/' + acceptOrReject + '/' + inputs.id, {
      method: "PUT",
      body: JSON.stringify(inputs),
      headers: {
      'content-type': 'application/json'
    }}).then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          status: {
            accept: acceptOrReject === "accept" ? response.message : "",
            reject: acceptOrReject === "reject" ? response.message : ""
          }
        })
        update("", {
          name: "inputs",
          value: response.nextInputs
        })
      })
  }

  render() {
    const { status } = this.state
    return (
      <Container>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>Description</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Command 
              action={() => this.acceptOrReject('accept')}
              description="Accept"
              status={status.accept}/>
            <Command 
              action={() => this.acceptOrReject('reject')}
              description="Reject"
              status={status.reject}/>
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------

