//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object, string } from 'prop-types'
import styled from 'styled-components'

import { Tab, Table } from 'semantic-ui-react'
import Save from './actions/Save'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuildBusinessActions extends Component {

  static propTypes = {
    email: string,
    seed: object,
    slug: string,
    status: string,
    website: string
  }

  render() {
    console.log(this.props)
    const {email, seed, slug, status, website } = this.props
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
              <Save
                url={'/api/invitations/businesses/' + seed.id}
                data={{
                  email: email,
                  seed: seed,
                  slug: slug, 
                  status: status,
                  website: website
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