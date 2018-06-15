//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { Tab } from 'semantic-ui-react'
import BuildBusiness from './InvitationsContentBuildBusiness'
import ChangeBusiness from './InvitationsContentChangeBusiness'
import Container from './InvitationsContentContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuild extends Component {

  state = {
    business: {
      id: 0,
      email: "",
      website: ""
    },
    seed: {}
  }

  componentDidMount = () => {
    fetch('/api/invitations/businesses/next', {
      method: "PUT",
      body: JSON.stringify({}),
      headers: {
        'content-type': 'application/json'
    }}).then(response => {
        return response.json()
      })
      .then(response => {
        //console.log(response)
        this.setState({
          business: response.business,
          seed: response.seed
        })
      })
  }

  getNextBusiness = (status) => {
    const { business, seed } = this.state
    fetch('/api/invitations/businesses/next', {
      method: "PUT",
      body: JSON.stringify({
        business: business,
        seed: seed,
        status: status
      }),
      headers: {
      'content-type': 'application/json'
    }}).then(response => {
        return response.json()
      })
      .then(response => {
        //console.log(response)
        this.setState({
          business: response.business,
          seed: response.seed
        })
      })
  }

  render() {
    const { business, seed } = this.state
    return (
      <Container>
        <ChangeBusiness 
          business={business}
          getNextBusiness={this.getNextBusiness}/>
        <BuildBusiness 
          business={business}
          seed={seed}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
