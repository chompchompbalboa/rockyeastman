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
export default class InvitationsContentSendInvitationActions extends Component {

  static propTypes = {
  }

  render() {
    const { active, email, schedule } = this.props
    if(active.business) {
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
                url={'/api/invitations/send/schedule-email'}
                data={{
                }}
                messages={{
                  SENDING: "Scheduling, please wait...",
                  SUCCESS: "Scheduled",
                  ERROR: "Something went wrong scheduling the email, please try again"
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