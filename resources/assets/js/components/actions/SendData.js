//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object, shape, string } from 'prop-types'
import styled from 'styled-components'

import { Table } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class SendData extends Component {

  state = {
    status: null
  }

  static propTypes = {
    data: object,
    url: string,
    messages: shape({
      SENDING: string,
      SUCCESS: string,
      ERROR: string
    })
  }

  static defaultProps = {
    messages: {
      SENDING: "Sending data...",
      SUCCESS: "Data sent successfully",
      ERROR: "There was an error sending the data"
    }
  }

  componentDidMount = () => {
    this.save()
  }

  save = () => {
    const { data, url } = this.props
    this.setState({
      status: "SENDING"
    })

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
      'content-type': 'application/json'
    }}).then(response => {
        return response.json()
      })
      .then(response => {
        if(response.success) {
          setTimeout(() => this.setState({status: "SUCCESS"}), 100)
        }
        else {
          setTimeout(() => this.setState({status: "ERROR"}), 100)
        }
      })
  }

  render() {
    const { status } = this.state
    const { messages } = this.props
    return (
      <Table.Row>
        <Table.Cell collapsing>Save</Table.Cell>
        <Table.Cell>{status ? messages[status] : ""}</Table.Cell>
      </Table.Row>
    )
  }
}