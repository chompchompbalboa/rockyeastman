//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object, string } from 'prop-types'
import styled from 'styled-components'

import { Table } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class Save extends Component {

  state = {
    status: "NOT_SAVED"
  }

  static propTypes = {
    data: object,
    url: string
  }

  statusMessages = {
    "NOT_SAVED": "",
    "SAVING": "Saving, please wait",
    "SAVED": "Saved",
    "ERROR": "There was an error saving, please try again"
  }

  componentDidMount = () => {
    this.save()
  }

  save = () => {
    const { data, url } = this.props
    this.setState({
      status: "SAVING"
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
          setTimeout(() => this.setState({status: "SAVED"}), 100)
        }
        else {
          setTimeout(() => this.setState({status: "ERROR"}), 100)
        }
      })
  }

  render() {
    const { status } = this.state
    return (
      <Table.Row>
        <Table.Cell collapsing>Save</Table.Cell>
        <Table.Cell>{this.statusMessages[status]}</Table.Cell>
      </Table.Row>
    )
  }
}