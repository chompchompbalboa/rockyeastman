//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'

import { Tab, Table } from 'semantic-ui-react'
import SendData from './actions/SendData'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentEditBusinessActions extends Component {

  static propTypes = {
    business: object,
    seed: object
  }

  render() {
    const { business, seed } = this.props
    if(seed.id) {
      return (
        <Tab.Pane>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell collapsing>Action</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <SendData
                url={'/api/invitations/businesses/' + business.id}
                data={{
                  business: business,
                  seed: seed
                }}
                messages={{
                  SENDING: "Saving, please wait...",
                  SUCCESS: "Saved",
                  ERROR: "There was a problem saving, please try again"
                }}
              />
            </Table.Body>
          </Table>
        </Tab.Pane>
      )
    }
    else {
      return <Tab.Pane />
    }
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``