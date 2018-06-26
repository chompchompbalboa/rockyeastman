//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, string } from 'prop-types'
import styled from 'styled-components'

import { Button, Table } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class Command extends Component {

  static propTypes = {
    action: func,
    description: string,
    status: string,
  }

  render() {
    const { 
      action,
      description,
      status
     } = this.props

    return (
      <Table.Row>
        <Table.Cell collapsing>
          <Button onClick={action}>{description}</Button>
        </Table.Cell>
        <Table.Cell>
          {status}
        </Table.Cell>
      </Table.Row>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------

