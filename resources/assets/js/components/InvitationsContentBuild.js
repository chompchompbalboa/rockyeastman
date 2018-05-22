//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { Tab } from 'semantic-ui-react'
import Business from './InvitationsContentBuildBusiness'
import ChooseBusiness from './InvitationsContentChooseBusiness'
import Container from './InvitationsContentContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuild extends Component {

  state = {
    active: null,
    businesses: []
  }
  
  defaultBusiness = {
    id: 0,
    email: "",
    website: ""
  }

  componentDidMount = () => {
    fetch('/api/invitations/businesses')
      .then(response => {
        return response.json()
      })
      .then(businesses => {
        this.setState({
          businesses: businesses
        })
      })
  }

  updateActive = (e, data) => {
    this.setState({
      active: data.value
    })
  }

  render() {
    const { active, businesses } = this.state
    const business = (active === null ? this.defaultBusiness : _.find(businesses, {id: active}))
    return (
      <Container>
        <ChooseBusiness 
          active={active}
          businesses={businesses}
          updateActive={this.updateActive}/>
        <Business 
          business={business}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
